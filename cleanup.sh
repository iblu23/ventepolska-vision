#!/bin/bash

# Vento Polska - Code Cleanup & Optimization Script
# Date: 2026-01-23
# This script removes unused components and optimizes the codebase

set -e  # Exit on error

echo "🚀 Starting Vento Polska Code Cleanup..."
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for tracking
DELETED_FILES=0
DELETED_DIRS=0
SPACE_SAVED=0

# Function to safely remove file
remove_file() {
    local file="$1"
    if [ -f "$file" ]; then
        local size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        rm "$file"
        DELETED_FILES=$((DELETED_FILES + 1))
        SPACE_SAVED=$((SPACE_SAVED + size))
        echo -e "${GREEN}✓${NC} Removed: $file"
    else
        echo -e "${YELLOW}⚠${NC} Not found: $file"
    fi
}

# Function to safely remove directory
remove_dir() {
    local dir="$1"
    if [ -d "$dir" ]; then
        local size=$(du -sb "$dir" | cut -f1)
        rm -rf "$dir"
        DELETED_DIRS=$((DELETED_DIRS + 1))
        SPACE_SAVED=$((SPACE_SAVED + size))
        echo -e "${GREEN}✓${NC} Removed directory: $dir"
    else
        echo -e "${YELLOW}⚠${NC} Not found: $dir"
    fi
}

# Phase 1: Remove backup folder
echo "📁 Phase 1: Removing backup folders..."
remove_dir "src/components/landing-backup-20260123-122717"
echo ""

# Phase 2: Remove unused custom components
echo "🧹 Phase 2: Removing unused custom components..."
remove_file "src/components/landing/BackgroundDemo.tsx"
remove_file "src/components/landing/BackgroundTest.tsx"
remove_file "src/components/NavLink.tsx"
remove_file "src/components/SplashCursor.jsx"
remove_dir "src/components/Aurora"
echo ""

# Phase 3: Remove unused UI components
echo "🎨 Phase 3: Removing unused UI components..."

UNUSED_UI_COMPONENTS=(
    "3d-card-effect.tsx"
    "accordion.tsx"
    "alert-dialog.tsx"
    "alert.tsx"
    "aspect-ratio.tsx"
    "avatar.tsx"
    "badge.tsx"
    "breadcrumb.tsx"
    "calendar.tsx"
    "card.tsx"
    "carousel.tsx"
    "chart.tsx"
    "checkbox.tsx"
    "collapsible.tsx"
    "command.tsx"
    "context-menu.tsx"
    "drawer.tsx"
    "dropdown-menu.tsx"
    "form.tsx"
    "hover-card.tsx"
    "input-otp.tsx"
    "menubar.tsx"
    "navigation-menu.tsx"
    "pagination.tsx"
    "popover.tsx"
    "progress.tsx"
    "radio-group.tsx"
    "resizable.tsx"
    "scroll-area.tsx"
    "select.tsx"
    "sidebar.tsx"
    "slider.tsx"
    "switch.tsx"
    "table.tsx"
    "tabs.tsx"
    "textarea.tsx"
    "toggle-group.tsx"
)

for component in "${UNUSED_UI_COMPONENTS[@]}"; do
    remove_file "src/components/ui/$component"
done

# Remove duplicate use-toast
remove_file "src/components/ui/use-toast.ts"
echo ""

# Phase 4: Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✨ Cleanup Complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Summary:"
echo "  • Files removed: $DELETED_FILES"
echo "  • Directories removed: $DELETED_DIRS"
echo "  • Space saved: $(numfmt --to=iec-i --suffix=B $SPACE_SAVED 2>/dev/null || echo "$SPACE_SAVED bytes")"
echo ""
echo "🔍 Next steps:"
echo "  1. Run: npm run build"
echo "  2. Test the application thoroughly"
echo "  3. Review dependency cleanup in package.json"
echo ""
echo -e "${YELLOW}⚠ Remember to commit these changes to Git!${NC}"
