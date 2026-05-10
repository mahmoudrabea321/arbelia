<div align="center">
  <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=400" alt="Arabella Header" style="border-radius: 12px; margin-bottom: 20px; object-fit: cover; max-height: 250px; width: 100%;">
  
  <h1>أرابيلا (Arabella)</h1>
  <p><strong>Premium Egyptian Furniture Catalog & E-Commerce Front-End</strong></p>
  <p><i>Building High-Trust, Culturally Resonance, and Maximum Conversion for the Modern Arab Market.</i></p>
</div>

---

## 📖 Overview

Arabella is a high-end, Arabic-first (RTL) furniture catalog website specifically designed for Egyptian and Gulf customers. It moves away from cluttered, outdated e-commerce templates and embraces a **modern luxury** aesthetic combined with aggressive-yet-elegant **WhatsApp conversion strategies**.

The application bridges the gap between digital convenience and physical showroom luxury, targeting newly married couples, apartment owners, and interior design enthusiasts.

## ✨ Key Features & Business Logic

### 🎯 Conversion-Optimized Strategy
- **Direct WhatsApp Ordering**: Bypasses traditional cart friction. Features floating WhatsApp CTAs and product-specific inquiry buttons.
- **Micro-Interactions**: Smooth Framer Motion hover effects that make the products feel premium and aspirational.
- **Social Proof Intrinsic Design**: Built-in trust bars ("Delivered to +500 homes", "10-Year Warranty") directly addressing local purchasing hesitations.

### 📱 Mobile-First "Social" Browsing
- **App-Like Feel**: Fixed bottom navigation bar for mobile users arriving from Instagram, Facebook, and TikTok ads.
- **Thumb-Friendly Elements**: Large touch targets, horizontal scrolling, and sticky action buttons.

### 🎨 "Warm Organic / Cultural" Design System
- **Typography**: `Amiri` (elegant display serif) paired with `IBM Plex Sans Arabic` (clean, readable UI sans).
- **Color Palette**: 
  - 🤍 **Ivory & Beige**: Warm organic backgrounds reflecting physical showrooms.
  - 🤎 **Walnut/Dark**: Deep, luxurious dark tones for high-contrast text.
  - ✨ **Gold Accent**: Used sparingly for critical CTAs and elegant highlights.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19, Vite |
| **Styling** | Tailwind CSS v4, Custom CSS Variables |
| **Animations** | `motion` (Framer Motion) |
| **Routing** | React Router v7 |
| **Icons** | Lucide React |

---

## 📂 Project Structure

```text
├── src/
│   ├── components/         # Reusable atomic & composite UI components
│   │   ├── home/           # Homepage specific sections (Hero, Bestsellers, Categories)
│   │   ├── layout/         # Global layout wrappers (Navbar, Footer, Bottom Nav)
│   │   └── ui/             # Baseline UI elements (ProductCard, FloatingWhatsApp)
│   ├── lib/                # Utilities (tailwind-merge, clsx helpers)
│   ├── pages/              # Route entry points (Home, ProductDetails)
│   ├── App.tsx             # Main App shell and Router configuration
│   ├── index.css           # Global styles, font imports, design tokens
│   └── main.tsx            # React mounting point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. Open the provided `localhost:3000` link in your browser.

---

## 🌐 Advanced Roadmap
- [ ] Next.js/SSR Migration for Dynamic Meta Tags (Arabic SEO)
- [ ] Headless CMS Integration (Sanity / Strapi)
- [ ] Cloudinary integration for automatic WebP/AVIF image generation
- [ ] Augmented Reality (AR) Furniture Preview Module
- [ ] Automated Schema Markup for Local SEO

<br/>
<div align="center">
  <p>Built with ❤️ for the future of Arabic E-Commerce.</p>
</div>
