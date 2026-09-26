# ASH Website — Project Memory

> Living engineering notes for the ASH / ASHLIRA website.
> This file is the project's human-readable memory and should be updated whenever the architecture, asset rules, or working conventions materially change.

## 1. Project identity

- Repository: `starr9430/ash-website`
- Default branch: `main`
- Stack: Vite + React
- Audience: overseas B2B clutch buyers
- Domain: `ashlira.com`
- Production contact: `starr@ashlira.com`
- Corporate name used in footer: `ASHLIRA`
- Current copyright: `© 2026 ASHLIRA. All rights reserved.`

The website is intentionally lightweight. It is a commercial trust/proof site, not a large corporate portal.

## 2. Visual direction — do not lose this context

Core Art Direction:

> 米白纸张作为舞台，深色形成结构，叶片/水流成为品牌符号，机械金属成为产品核心，所有东西之间形成克制的自然 × 工业关系.

Practical rules:

- Warm ivory / paper-like background rather than sterile white.
- Deep ink / blue-green tones for structure and typography.
- Leaf / water motifs stay abstract and restrained.
- Real clutch metal is the physical product anchor.
- Serif is used selectively for major editorial headings; sans-serif for navigation, body copy and metadata.
- Whitespace is important.
- Avoid generic blue auto-parts styling, excessive cards, literal pasted photos, fake/AI-looking product cards, and text duplicated inside imagery.
- Product images are treated as editorial compositions: controlled scale, angle, crop, whitespace and materiality.

## 3. Current page composition

Production render order is defined in `src/App.jsx`:

1. `Header`
2. `Hero`
3. `FeatureStrip`
4. `Coverage` — PRODUCT SYSTEM
5. `Intro` — ABOUT US
6. `Contact`
7. `Footer`

This order is intentional. Do not reorder sections casually.

## 4. Live components vs historical/dead code

### Live production components

These are currently imported by `src/App.jsx` and participate in the production page:

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/sections/Hero.jsx`
- `src/sections/FeatureStrip.jsx`
- `src/sections/Coverage.jsx`
- `src/sections/Intro.jsx`
- `src/sections/Contact.jsx`

### Known historical / potentially dead components

These were identified during earlier cleanup and must be verified before deletion:

- `src/sections/Capability.jsx`
- `src/components/ProductVisual.jsx`
- `src/components/ClutchVisual.jsx`

Important: "looks unused" is not enough for deletion. Check the import graph and any non-obvious references first.

`ProductVisual.jsx` also contains fixed SVG IDs (`pd`, `pb`, `pc`). If the component is ever reused, SVG ID collisions must be considered.

## 5. Current production asset paths

The current production asset checker found 11 referenced public assets at the last verified baseline:

- 5 SVG
- 6 WebP
- 0 PNG

### Product editorial assets

`public/assets/library/derived/products/`

- `clutch-cover-editorial.webp`
- `clutch-disc-editorial.webp`
- `release-bearing-editorial.webp`
- `hydraulic-bearing-editorial.webp`

The pilot / guide bearing source asset exists in the library, but it is not currently part of `Coverage.jsx`. Treat that as a future content/structure decision, not an automatic cleanup target.

### About artwork

- Source working material lives under `public/assets/library/originals/website-reference/`.
- Current production artwork:
  `public/assets/library/derived/about/ash-about-mark.webp`

The prepared `About Us-标志.png` was a user-supplied visual source and should not be casually redrawn or replaced.

### Hero

Current production Hero image:

- `public/assets/library/derived/ash-hero-scene-clean.webp`

The original PNG was converted to WebP for production. The WebP is substantially smaller while preserving the same `1536 × 516` dimensions.

### Important logo history

The old `public/assets/library/brand/ash-logo-approved.png` was a damaged/incomplete PNG and was retired.

Do **not** reintroduce historical logo files merely to make layout dimensions convenient.

Current header / hero / footer / About logo slots were intentionally decoupled from that damaged image during cleanup. Visual spacing is now handled by CSS where needed.

## 6. Important Hero layout history

The old damaged logo PNG was visually absent but still occupied layout space.

Removing it moved the Hero copy upward. The accepted desktop correction restored the lost vertical spacing in CSS rather than restoring the broken image.

Current accepted spacing:

- Desktop: `.hero-product-name { margin-top: 51px; }`
- Mobile: `.hero-product-name { margin-top: 44px; }`

The desktop result was explicitly visually checked and accepted.

Do not "fix" this by putting the retired logo image back into the DOM.

Mobile visual issues discovered later are a separate responsive phase and should not be mixed into this baseline.

## 7. Asset integrity rules

### `npm run check`

`scripts/check.mjs` currently checks:

- required project files
- required npm scripts
- React root in `index.html`
- `src/main.jsx` → `./App`
- local source imports resolve
- recursively scans source files

### `npm run check-assets`

`scripts/check-assets.mjs` currently:

- walks the production module graph starting from `src/main.jsx`
- extracts static references under `/assets/` and `/images/`
- verifies referenced files exist under `public/`
- reports extension counts
- reports production PNG references if any remain

Important: this is a generic production-reference check. It must **not** hard-code historical filenames such as a retired logo.

The purpose is to validate the current production graph, not to punish future maintainers for legitimately creating a same-named file.

## 8. CI baseline

Workflow:

- `.github/workflows/build.yml`
- Job: `Verify ASH Website`
- Node: `22.16.0`

Current verification order:

1. checkout
2. Node setup
3. bootstrap lockfile if missing
4. `npm ci --ignore-scripts`
5. `npm run check`
6. `npm run check-assets`
7. `npm run build`

The lockfile was intentionally committed to stabilize CI.

The last verified good production baseline is commit:

`eb7c197822e8add09ed1150f0587db9bf9a24d1a`

That baseline passed both GitHub Actions verification and Cloudflare Pages deployment.

## 9. Phase roadmap

### Phase 1 — 工程基础

Completed.

Purpose:
- CI
- build verification
- static integrity checking
- stable dependency lockfile

### Phase 2 — 资产收口

Completed.

Purpose:
- inspect production image references
- convert Hero PNG → WebP
- enforce production asset existence
- keep current production graph free of PNG references

### Phase 3 — 代码收口

Current phase.

Order:

1. 死组件扫描 — completed
2. 清理旧代码 — completed for the identified legacy component/CSS/workflow set
3. 统一品牌资源路径 — completed

Second-round cleanup also reviewed historical CSS, image-processing scripts, and GitHub Actions.

Retired workflows:
- `.github/workflows/about-us-asset.yml` — historical About Us asset generator; retired because the current prepared artwork is the accepted production source and this workflow could overwrite it from an older sketch.
- `.github/workflows/extract-design-assets.yml` — one-time design-reference extraction/migration workflow.
- `.github/workflows/organize-original-assets.yml` — one-time original-asset migration workflow.
- `.github/workflows/product-asset-preview.yml` — redundant review-only contact-sheet workflow; final product generation remains in `product-assets.yml`.

Active asset workflows retained:
- `.github/workflows/build.yml` — production verification.
- `.github/workflows/asset-optimize.yml` — scoped Hero WebP conversion.
- `.github/workflows/product-assets.yml` — reproducible final product-asset generation.

The objective is code clarity and maintainability, **not visual redesign**.

### Phase 4 — 视觉精修

Desktop/core visual refinement.

Only after code structure is clean.

Focus includes:
- image ratio
- crop
- whitespace
- logo scale
- typography hierarchy
- section spacing
- product metal texture
- packaging presentation

### Phase 5 — 响应式 / Mobile

The user has already observed substantial mobile layout differences. These belong here.

Do not mix mobile redesign into Phase 3 code cleanup unless a structural dependency makes it unavoidable.

### Phase 6 — Final acceptance

Full regression:
- desktop
- mobile
- assets
- CI
- Cloudflare deployment
- navigation
- contact links
- final visual consistency

## 10. Working protocol for future changes

This section is especially important.

### Rule A — Do not make broad changes during a scoped task

Prefer one module / one concern at a time.

Bad pattern:
- changing Hero + About + CSS architecture + assets in one commit.

Preferred pattern:
- inspect one area
- make one bounded change
- verify
- commit
- move to the next area

### Rule B — Inspect before deleting

For any suspected dead file:

1. search all references
2. inspect dynamic / indirect usage where relevant
3. confirm it is outside the production module graph
4. only then delete it

### Rule C — Do not use historical workarounds as permanent architecture

Examples:
- restoring a broken image only to preserve spacing
- keeping obsolete components "just in case"
- adding filename-specific CI rules to remember a historical mistake

Prefer the clean structural reason for the current implementation.

### Rule D — Preserve the user's accepted visual result

A code cleanup is not successful if it silently changes an already accepted visual.

When a code change can affect layout, verify before and after.

### Rule E — Never treat this document as infallible

This file is a living memory, not a substitute for source code.

When this document conflicts with actual production code:
1. inspect the current repository
2. resolve the discrepancy
3. update this document

## 11. Current design constraints worth remembering

- Brand is ASH; company identity in legal/footer contexts is ASHLIRA.
- Do not casually change the mailbox: `starr@ashlira.com`.
- Do not casually change the footer corporate naming convention.
- Do not reintroduce the retired damaged logo PNG.
- Do not claim unsupported production-line or brand relationships publicly.
- Avoid changing approved visual direction while doing engineering work.
- GitHub is the source of truth for website code and the organized website asset library.

## 12. Phase 3 cleanup record

- Legacy production components removed: `ClutchVisual.jsx`, `ProductVisual.jsx`, `Capability.jsx`.
- Duplicate legacy brand path `public/images/brand/` retired; canonical path is `public/assets/brand/`.
- Unused CSS rules removed: legacy logo image selectors and unused `.products-note`.
- Historical/one-time GitHub Actions retired as listed above.
- Final CI for the second-round cleanup must be treated as the acceptance gate before moving on.

## 13. Change log note

Major phase-completion decisions should be recorded here with:
- date
- phase
- purpose
- resulting commit
- any intentionally retained technical debt

This prevents future work from reconstructing project history from scattered chat messages alone.
