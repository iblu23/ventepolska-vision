#!/bin/bash

# Image Optimization Script for Vento Polska
# Optimizes JPG images and creates WebP versions

set -e

echo "🖼️  Starting Image Optimization..."
echo ""

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
TOTAL_ORIGINAL=0
TOTAL_OPTIMIZED=0
TOTAL_WEBP=0

# Function to get file size in bytes
get_size() {
    stat -f%z "$1" 2>/dev/null || stat -c%s "$1" 2>/dev/null
}

# Function to format bytes
format_bytes() {
    numfmt --to=iec-i --suffix=B "$1" 2>/dev/null || echo "$1 bytes"
}

# Create backup directory
BACKUP_DIR="src/assets/original-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo -e "${BLUE}📁 Backing up original images to: $BACKUP_DIR${NC}"
echo ""

# Process each JPG file
for img in src/assets/*.jpg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        name="${filename%.*}"
        
        # Get original size
        original_size=$(get_size "$img")
        TOTAL_ORIGINAL=$((TOTAL_ORIGINAL + original_size))
        
        echo -e "${YELLOW}Processing: $filename${NC}"
        
        # Backup original
        cp "$img" "$BACKUP_DIR/"
        echo "  ✓ Backed up to $BACKUP_DIR/"
        
        # Optimize JPG (85% quality, strip metadata, progressive)
        magick "$img" -strip -quality 85 -interlace Plane "${img}.tmp"
        mv "${img}.tmp" "$img"
        
        optimized_size=$(get_size "$img")
        TOTAL_OPTIMIZED=$((TOTAL_OPTIMIZED + optimized_size))
        savings=$((original_size - optimized_size))
        percent=$((100 - (optimized_size * 100 / original_size)))
        
        echo "  ✓ Optimized JPG: $(format_bytes $original_size) → $(format_bytes $optimized_size) (${percent}% smaller)"
        
        # Create WebP version (80% quality for even better compression)
        webp_file="src/assets/${name}.webp"
        magick "$img" -quality 80 "$webp_file"
        
        webp_size=$(get_size "$webp_file")
        TOTAL_WEBP=$((TOTAL_WEBP + webp_size))
        webp_percent=$((100 - (webp_size * 100 / original_size)))
        
        echo -e "  ${GREEN}✓ Created WebP: $(format_bytes $webp_size) (${webp_percent}% smaller than original)${NC}"
        echo ""
    fi
done

# Calculate totals
TOTAL_SAVINGS=$((TOTAL_ORIGINAL - TOTAL_OPTIMIZED))
TOTAL_PERCENT=$((100 - (TOTAL_OPTIMIZED * 100 / TOTAL_ORIGINAL)))
WEBP_SAVINGS=$((TOTAL_ORIGINAL - TOTAL_WEBP))
WEBP_PERCENT=$((100 - (TOTAL_WEBP * 100 / TOTAL_ORIGINAL)))

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✨ Optimization Complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Summary:"
echo ""
echo "JPG Optimization:"
echo "  • Original size:  $(format_bytes $TOTAL_ORIGINAL)"
echo "  • Optimized size: $(format_bytes $TOTAL_OPTIMIZED)"
echo "  • Savings:        $(format_bytes $TOTAL_SAVINGS) (${TOTAL_PERCENT}% reduction)"
echo ""
echo "WebP Conversion:"
echo "  • WebP total:     $(format_bytes $TOTAL_WEBP)"
echo "  • Savings vs orig: $(format_bytes $WEBP_SAVINGS) (${WEBP_PERCENT}% reduction)"
echo ""
echo "🎯 Next Steps:"
echo "  1. Update image imports to use WebP with JPG fallback"
echo "  2. Test images in the application"
echo "  3. If satisfied, you can delete: $BACKUP_DIR"
echo ""
echo -e "${YELLOW}💡 Tip: WebP images are ${WEBP_PERCENT}% smaller - use them for better performance!${NC}"
