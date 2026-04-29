# Lighthouse Development Partners Website

Production-ready static Next.js site for Lighthouse Development Partners.

The site presents Lighthouse Development Partners as a focused real estate development platform for affordable housing, hospitality, and mixed-use communities. It preserves investor portal access as a dedicated transition page instead of making the portal the homepage.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS with CSS-variable theme tokens
- lucide-react icons
- Static export via `output: "export"`
- GitHub Pages workflow
- Vercel-ready deployment
- No database, CMS, backend, or real authentication

## Local Setup

```bash
npm install
npm run dev
npm run lint
npm run build
```

The static export is written to `out/` after `npm run build`.

## GitHub Repository Setup

If the GitHub CLI is not available or not authenticated, run:

```bash
git init
git add .
git commit -m "Create Lighthouse Development Partners website"
gh repo create lighthouse-development-partners-site --private --source=. --remote=origin --push
```

If creating the repo manually on GitHub:

```bash
git remote add origin git@github.com:YOUR_ORG_OR_USER/lighthouse-development-partners-site.git
git branch -M main
git push -u origin main
```

## GitHub Pages Deployment

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` and manual dispatch.

It:

- Uses Node 20
- Runs `npm ci`
- Runs `npm run build`
- Uploads the `out/` directory
- Deploys with GitHub Pages actions

For repository Pages URLs, the workflow sets:

```bash
NEXT_PUBLIC_BASE_PATH="/lighthouse-development-partners-site"
```

If deploying GitHub Pages at a custom domain, remove that workflow environment variable or set it to an empty string.

## Vercel Deployment

This repo is Vercel-ready. Import the repository into Vercel and use the default Next.js settings.

For Vercel, do not set `NEXT_PUBLIC_BASE_PATH` unless the site is intentionally served from a subpath.

## Content Editing

Most copy and structured content lives in:

```bash
src/data/site.ts
```

Edit that file to update:

- Company data
- Navigation
- Footer links
- Values
- Capabilities
- Projects
- News articles
- Team members
- Impact metrics
- Partner categories
- Process steps
- FAQs and legal pages

Keep unsupported project, metric, partner, or biography claims out of public pages until Lighthouse approves them.

## Image Assets

Public image assets are in:

```bash
public/images
```

This version uses Lighthouse source-logo exports, leadership photos, Reserve at Eastwood renderings, and the March 2026 Reserve at Franklin Park renderings sourced from the locally synced Lighthouse SharePoint / OneDrive library. It also uses OpenStreetMap-derived location graphics with attribution embedded in the map assets.

Current project assets include:

- `ldp-logo-stack-white.png`
- `ldp-icon-only-white.png`
- `ldp-icon-only-brand-blue.png`
- `team-harley-sisler.png`
- `team-sean-smith.png`
- `team-maxfield-branson.png`
- `reserve-eastwood-hero.jpg`
- `reserve-eastwood-amenities.jpg`
- `reserve-eastwood-pool.jpg`
- `reserve-eastwood-site-aerial.jpg`
- `reserve-eastwood-location-map.jpg`
- `reserve-franklin-park-01.jpg`
- `reserve-franklin-park-02.jpg`
- `reserve-franklin-park-03.jpg`
- `reserve-franklin-park-04.jpg`
- `reserve-franklin-park-05.jpg`
- `reserve-franklin-park-location-map.jpg`
- `about-blueprints-stock.jpg`

Confirm public-use approval for SharePoint-sourced photos, renderings, maps, and partner references before production launch. Do not add partner logos, renderings, or photography unless Lighthouse has approved the files and usage rights. The about-page planning photograph is sourced from Unsplash and should be replaced with approved Lighthouse photography if preferred.

## Investor Portal Link

Update the portal destination in:

```bash
src/data/site.ts
```

Look for `investorPortalUrl`. The `/investor-portal` page is intentionally non-functional and does not collect or store passwords.

## Contact Email

Update the contact email in:

```bash
src/data/site.ts
```

Look for `email`. Confirm that `info@lighthousedevelopment.com` is the correct public inbox before launch.

The contact form generates a mailto draft and does not submit to a backend.

## Add Projects or News

Add project objects to `site.projects` and article objects to `site.news` in `src/data/site.ts`.

For new project detail pages, add a route under:

```bash
src/app/projects
```

News article pages are generated from `src/app/news/[slug]/page.tsx`. Add an article to `site.news`; the static route and sitemap will pick it up through the data file.

## Missing Items Needed From Lighthouse

- Final favicon export, if different from the source-derived icon in this repo
- Public-use approval for source-logo exports, leadership photos, and project renderings
- Final web-ready project rendering files, if different from the current SharePoint source assets
- Confirmed contact email
- Confirmed investor portal URL
- Confirmed LinkedIn/company profile URL
- Confirmed project pipeline
- Approved partner logos
- Confirmed project metrics
- Legal/privacy review

## Legal and Security Notes

The investor portal page does not implement authentication and does not collect credentials.

This website is for informational purposes only and does not constitute an offer to sell or a solicitation to purchase securities, investment products, or advisory services.
