# Image Optimization Report

Generated: 2026-03-05 20:29:23 -04:00

## Summary
- Total images: 79
- Images over 100KB: 78
- Total image weight: 181.76 MB
- Weight over 100KB bucket: 181.73 MB

## Top 30 Largest Images
| File | Size (KB) |
|---|---:|
| assets/images/svc-gutter-cleaning-installation.png | 7585.2 |
| assets/images/svc-hvac-installation.png | 7386.8 |
| assets/images/svc-kitchen-remodeling.png | 7268.2 |
| assets/images/svc-deck-porch-construction-alt.png | 6754.1 |
| assets/images/svc-garage-door-installation-alt.png | 6636.4 |
| assets/images/svc-exterior-painting.png | 6547.7 |
| assets/images/about-philadelphia.png | 6281.9 |
| assets/images/svc-countertop-installation.png | 5946.5 |
| assets/images/svc-hvac-repair.png | 5828 |
| assets/images/svc-drywall-plaster-repair-alt.png | 5801.2 |
| assets/images/svc-interior-design-decor.png | 5721.4 |
| assets/images/svc-tile-installation.png | 5493.5 |
| assets/images/svc-interior-painting.png | 5259.7 |
| assets/images/svc-roofing-repair.png | 2515.7 |
| assets/images/svc-retaining-walls-outdoor.png | 2419.5 |
| assets/images/svc-retaining-walls-outdoor-alt.png | 2209.3 |
| assets/images/svc-com-hvac-installation.png | 2178 |
| assets/images/svc-gutter-cleaning-installation-alt.png | 2166.3 |
| assets/images/svc-pressure-washing-alt.png | 2130.7 |
| assets/images/svc-com-build-outs-tenant-improvements.png | 2115.9 |
| assets/images/about-new-york.png | 2111.9 |
| assets/images/svc-exterior-painting-alt.png | 2102.9 |
| assets/images/svc-com-electrical.png | 2075.1 |
| assets/images/svc-deck-porch-construction.png | 2071 |
| assets/images/svc-pressure-washing.png | 2070.1 |
| assets/images/svc-masonry.png | 2059.9 |
| assets/images/svc-com-drywall.png | 2044.2 |
| assets/images/svc-roofing-installation.png | 2023.4 |
| assets/images/svc-com-retail-store-renovation.png | 2022.6 |
| assets/images/svc-com-facility-maintenance.png | 1982.7 |

## Recommended Next Step (Lossless + WebP)
- Convert service-card PNG/JPG images to WebP (target quality 75-82) and keep fallback only where needed.
- Resize card images to actual render size (roughly 600x380).
- Keep logo/icon assets in PNG/SVG as appropriate.

## Suggested CLI (if ImageMagick is available)
```powershell
# Convert all JPG/PNG in assets/images to WebP at quality 80
Get-ChildItem assets/images -File -Include *.jpg,*.jpeg,*.png | ForEach-Object {
  $out = [System.IO.Path]::ChangeExtension($_.FullName, '.webp')
  magick $_.FullName -strip -quality 80 $out
}
```