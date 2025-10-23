# Cartique — Exotic Drive Marketplace
## Complete Design Specification

**Version:** 1.0
**Last Updated:** October 23, 2025
**Design System:** Rubik font, Black/White/Gold palette, 8px grid system

---

## Design Principles

1. **Minimal & Premium** — Generous whitespace (never cramped), clean layouts, no clutter
2. **Confident Typography** — Rubik Light (300) for large headlines, Medium/Semibold for UI
3. **Consistent Spacing** — 8px base unit increments (8, 16, 24, 32, 48, 64, 96px)
4. **Exact Colors** — #000000, #FFFFFF, #1A1A1A, #D4AF37, #E5E5E5, #737373
5. **Responsive First** — Mobile-optimized, then enhanced for desktop

---

## Global Elements

### Navigation Bar

**Desktop (1024px+):**
- Position: Fixed top, z-index 50
- Height: 64px
- Background: white/80 with backdrop-blur-xl, border-bottom 1px #E5E5E5
- Max-width: 1440px centered, padding 0 48px
- Layout:
  - **Left:** Cartique logo (120px width, black version)
  - **Center:** Nav links — "Browse" "How It Works" "List Your Car" (16px, font-medium, 8px gap)
  - **Right:** Search icon button (40px) + Profile avatar (40px circle with border-2) OR "Sign In" button (black, rounded-lg)
- Link hover: color changes to #D4AF37
- Active link: underline 2px gold

**Mobile (0-767px):**
- Height: 56px, padding 0 16px
- Left: Logo (80px width)
- Right: Hamburger icon (40px tap target)
- Menu drawer:
  - Slides from right, full-screen width, white background
  - Close X (top-right, 48px tap target)
  - Links: stacked, 56px height each, border-bottom 1px #E5E5E5
  - Bottom: "Sign In" button (black, full-width, 52px height, 24px margin)

### Footer

**Desktop:**
- Background: #FAFAFA, border-top 2px #E5E5E5
- Padding: 64px vertical, 48px horizontal
- Max-width: 1280px, centered
- Grid: 4 columns
  - **Column 1 (Brand):** Logo (32px height) + tagline "Drive the Extraordinary" (14px, gray-600, 16px margin-top)
  - **Column 2 (Product):** "Product" heading (14px, font-semibold, black) + links ("Browse Cars", "How It Works", "Pricing", "Locations") — 14px, gray-600, 12px gap, hover gold
  - **Column 3 (Company):** "Company" heading + links ("About", "Careers", "Press", "Contact")
  - **Column 4 (Legal):** "Legal" heading + links ("Terms", "Privacy", "Supplier Agreement")
- Bottom bar (48px margin-top, border-top 1px #E5E5E5, 24px padding-top):
  - Left: "© 2025 Cartique Inc. All rights reserved."
  - Right: Social icons (24px, gray-500, hover gold) — Instagram, Twitter, LinkedIn

**Mobile:**
- Single column, padding 48px vertical, 24px horizontal
- Logo + tagline: centered
- Link sections: accordion-style (collapsed by default), tap heading to expand
- Social icons: centered row, 32px each
- Copyright: centered, 12px

---

## Screen 1: Home / Browse

### Hero Section

**Desktop:**
- Height: 100vh (full viewport)
- Background: Black-to-charcoal gradient (#000000 to #1A1A1A, 135deg)
- Background image: Exotic car (wide-angle shot), fixed attachment, centered, cover
- Overlay: Linear gradient top to bottom (rgba(0,0,0,0.4) to rgba(0,0,0,0.7))

**Content (Centered):**
- Max-width: 900px
- Vertical center alignment
- **H1:** "Drive the Extraordinary"
  - 72px, font-light (300), white, tracking-tight (-0.02em), line-height 1.1
  - Margin-bottom: 24px
- **Subheading:** "Ferrari. Lamborghini. McLaren. Porsche. Book exotic supercars from verified owners in 47 cities. White-glove delivery to your door. Drive tomorrow."
  - 20px, white/80 opacity, max-width 640px, line-height 1.6
  - Margin-bottom: 48px

**Search Bar (Hero):**
- Width: 800px, background white, rounded-xl (12px), border-2 #E5E5E5
- Shadow: 0 8px 32px rgba(0,0,0,0.15)
- Height: 72px
- Layout: 4-column grid (equal widths except button)
  - **Location:** Icon (pin, 20px, gray-500) + input "Where?" (16px, placeholder gray-500)
  - **Start Date:** Icon (calendar) + input "Start Date"
  - **End Date:** Icon (calendar) + input "End Date"
  - **Search Button:** Gold bg (#D4AF37), black text, 56px height, rounded-lg, "Search" + arrow icon (16px)
- Vertical dividers: 1px #E5E5E5 between inputs
- Padding: 8px inside card, inputs have 12px horizontal padding

**Mobile (375px-767px):**
- Hero height: 80vh
- H1: 48px
- Subheading: 18px, 16px margin sides
- Search bar:
  - Full-width (16px margins)
  - Stacked layout (4 rows)
  - Each row: 56px height, border-bottom 1px #E5E5E5 except last
  - Search button: full-width, 52px height, 16px margin-top

### Category Chips Section

**Desktop:**
- Padding: 48px vertical, background #FAFAFA
- Max-width: 1280px, centered
- Title: "Browse by Category" (24px, font-semibold, 32px margin-bottom)
- Layout: Flex wrap, gap 12px

**Chip:**
- Height: 44px, padding 14px 20px
- Border: 2px #E5E5E5, rounded-lg (8px), background white
- Font: 14px, font-medium
- Icon: 20px left of text (convertible icon, supercar icon, etc.)
- Hover: border #D4AF37, shadow-sm
- Active state: background #D4AF37, text black, border #D4AF37

**Categories:** Convertible, Supercar, SUV, Sedan, Sports Car, Electric, Vintage, Track-Ready

**Mobile:**
- Horizontal scroll (no wrap)
- Padding: 32px vertical, 16px horizontal
- Show scroll hint (partial next chip visible)

### Featured Cars Section

**Desktop:**
- Padding: 96px vertical
- Max-width: 1280px, centered, 48px horizontal padding
- Header row:
  - "Featured Vehicles" (48px, font-light, left)
  - "View All" link (16px, gold, font-semibold, right) with arrow
  - Margin-bottom: 48px
- Grid: 4 columns, gap 24px

**Car Card (280px × auto):**
- Background: white, border-2 #E5E5E5, rounded-xl (12px)
- Transition: all 200ms ease
- Hover state: translateY(-4px), shadow-lg, border #D4AF37/30

**Image:**
- Aspect ratio: 16:9
- Rounded-t-xl (top corners only)
- Object-fit: cover
- Overlay gradient (bottom 80px): transparent to rgba(0,0,0,0.6)
- **Badge (if featured):** Top-left, 12px from edges, gold bg, black text, "FEATURED" (10px, font-bold), padding 6px 10px, rounded-lg
- **Save heart:** Top-right, 12px from edges, 36px circle, white/20 bg, white heart outline icon (20px), tap target 40px, backdrop-blur

**Content (padding 20px):**
1. **Title:** "McLaren 720S" (18px, font-semibold, black)
2. **Meta:** "2023 • 4,200 miles" (14px, gray-600, 4px margin-top)
3. **Location:** Pin icon (14px, gray-500) + "Beverly Hills, CA" (14px, gray-600, 8px margin-top)
4. **Divider:** 1px #E5E5E5, 16px margin vertical
5. **Price row:** "$1,495" (24px, font-bold) + "/day" (14px, gray-600), flex space-between
6. **View button:** "View Details" (full-width, outline variant, 44px height, 14px font-medium, 16px margin-top)

**Mobile:**
- Grid: 1 column, gap 16px
- Card width: 100%
- Image aspect: 4:3 (taller for mobile)
- Content padding: 16px

**Tablet (768px-1023px):**
- Grid: 2 columns

### Trust Section

**Desktop:**
- Background: white, border-top 1px #E5E5E5
- Padding: 96px vertical
- Max-width: 1280px, centered
- Title: "Why Cartique?" (48px, font-light, centered, 64px margin-bottom)
- Grid: 3 columns, gap 48px

**Trust Card:**
- Text-align: center
- Icon: 64px, gold color, margin-bottom 24px (shield, verified, support icons)
- Title: "Verified Suppliers" (24px, font-semibold, 16px margin-bottom)
- Description: "Every supplier completes identity verification and vehicle ownership proof." (16px, gray-600, line-height 1.6)

**Mobile:**
- Grid: 1 column, gap 48px
- Padding: 64px vertical, 24px horizontal

---

## Screen 2: Search Results

### Top Header Bar

**Desktop:**
- Height: 80px, background white, border-bottom 1px #E5E5E5
- Padding: 0 48px
- Layout: space-between
- **Left:** "147 cars found in Los Angeles, CA" (18px, font-medium, black)
- **Right:** Sort dropdown
  - Button: "Sort: Recommended" with chevron-down icon
  - Border-2 #E5E5E5, rounded-lg, 40px height, 180px width, padding 0 16px
  - Dropdown menu: white, border-2, rounded-xl, shadow-xl, 200px width
    - Options: "Recommended", "Price: Low to High", "Price: High to Low", "Newest First", "Highest Rated"
    - Each option: 44px height, padding 0 16px, hover bg #F5F5F5, active gold bg/10 + checkmark

**Mobile:**
- Height: auto, padding 16px
- Stacked layout:
  - Results count: 16px font, 12px margin-bottom
  - Sort button: full-width, 48px height
- Filter button: Fixed bottom-right, 56px circle, gold bg, filter icon, z-index 40

### Filter Sidebar

**Desktop:**
- Width: 280px, fixed left, full height minus nav
- Background: white, border-right 1px #E5E5E5
- Padding: 32px 24px
- Scrollable content

**Sections (each 32px margin-bottom):**

1. **Price Range:**
   - Label: "Price per Day" (14px, font-semibold)
   - Dual-range slider: track height 8px, thumbs 20px, gold fill
   - Min/Max labels: "$0" and "$5,000" below slider (12px, gray-600)
   - Current values: "$500 - $2,000" (14px, font-medium, 12px margin-top)

2. **Brand:**
   - Label: "Brand" (14px, font-semibold, 16px margin-bottom)
   - Checkboxes: stacked, 36px height each, gap 8px
     - Ferrari, Lamborghini, McLaren, Porsche, Aston Martin, Bentley (initially visible)
   - "Show 12 more" link (12px, gold, expand to show all)
   - Checkbox: 20px, rounded, border-2, checked = black bg + white checkmark

3. **Year Range:**
   - Label: "Year" (14px, font-semibold)
   - Two inputs: "Min" and "Max" (side-by-side, 120px each)
   - Inputs: border-2, rounded-lg, 40px height

4. **Body Style:**
   - Label: "Body Style" (14px, font-semibold)
   - Chips: wrapped, gap 8px
   - Chip: border-2, rounded-lg, 36px height, padding 8px 14px, clickable
   - Selected: gold bg, black text

5. **Features:**
   - Label: "Features" (14px, font-semibold)
   - Checkboxes: Carbon Fiber, Track Pack, Ceramic Brakes, Launch Control, etc.
   - Max 6 visible, "Show more" expand

6. **Location Radius:**
   - Label: "Distance" (14px, font-semibold)
   - Single slider: 0-200 miles
   - Labels: "25 mi", "50 mi", "100 mi", "200 mi" (markers on track)

**Bottom:**
- "Clear All Filters" button (outline, 40px height, full-width, gray text)

**Mobile (Drawer):**
- Triggered by fixed filter button
- Slides from bottom, 90vh max height
- Rounded top corners: 16px
- Drag handle: 32px wide × 4px tall gray bar, centered at top, 16px margin-bottom
- White background, padding 24px
- Scrollable content
- "Apply Filters (12)" button: Fixed bottom, gold, full-width, 56px height, shows count of active filters

### Results Grid

**Desktop:**
- Padding: 48px
- Grid: 3 columns, gap 24px
- Same car card design as homepage
- Infinite scroll OR pagination at bottom

**Pagination (if used):**
- Centered, 48px margin-top
- Numbers: 1 2 3 ... 12
- Each: 40px circle, border-2 #E5E5E5, hover gold border
- Active: black bg, white text
- Prev/Next: arrows, outline buttons, 40px × 100px

**Mobile:**
- 1 column, gap 16px, padding 16px
- Infinite scroll (no pagination)
- Loading indicator: spinner (32px gold) + "Loading more..." (14px, gray-600)

**Tablet:**
- 2 columns, gap 20px

---

## Screen 3: Listing Detail

### Image Carousel

**Desktop:**
- Height: 600px, full-width (no max-width constraint)
- Background: black
- Main image: centered, object-contain, max 100% width/height
- Thumbnail strip (below main image):
  - Background: black/80, backdrop-blur
  - Height: 96px, padding 16px
  - Thumbnails: 80px × 80px, gap 12px, horizontal scroll
  - Each: border-2 transparent, rounded-lg, opacity 60%
  - Active: border #D4AF37, opacity 100%
  - Hover: opacity 80%
- **Navigation arrows:**
  - Position: absolute left/right, vertical center
  - Size: 48px circle, white/20 bg, backdrop-blur-md, white arrow icon
  - 48px from edges
  - Hover: white/30 bg
- **Image counter:** Top-right, "3 / 12" (14px, white, semibold, 24px from edges, black/40 bg, padding 8px 12px, rounded-lg)
- **Lightbox trigger:** Click main image opens full-screen lightbox

**Mobile:**
- Height: 400px (or 60vh, whichever smaller)
- Swipeable (touch gestures)
- Dot indicators: bottom center, 12px from bottom
  - Dots: 8px circles, white/40, gap 8px
  - Active: white, 10px wide (pill shape)
- No thumbnail strip
- Tap image: opens lightbox

**Lightbox (All Devices):**
- Full-screen overlay, background black/95
- Image: centered, max 90vw × 90vh
- Close X: top-right, 48px tap target, white, 32px from edges
- Arrows: left/right, 56px circles, white/20 bg, white icons
- Swipe gestures (mobile)
- ESC key closes (desktop)

### Content Layout

**Desktop:**
- Max-width: 1280px, centered
- Padding: 64px vertical, 48px horizontal
- Two columns: 8fr (main content) + 4fr (booking sidebar)
- Gap: 48px between columns

**Mobile:**
- Single column, full-width
- Booking card: fixed bottom (collapsed to price bar + Reserve button)
- Main content: padding 24px

### Main Content Column

**Header:**
- Badge: "FEATURED" (if applicable) — gold bg, black text, 12px font-bold, padding 6px 12px, rounded-lg, inline-block
- **Title:** "McLaren 720S" (48px, font-light, 12px margin-top)
- **Meta line:** "2023 • Performance Coupe • Beverly Hills, CA" (16px, gray-600, 8px margin-top)
  - Icons: year icon, body-type icon, location pin (16px, gray-500, 8px left margin)
- **Divider:** 1px #E5E5E5, 32px margin vertical

**Quick Stats Bar:**
- Background: #FAFAFA, border-2 #E5E5E5, rounded-xl, padding 24px
- Grid: 4 columns (desktop), 2 columns (mobile)
- Each stat:
  - Icon: 24px, gold color
  - Value: 20px, font-semibold
  - Label: 12px, gray-600, 4px margin-top
- Stats: 710 HP, 2.8s 0-60, 212 mph top speed, RWD

**Specifications Section:**
- Title: "Specifications" (28px, font-semibold, 48px margin-top, 24px margin-bottom)
- Grid: 3 columns (desktop), 2 (tablet), 1 (mobile), gap 16px

**Spec Item:**
- Height: 56px, flex layout
- Icon: 24px, gray-500, left
- Content (flex-grow):
  - Label: "Engine" (14px, gray-600)
  - Value: "4.0L Twin-Turbo V8" (14px, font-semibold, black)
- Border-bottom: 1px #E5E5E5 (last-child no border)

**Specs to include:**
Engine, Power, Torque, 0-60 Time, Top Speed, Transmission, Drivetrain, Weight, Fuel Type, Seats, Doors

**Description Section:**
- Title: "About This Vehicle" (28px, font-semibold, 48px margin-top, 24px margin-bottom)
- Body text: 16px, gray-700, line-height 1.7, max-width 680px
- Paragraphs: 20px margin-bottom
- Example: "This 2023 McLaren 720S represents the pinnacle of British engineering. With only 4,200 miles, this Performance Coupe has been meticulously maintained and is ready for track days or canyon drives. Carbon fiber monocoque chassis, dihedral doors, and active aerodynamics make every drive extraordinary."

**Features Section:**
- Title: "Included Features" (28px, font-semibold, 48px margin-top, 24px margin-bottom)
- Grid: 2 columns (desktop), 1 (mobile), gap 16px

**Feature Item:**
- Flex layout, gap 12px
- Checkmark icon: 20px, green-600, left
- Text: 16px, gray-700
- Examples: Carbon Fiber Interior Trim, Track Pack, Active Exhaust System, Carbon Ceramic Brakes, Adaptive Suspension, Premium Audio, Climate Control, etc.

**Location Section:**
- Title: "Pickup Location" (28px, font-semibold, 48px margin-top, 24px margin-bottom)
- Map: 100% width, 400px height, rounded-xl, border-2 #E5E5E5
  - Shows marker at pickup location
  - Interactive (zoom, pan)
- Address below map: "1234 Rodeo Drive, Beverly Hills, CA 90210" (16px, gray-700, 16px margin-top)
- "Get Directions" link (14px, gold, font-semibold, external link icon)

**Supplier Info:**
- Border-top: 2px #E5E5E5, padding-top 48px, 48px margin-top
- Layout: flex row, gap 20px
- Avatar: 72px circle, border-2 #E5E5E5
- Content:
  - Name: "John Smith" (24px, font-semibold)
  - Joined: "Supplier since March 2024" (14px, gray-600, 4px margin-top)
  - Rating: 5 gold stars (16px each) + "4.9" (16px, font-semibold) + "(37 reviews)" (14px, gray-600)
  - "Message John" button (outline, 44px height, 20px margin-top)

### Booking Sidebar (Right Column - Desktop Sticky)

**Desktop:**
- Width: 100% of column
- Position: sticky, top 80px (below nav)
- Background: white, border-2 #E5E5E5, rounded-xl
- Padding: 28px
- Shadow: 0 4px 16px rgba(0,0,0,0.06)

**Content:**
1. **Price:** "$1,495" (40px, font-bold) + "/day" (16px, gray-600)
2. **Divider:** 1px #E5E5E5, 24px margin vertical
3. **Date Inputs:**
   - Label: "Start Date" (14px, font-semibold, gray-700, 8px margin-bottom)
   - Input: border-2 #E5E5E5, rounded-lg, 48px height, calendar icon (right, 20px), placeholder "Select date"
   - 16px margin-bottom
   - Same for "End Date"
4. **Guest Count:**
   - Label: "Guests" (14px, font-semibold)
   - Counter: Minus button (32px) + "2" (center, 16px, font-medium) + Plus button (32px)
   - Border-2, rounded-lg, 48px height, flex space-between
5. **Summary (24px margin-top):**
   - Background: #FAFAFA, rounded-lg, padding 20px
   - Line items (14px, gray-700):
     - "$1,495 × 3 days" = "$4,485" (right-aligned, font-semibold)
     - "Service fee (10%)" = "$149"
     - "Insurance" = "$89"
   - Divider: 1px #E5E5E5, 16px margin vertical
   - Total: "Total" (16px, font-semibold) + "$4,723" (20px, font-bold)
6. **Reserve Button:**
   - Full-width, gold bg, black text, 56px height, rounded-lg, font-semibold
   - Text: "Reserve Now"
   - 20px margin-top
7. **Fine print:** "You won't be charged yet" (12px, center, gray-600, 12px margin-top)
8. **Divider:** 1px, 24px margin vertical
9. **Message Button:**
   - Full-width, outline style, 48px height
   - Icon: chat icon (20px, left)
   - Text: "Message Supplier"

**Mobile:**
- Booking card hidden initially
- Bottom bar (fixed):
  - Background: white, border-top 1px #E5E5E5, padding 16px
  - Layout: Price (left) + "Reserve" button (right, gold, flex-grow)
  - Height: 80px
- Tap bar: expands to bottom sheet (full booking card slides up, 80vh height, rounded top corners 16px)

---

## Screen 4: Auth / Signup

### Background

**Desktop & Mobile:**
- Full viewport height (100vh)
- Background image: Exotic car interior/exterior, high-quality, centered, cover
- Overlay: Black gradient radial from center
  - Center: rgba(0,0,0,0.5)
  - Edges: rgba(0,0,0,0.8)

### Auth Card

**Desktop:**
- Width: 480px, centered (vertical & horizontal)
- Background: white, rounded-xl (12px), border-2 #E5E5E5
- Padding: 48px
- Shadow: 0 16px 48px rgba(0,0,0,0.15)

**Mobile:**
- Width: calc(100% - 32px), 16px margins
- Padding: 32px
- Vertical center (or near-top if keyboard open)

**Content:**

1. **Logo:** Centered, black version, 48px height, 32px margin-bottom

2. **Title:** "Welcome to Cartique" (32px, font-light, center, tracking-tight)

3. **Subtitle:** "Sign in to continue" (16px, gray-600, center, 24px margin-top, 32px margin-bottom)

4. **Email Input:**
   - Label: "Email Address" (14px, font-semibold, gray-700, 8px margin-bottom)
   - Input: border-2 #E5E5E5, rounded-lg, 52px height, 16px font, padding 0 16px
   - Placeholder: "you@example.com"
   - 20px margin-bottom

5. **Password Input:**
   - Label: "Password" (14px, font-semibold, 8px margin-bottom)
   - Input: same style as email
   - Eye icon: right-aligned inside input, 40px tap target, toggles visibility
   - "Forgot password?" link: 12px, gold, font-semibold, right-aligned, 8px margin-top
   - 24px margin-bottom

6. **Continue Button:**
   - Full-width, black bg, white text, 56px height, rounded-lg, font-semibold
   - Text: "Continue"
   - Hover: opacity 90%
   - Loading state: spinner (24px, white)

7. **Divider with text:**
   - 32px margin vertical
   - Horizontal line #E5E5E5 with centered text
   - Text: "Or continue with" (14px, gray-500, white bg padding 0 12px)

8. **Social Buttons (stacked, 12px gap):**
   - **Google:** outline style, 52px height, full-width
     - Google logo (20px, left, 12px margin-right) + "Continue with Google" (16px, font-medium)
   - **Apple:** same design, Apple logo

9. **Footer Link:**
   - Center-aligned, 14px, gray-600, 32px margin-top
   - "Don't have an account? " + "Sign up" (gold, font-semibold, hover underline)

**Signup Variant:**
- Additional fields after email/password:
  - **Name:** "First Name" and "Last Name" (side-by-side, 2-column grid, gap 12px)
  - **Phone:** Input with country code dropdown component (left side, +1 flag icon)
  - **Checkbox:** "I agree to the Terms of Service and Privacy Policy"
    - 20px checkbox, 14px text, links in gold, 24px margin-top
- Button text: "Create Account"
- Footer: "Already have an account? " + "Sign in"

---

## Screen 5: Customer Dashboard

### Layout

**Desktop:**
- Max-width: 1280px, centered
- Padding: 64px vertical, 48px horizontal
- Background: #FAFAFA

**Mobile:**
- Padding: 32px vertical, 16px horizontal

### Header

**Desktop:**
- Flex: space-between, align-center
- **Left:**
  - "Welcome back, Alex" (40px, font-light, black)
  - Breadcrumb: "Dashboard" (14px, gray-500, 8px margin-top)
- **Right:**
  - Avatar: 56px circle, border-2 #E5E5E5
  - Name + email: stacked (right of avatar, 12px gap)
    - "Alex Johnson" (16px, font-semibold)
    - "alex@cartique.com" (14px, gray-600)
  - Settings icon: 40px button, gray-500, hover bg #F5F5F5, 12px margin-left
- 48px margin-bottom

**Mobile:**
- Stacked layout
- Avatar: top-right (40px)
- Welcome: 32px font
- Settings: hidden (in profile section)

### KPI Tiles

**Desktop:**
- Grid: 3 columns, gap 24px
- 48px margin-bottom

**Each Tile:**
- Background: white, border-2 #E5E5E5, rounded-xl
- Padding: 24px
- Hover: shadow-md transition

Content:
- Icon: 40px circle, gold/10 background, gold icon (24px)
- Value: 36px, font-semibold, 12px margin-top
- Label: 14px, gray-600, 4px margin-top
- Change: "+12 this month" (12px, green-600, up-arrow icon)

**Tiles:**
1. **Saved Cars:** Heart icon, value "12"
2. **Active Rentals:** Car icon, value "2"
3. **Messages:** Chat icon, value "5" + unread badge (8px circle, gold)

**Mobile:**
- Grid: 2 columns, gap 16px
- Smaller padding: 20px

### Saved Cars Section

**Desktop:**
- Title: "Saved Cars" (28px, font-semibold) + "View All (12)" link (16px, gold, right-aligned, font-semibold)
- 48px margin-top, 24px margin-bottom
- Horizontal carousel:
  - Shows 3.5 cards (hint of 4th)
  - Card width: 300px fixed
  - Gap: 24px
  - Overflow-x: scroll (hidden scrollbar, or subtle gray scrollbar)
  - Scroll buttons: left/right arrows, 40px circles, border-2, 24px from edges (only show on hover)

**Card (Smaller Browse Card):**
- Width: 300px, border-2 #E5E5E5, rounded-xl
- Image: 16:9, rounded-t-xl
- Content: padding 16px
  - Title: 18px, font-semibold
  - Price: 20px, font-bold + "/day" (14px, gray-600)
  - Location: 14px, gray-600
  - Remove button: "Remove from saved" (12px, gray-500, underline hover)

**Mobile:**
- Shows 1.2 cards (scroll hint)
- Card width: 280px

### Recent Messages Section

**Desktop:**
- Title: "Recent Messages" (28px, font-semibold) + "View All" link (right)
- 48px margin-top, 24px margin-bottom
- White card: border-2 #E5E5E5, rounded-xl
- List: max 5 messages

**Message Row:**
- Height: 80px, padding 16px horizontal
- Border-bottom: 1px #E5E5E5 (last no border)
- Layout: flex row, gap 16px

Content:
- Avatar: 48px circle, left
- Main content (flex-grow):
  - Top row: Supplier name "John Smith" (16px, font-semibold) + timestamp "2h ago" (12px, gray-500, right)
  - Car: "Re: McLaren 720S" (14px, gray-600, 4px margin-top)
  - Preview: "Thanks for your interest in the..." (14px, gray-500, truncate, 4px margin-top)
- Right: Unread badge (if > 0): 20px circle, gold bg, white text, font-bold (12px)
- Hover: background #FAFAFA, cursor pointer

**Mobile:**
- Full-width card
- Same row design, 72px height

### Quick Actions (Desktop Only)

**Bottom-right corner, floating:**
- Two action buttons (stacked, 8px gap):
  1. "Browse Cars" (outline, 44px height, 160px width)
  2. "List Your Car" (gold, 44px height, 160px width)
- 32px from bottom/right edges
- Shadow: shadow-lg

---

## Screen 6: Chat / Messaging

### Layout

**Desktop:**
- Height: calc(100vh - 64px) — full height minus nav
- Two columns: 360px (thread list) + rest (chat window)
- Border between: 1px #E5E5E5

**Mobile:**
- Thread list: full-screen by default
- Chat window: slides in from right (full-screen)
- Back button in chat: returns to thread list

### Thread List Column

**Header:**
- Height: 72px, background white, border-bottom 1px #E5E5E5
- Padding: 0 20px
- Layout:
  - "Messages" (20px, font-semibold, left, vertical center)
  - Search icon button (40px tap target, right, gray-500, hover gold)

**Thread Item:**
- Min-height: 80px, padding 16px
- Border-bottom: 1px #E5E5E5
- Layout: flex row, gap 12px
- Cursor: pointer

Content:
- **Avatar:** 52px circle, border-2 #E5E5E5, left
- **Main content** (flex-grow):
  - Top row: Supplier name (16px, font-semibold) + timestamp (12px, gray-500, right)
  - Car model: "McLaren 720S" (14px, gray-600, 4px margin-top)
  - Last message: "Thanks for reaching out..." (14px, gray-500, truncate, 4px margin-top)
- **Right indicators:**
  - Unread count badge (if > 0): 20px circle, gold bg, white text (12px, font-bold)

**States:**
- Active thread: gold left border (4px), background #FAFAFA
- Hover: background #F5F5F5
- Unread: supplier name is bold (600 weight)

**Empty state:**
- Centered, chat icon (64px, gray-300)
- "No messages yet" (20px, font-light, gray-500)

### Chat Window Column

**Header:**
- Height: 72px, background white, border-bottom 1px #E5E5E5
- Padding: 0 24px
- Layout: flex row, gap 12px, align-center

Content:
- Avatar: 44px circle
- Supplier info:
  - Name: "John Smith" (18px, font-semibold)
  - Car: "McLaren 720S • Beverly Hills, CA" (14px, gray-600, 4px margin-top)
- Right: "View Listing" link (14px, gold, font-semibold, hover underline)

**Message Area:**
- Padding: 24px
- Background: #FAFAFA
- Scrollable (overflow-y: auto)
- Scroll behavior: smooth
- **Date dividers:** "Today", "Yesterday", "October 20" (12px, gray-500, centered, gray-300 line both sides, 32px margin vertical)

**Message Bubble (Received):**
- Max-width: 65%, left-aligned
- Background: white, border-2 #E5E5E5, rounded-xl, padding 12px 16px
- Text: 15px, black, line-height 1.5
- Timestamp: "2:34 PM" (12px, gray-500, 6px margin-top)
- Consecutive messages from same sender: 4px gap (not 16px)

**Message Bubble (Sent):**
- Max-width: 65%, right-aligned
- Background: black, text white, rounded-xl, padding 12px 16px
- Timestamp: 12px, white/60

**Typing Indicator:**
- Same position as received message
- Three dots (8px each, gray-400), animated bounce
- "John is typing..." (12px, gray-500, italic)

**Mobile:**
- Message max-width: 80%
- Padding: 16px

**Input Area (Fixed Bottom):**
- Height: 72px, background white, border-top 1px #E5E5E5
- Padding: 12px 16px
- Layout: flex row, gap 12px

Content:
- **Textarea:**
  - Flex-grow, border-2 #E5E5E5, rounded-lg, padding 12px 16px
  - Min-height: 48px, max-height 120px (auto-expand)
  - Placeholder: "Type a message..." (16px, gray-500)
  - Font: 15px, line-height 1.5
  - No resize handle
- **Send Button:**
  - Size: 48px circle, gold bg, black send-arrow icon (20px)
  - Disabled if empty: gray bg, gray icon, opacity 50%
  - Active: hover opacity 90%, click scale 95%

---

## Screen 7: Supplier Application

### Layout

**Desktop:**
- Max-width: 720px, centered
- Padding: 80px vertical, 24px horizontal
- Background: white (page)

**Mobile:**
- Full-width, padding 48px vertical, 16px horizontal

### Stepper (Progress Indicator)

**Desktop:**
- Margin-bottom: 64px
- Layout: flex row, justify-center, gap 120px

**Step:**
- Flex column, align-center
- **Circle:** 48px, border-2 #E5E5E5, white bg, gray-500 text (20px, font-semibold), flex center
  - Active step: gold bg (#D4AF37), black text, border-2 #D4AF37
  - Completed: black bg, white checkmark icon (24px), border-2 black
- **Label:** "Personal Info" (14px, gray-600, center, 12px margin-top)
  - Active: black, font-semibold
- **Connector line:** Between circles, 100px width, 2px height, #E5E5E5
  - Completed: black

**Mobile:**
- Gap: 40px
- Circle: 40px
- Label: 12px
- Connector: 60px

### Step 1: Personal Information

**Card Container:**
- Background: white, border-2 #E5E5E5, rounded-xl
- Padding: 40px (desktop), 24px (mobile)
- Shadow: 0 2px 8px rgba(0,0,0,0.04)

**Form Header:**
- Title: "Personal Information" (28px, font-semibold)
- Description: "Provide your legal information for identity verification." (16px, gray-600, 12px margin-top)
- 32px margin-bottom

**Fields (20px gap between):**
1. **Full Legal Name:** Input, 52px height
2. **Email Address:** Input, disabled (pre-filled from account), gray background
3. **Phone Number:**
   - Country code dropdown (left component, 80px width) + phone input (flex-grow)
   - Combined in one row, border-2 #E5E5E5
4. **Street Address:** Input
5. **City:** Input (1/2 width) + **State:** Select (1/2 width) — 2-column grid
6. **ZIP Code:** Input (1/2 width) + **Country:** Select (1/2 width)
7. **Date of Birth:** Date picker (calendar icon right, opens date picker modal)
8. **Driver's License Number:** Input, placeholder "D1234567"

**All inputs:**
- Border-2 #E5E5E5, rounded-lg, 52px height, padding 0 16px
- Font: 16px, medium
- Placeholder: gray-500
- Label: 14px, font-semibold, gray-700, 8px margin-bottom

**Navigation Buttons:**
- 40px margin-top
- Layout: flex row, space-between
- "Save & Exit" button: outline, gray text, 48px height, 160px width
- "Continue" button: gold bg, black text, 48px height, 180px width, font-semibold

### Step 2: Identity Verification

**Form Header:**
- Same design as Step 1
- Title: "Verify Your Identity"
- Description: "Upload clear photos of your government-issued ID. All corners must be visible."

**Upload Areas (2 areas, 24px gap):**

**Each Upload Card:**
- Border: 2px dashed #E5E5E5, rounded-xl
- Height: 240px (desktop), 200px (mobile)
- Background: #FAFAFA, hover #F5F5F5
- Transition: all 200ms

**Empty state:**
- Centered content:
  - Cloud upload icon (48px, gray-400)
  - "Click to upload or drag here" (16px, gray-600, 12px margin-top)
  - "JPG or PNG, max 5MB" (12px, gray-500, 8px margin-top)

**Uploaded state:**
- Image preview: rounded-xl, object-cover, full width/height
- Overlay on hover: black/40 with actions
- Remove button: top-right, 36px circle, red-600 bg, white X icon, 40px tap target
- File info: bottom overlay, black/60 bg, white text (12px), filename + size

**Areas:**
1. "Front of ID" label (14px, font-semibold, 12px margin-bottom)
2. "Back of ID" label

**Requirements List (below uploads):**
- Background: gold/5, border-l-4 gold, rounded-r-xl, padding 16px
- Icon: info circle (20px, gold)
- Title: "Requirements" (14px, font-semibold, 8px margin-bottom)
- List: 12px, gray-700, 6px gap
  - "• Clear photo with all corners visible"
  - "• No glare or reflections"
  - "• Text must be readable"
  - "• Accepted: Driver's License, Passport, National ID"

### Step 3: Vehicle Ownership

**Form Header:**
- Title: "Prove Vehicle Ownership"
- Description: "Upload documents showing you own or have authorization to rent this vehicle."

**Upload Areas (3 areas, 20px gap):**
1. **Vehicle Registration:**
   - Same upload card design as Step 2
   - Height: 200px
2. **Insurance Certificate:**
   - Same design
3. **Vehicle Photos (Optional but Recommended):**
   - Multi-upload area
   - Grid: 3 columns (desktop), 2 (mobile)
   - Each: 120px × 120px, dashed border, rounded-lg
   - After upload: thumbnail with remove X
   - Max 8 photos
   - Helper: "Add photos of your vehicle to speed up approval" (12px, gray-600)

**Submit Section:**
- 48px margin-top
- Agreement checkbox:
  - "I confirm all information is accurate and I have authorization to list this vehicle." (14px)
  - 24px margin-bottom
- **Submit Button:**
  - Full-width, gold bg, black text, 56px height, rounded-lg, font-semibold
  - Text: "Submit Application"
  - Loading state: spinner + "Submitting..."
- **Disclaimer:** "By submitting, you agree to Cartique's Supplier Terms and Privacy Policy" (12px, gray-500, center, 16px margin-top)

---

## Screen 8: Supplier Dashboard

### Layout Structure

**Desktop:**
- Sidebar: 260px width, fixed left, full height, background white, border-right 1px #E5E5E5
- Main content: calc(100% - 260px) width, padding 48px, background #FAFAFA
- Top nav: still shows (supplier nav variant)

**Mobile:**
- No sidebar
- Bottom navigation bar: 60px height, 5 icons, white bg, border-top 1px #E5E5E5, fixed bottom
- Main content: full-width, padding 24px, margin-bottom 60px

### Sidebar (Desktop)

**Top:**
- Logo: 36px height, 24px margin all sides
- Divider: 1px #E5E5E5

**Navigation Items:**
- Height: 48px each, padding 0 20px
- Layout: flex row, gap 12px, align-center
- Icon: 20px, gray-600
- Text: 14px, font-medium, gray-700
- Hover: background #F5F5F5, icon/text gold
- Active: background gold/10, icon/text gold, border-left 4px gold

**Items:**
1. Dashboard (home icon)
2. My Listings (car icon) + count badge "8" (gray-200 bg, 12px, right)
3. Messages (chat icon) + unread badge "3" (gold bg, white text)
4. Analytics (chart icon)
5. Settings (cog icon)

**Bottom (fixed):**
- Border-top: 1px #E5E5E5, padding 16px
- Layout: flex row, gap 12px
- Avatar: 40px circle
- Name: "Alex Johnson" (14px, font-medium)
- Dropdown chevron: 16px, right
- Hover: background #F5F5F5
- Menu: "View Profile", "Settings", "Sign Out" (dropdown above)

### Dashboard Content

**Header:**
- "Dashboard" (40px, font-light, black)
- Right: Date range selector
  - Button: "Last 30 days" with calendar icon + chevron
  - Border-2 #E5E5E5, rounded-lg, 40px height, 180px width
  - Dropdown: preset ranges (Today, Last 7 days, Last 30 days, Last 90 days, Custom)
- 40px margin-bottom

**KPI Cards:**
- Grid: 4 columns (desktop), 2 (tablet), 1 (mobile)
- Gap: 24px
- 48px margin-bottom

**Each KPI Card:**
- Background: white, border-2 #E5E5E5, rounded-xl
- Padding: 24px
- Hover: shadow-md

Content:
- Icon: 36px circle, gold/10 bg, gold icon (20px)
- Value: 40px, font-semibold, 16px margin-top
- Label: 14px, gray-600, 6px margin-top
- Change indicator:
  - "+12% vs last month" (12px, green-600, up-arrow icon 10px)
  - OR "-5%" (red-600, down-arrow)
  - 8px margin-top

**Cards:**
1. Active Listings: "8"
2. Total Views: "1,247"
3. Messages: "23"
4. Earnings (30 days): "$12,450"

### Listings Table

**Header:**
- "Your Listings" (28px, font-semibold, left)
- "+ Create Listing" button (gold, 44px height, right, font-semibold)
- 48px margin-top, 24px margin-bottom

**Table (Desktop):**
- White card, border-2 #E5E5E5, rounded-xl
- Table header: background #FAFAFA, 48px height, border-bottom 2px #E5E5E5
  - Columns: Vehicle (40% width), Price (15%), Status (15%), Views (15%), Actions (15%)
  - Font: 12px, font-semibold, gray-700, uppercase, letter-spacing 0.05em

**Table Row:**
- Height: 64px, border-bottom 1px #E5E5E5, padding 0 24px
- Hover: background #FAFAFA

Column content:
- **Vehicle:**
  - Thumbnail (48px square, rounded-lg, border-2 #E5E5E5, object-cover)
  - Name: "McLaren 720S" (14px, font-medium, 12px margin-left)
  - Year/location: "2023 • Beverly Hills" (12px, gray-600, 4px margin-top)
- **Price:** "$1,495/day" (14px, font-semibold)
- **Status:** Badge component
  - "Active" (green bg/10, green text, green border)
  - "Draft" (gray bg/10, gray text)
  - "Paused" (yellow bg/10, yellow text)
  - "Under Review" (blue bg/10, blue text)
  - Font: 12px, font-semibold, padding 4px 10px, rounded-lg
- **Views:** "143" (14px, font-medium)
- **Actions:**
  - Edit icon (20px, gray-500, hover gold, 36px tap target)
  - 3-dot menu icon (20px, gray-500, hover gold, 36px tap target)
  - Dropdown: "Edit", "Pause", "View Insights", "Delete" (red text)

**Mobile (Cards):**
- Each listing: card (border-2, rounded-xl, padding 16px)
- Layout: flex row
- Thumbnail: 80px square (left)
- Content: name, price, status badge, views
- Actions: 3-dot menu (top-right)

### Recent Activity Feed

**Desktop:**
- Title: "Recent Activity" (24px, font-semibold, 48px margin-top, 24px margin-bottom)
- White card, border-2, rounded-xl, padding 24px
- List: max 8 items, "View All" link at bottom

**Activity Item:**
- Height: 56px, border-bottom 1px #E5E5E5 (last no border)
- Layout: flex row, gap 16px, align-center

Content:
- Icon: 32px circle, background gold/10, gold icon (view, message, star)
- Text: "New view on McLaren 720S" (14px, gray-700)
- Timestamp: "2 hours ago" (12px, gray-500, right)

---

## Screen 9: Create / Edit Listing

### Layout

**Desktop:**
- Max-width: 960px, centered
- Padding: 64px vertical, 48px horizontal
- Background: white

**Mobile:**
- Full-width, padding 32px vertical, 16px horizontal

### Page Header

**Desktop:**
- "Create New Listing" OR "Edit Listing" (40px, font-light)
- "Save as Draft" link (16px, gold, right-aligned, font-semibold)
- Divider: 1px #E5E5E5, 32px margin-bottom

**Mobile:**
- Sticky header: white bg, border-bottom 1px #E5E5E5
- Back arrow (left) + title (20px, center) + "Save" link (right, gold)
- Height: 56px

### Form Sections

**Section Card Design:**
- Background: white, border-2 #E5E5E5, rounded-xl
- Padding: 32px (desktop), 24px (mobile)
- Margin-bottom: 24px

**Section 1: Basic Information**

**Title:** "Basic Information" (24px, font-semibold, 24px margin-bottom)

**Fields (20px gap):**
1. **Listing Title:**
   - Input, full-width
   - Placeholder: "e.g., 2023 McLaren 720S Performance - Beverly Hills"
   - Character counter: "45 / 80" (12px, gray-500, right-aligned below input)
2. **Make:** Select dropdown, options: Ferrari, Lamborghini, McLaren, Porsche, Aston Martin, Bentley, Rolls-Royce, etc.
3. **Model:** Input with autocomplete (based on make selection)
4. **Year:** Number input, min 2000, max 2025, 140px width
5. **Price per Day:**
   - Input, "$" prefix (left, inside input, 16px, gray-600)
   - Placeholder: "1,495"
   - Width: 200px
   - Helper: "Our suggested price: $1,450-$1,600" (12px, gray-600, 8px margin-top)
6. **Location:**
   - Input with Google Places autocomplete
   - Placeholder: "Street address, city, state"
   - Location icon (right, 20px)
7. **Mileage:**
   - Number input, "miles" suffix (right, inside input)
   - Width: 200px

**All inputs:** border-2 #E5E5E5, rounded-lg, 52px height, 16px font-medium, focus gold border

**Section 2: Specifications**

**Title:** "Specifications" (24px, font-semibold, 24px margin-bottom)

**Grid:** 2 columns (desktop), 1 column (mobile), gap 20px

**Fields:**
- Engine (Input: "4.0L Twin-Turbo V8")
- Horsepower (Number input + "HP" suffix)
- Torque (Number + "lb-ft")
- 0-60 Time (Number + "seconds")
- Top Speed (Number + "mph")
- Transmission (Select: Manual, Automatic, Dual-Clutch, etc.)
- Drivetrain (Select: RWD, AWD, FWD)
- Curb Weight (Number + "lbs")
- Fuel Type (Select: Gasoline, Diesel, Electric, Hybrid)
- Seating Capacity (Number: 2-8)

**Section 3: Features & Options**

**Title:** "Features & Options" (24px, font-semibold, 24px margin-bottom)

**Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile), gap 12px

**Checkbox items (44px height each):**
- Carbon Fiber Trim
- Track Pack
- Sport Exhaust
- Active Exhaust
- Ceramic Brakes
- Launch Control
- Adaptive Suspension
- Premium Audio
- Leather Interior
- Alcantara
- Heated Seats
- Ventilated Seats
- Navigation
- Backup Camera
- 360° Camera
- Parking Sensors
- Keyless Entry
- Remote Start

**Checkbox design:** 20px, rounded, border-2, label 14px font-medium

**Section 4: Description**

**Title:** "Description" (24px, font-semibold, 24px margin-bottom)

**Helper text:** "Describe the vehicle, its condition, special features, and what makes it unique. Be specific." (14px, gray-600, 16px margin-bottom)

**Textarea:**
- Width: full
- Height: 200px (8 rows)
- Border-2 #E5E5E5, rounded-lg, padding 16px
- Font: 16px, line-height 1.6
- Character count: "245 / 1000" (12px, gray-500, right-aligned below, 8px margin-top)
- Placeholder: "Example: This 2023 McLaren 720S has been meticulously maintained with all service records. Carbon fiber monocoque, dihedral doors, and Track Pack installed. Never tracked, garage-kept, non-smoker."

**Section 5: Photos**

**Title:** "Photos" (24px, font-semibold, 24px margin-bottom)

**Helper:** "Add at least 6 high-quality photos. First photo will be the cover image." (14px, gray-600, 16px margin-bottom)

**Upload Grid:**
- 4 columns (desktop), 3 (tablet), 2 (mobile)
- Gap: 16px
- Aspect ratio: 4:3 for all slots

**Upload Slot (Empty):**
- Border: 2px dashed #E5E5E5, rounded-xl
- Background: #FAFAFA, hover #F5F5F5
- Centered: camera icon (32px, gray-400) + "Add Photo" (14px, gray-600, 12px margin-top)
- Drag-and-drop active state: border gold, background gold/5

**Upload Slot (Filled):**
- Image: object-cover, rounded-xl
- Overlay on hover: black/40
- **Remove button:** top-right, 32px circle, red bg, white X, 36px tap target
- **Reorder handle:** bottom-right, 6-dot icon (16px, white, 32px tap target), draggable
- **Cover badge:** "COVER" (first photo only), top-left, gold bg, black text, 10px font-bold, padding 4px 8px, rounded-lg

**Progress indicator (while uploading):**
- Overlay: white/90 bg
- Centered: spinner (24px, gold) + "Uploading..." (12px, gray-700)
- Progress bar: bottom, 4px height, gold, animated

**Bottom Actions:**
- Margin-top: 48px
- Layout: flex row, space-between
- "Save as Draft" button: outline, gray text, 48px height, 180px width
- "Publish Listing" button: gold bg, black text, 48px height, 200px width, font-semibold

**Mobile:**
- Actions fixed bottom: white bg, border-top 1px, padding 16px
- Two buttons side-by-side: "Draft" (outline, flex-1) + "Publish" (gold, flex-1), gap 12px

---

## Screen 10: Application Status

### Layout

**Desktop:**
- Centered vertically and horizontally
- Max-width: 640px
- Padding: 64px
- Background: #FAFAFA page with subtle noise texture

**Mobile:**
- Padding: 32px horizontal, full-height centered

### Status Card

**Container:**
- Background: white, rounded-xl, border-2 #E5E5E5 (or gold if approved)
- Padding: 56px (desktop), 40px (mobile)
- Shadow: 0 8px 24px rgba(0,0,0,0.08)
- Text-align: center

**Pending Status:**

1. **Icon:** Clock icon, 72px, gold color, 24px margin-bottom
2. **Badge:** "Under Review"
   - Gold bg/10, gold text, border gold/30, rounded-lg
   - 14px font-semibold, padding 8px 16px
   - Inline-block, 16px margin-bottom
3. **Title:** "Application Submitted" (36px, font-light, 16px margin-top)
4. **Description:** "We're reviewing your application. You'll typically hear from us within 2-3 business days. Check your email for updates."
   - 16px, gray-600, line-height 1.6, max-width 480px, centered
   - 24px margin-top
5. **Submitted Date:** "Submitted on October 20, 2025 at 2:34 PM" (14px, gray-500, 32px margin-top)
6. **Divider:** 1px #E5E5E5, 32px margin vertical
7. **Details Summary:**
   - Text-align: left
   - Grid: 2 columns, gap 16px vertical, 24px horizontal
   - Each row: label (12px, gray-600, uppercase) + value (14px, font-medium, black)
   - Rows:
     - Name: "Alex Johnson"
     - Email: "alex@cartique.com"
     - Phone: "+1 (310) 555-0123"
     - License: "D1234567"
     - Documents: "3 uploaded" (green text)
8. **Cancel Button:**
   - Outline, 48px height, 200px width, gray text
   - 32px margin-top
   - Modal confirmation on click

**Approved Status:**

1. **Icon:** Checkmark in circle, 72px, green-600
2. **Badge:** "Approved" (green bg/10, green text, green border)
3. **Title:** "Welcome to Cartique!" (36px, font-light)
4. **Description:** "Your application has been approved. You can now create your first vehicle listing and start earning."
5. **Confetti animation:** Subtle particles from top (optional, 2 seconds)
6. **Button:** "Create Your First Listing"
   - Gold bg, black text, 56px height, 280px width, font-semibold
   - 32px margin-top
7. **Link:** "View Supplier Dashboard" (14px, gray-600, underline hover, 16px margin-top)

**Rejected Status:**

1. **Icon:** X in circle, 72px, red-600
2. **Badge:** "Not Approved" (red bg/10, red text, red border)
3. **Title:** "Application Declined" (36px, font-light)
4. **Reason box:**
   - Background: red-50, border-l-4 red-600, rounded-r-xl, padding 20px
   - 24px margin-top
   - Icon: alert triangle (20px, red-600, left)
   - Title: "Reason for Decline" (14px, font-semibold, red-900)
   - Text: Specific reason from admin (14px, red-800, 8px margin-top)
   - Example: "Driver's license photo was unclear. Please upload a new photo showing all four corners."
5. **Button:** "Update & Resubmit"
   - Black bg, white text, 56px height, 240px width, font-semibold
   - 32px margin-top
6. **Link:** "Contact Support" (14px, gold, underline hover, 16px margin-top)

---

## Screen 11: Admin Dashboard

### Layout

**Desktop:**
- Sidebar: 260px, background #1A1A1A (dark), white text, fixed left
- Main content: calc(100% - 260px), background #FAFAFA, padding 48px
- Full height

**Mobile:**
- Top app bar: dark, 56px, menu icon + title + logout
- Drawer: slides from left
- Content: full-width

### Dark Sidebar

**Logo:** White version, 36px height, 24px margin

**Navigation (same structure as supplier sidebar):**
- Items: 48px height, white/60 text
- Hover: white text, white/10 background
- Active: white text, gold/20 background, border-left 4px gold

**Items:**
1. Overview (home icon)
2. Suppliers (users icon) + count badge "12" (gold bg, black text, 16px, font-bold)
3. Listings (car icon)
4. Users (user icon)
5. Flagged Content (alert icon) + count "3" (red bg, white text)
6. Settings (cog icon)

**Bottom:**
- Border-top: 1px white/20
- Admin profile: avatar + name + "Admin" role badge
- Logout button

### Overview Tab

**Header:**
- "Admin Dashboard" (40px, font-light)
- Date range: "October 1-23, 2025" (14px, gray-600, 8px margin-top)
- 40px margin-bottom

**KPI Row:**
- Grid: 4 columns, gap 24px

**Cards:**
1. Pending Suppliers: "12" + yellow badge icon
2. Active Listings: "287"
3. Total Users: "1,423" + "+47 this week" (green)
4. Flagged Items: "3" + red badge icon

**Card design:** Same as supplier dashboard KPIs

### Pending Applications Table

**Header:**
- "Pending Supplier Applications" (28px, font-semibold)
- "View All (12)" link (right, gold)
- 48px margin-top, 24px margin-bottom

**Table (Desktop):**
- White card, border-2 #E5E5E5, rounded-xl
- Columns: Applicant (30%), Email (20%), Submitted (15%), ID Status (15%), Actions (20%)

**Row design:**
- Height: 72px, padding 0 24px
- Border-bottom: 1px #E5E5E5
- Hover: background #FAFAFA

Content:
- **Applicant:** Avatar (40px) + name (14px, font-medium)
- **Email:** "alex@email.com" (14px, gray-600)
- **Submitted:** "2 days ago" (14px, gray-600)
- **ID Status:**
  - "Verified" badge (green)
  - "Pending" badge (yellow)
  - "Rejected" badge (red)
  - Font: 12px, semibold, padding 4px 10px
- **Actions:**
  - "Approve" button (green-600 bg, white text, 36px height, 90px width, rounded-lg)
  - "Reject" button (red outline, 36px height, 80px width)
  - Gap: 8px
  - Both: font-semibold, 14px

**Click row:** Opens detail modal (see Modals section)

**Mobile:**
- Card layout for each application
- Actions: full-width buttons stacked

### Flagged Content Section

**Title:** "Flagged Content" (28px, font-semibold, 64px margin-top, 24px margin-bottom)

**List:** White card, border-2, rounded-xl, padding 24px

**Flag Item:**
- Min-height: 80px, padding 16px, border-bottom 1px #E5E5E5
- Layout: flex row, gap 16px

Content:
- **Thumbnail:** 64px square, rounded-lg, object-cover (of flagged listing)
- **Main content:**
  - Listing title: "McLaren 720S" (16px, font-semibold)
  - Reason: "Inappropriate content reported" (14px, red-600, 4px margin-top)
  - Reporter: "Reported by user_id_123" (12px, gray-500)
  - Timestamp: "3 hours ago" (12px, gray-500)
- **Actions:**
  - "Review" button (outline, 40px height, 100px width)
  - 3-dot menu: "Dismiss", "Remove Listing", "Ban Supplier"

---

## Modals & Overlays

### Login Modal (if triggered from any page)

**Overlay:** Full-screen, black/50 backdrop, backdrop-blur-sm

**Modal:**
- 480px width (desktop), calc(100% - 32px) (mobile)
- Background: white, rounded-xl, border-2 #E5E5E5
- Padding: 40px
- Shadow: 0 16px 48px rgba(0,0,0,0.2)
- Close X: top-right, 40px tap target, gray-500, hover gold

**Content:** (Same as Auth screen card content)

### Message Supplier Modal (Quick Message)

**Size:** 560px width, auto height

**Header:**
- Flex row, space-between
- Left: Supplier avatar (40px) + name (18px, font-semibold) + car model (14px, gray-600)
- Right: Close X

**Content:**
- 24px padding
- Pre-filled message: "Hi, I'm interested in renting your McLaren 720S from Oct 25-28. Is it available?"
  - Editable textarea, 4 rows, border-2, rounded-lg
- 24px margin-top

**Actions:**
- "Send Message" button (gold, full-width, 52px height)
- "Cancel" link (center, 14px, gray-600, 12px margin-top)

### Booking Confirmation Modal

**Size:** 560px width

**Header:**
- Confetti animation (top corners, subtle, 3 seconds)
- Checkmark icon: 64px, green-600, centered, 24px margin-bottom
- Title: "Booking Confirmed!" (32px, font-semibold, center)

**Content:**
- 32px padding
- Summary card: background #FAFAFA, rounded-xl, padding 24px, 24px margin-top
  - Car: "McLaren 720S" (20px, font-semibold)
  - Dates: "Oct 25 - Oct 28, 2025" (16px, gray-700)
  - Location: "Beverly Hills, CA" (14px, gray-600)
  - Divider: 1px, 16px margin vertical
  - Price breakdown (14px, gray-700):
    - "$1,495 × 3 days = $4,485"
    - "Service fee = $149"
    - "Insurance = $89"
  - Divider
  - Total: 18px, font-bold
- Confirmation number: "Booking #CTQ-47291" (12px, gray-600, mono font, 16px margin-top)

**Actions:**
- "View Booking Details" (gold, full-width, 52px height, 24px margin-top)
- "Done" (outline, full-width, 48px height, 12px margin-top)

### Delete Listing Confirmation

**Size:** 440px width

**Content:**
- Icon: alert triangle, 56px, red-600, centered
- Title: "Delete Listing?" (28px, font-semibold, center, 16px margin-top)
- Description: "This will permanently delete 'McLaren 720S' from your listings. This action cannot be undone." (16px, gray-600, center, line-height 1.6, 16px margin-top)

**Actions (32px margin-top):**
- "Cancel" (outline, 48px height, flex-1)
- "Delete Listing" (red-600 bg, white text, 48px height, flex-1)
- Gap: 12px

### Filter Apply Indicator (Mobile)

**Position:** Fixed bottom-right, 16px from edges, above nav if present

**Design:**
- 56px circle, gold bg, black text
- Text: "12" (count of active filters), 20px font-bold
- Shadow: 0 4px 16px rgba(212,175,55,0.4)
- Pulse animation: scale 1 to 1.05, 2s infinite
- Tap: applies filters and closes drawer

### Image Upload Progress Toast

**Position:** Bottom-right (desktop), top-center (mobile), fixed

**Design:**
- Width: 360px (desktop), calc(100% - 32px) (mobile)
- Background: white, border-2 #E5E5E5, rounded-xl
- Padding: 16px
- Shadow: 0 8px 24px rgba(0,0,0,0.12)

**Content:**
- Layout: flex row, gap 12px
- Icon: upload cloud (24px, gold, left)
- Text: "Uploading 3 of 8 photos" (14px, font-medium)
- Progress: "37%" (14px, font-semibold, right)
- Progress bar: full-width, 6px height, rounded-lg, gold fill, #E5E5E5 bg, 12px margin-top

**Close button:** X (top-right, 32px tap target)

---

## Responsive Breakpoints

| Breakpoint | Range | Layout |
|------------|-------|--------|
| Mobile | 0-767px | 1 column, bottom nav, full-width cards |
| Tablet | 768-1023px | 2 columns, adapted spacing |
| Desktop | 1024-1439px | Full layout, max-width 1280px |
| Large Desktop | 1440px+ | Full layout, max-width 1440px |

### Mobile-Specific Patterns
- Bottom sheets replace dropdowns (filter, sort, date picker)
- Bottom nav bar (60px, 5 icons, white bg)
- Hamburger menus slide from right
- Swipe gestures (carousels, image galleries)
- Tap targets: 48px minimum
- Sticky headers with back buttons
- Collapsed filters (show as chips with count)
- Fixed CTAs at bottom (Reserve, Apply, etc.)

### Desktop-Specific Patterns
- Hover states (shadows, borders, backgrounds)
- Sticky sidebars (filters, booking cards)
- Tooltips on icon-only buttons
- Keyboard shortcuts (ESC, arrows, Enter)
- Multi-column grids (3-col, 4-col)
- Dropdown menus (not sheets)

---

## Component States

### Buttons
- **Default:** Solid color, defined border/bg
- **Hover:** Opacity 90% (filled), background shift (outline)
- **Active:** Scale 98%, 100ms duration
- **Focus:** Ring 2px gold/20, 2px offset
- **Disabled:** Opacity 50%, cursor not-allowed, no hover
- **Loading:** Spinner replaces text, min-width maintained, disabled

### Form Inputs
- **Default:** Border-2 #E5E5E5, gray placeholder
- **Focus:** Border #D4AF37, ring 2px gold/20
- **Filled:** Border black/20 (subtle change)
- **Error:** Border red-600, ring red/20, error text below (12px, red-600, alert icon)
- **Disabled:** Background gray-100, border gray-200, cursor not-allowed
- **Success:** Border green-600, checkmark icon right (20px)

### Cards (Browse/Search)
- **Default:** Border-2 #E5E5E5, no shadow
- **Hover:** Shadow-lg, translateY(-4px), border gold/30, 200ms
- **Active/Selected:** Border-2 gold, shadow-md, checkmark overlay (top-right)
- **Loading:** Skeleton (shimmer animation, gray-200 bars)

### Links
- **Default:** Gold (#D4AF37), no underline
- **Hover:** Underline, darker gold (#B8941F)
- **Active:** Underline
- **Focus:** Ring 2px gold/20, rounded-sm (4px)

---

## Empty States

### No Saved Cars (Customer Dashboard)
- Icon: Heart outline, 64px, gray-300
- Title: "No saved cars yet" (24px, font-light, gray-600)
- Description: "Start browsing and save your favorites to see them here." (16px, gray-500, 16px margin-top, max-width 320px, center)
- Button: "Browse Cars" (gold, 48px height, 160px width, 24px margin-top)

### No Search Results
- Centered in results grid area
- Icon: Search with X, 72px, gray-300
- Title: "No cars found" (28px, font-light, gray-600, 16px margin-top)
- Description: "Try adjusting your filters or search location." (16px, gray-500)
- Button: "Clear All Filters" (outline, 48px height, 24px margin-top)

### No Listings (Supplier Dashboard)
- Icon: Car with plus, 72px, gray-300
- Title: "You haven't created any listings" (28px, font-light, gray-600)
- Description: "List your first exotic vehicle and start earning." (16px, gray-500, 16px margin-top)
- Button: "Create Listing" (gold, 52px height, 200px width, 24px margin-top)

### No Messages
- Icon: MessageCircle outline, 64px, gray-300
- Title: "No messages yet" (24px, font-light, gray-600)
- Description: "Your conversations will appear here." (16px, gray-500, 12px margin-top)

---

## Loading States

### Skeleton Cards (Browse/Search)
- Same dimensions as real cards
- Animated gradient: linear-gradient(90deg, #F5F5F5 0%, #FFFFFF 50%, #F5F5F5 100%)
- Animation: 1.5s infinite, shimmer left-to-right
- Image area: solid #F5F5F5, rounded-t-xl
- Text lines: rounded bars (4px radius), #F5F5F5, varying widths (100%, 60%, 40%)
- 16px gap between lines

### Page Spinner (Full-page loading)
- Centered: vertical and horizontal
- Spinner: 48px, gold color, rotating animation (1s linear infinite)
- Text: "Loading..." (14px, gray-600, 16px margin-top)
- Background: white page
- Fade-in after 300ms (avoid flash on fast loads)

### Button Loading
- Spinner: 20px, same color as text, centered
- Button text: hidden (opacity 0, but keeps width)
- Min-width: set to prevent button resize
- Disabled state applied

### Lazy Load Images
- Blur placeholder: base64 tiny image, 20px blur filter
- Fade-in: 300ms ease-in when loaded
- Broken image fallback:
  - Background: #F5F5F5
  - Icon: camera with slash (32px, gray-400, centered)
  - Text: "Image unavailable" (12px, gray-500, 8px margin-top)

---

## Error Handling

### Form Validation

**Real-time validation:**
- onBlur (when field loses focus)
- Show error immediately

**Error state:**
- Border: 2px red-600
- Ring: 2px red-600/20
- Error message: 12px, red-600, 6px margin-top
  - Icon: alert triangle (14px, left)
  - Text: "Email address is required" or "Invalid format"

**Success state (after error cleared):**
- Border: 2px green-600
- Checkmark icon: right side of input (20px, green-600)
- No success message (just visual indicator)

### Toast Notifications

**Position:**
- Desktop: bottom-right, 24px from edges
- Mobile: top-center, 16px from top

**Design:**
- Width: 360px (desktop), calc(100% - 32px) (mobile)
- Background: white, border-2, rounded-xl, padding 16px
- Shadow: 0 8px 24px rgba(0,0,0,0.15)
- Auto-dismiss: 5 seconds
- Swipe to dismiss (mobile)

**Variants:**
- **Success:** green border, green icon (checkmark circle, 24px), green/10 bg-tint
- **Error:** red border, red icon (X circle), red/10 bg-tint
- **Warning:** yellow border, yellow icon (alert triangle), yellow/10 bg-tint
- **Info:** blue border, blue icon (info circle), blue/10 bg-tint

**Content:**
- Icon: left, 24px
- Text: 14px, font-medium, black (or variant color for title)
- Description: 12px, gray-600 (if multi-line)
- Close X: right, 32px tap target, gray-500

**Example:** "Listing published successfully" (success) or "Failed to upload image. Try again." (error)

### 404 Error Page

**Layout:** Centered vertically, max-width 560px

**Content:**
- "404" (120px, font-light, gray-300, letter-spacing -0.03em)
- Title: "Page Not Found" (48px, font-light, 24px margin-top)
- Description: "The page you're looking for doesn't exist or has been moved." (18px, gray-600, 16px margin-top)
- Button: "Back to Home" (gold, 52px height, 200px width, 32px margin-top)

### 500 Error Page
- Same layout
- "500" code
- Title: "Something Went Wrong"
- Description: "We're working on fixing this. Please try again in a few minutes."
- Button: "Reload Page"

---

## Accessibility

### Keyboard Navigation
- Tab order: top to bottom, left to right
- Focus ring: 2px gold (#D4AF37), 2px offset, rounded-sm
- Skip link: "Skip to main content" (visible on first tab, jumps focus to main)
- ESC: closes modals, drawers, dropdowns
- Enter: submits forms, activates buttons
- Space: toggles checkboxes, switches
- Arrow keys: navigate carousels, sliders, radio groups
- Trapped focus in modals (can't tab outside)

### Screen Readers
- All images: descriptive alt text ("McLaren 720S exterior, front 3/4 view, Volcano Orange")
- Icon-only buttons: aria-label ("Save to favorites", "Close modal")
- Dynamic content: aria-live regions (toasts, loading indicators)
- Form errors: aria-describedby linking error messages
- Semantic HTML: nav, main, article, aside, section, footer
- Headings: h1 → h2 → h3 proper hierarchy (no skipping levels)

### Color Contrast (WCAG AA)
- Black on white: 21:1 ✓
- Gray-500 (#737373) on white: 4.6:1 ✓
- Gold (#D4AF37) on white: 3.0:1 (large text only, 18px+)
- Gold on black: 5.8:1 ✓
- White on black: 21:1 ✓

### Touch Targets
- Minimum: 44px × 44px (WCAG 2.1 AA)
- Preferred: 48px × 48px
- Critical actions (Reserve, Submit): 52-56px
- Spacing between adjacent targets: 8px minimum

---

## Microinteractions

### Card Hover (Browse)
- Duration: 200ms
- Transform: translateY(-4px)
- Shadow: md → lg
- Border: #E5E5E5 → #D4AF37/30
- Cursor: pointer

### Heart Save
- Click: scale to 1.2, then 1.0 (total 300ms)
- Icon: outline → filled
- Color: gray → red (if saved) or red → gray (if unsaved)
- Optional: 6 mini hearts particle burst, fade out radially (subtle, 500ms)

### Button Click
- Active state: scale 0.98, 100ms ease-out
- Release: scale 1.0, 150ms ease-in-out
- Ripple: circle expands from click point, opacity 0.2 → 0, 400ms (optional)

### Tab Switch
- Previous tab: fade-out 150ms
- New tab: fade-in 200ms (starts 50ms after previous fades)
- Active indicator: slide from previous position (200ms ease-in-out)
- Content: crossfade, min-height prevents layout shift

### Success Checkmark (Forms, Confirmations)
- SVG stroke animation: draw from 0 to full (600ms)
- Scale: 0.8 → 1.0 with bounce (elastic easing)
- Color: green-600
- Appears with 100ms delay after success

### Toast Slide-In
- From: translateY(100%) and opacity 0
- To: translateY(0) and opacity 1
- Duration: 300ms ease-out
- Slide-out: reverse, 250ms

---

## Performance & Optimization

### Image Optimization
- Format: WebP with JPG fallback
- Sizes:
  - Thumbnails: 400px
  - Cards: 800px
  - Detail: 1920px
  - Retina: 2x versions
- Lazy loading: below fold images load on scroll
- Blur placeholder: 10px blur, base64 inline (< 1KB)
- CDN: Cloudflare Images or Imgix for transforms

### Code Splitting
- Route-based: Each screen separate chunk
- Modal lazy load: Import only when opened
- Heavy components: Carousel, Map (lazy)

### Font Loading
- Rubik: preload weights 300, 400, 600
- Font-display: swap (show fallback immediately)
- Subset: Latin only (reduce size)
- WOFF2 format

### Target Metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## Animation Timing

- **Instant:** 100ms — Button active states
- **Fast:** 150ms — Hover effects
- **Default:** 200ms — Most transitions
- **Smooth:** 300ms — Modals, drawers, toasts
- **Slow:** 400ms — Page transitions, carousels
- **Max:** 500ms — Never exceed (feels sluggish)

**Easing:**
- ease-out: Entrances (toasts, modals appearing)
- ease-in: Exits (dismissing, closing)
- ease-in-out: Transforms (scales, translates)
- Elastic: Success states (checkmarks, confirmations)

---

## Design Tokens Summary

### Colors
```
Black: #000000
White: #FFFFFF
Charcoal: #1A1A1A
Luxe Gold: #D4AF37
Gold Dark: #B8941F
Gray 50: #FAFAFA
Gray 100: #F5F5F5
Gray 200: #E5E5E5
Gray 500: #737373
Gray 700: #404040
Red: #DC2626 (red-600)
Green: #16A34A (green-600)
Blue: #2563EB (blue-600)
Yellow: #CA8A04 (yellow-600)
```

### Border Radius
```
None: 0px (rounded-none)
Small: 4px (rounded)
Medium: 8px (rounded-lg)
Large: 12px (rounded-xl)
```

### Spacing Scale (8px base)
```
1: 8px
2: 16px
3: 24px
4: 32px
6: 48px
8: 64px
12: 96px
```

### Shadows
```
sm: 0 1px 2px rgba(0,0,0,0.05)
md: 0 4px 8px rgba(0,0,0,0.06)
lg: 0 8px 16px rgba(0,0,0,0.08)
xl: 0 12px 24px rgba(0,0,0,0.10)
2xl: 0 16px 48px rgba(0,0,0,0.12)
```

### Typography (Rubik)
```
Display: 72px / 300 / 1.1 / -0.02em
H1: 48px / 300 / 1.2 / -0.01em
H2: 36px / 400 / 1.2 / -0.01em
H3: 28px / 600 / 1.3 / 0em
H4: 24px / 600 / 1.3 / 0em
Body-lg: 18px / 400 / 1.6 / 0em
Body: 16px / 400 / 1.6 / 0em
Small: 14px / 500 / 1.5 / 0em
XSmall: 12px / 600 / 1.4 / 0em
```

---

## Implementation Notes

1. **All measurements exact** — Use these pixel values directly (translate to Tailwind classes)
2. **No arbitrary values** — Only use defined colors, spacing, radius from system
3. **Rubik font required** — Fallback: -apple-system, BlinkMacSystemFont, sans-serif
4. **Images require optimization** — WebP format, lazy loading, blur placeholders
5. **Focus states mandatory** — Every interactive element must have visible focus ring
6. **Mobile-first approach** — Design mobile, enhance for desktop (not vice versa)
7. **Animations optional** — Can implement without animations first, add polish later
8. **Dark mode defined** — All colors have dark equivalents, but can ship light-only initially
9. **Print styles not needed** — Web-only platform
10. **Browser support** — Modern browsers only (Chrome, Safari, Firefox, Edge — last 2 versions)

---

## Conclusion

This specification provides complete visual design requirements for Cartique's 11 core screens, all modals, responsive behaviors, and component states. Every measurement, color, and spacing value is exact and ready for implementation. No backend logic, API integration, or business logic included — purely front-end UI/UX design specification.

**Figma file structure, prototype flows, and design system documentation should mirror this specification exactly.**

---

**End of Design Specification Document**
