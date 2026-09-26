from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path("public/assets/library/derived")
REFERENCE = Path("public/assets/library/originals/website-reference")


def main() -> None:
    src = REFERENCE / "网站假想图1.png"
    im = Image.open(src).convert("RGB")
    im.crop((500, 78, 1536, 533)).save(ROOT / "ash-hero-artwork.png", optimize=True)

    im2 = Image.open(REFERENCE / "网站假想图2.png").convert("RGB")
    im2.save(ROOT / "ash-reference-layout-2.jpg", quality=95)
    im2.save(ROOT / "ash-reference-layout-2.png", optimize=True)

    hero = im2.crop((0, 78, 1536, 594)).copy()

    # Remove only the baked-in editorial text; preserve the continuous product/nature scene.
    arr = np.array(hero)
    bgr = cv2.cvtColor(arr, cv2.COLOR_RGB2BGR)
    masks = [
        (65, 92, 330, 350),
        (1212, 50, 1462, 91),
        (1370, 97, 1444, 112),
    ]
    mask = np.zeros(bgr.shape[:2], np.uint8)
    for xa, ya, xb, yb in masks:
        mask[ya:yb, xa:xb] = 255
    bgr = cv2.inpaint(bgr, mask, 9, cv2.INPAINT_TELEA)
    clean = Image.fromarray(cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB))
    clean.save(ROOT / "ash-hero-scene-clean.png", optimize=True)

    hero.crop((500, 0, 1536, 516)).save(
        ROOT / "ash-hero-artwork-2.png", optimize=True
    )

    im.crop((474, 692, 711, 842)).save(
        ROOT / "ash-product-cover-card.png", optimize=True
    )
    im.crop((723, 692, 956, 842)).save(
        ROOT / "ash-product-disc-card.png", optimize=True
    )
    im.crop((968, 692, 1201, 842)).save(
        ROOT / "ash-product-bearing-card.png", optimize=True
    )
    im.crop((1212, 692, 1446, 842)).save(
        ROOT / "ash-product-components-card.png", optimize=True
    )


if __name__ == "__main__":
    main()
