# Vertex Luthier Astro preview

An independent Astro copy of `../website/`, preserving the current design,
product descriptions, prices, photos, and Etsy/YouTube links. The original
website is unchanged; this preview does not replace or deploy it.

## Run locally

Use Node.js 22.23.4 or newer (supported by the installed Astro version).

```sh
cd astro
npm ci
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).
The pages are `/`, `/lightning/`, `/wavy/`, and `/travel/`; product links use
Astro's directory routes instead of the original `.html` paths.

## Build and preview

```sh
npm run build
npm run preview
```

The build checks Astro/TypeScript and writes a static site to `dist/`.
No server runtime or client-side JavaScript is needed.

Shared page metadata, styling, and footer live in `src/layouts/`,
`src/styles/global.css`, and `src/components/`. Product metadata and gallery
photos live in `src/data/products.ts`; descriptions live in `src/pages/`.
Local images are copied into `public/images/`. The travel cello photos still
use the original GitHub attachment URLs and require internet access.

This is a separate copy: future content or asset changes in `website/` must
also be applied here if the previews should stay in sync.
