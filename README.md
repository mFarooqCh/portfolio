# mFarooqCh

Personal site and portfolio. Next.js (App Router), Tailwind, MDX content, deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

## How content works

There is no CMS and no admin panel. Content lives in the repo:

- `content/work/*.mdx` — case studies. Frontmatter is validated with zod at build time.
- `content/experience.json` — the experience timeline.

Frontmatter is checked in `lib/content.ts`. **A malformed case study fails the build rather than
shipping broken.** So does an unresolved `TODO` left in any case study body — that guard is
deliberate, don't remove it.

## Before publishing new work

Case studies describe systems generically: what was built and how, never for whom. No employer,
client, or product names. Scale figures that describe the engineering are fine.

Every metric must be one that can be defended in conversation. Rough honest ranges beat invented
precision.

## Deployment

Pushes to `main` deploy to production via Vercel.
