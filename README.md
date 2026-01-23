# Vente Polska - HVAC Production & Installation

Modern, responsive website for Vente Polska - a leading HVAC (Heating, Ventilation, Air Conditioning) company specializing in production and installation services.

## 🌟 Features

- **Hyper-realistic 3D Navigation**: Advanced glassmorphism effects with hover animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Tech Stack**: React + TypeScript + Tailwind CSS
- **Interactive Components**: Motion3DTilt effects and smooth transitions
- **Professional Branding**: Custom Vente Polska logo and favicon

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Custom CSS3 transforms and transitions

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Features

### 3D Glassmorphism Navigation
- 25px hover extrusion with volumetric edge glow
- 35px active-click extrusion with shockwave effects
- Glass reflection ripples and lens flares
- Circuit pattern overlays for depth

### Header Section
- Enlarged header with 2x bigger logo
- Unified button styling across navigation
- Contact button with phone icon
- Motion3DTilt interactive effects

### Visual Effects
- Teal gradient color scheme (#14b8a6 to #0d9488)
- Semi-transparent glass panels
- Smooth GPU-accelerated animations
- Depth of field and perspective effects

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel and deploy
npx vercel
```

### Netlify
```bash
# Build and deploy to Netlify
npm run build
# Upload dist/ folder to Netlify
```

### Static Hosting
```bash
# Build and serve static files
npm run build
# Serve dist/ folder on any static host
```

## 📁 Project Structure

```
src/
├── components/
│   ├── landing/
│   │   ├── LandingHeader.tsx      # Navigation header
│   │   ├── LandingPage.tsx       # Main landing page
│   │   ├── Motion3DTilt.tsx      # 3D tilt effect component
│   │   └── ...
│   └── ui/
│       └── button.tsx             # Custom button components
├── assets/                        # Images and static assets
└── main.tsx                       # App entry point
```

## 🎯 Key Components

### LandingHeader.tsx
- Sticky navigation with glassmorphism effects
- Responsive mobile menu
- Contact button with phone integration

### Motion3DTilt.tsx
- Custom 3D tilt effect component
- GPU-accelerated transforms
- Configurable tilt intensity and lift amount

### Button Components
- Multiple variants (glass, hero, outline)
- Consistent 3D effects across all buttons
- Hover and active state animations

## 🔧 Customization

### Colors
- Primary Teal: `#14b8a6`
- Secondary Teal: `#0d9488`
- Background: Semi-transparent glass effects

### Effects
- Adjust `tiltMax` and `liftAmount` in Motion3DTilt
- Modify gradient colors for different themes
- Customize animation durations and easing

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Vente Polska.

---

**Vente Polska** - HVAC Production & Installation Excellence
