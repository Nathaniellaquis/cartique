# CARTIQUE — Exotic Drive Marketplace

> Premium luxury car rental platform. **Frontend mockup only** — no backend required.

![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React 19](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)

**🚀 Quick Start:** `npm install` → `npm run dev` → Visit `http://localhost:3000`

---

## ✅ What's Built So Far

### Pages (3/84 screens complete)
- ✅ **Home Page** (`/`) - Hero, search bar, featured cars grid, "How It Works", trust badges
- ✅ **Search Results** (`/search`) - Filters (desktop sidebar + mobile drawer), results grid, pagination
- 🚧 **Listing Detail** (`/listing/[id]`) - Route created, component pending
- ⏳ **81 screens remaining** - See [complete-screen-inventory.md](./complete-screen-inventory.md)

### Components (100% foundation complete)
- ✅ Responsive Navbar (desktop + mobile hamburger menu)
- ✅ Footer (4-column grid with social links)
- ✅ CarCard component (with save heart, hover effects)
- ✅ All 50+ shadcn/ui design system components
- ✅ Mock data layer (`lib/mock-data.ts`)

### Infrastructure (100%)
- ✅ Next.js 16 App Router configured
- ✅ Tailwind CSS 4 with brand colors
- ✅ Rubik font (5 weights: 300, 400, 500, 600, 700)
- ✅ Theme provider (light/dark mode support)
- ✅ TypeScript 5

**Progress: ~3%** (Foundation + 2 major pages)

---

## 📚 Documentation

- **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)** - Step-by-step guide to add new pages
- **[BUILD_STATUS.md](./BUILD_STATUS.md)** - Detailed build progress with component breakdown
- **[complete-screen-inventory.md](./complete-screen-inventory.md)** - Full list of all 84 screens needed
- **[designspec.md](./designspec.md)** - Complete brand guidelines and design specifications

---

## Brand Identity

Cartique represents the pinnacle of luxury car rental, connecting discerning drivers with the world's most exclusive vehicles. Ferrari. Lamborghini. McLaren. Porsche.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (complete library)
- **Font**: Inter (Light 300, Regular 400, Medium 500, Semibold 600)
- **Icons**: Lucide React
- **Theme**: Light/Dark mode support with next-themes

## Brand Colors

### Primary Palette
- **Cartique Black**: `#000000` - Primary brand color
- **Pure White**: `#FFFFFF` - Clean, premium backgrounds
- **Charcoal**: `#1A1A1A` - Dark mode surfaces
- **Luxe Gold**: `#D4AF37` - Accent and premium highlights

### Neutral Grays
- Gray 50: `#FAFAFA`
- Gray 100: `#F5F5F5`
- Gray 200: `#E5E5E5`
- Gray 500: `#737373`
- Gray 700: `#404040`

## Typography

- **Typeface**: Inter
- **Weights**: Light (300) for headlines, Regular (400) for body text
- **Scale**: 12px to 48px following standard typographic scale
- **Line Height**: 1.2 for headlines, 1.5-1.6 for body text
- **Letter Spacing**: Tight (-0.02em) for display, normal for body

## Project Structure

```
cartique/
├── app/                       # Next.js 16 App Router
│   ├── layout.tsx             # ✅ Root layout (Navbar + Footer)
│   ├── page.tsx               # ✅ Home page
│   ├── search/                # ✅ Search results
│   ├── listing/[id]/          # 🚧 Listing detail (route created)
│   ├── brand-guidelines/      # ✅ Design system reference
│   └── globals.css            # ✅ Tailwind + brand colors
├── components/
│   ├── cartique/              # Custom Cartique components
│   │   ├── navbar.tsx         # ✅ Global navigation
│   │   ├── footer.tsx         # ✅ Global footer
│   │   └── car-card.tsx       # ✅ Reusable car card
│   ├── pages/                 # Page-level components
│   │   ├── home-page.tsx      # ✅ Home page content
│   │   └── search-page.tsx    # ✅ Search page content
│   ├── ui/                    # ✅ shadcn components (50+)
│   └── theme-provider.tsx     # ✅ Dark mode provider
├── lib/
│   ├── mock-data.ts           # ✅ Complete mock data layer
│   └── utils.ts               # ✅ Utility functions
├── public/                    # Static assets
├── complete-screen-inventory.md  # ✅ All 84 screens list
├── BUILD_STATUS.md            # ✅ Detailed progress tracking
├── IMPLEMENTATION_GUIDE.md    # ✅ How to add new pages
└── designspec.md              # ✅ Brand guidelines
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

**Live pages you can visit:**
- `/` - Home page (hero, search, featured cars)
- `/search` - Search results (filters, grid, pagination)
- `/brand-guidelines` - Design system reference

---

## 🎯 Next Steps

### Phase 1: Core Rental Flow (Recommended)
1. **Listing Detail Page** - Image carousel, specs grid, booking card
2. **Booking Checkout** - 3-step form (details, payment, confirm)
3. **Customer Dashboard** - KPI tiles, saved cars, messages
4. **Auth Modal** - Login/signup modal component

### Phase 2: Supplier Tools
1. Supplier Application & Status
2. Supplier Dashboard
3. Create/Edit Listing
4. Calendar & Bookings

### Phase 3: Admin Tools
1. Admin Dashboard
2. Supplier/Listing Moderation
3. Analytics

See [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) for step-by-step instructions.

## Design Principles

1. **Minimal & Premium** - Clean layouts with generous white space
2. **Modern & Timeless** - Contemporary design that won't feel dated
3. **Sophisticated** - Refined without being pretentious
4. **Accessible** - Premium experience for all users
5. **Consistent** - Unified design language across all touchpoints

## UI Components Available

All 53 shadcn/ui components are installed and ready to use:
- Forms: input, textarea, checkbox, radio-group, select, switch, slider
- Layout: card, separator, scroll-area, resizable, sidebar
- Navigation: breadcrumb, navigation-menu, menubar, tabs, pagination
- Feedback: alert, alert-dialog, dialog, drawer, toast, spinner
- Data Display: table, badge, avatar, calendar, chart, kbd
- Overlays: popover, tooltip, hover-card, context-menu, dropdown-menu
- And more...

## Development Guidelines

### Coding Standards
- Use functional components with hooks
- Tailwind CSS exclusively for styling (no inline styles)
- Follow naming conventions:
  - Components: PascalCase (`UserProfileCard`)
  - Functions/variables: camelCase (`fetchUserProfile`)
  - Files/folders: kebab-case (`user-profile-card`)
- Include ARIA attributes for accessibility
- Ensure keyboard navigation support

### Component Structure
```tsx
// 1. Imports
import { Component } from "@/components/ui/component";

// 2. Types/Interfaces
interface Props { }

// 3. Component
export function ComponentName({ }: Props) {
  // 3a. State
  // 3b. Effects
  // 3c. Handlers
  // 3d. Return JSX
}
```

## License

Private project for Cartique.

---

**Cartique** — *Where luxury meets the open road.*
