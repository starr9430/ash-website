# ASH Asset Register

Last updated: 2026-09-26

This register maps the website's original sources, derived production assets, and reusable brand resources.

## Production brand resources

All reusable website brand SVGs use the canonical path:

`public/assets/brand/`

Current files include:

- `ash-leaf.svg`
- `ash-water.svg`
- `ash-metal-ring.svg`
- `footer-leaf.svg`
- `leaf-vein.svg`
- `water-ribbon.svg`
- `mechanical-ring.svg`
- `icon-reliability.svg`
- `icon-materials.svg`
- `icon-coverage.svg`
- `icon-supply.svg`

The former duplicate `public/images/brand/` path has been retired. New production code must use `/assets/brand/...`.

## Logo

The historical packaging-derived standalone file `ash-logo-approved.png` was retired after it was found to be damaged/incomplete.

The packaging-derived artwork remains a visual reference; it is not a current production asset path.

Do not reintroduce the retired PNG merely to provide layout spacing or a logo placeholder.

## Real product imagery

### Original sources

`public/assets/library/originals/products/`

Original product photography remains here and is the source material for future derivatives.

### Production derivatives

`public/assets/library/derived/products/`

Current live Product System assets:

- `clutch-cover-editorial.webp`
- `clutch-disc-editorial.webp`
- `release-bearing-editorial.webp`
- `hydraulic-bearing-editorial.webp`

A pilot / guide bearing source exists in the original library but is not currently part of the live Product System.

## About Us

Original visual references:

`public/assets/library/originals/website-reference/`

Current production derivative:

`public/assets/library/derived/about/ash-about-mark.webp`

## Hero

Current production image:

`public/assets/library/derived/ash-hero-scene-clean.webp`

The original PNG remains a source/working asset; the live site uses the WebP derivative.

## Packaging

Packaging source material lives under:

`public/assets/library/originals/packaging/`

Web-ready packaging assets live under:

`public/assets/library/packaging/`

## Working rules

1. Real ASH photography takes precedence over generated or illustrative substitutes.
2. Original source material stays in `library/originals/`.
3. Web-ready derivatives belong in `library/derived/` or the dedicated production library where already established.
4. Reusable brand SVGs belong in `public/assets/brand/`.
5. Do not create a second production brand path.
6. Reference boards are references, not production imagery.
