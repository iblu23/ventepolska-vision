# Unused Dependencies - Safe to Remove

This document lists npm dependencies that can be safely removed from `package.json`.

## 🔍 Analysis Method

Dependencies were identified as unused by:
1. Searching for imports across the entire codebase
2. Cross-referencing with removed UI components
3. Verifying no indirect usage

---

## 📦 Dependencies to Remove

### Radix UI Components (Unused)

These correspond to removed shadcn/ui components:

```json
"@radix-ui/react-accordion": "^1.2.11",
"@radix-ui/react-alert-dialog": "^1.1.14",
"@radix-ui/react-aspect-ratio": "^1.1.7",
"@radix-ui/react-avatar": "^1.1.10",
"@radix-ui/react-checkbox": "^1.3.2",
"@radix-ui/react-collapsible": "^1.1.11",
"@radix-ui/react-context-menu": "^2.2.15",
"@radix-ui/react-dropdown-menu": "^2.1.15",
"@radix-ui/react-hover-card": "^1.1.14",
"@radix-ui/react-menubar": "^1.1.15",
"@radix-ui/react-navigation-menu": "^1.2.13",
"@radix-ui/react-popover": "^1.1.14",
"@radix-ui/react-progress": "^1.1.7",
"@radix-ui/react-radio-group": "^1.3.7",
"@radix-ui/react-scroll-area": "^1.2.9",
"@radix-ui/react-select": "^2.2.5",
"@radix-ui/react-slider": "^1.3.5",
"@radix-ui/react-switch": "^1.2.5",
"@radix-ui/react-tabs": "^1.1.12",
"@radix-ui/react-toggle-group": "^1.1.10",
```

### Other Unused Dependencies

```json
"animated-backgrounds": "^2.0.0",        // Not imported anywhere
"click-spark": "^2.1.0",                 // Not imported anywhere
"cmdk": "^1.1.1",                        // Command component removed
"date-fns": "^3.6.0",                    // Calendar component removed
"embla-carousel-react": "^8.6.0",       // Carousel component removed
"input-otp": "^1.4.2",                   // Input OTP component removed
"ogl": "^1.0.11",                        // WebGL library, not used
"react-day-picker": "^8.10.1",          // Calendar component removed
"react-resizable-panels": "^2.1.9",     // Resizable component removed
"recharts": "^2.15.4",                   // Chart component removed
"vaul": "^0.9.9",                        // Drawer component removed
```

---

## ✅ Dependencies to Keep

These are actively used:

```json
// Core React & Routing
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-router-dom": "^6.30.1",

// State Management & Data Fetching
"@tanstack/react-query": "^5.83.0",

// Forms
"react-hook-form": "^7.61.1",
"@hookform/resolvers": "^3.10.0",
"zod": "^3.25.76",

// Internationalization
"i18next": "^25.8.0",
"react-i18next": "^16.5.3",

// UI Utilities
"class-variance-authority": "^0.7.1",
"clsx": "^2.1.1",
"tailwind-merge": "^2.6.0",
"tailwindcss-animate": "^1.0.7",
"lucide-react": "^0.462.0",
"next-themes": "^0.3.0",

// Toast Notifications
"sonner": "^1.7.4",

// Used Radix UI Components
"@radix-ui/react-dialog": "^1.1.14",           // Gallery modal
"@radix-ui/react-label": "^2.1.7",             // Form labels
"@radix-ui/react-separator": "^1.1.7",         // Header separator
"@radix-ui/react-slot": "^1.2.3",              // Button component
"@radix-ui/react-toast": "^1.2.14",            // Toast notifications
"@radix-ui/react-toggle": "^1.1.9",            // Language toggle
"@radix-ui/react-tooltip": "^1.2.7",           // Tooltips

// Deployment
"vercel": "^50.4.9",
```

---

## 🛠️ Removal Commands

### Option 1: Manual Removal

Edit `package.json` and remove the listed dependencies, then run:

```bash
npm install
```

### Option 2: Using npm uninstall

```bash
# Remove Radix UI components
npm uninstall @radix-ui/react-accordion @radix-ui/react-alert-dialog \
  @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox \
  @radix-ui/react-collapsible @radix-ui/react-context-menu \
  @radix-ui/react-dropdown-menu @radix-ui/react-hover-card \
  @radix-ui/react-menubar @radix-ui/react-navigation-menu \
  @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group \
  @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-slider \
  @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle-group

# Remove other unused dependencies
npm uninstall animated-backgrounds click-spark cmdk date-fns \
  embla-carousel-react input-otp ogl react-day-picker \
  react-resizable-panels recharts vaul
```

---

## 📊 Expected Savings

- **node_modules size reduction:** ~80-120 MB
- **Installation time:** ~20-30% faster
- **Security surface:** Fewer dependencies to maintain

---

## ⚠️ Important Notes

1. **Test After Removal:** Always run `npm run build` and test thoroughly
2. **Peer Dependencies:** Some packages might be peer dependencies of kept packages
3. **Future Needs:** Consider if you might need these components later
4. **Git Commit:** Commit changes before removing dependencies

---

## 🔄 Verification Steps

After removing dependencies:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run dev` and test all features
5. Check for any console errors

---

**Last Updated:** 2026-01-23
