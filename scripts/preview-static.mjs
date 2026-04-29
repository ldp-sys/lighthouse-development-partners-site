import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "out");
const host = process.env.HOST || "127.0.0.1";
const port = Number.parseInt(process.env.PORT || "3000", 10);

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"]
]);

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveFile(urlPath) {
  const safePath = decodeURIComponent(urlPath.split("?")[0] || "/");
  const normalizedPath = path
    .normalize(safePath)
    .replace(/^(\.\.(\/|\\|$))+/, "")
    .replace(/^\/+/, "");
  const requested = path.resolve(root, normalizedPath);

  if (!requested.startsWith(root)) {
    return null;
  }

  if (await exists(requested)) {
    const fileStat = await stat(requested);
    return fileStat.isDirectory() ? path.join(requested, "index.html") : requested;
  }

  const routeIndex = path.join(requested, "index.html");
  if (await exists(routeIndex)) {
    return routeIndex;
  }

  const htmlFile = `${requested}.html`;
  if (await exists(htmlFile)) {
    return htmlFile;
  }

  return null;
}

const server = createServer(async (request, response) => {
  try {
    const filePath = await resolveFile(request.url || "/");

    if (!filePath || !(await exists(filePath))) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "cache-control": "no-store",
      "content-type": mimeTypes.get(ext) || "application/octet-stream"
    });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : "Server error");
  }
});

server.listen(port, host, () => {
  console.log(`Static preview available at http://${host}:${port}/`);
});
