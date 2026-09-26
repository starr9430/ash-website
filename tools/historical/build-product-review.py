from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

FILES = [
    ("COVER / clutch cover", "public/assets/library/originals/products/压盘.jpg"),
    ("DISC / driven disc", "public/assets/library/originals/products/从动盘.jpg"),
    ("RELEASE / front", "public/assets/library/originals/products/分离轴承-正面.jpg"),
    ("RELEASE / side", "public/assets/library/originals/products/分离轴承-侧面.jpg"),
    ("RELEASE / back", "public/assets/library/originals/products/分离轴承背面.jpg"),
    ("HYDRAULIC / four views", "public/assets/library/originals/products/液压轴承-四面图.jpg"),
    ("PILOT / view 01", "public/assets/library/originals/products/其它零件-导向轴承1.jpg"),
    ("PILOT / view 02", "public/assets/library/originals/products/其它零件-导向轴承2.jpg"),
]

OUT = Path("historical-output/product-review")
OUT.mkdir(parents=True, exist_ok=True)

cards = []
for label, source in FILES:
    im = Image.open(source).convert("RGB")
    thumb = ImageOps.contain(im, (700, 480))
    card = Image.new("RGB", (760, 550), "#f5f2ea")
    card.paste(thumb, ((760 - thumb.width) // 2, 18))
    ImageDraw.Draw(card).text((24, 510), label, fill="#173944")
    cards.append(card)

sheet = Image.new("RGB", (1520, 2200), "#e8e5dc")
for i, card in enumerate(cards):
    sheet.paste(card, ((i % 2) * 760, (i // 2) * 550))

target = OUT / "product-contact-sheet.jpg"
sheet.save(target, quality=95)
print(f"Output: {target}")
