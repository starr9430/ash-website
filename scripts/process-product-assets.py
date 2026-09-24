from __future__ import annotations

import math
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path("public/assets/library")
SRC = ROOT / "originals/products"
CUTOUT = ROOT / "products"
EDITORIAL = ROOT / "derived/products"

CUTOUT.mkdir(parents=True, exist_ok=True)
EDITORIAL.mkdir(parents=True, exist_ok=True)


def _border_samples(rgb: np.ndarray) -> np.ndarray:
    h, w = rgb.shape[:2]
    b = max(6, int(min(h, w) * 0.04))
    parts = [
        rgb[:b, :, :],
        rgb[-b:, :, :],
        rgb[:, :b, :],
        rgb[:, -b:, :],
    ]
    return np.concatenate([p.reshape(-1, 3) for p in parts], axis=0)


def extract_cutout(path: Path, pad: int = 24, max_side: int = 1500) -> Image.Image:
    img = cv2.imread(str(path), cv2.IMREAD_COLOR)
    if img is None:
        raise RuntimeError(f"Cannot read image: {path}")

    rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    h, w = rgb.shape[:2]
    gray = cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY)
    hsv = cv2.cvtColor(rgb, cv2.COLOR_RGB2HSV)
    sat = hsv[:, :, 1]

    # Estimate the actual photographic background from the image border.
    bg = np.median(_border_samples(rgb), axis=0).astype(np.float32)
    dist = np.linalg.norm(rgb.astype(np.float32) - bg[None, None, :], axis=2)

    # Soft matte: retain subtle metal edges, but make near-background pixels transparent.
    alpha = np.clip((dist - 9.0) * 6.5, 0, 255)

    # Dark rubber/metal and clearly chromatic product edges must remain opaque.
    strong = (gray < 220) | (sat > 30)
    alpha[strong] = 255

    # Suppress almost-white, neutral photographic haze.
    soft_bg = (gray > 246) & (sat < 18) & (dist < 18)
    alpha[soft_bg] = 0

    alpha = cv2.GaussianBlur(alpha.astype(np.uint8), (0, 0), 0.5)
    binary = (alpha > 30).astype(np.uint8)

    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    binary = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)
    binary = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel)

    # Keep the actual product silhouette. Tiny disconnected photo stains/dust are discarded.
    n, labels, stats, _ = cv2.connectedComponentsWithStats(binary, 8)
    if n <= 1:
        raise RuntimeError(f"No foreground component found in {path}")

    areas = stats[1:, cv2.CC_STAT_AREA]
    main_label = int(np.argmax(areas)) + 1
    main_area = float(stats[main_label, cv2.CC_STAT_AREA])

    keep = labels == main_label

    # Preserve meaningful attached secondary pieces, but never keep tiny isolated marks.
    x, y, bw, bh, _ = stats[main_label]
    join_gap = max(16, int(min(h, w) * 0.012))
    min_secondary = max(250, int(main_area * 0.012))

    for label in range(1, n):
        if label == main_label:
            continue
        area = int(stats[label, cv2.CC_STAT_AREA])
        if area < min_secondary:
            continue
        sx, sy, sw, sh, _ = stats[label]
        dx = max(x - (sx + sw), sx - (x + bw), 0)
        dy = max(y - (sy + sh), sy - (y + bh), 0)
        if math.hypot(dx, dy) <= join_gap:
            keep |= labels == label

    alpha = np.where(keep, alpha, 0).astype(np.uint8)

    ys, xs = np.where(alpha > 18)
    if len(xs) == 0:
        raise RuntimeError(f"No usable foreground found in {path}")

    x0 = max(0, int(xs.min()) - pad)
    x1 = min(w, int(xs.max()) + pad + 1)
    y0 = max(0, int(ys.min()) - pad)
    y1 = min(h, int(ys.max()) + pad + 1)

    crop = rgb[y0:y1, x0:x1]
    acrop = alpha[y0:y1, x0:x1]

    scale = min(1.0, max_side / max(crop.shape[1], crop.shape[0]))
    if scale < 1:
        crop = cv2.resize(crop, None, fx=scale, fy=scale, interpolation=cv2.INTER_AREA)
        acrop = cv2.resize(acrop, None, fx=scale, fy=scale, interpolation=cv2.INTER_AREA)

    return Image.fromarray(np.dstack([crop, acrop]).astype(np.uint8), "RGBA")


def leaf_shadow(size=(1000, 780), angle=-18, alpha=16):
    w, h = size
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)

    cx, cy = w * 0.52, h * 0.59
    length = w * 0.50
    width = h * 0.20

    pts = []
    for i in range(41):
        t = i / 40
        x = cx - length / 2 + length * t
        y = cy - width * math.sin(math.pi * t)
        pts.append((x, y))
    for i in range(40, -1, -1):
        t = i / 40
        x = cx - length / 2 + length * t
        y = cy + width * math.sin(math.pi * t)
        pts.append((x, y))

    draw.polygon(pts, fill=(32, 63, 54, alpha))

    vein = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    vd = ImageDraw.Draw(vein)
    vd.line(
        [(cx - length / 2 + 20, cy), (cx + length / 2 - 20, cy)],
        fill=(32, 63, 54, int(alpha * 0.65)),
        width=2,
    )

    layer = Image.alpha_composite(layer, vein).rotate(
        angle, Image.Resampling.BICUBIC, expand=False
    )
    return layer.filter(ImageFilter.GaussianBlur(22))


def editorial(
    cutout: Image.Image,
    name: str,
    rotation: float,
    scale: float,
    xshift: int,
    yshift: int,
) -> Path:
    W, H = 1000, 780
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))

    canvas = Image.alpha_composite(
        canvas, leaf_shadow((W, H), angle=rotation - 4, alpha=16)
    )

    ground = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(ground)
    gd.ellipse(
        (W * 0.24, H * 0.61, W * 0.76, H * 0.73),
        fill=(20, 42, 38, 24),
    )
    ground = ground.filter(ImageFilter.GaussianBlur(22))
    canvas = Image.alpha_composite(canvas, ground)

    product = cutout.copy()
    target = max(80, int(min(W, H) * scale))
    product.thumbnail((target, target), Image.Resampling.LANCZOS)
    product = product.rotate(rotation, Image.Resampling.BICUBIC, expand=True)

    px = int((W - product.width) / 2 + xshift)
    py = int((H - product.height) / 2 + yshift)
    canvas.alpha_composite(product, (px, py))

    out = EDITORIAL / name
    canvas.save(out, "WEBP", quality=92, method=6)
    return out


def save_cutout(img: Image.Image, name: str) -> Path:
    out = CUTOUT / name
    img.save(out, "WEBP", quality=92, method=6)
    return out


def build_review(labels_and_paths):
    sheet = Image.new("RGB", (2000, 1320), (235, 232, 223))

    for i, (label, path) in enumerate(labels_and_paths):
        card = Image.open(path).convert("RGBA")
        bg = Image.new("RGBA", (1000, 660), (235, 232, 223, 255))
        bg.alpha_composite(
            card.resize((1000, 780), Image.Resampling.LANCZOS).crop((0, 60, 1000, 720))
        )
        bg = bg.convert("RGB")
        ImageDraw.Draw(bg).text((34, 610), label, fill=(18, 45, 56))
        sheet.paste(bg, ((i % 2) * 1000, (i // 2) * 660))

    sheet.save(EDITORIAL / "product-editorial-review.jpg", quality=93)


def assert_outputs(output_paths):
    final_names = {
        "clutch-cover-editorial.webp",
        "clutch-disc-editorial.webp",
        "release-bearing-editorial.webp",
        "hydraulic-bearing-editorial.webp",
    }
    actual_names = {p.name for p in output_paths}
    if actual_names != final_names:
        raise AssertionError(f"Unexpected final set: {sorted(actual_names)}")

    for p in output_paths:
        with Image.open(p) as im:
            if im.mode != "RGBA":
                raise AssertionError(f"{p.name} is not RGBA")
            if im.size != (1000, 780):
                raise AssertionError(f"{p.name} has unexpected size {im.size}")


def main():
    cover = extract_cutout(SRC / "压盘.jpg", 26)
    disc = extract_cutout(SRC / "从动盘.jpg", 26)
    release = extract_cutout(SRC / "分离轴承-侧面.jpg", 24)
    hydraulic = extract_cutout(SRC / "液压轴承-高清.jpg", 22)

    # Four clean transparent cutouts used as source assets.
    save_cutout(cover, "clutch-cover-01.webp")
    save_cutout(disc, "clutch-disc-01.webp")
    save_cutout(release, "release-bearing-side-01.webp")
    save_cutout(hydraulic, "hydraulic-bearing-front-01.webp")

    finals = [
        editorial(cover, "clutch-cover-editorial.webp", -11, 0.67, -8, -5),
        editorial(disc, "clutch-disc-editorial.webp", 9, 0.66, 5, -2),
        editorial(release, "release-bearing-editorial.webp", -15, 0.57, 12, -8),
        editorial(hydraulic, "hydraulic-bearing-editorial.webp", 12, 0.57, -8, -10),
    ]

    build_review(
        [
            ("CLUTCH COVER", finals[0]),
            ("DRIVEN DISC", finals[1]),
            ("RELEASE BEARING", finals[2]),
            ("HYDRAULIC BEARING", finals[3]),
        ]
    )

    assert_outputs(finals)
    print("Built and QA-checked the four final ASH product editorial assets.")
    for p in finals:
        print(f"- {p}")


if __name__ == "__main__":
    main()
