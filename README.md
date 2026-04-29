# Lighthouse Development Partners Website

Production-ready static Next.js site for Lighthouse Development Partners.

The site presents Lighthouse Development Partners as a privately held real estate development firm focused on Affordable Housing, Hotels, and Mixed-Use Master Planned Communities. It preserves investor portal access as a dedicated transition page instead of making the portal the homepage.

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
- FAQs and legal placeholders

Unsupported facts use `isPlaceholder: true` or explicit placeholder language such as `Metric pending internal confirmation`.

## Placeholder Images

Generated SVG placeholders are in:

```bash
public/images
```

Replace SVG placeholders with approved SPINE3D/project renderings once available.

Current placeholders include:

- `reserve-eastwood-hero.svg`
- `reserve-eastwood-courtyard.svg`
- `reserve-eastwood-clubhouse.svg`
- `reserve-eastwood-site-plan.svg`
- `reserve-eastwood-amenity.svg`

Do not add partner logos, renderings, or photography unless Lighthouse has approved the files and usage rights.

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

Look for `email`. The current value is a placeholder: `info@lighthousedevelopment.com`.

The contact form generates a mailto draft and does not submit to a backend.

## Add Projects or News

Add project objects to `site.projects` and article objects to `site.news` in `src/data/site.ts`.

For new project detail pages, add a route under:

```bash
src/app/projects
```

For new article pages, add a route under:

```bash
src/app/news
```

Also update `routes` in `src/data/site.ts` so the sitemap includes the new route.

## Missing Items Needed From Lighthouse

- Approved logo files
- Approved renderings
- Leadership bios and headshots
- Confirmed contact email
- Confirmed investor portal URL
- Confirmed project pipeline
- Approved partner logos
- Confirmed project metrics
- Legal/privacy review

## Legal and Security Notes

The investor portal page does not implement authentication and does not collect credentials.

This website is for informational purposes only and does not constitute an offer to sell or a solicitation to purchase securities, investment products, or advisory services.
