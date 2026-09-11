#!/usr/bin/env bash
set -e

mkdir -p public/travel-assets/backgrounds
mkdir -p public/travel-assets/foreground
mkdir -p public/landing-pages/travel-assets/backgrounds
mkdir -p public/landing-pages/travel-assets/foreground

echo "Downloading background images..."

# 1. Kuala Lumpur Skyline
curl -s -L "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=85&w=1920&auto=format&fit=crop" -o /tmp/kl.jpg
convert /tmp/kl.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 \
  -modulate 88,110,100 -level 3%,92%,1.05 \
  -fill "#050B0D" -tint 18% \
  -quality 86 public/travel-assets/backgrounds/kuala-lumpur.webp

# 2. Tropical Island
curl -s -L "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=1920&auto=format&fit=crop" -o /tmp/island.jpg
convert /tmp/island.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 \
  -modulate 78,115,100 -level 5%,90%,1.0 \
  -fill "#041416" -tint 24% \
  -quality 86 public/travel-assets/backgrounds/tropical-island.webp

# 3. Mountain
curl -s -L "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=85&w=1920&auto=format&fit=crop" -o /tmp/mountain.jpg
convert /tmp/mountain.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 \
  -modulate 80,105,100 -level 4%,90%,1.0 \
  -fill "#061014" -tint 20% \
  -quality 86 public/travel-assets/backgrounds/mountain.webp

# 4. Rainy City
curl -s -L "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=85&w=1920&auto=format&fit=crop" -o /tmp/rain.jpg
convert /tmp/rain.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 \
  -modulate 85,120,100 -level 2%,90%,1.05 \
  -fill "#031114" -tint 15% \
  -quality 86 public/travel-assets/backgrounds/rainy-city.webp

# 5. Night City
curl -s -L "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=85&w=1920&auto=format&fit=crop" -o /tmp/night.jpg
convert /tmp/night.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 \
  -modulate 84,115,100 -level 3%,92%,1.05 \
  -fill "#050d12" -tint 18% \
  -quality 86 public/travel-assets/backgrounds/night-city.webp

echo "Downloading foreground and travel card assets..."

# Palm leaves
curl -s -L "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop" -o /tmp/palm.jpg
convert /tmp/palm.jpg -resize 1200x800^ -gravity center -extent 1200x800 \
  -modulate 80,110,100 -fill "#041416" -tint 20% \
  -quality 85 public/travel-assets/foreground/palm-leaves.webp

# Luggage
curl -s -L "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1000&auto=format&fit=crop" -o /tmp/luggage.jpg
convert /tmp/luggage.jpg -resize 1000x800^ -gravity center -extent 1000x800 \
  -modulate 85,110,100 -fill "#050E12" -tint 15% \
  -quality 85 public/travel-assets/foreground/luggage.webp

# Road sign / travel barrier
curl -s -L "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop" -o /tmp/sign.jpg
convert /tmp/sign.jpg -resize 1000x800^ -gravity center -extent 1000x800 \
  -modulate 85,110,100 -fill "#050E12" -tint 15% \
  -quality 85 public/travel-assets/foreground/road-sign.webp

# Mountain foreground
curl -s -L "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop" -o /tmp/mtn_fg.jpg
convert /tmp/mtn_fg.jpg -resize 1200x800^ -gravity center -extent 1200x800 \
  -modulate 75,100,100 -fill "#050E12" -tint 25% \
  -quality 85 public/travel-assets/foreground/mountain-foreground.webp

# Street light
curl -s -L "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop" -o /tmp/light.jpg
convert /tmp/light.jpg -resize 800x1000^ -gravity center -extent 800x1000 \
  -modulate 85,120,100 -fill "#050E12" -tint 15% \
  -quality 85 public/travel-assets/foreground/street-light.webp

# Copy to landing-pages for identical relative access
cp -r public/travel-assets/* public/landing-pages/travel-assets/

echo "Asset preparation complete!"
ls -la public/travel-assets/backgrounds
ls -la public/travel-assets/foreground
