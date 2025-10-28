# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cartique is a premium luxury exotic car rental marketplace built as a **frontend mockup only** (no backend). The platform connects discerning drivers with exclusive vehicles like Ferrari, Lamborghini, McLaren, and Porsche.

**Current Progress:** ~3% complete (Foundation + core pages: Home, Search Results)
**Total Screens:** 84 screens planned (see complete-screen-inventory.md)

## Development Commands

```bash
# Start development server
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Kill dev server if port 3000 is blocked
lsof -ti:3000 | xargs kill -9
```

## Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **React:** 19.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (using @tailwindcss/postcss)
- **UI Library:** shadcn/ui (50+ components installed)
- **Font:** Rubik (weights: 300, 400, 500, 600, 700)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Theme:** Light/Dark mode via next-themes (defaults to dark)

### Key Dependencies
- `class-variance-authority` - Component variants
- `clsx` + `tailwind-merge` - Conditional classes
- `date-fns` - Date formatting
- `recharts` - Data visualization
- `sonner` - Toast notifications
- `vaul` - Drawer component

## Project Structure

```
cartique/
├── app/                          # Next.js 16 App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Tailwind + brand color CSS variables
│   ├── search/                   # Search results with filters
│   ├── listing/[id]/             # Dynamic listing detail
│   ├── booking/                  # Checkout & confirmation
│   ├── dashboard/                # Customer dashboard
│   ├── messages/                 # Customer messages
│   ├── supplier/                 # Supplier tools (dashboard, listings, calendar)
│   ├── admin/                    # Admin panel (dashboard, moderation, analytics)
│   └── brand-guidelines/         # Design system reference
│
├── components/
│   ├── cartique/                 # Custom Cartique components
│   │   ├── navbar.tsx            # Global navigation (desktop + mobile)
│   │   ├── footer.tsx            # Global footer
│   │   ├── car-card.tsx          # Reusable car listing card
│   │   └── auth-modal.tsx        # Login/signup modal
│   ├── pages/                    # Page-level components
│   │   ├── home-page.tsx         # Home page content
│   │   ├── search-page.tsx       # Search page content
│   │   ├── listing-detail-page.tsx
│   │   ├── booking-checkout-page.tsx
│   │   ├── customer-dashboard-page.tsx
│   │   ├── supplier-*.tsx        # Supplier-specific pages
│   │   └── admin-*.tsx           # Admin-specific pages
│   └── ui/                       # shadcn/ui components (50+)
│
├── lib/
│   ├── mock-data.ts              # Complete mock data layer
│   └── utils.ts                  # Utility functions (cn helper)
│
└── public/                       # Static assets
```

## Architecture Patterns

### Page Component Pattern
All pages follow a consistent two-file pattern:

1. **Route file** (`app/*/page.tsx`): Minimal wrapper that extracts params/searchParams and passes to page component
2. **Page component** (`components/pages/*-page.tsx`): The actual UI implementation (marked with "use client" when needed)

Example:
```tsx
// app/listing/[id]/page.tsx
import { ListingDetailPage } from "@/components/pages/listing-detail-page"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <ListingDetailPage carId={id} />
}

// components/pages/listing-detail-page.tsx
"use client"
export function ListingDetailPage({ carId }: { carId: string }) {
  // Implementation here
}
```

### Data Layer
All data is mocked in `lib/mock-data.ts`. No API calls or backend integration.

**Available data exports:**
- `mockCarListings: CarListing[]` - 4 luxury cars with full specs
- `mockSuppliers: Supplier[]` - 3 verified suppliers
- `mockCustomer: Customer` - Sample customer profile
- `mockBookings: Booking[]` - 2 sample bookings
- `categories: string[]` - 8 car categories
- `makes: string[]` - 10 luxury car brands

**TypeScript types defined:**
- `CarListing` - Complete car listing with specs, features, images
- `Supplier` - Supplier profile with ratings, reviews
- `Customer` - Customer profile
- `Booking` - Booking with status (pending, confirmed, in-progress, completed, cancelled)

### Layout System
The root layout (`app/layout.tsx`) wraps all pages with:
- Rubik font configuration (5 weights)
- ThemeProvider (dark mode default, system disabled)
- Navbar (fixed top, responsive)
- Footer (4-column grid)
- Main content wrapper with `pt-20` to account for fixed navbar

## Brand Design System

### Color Palette
Defined as HSL CSS variables in `app/globals.css`:

**Brand Colors:**
- Cartique Black: `#000000` - Primary brand color
- Pure White: `#FFFFFF` - Clean backgrounds
- Charcoal: `#1A1A1A` - Dark mode surfaces
- Luxe Gold: `#D4AF37` - Accent (--accent)

**Semantic Tokens (Light/Dark mode):**
- `--background` / `--foreground` - Page background/text
- `--primary` / `--primary-foreground` - Primary CTA (black in light, white in dark)
- `--accent` / `--accent-foreground` - Gold accent
- `--muted` / `--muted-foreground` - Subtle backgrounds/text
- `--border` / `--input` - Form elements

### Typography
- **Font:** Rubik variable font (--font-rubik)
- **Weights:** 300 (Light - headlines), 400 (Regular - body), 500 (Medium), 600 (Semibold - UI), 700 (Bold)
- **Scale:** Use Tailwind text sizes (text-sm to text-8xl)
- **Spacing:** 8px base unit (use multiples: 8, 16, 24, 32, 48, 64, 96)

### Component Usage

**Buttons:**
```tsx
<Button variant="default">Primary (Black)</Button>
<Button variant="gold">Gold CTA</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Tertiary</Button>
```

**Cards:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Actions</CardFooter>
</Card>
```

## Coding Standards

### File Naming
- **Components:** PascalCase files with PascalCase exports (`UserProfileCard`)
- **Functions/variables:** camelCase (`fetchUserProfile`)
- **Files/folders:** kebab-case (`user-profile-card.tsx`)

### Component Structure
```tsx
// 1. Imports (React, Next.js, UI, utils, types)
"use client" // Only if using hooks/interactivity

import { Component } from "@/components/ui/component"
import { type } from "@/lib/types"

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Component
export function ComponentName({ }: Props) {
  // 3a. State & hooks
  // 3b. Effects
  // 3c. Handlers
  // 3d. Render helpers
  // 3e. Return JSX
}
```

### Styling Guidelines
- **Tailwind only** - No inline styles or CSS modules
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Responsive: mobile-first, then `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Dark mode: Use `dark:` variant for dark mode overrides
- Spacing: Use consistent multiples (p-4, p-6, p-8, p-12, p-16)

### Import Aliases
- `@/*` - Root directory (e.g., `@/components/ui/button`)
- Always use absolute imports, not relative paths

### Client vs Server Components
- **Server components (default):** Use for static pages, data fetching from mock-data
- **Client components ("use client"):** Use when you need:
  - React hooks (useState, useEffect, etc.)
  - Event handlers (onClick, onChange)
  - Browser APIs
  - Search params via useSearchParams() hook

### Accessibility
- Include ARIA attributes (`aria-label`, `aria-describedby`)
- Ensure keyboard navigation support
- Use semantic HTML (`<nav>`, `<main>`, `<article>`)
- Test with keyboard-only navigation

## Important Implementation Notes

### useSearchParams() Pattern
When using `useSearchParams()` in client components, you MUST wrap the component in a `<Suspense>` boundary in the parent route:

```tsx
// app/booking/checkout/page.tsx
import { Suspense } from "react"
import { BookingCheckoutPage } from "@/components/pages/booking-checkout-page"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingCheckoutPage />
    </Suspense>
  )
}

// components/pages/booking-checkout-page.tsx
"use client"
import { useSearchParams } from "next/navigation"

export function BookingCheckoutPage() {
  const searchParams = useSearchParams()
  // ...
}
```

This prevents build errors related to missing Suspense boundaries.

### Mock Data Usage
Since this is a frontend-only mockup, all interactions should use mock data:

```tsx
// Fetch car by ID
const car = mockCarListings.find(c => c.id === carId)

// Filter cars
const featured = mockCarListings.filter(car => car.featured)
const supercars = mockCarListings.filter(car => car.category === "Supercar")

// Get related supplier
const supplier = mockSuppliers.find(s => s.id === car?.supplierId)
```

### Image Handling
- Use Next.js `<Image>` component for optimization
- Placeholder images use Unsplash (automotive/luxury car themes)
- Always include `alt` text for accessibility
- Use `fill` prop with `object-cover` for backgrounds
- Use `priority` prop for above-fold images

### Form Handling
Use React Hook Form + Zod pattern:

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  email: z.string().email("Invalid email"),
  // ...
})

export function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  })

  // Use Form components from @/components/ui/form
}
```

## Common Development Tasks

### Adding a New Page
1. Create page component in `components/pages/`
2. Create route in `app/*/page.tsx`
3. Import mock data as needed
4. Follow existing page patterns (HomePage, SearchPage as references)
5. Add Suspense boundary if using useSearchParams()

### Adding a New UI Component
Most components already exist via shadcn/ui. To add custom components:
1. Create in `components/cartique/` (not `components/ui/`)
2. Use existing shadcn components as building blocks
3. Apply brand colors via semantic tokens

### Modifying the Data Model
Edit `lib/mock-data.ts`:
1. Update TypeScript interface/type
2. Update mock data instances
3. Check for type errors across codebase

## Testing Strategy
No test framework currently configured. For manual testing:
- Test all pages in light and dark mode
- Test responsive breakpoints (mobile, tablet, desktop)
- Test keyboard navigation
- Verify mock data displays correctly

## Build & Deployment Notes
- Build command: `npm run build`
- Next.js 16 requires Node.js 18.18+
- Static export not configured (uses App Router dynamic features)
- Vercel deployment ready (.vercel directory present)

## Documentation References
- [README.md](./README.md) - Project overview and quick start
- [DESIGN_SPEC.md](./DESIGN_SPEC.md) - Complete design specifications (63KB)
- [QUICK_START.md](./QUICK_START.md) - Quick start guide with examples

## Design Philosophy
From the design spec:
1. **Minimal & Premium** - Generous whitespace, clean layouts, no clutter
2. **Confident Typography** - Rubik Light for headlines, Medium/Semibold for UI
3. **Consistent Spacing** - 8px base unit increments
4. **Exact Colors** - Stick to brand palette strictly
5. **Responsive First** - Mobile-optimized, then enhanced for desktop
