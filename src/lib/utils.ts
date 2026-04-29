export function cn(
  ...inputs: Array<string | false | null | undefined>
) {
  return inputs.filter(Boolean).join(" ");
}

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function absoluteUrl(path: string, baseUrl: string) {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedBase = baseUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
