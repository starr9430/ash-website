from pathlib import Path
from PIL import Image

SRC = Path("public/assets/library/originals/website-reference/草图3.png")
OUT = Path("historical-output/about")
OUT.mkdir(parents=True, exist_ok=True)

im = Image.open(SRC).convert("RGB")
original_size = im.size

if max(im.size) > 1800:
    im.thumbnail((1800, 1800), Image.Resampling.LANCZOS)

target = OUT / "ash-about-mark.webp"
im.save(target, "WEBP", quality=92, method=6)

print(f"Source: {SRC}")
print(f"Original size: {original_size}")
print(f"Output size: {im.size}")
print(f"Output: {target}")
