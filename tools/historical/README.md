# Historical Design Tools

This folder contains reusable historical tooling that is intentionally kept outside the normal production code path.

These tools are **not dead code**. They are dormant utilities for future page redesigns, reference extraction, or recovery work.

## Rules

- Do not import anything from this folder into the production website.
- Do not run these tools as part of the normal build or deployment path.
- Run them only deliberately, usually through their corresponding manual GitHub Actions workflow.
- Inspect the target source and generated outputs before accepting any overwrite of production assets.
- When a historical tool becomes a repeatable production process, promote it into a proper maintained script/workflow rather than silently relying on historical behavior.

## Current tool

- `extract-design-assets.py` — extracts artwork and layout assets from the historical homepage reference images.

The corresponding GitHub Actions workflow remains under `.github/workflows/` because GitHub Actions only discovers workflow definitions from that directory. The workflow is manual-only and does not run during ordinary pushes.
