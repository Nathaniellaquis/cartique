# CARTIQUE

Exotic Drive Marketplace — Premium luxury car rental platform.

## Brand Identity

Cartique represents the pinnacle of luxury car rental, connecting discerning drivers with the world's most exclusive vehicles. Our brand embodies sophistication, trust, and accessibility.

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
├── app/
│   ├── brand-guidelines/    # Brand guidelines page
│   ├── globals.css           # Global styles with brand colors
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # shadcn/ui components (53 components)
│   └── theme-provider.tsx    # Dark mode provider
└── lib/
    └── utils.ts              # Utility functions
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### View Brand Guidelines

Navigate to `/brand-guidelines` to view the complete brand guidelines including:
- Logo usage
- Color palette (light & dark mode)
- Typography system
- Spacing & layout principles
- UI component styles
- Imagery guidelines
- Voice & tone
- Brand dos & don'ts

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
