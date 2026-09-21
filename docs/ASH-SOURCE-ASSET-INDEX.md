# ASH Source Asset Index

This file is the persistent bridge between the ASH website repository and the original visual assets stored in the ChatGPT Library.

## Source-of-truth originals

| Website role | Original asset | Library file ID | Resolution / size | Status |
|---|---|---|---|---|
| Hero / clutch cover | 6973a955099edaf840cdc600c985b8fe.jpg | `file_00000000064482308a7044a1b391f9c7` | 1280 × 1280 / 204 KB | Verified real clutch photo |
| Product pair reference | 屏幕截图 2026-09-21 165858.png | `file_000000004dfc823096b519f3422877ee` | 2048 × 977 / 2.08 MB | Verified cover + driven disc |
| Packaging reference | 纸盒初稿3.png | `file_00000000ed7481f58cd0a34cc82579ab` | 458 × 361 / 261 KB | Verified ASH box design |

## Repository asset policy

1. The ChatGPT Library copy is the source-of-truth original when an original binary is not yet committed to GitHub.
2. Before using an image in production code, retrieve the exact Library file by the file ID above; do not substitute a similarly named concept image.
3. Generated concept boards are references only. They are not production product photography.
4. The repository's `public/assets/brand/` SVG files are already production-ready structural motifs and may be used directly.
5. When binary upload is available, commit original source files under `public/assets/source/` and web-optimized derivatives under `public/images/`.

## Verified brand SVGs already in GitHub

- `public/assets/brand/ash-leaf.svg`
- `public/assets/brand/ash-water.svg`
- `public/assets/brand/ash-metal-ring.svg`
- `public/images/brand/footer-leaf.svg`
- `public/images/brand/icon-reliability.svg`
- `public/images/brand/icon-materials.svg`
- `public/images/brand/icon-coverage.svg`
- `public/images/brand/icon-supply.svg`

## Important implementation note

The current GitHub connector can create/update UTF-8 repository files and Git blobs, but this working connection does not expose a direct local-binary upload action for arbitrary image files. Therefore the original binary files should remain in the Library as the immutable source until a binary upload path is available; GitHub should store the mapping and all text/code decisions around those assets.

This prevents future website iterations from losing the exact source material even when conversation context changes.
