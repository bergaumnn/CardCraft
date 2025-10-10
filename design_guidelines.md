# Design Guidelines: Візитка/Плакат Генератор

## Design Approach: Hybrid System-Creative

**Selected Framework**: Material Design principles with creative tool aesthetics (inspired by Canva, Adobe Express)

**Rationale**: This utility tool requires clear functionality and workflow guidance, but as a creative output generator, it needs visual appeal and inspiring templates. Material Design provides structure while allowing creative freedom in template design.

**Core Principles**:
- Clarity in form controls and preview
- Instant visual feedback for all changes
- Template-first approach with customization
- Clean, modern Ukrainian aesthetic

---

## Color Palette

### Light Mode (Primary)
- **Primary Brand**: 220 85% 55% (Vibrant Blue - represents trust, professionalism)
- **Secondary**: 160 70% 45% (Teal - modern, creative accent)
- **Background**: 210 20% 98% (Soft neutral)
- **Surface**: 0 0% 100% (Pure white for cards)
- **Text Primary**: 220 15% 20% (Near black)
- **Text Secondary**: 220 10% 50% (Medium gray)
- **Border**: 220 15% 85% (Light dividers)

### Dark Mode
- **Primary Brand**: 220 75% 60% (Brighter blue for contrast)
- **Secondary**: 160 60% 50% (Adjusted teal)
- **Background**: 220 15% 12% (Deep dark blue)
- **Surface**: 220 12% 16% (Elevated surfaces)
- **Text Primary**: 210 20% 95% (Soft white)
- **Text Secondary**: 210 10% 65% (Muted)
- **Border**: 220 10% 25% (Subtle dividers)

### Template Color Schemes (4 готових варіанти)
1. **Професійний**: Blue + Gray tones
2. **Креативний**: Purple + Orange vibrant
3. **Природний**: Green + Earth tones
4. **Елегантний**: Black + Gold accents

---

## Typography

**Font Families**:
- Primary: 'Inter' (Google Fonts) - clean, modern sans-serif for UI
- Template Display: 'Montserrat' (Google Fonts) - impactful for names/titles
- Template Body: 'Open Sans' (Google Fonts) - readable for details

**Type Scale** (Tailwind classes):
- Page Title: text-3xl font-bold (Генератор Візиток)
- Section Headers: text-xl font-semibold
- Form Labels: text-sm font-medium
- Input Text: text-base
- Button Text: text-sm font-semibold
- Template Title/Name: text-2xl to text-4xl (varies by template)
- Template Details: text-sm to text-base

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16**
- Component padding: p-4, p-6, p-8
- Section gaps: gap-4, gap-6, gap-8
- Margins: m-2, m-4, m-8
- Container max-width: max-w-7xl

**Grid Structure**:
- Desktop: Two-column layout (40% editor panel / 60% preview)
- Tablet: Stacked with collapsible editor
- Mobile: Single column, preview below form

**Viewport Management**:
- Editor panel: Fixed height with scroll (h-screen overflow-y-auto)
- Preview area: Centered, responsive sizing
- No forced 100vh constraints on content

---

## Component Library

### A. Navigation & Header
- Sticky header with logo/title: "Генератор Візиток та Плакатів"
- Dark mode toggle (icon button top-right)
- Minimal, clean navigation (no hero needed for utility app)

### B. Editor Panel (Left/Top)

**Input Form Components**:
- Text inputs with floating labels: Ім'я, Прізвище, Професія, Телефон, Email, Веб-сайт
- All inputs: rounded-lg borders with focus:ring-2 states
- Upload zone: Dashed border card for image upload with preview thumbnail
- Color scheme selector: 4 large circular color swatches (clickable, with active ring)
- Template selector: Grid of 3-4 template thumbnails with hover lift effect

**Form Layout**:
- Grouped sections with subtle dividers
- Labels above inputs (text-sm font-medium text-gray-700 dark:text-gray-300)
- Input spacing: space-y-4
- Action buttons at bottom: "Завантажити PNG" (primary), "Скинути" (secondary)

### C. Preview Panel (Right/Bottom)

**Canvas Area**:
- White/dark surface with shadow-2xl elevation
- Constrained dimensions (350x200mm or A4 aspect ratio for posters)
- Live preview that updates on input change
- Subtle grid pattern background behind canvas

**Templates** (3-4 варіанти):
1. **Мінімалістична**: Clean layout, avatar left, text right, single accent line
2. **Креативна**: Diagonal color blocks, bold typography, overlapping elements
3. **Корпоративна**: Traditional card layout, centered logo, structured text
4. **Сучасна**: Asymmetric design, large typography, gradient backgrounds

### D. Action Buttons
- Primary "Завантажити PNG": Large, prominent, primary color with icon
- Secondary "Скинути": Outline variant
- Template switcher: Small icon buttons or thumbnail grid

### E. Additional Elements
- Success toast notification after download
- Loading spinner during PNG generation
- Optional: Mini gallery drawer (3-4 recent creations as thumbnails)

---

## Animations

**Minimal & Purposeful**:
- Form inputs: Subtle focus ring transition (transition-all duration-200)
- Template selection: Scale on hover (hover:scale-105)
- Preview updates: Fade transition when changing templates (opacity fade 150ms)
- Button interactions: Standard Material ripple/shadow lift
- Upload zone: Pulse animation on drag-over
- Success toast: Slide-in from top (slide-in-top animation)

**No**: Distracting background animations, excessive motion, auto-playing effects

---

## Images

**Required Images**:
1. **Placeholder Avatar**: User-uploadable circular avatar (150x150px placeholder)
2. **Logo Placeholder**: Optional company logo upload area (100x100px)
3. **Template Previews**: Static thumbnail images showing each template design (200x120px)

**Image Placement**:
- Avatar: Within template canvas (position varies by template)
- Logo: Upload section in editor panel
- Template thumbnails: Template selection grid
- No large hero image needed (this is a utility app, not marketing)

---

## Responsive Behavior

**Desktop (lg:)**: Side-by-side editor and preview (grid-cols-2)
**Tablet (md:)**: Stacked with full-width preview below editor
**Mobile (base)**: Single column, compact form, preview centered below

**Touch Optimization**:
- Larger tap targets for mobile (min 44px)
- Swipeable template gallery on mobile
- Simplified form on smaller screens

---

## Accessibility & Quality

- All form inputs properly labeled with Ukrainian text
- Color contrast ratio 4.5:1 minimum
- Keyboard navigation for all interactive elements
- Focus indicators on all controls
- Consistent dark mode across all form inputs
- ARIA labels for icon buttons ("Завантажити", "Змінити колір", etc.)

**Technical Notes**:
- Use html2canvas library for PNG export
- Store template data in JavaScript objects
- Real-time preview with input event listeners
- Form validation with Ukrainian error messages