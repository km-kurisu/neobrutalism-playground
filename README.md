# NB/PLAY — Neo Brutalism Theme Playground

An interactive tool for exploring, customizing, and generating neo brutalism design tokens in real-time. Tweak borders, shadows, colors, and fonts while previewing live components. Export the result as CSS custom properties, Tailwind config, or individual component CSS.

## Built With

- **Next.js 16** — React framework
- **Tailwind CSS v4** — utility-first CSS
- **Zustand** — state management
- **Google Fonts** — 10 neo brutalism typefaces via `next/font`

## Features

### Live Theme Editor
Adjust every neo brutalism design token visually:

| Category | Controls |
|----------|----------|
| **Border** | Width (0–8px), Radius (0–24px) |
| **Shadow** | Offset X/Y (0–20px), Blur (0–12px) |
| **Colors** | Background, Surface, Text, Border, Shadow, Primary, Secondary, Danger — each with color picker + hex input |
| **Fonts** | Choose from 10 typefaces (Syne, Space Grotesk, Inter, Space Mono, Bebas Neue, Archivo Black, Plus Jakarta Sans, DM Sans, Outfit, JetBrains Mono) for display, heading, body, and monospace roles; heading weight slider (400–900) |

### Live Component Previews
Six component types update instantly as you tweak tokens:

- **Button** — default, primary, inverted, ghost (with hover/active states)
- **Card** — header, body, footer with hover lift
- **Input** — text, email, select, textarea (with focus states)
- **Badge** — default, primary, success, error, warning
- **Toggle** — checked/unchecked with keyboard focus
- **Alert** — success, error, info, warning

Filter by component type or view all at once.

### Code Export
Switch between three output modes:

- **CSS Custom Properties** — full `:root` token block
- **Tailwind Config** — theme extension config
- **Component CSS** — individual CSS for button, card, or input

All with one-click copy.

### Contrast Checker
Live WCAG contrast ratios for:
- Text on background
- Text on surface
- Text on primary color

Shows pass/fail for AA (4.5:1), AAA (7:1), and AA Large (3:1).

### Theme Presets
Six one-click presets to get started:

- **Classic** — canonical neo brutalism look
- **Vibrant** — bold pop-art energy
- **Soft** — muted, approachable
- **Dark** — high contrast dark mode
- **Minimal** — clean black and white
- **Cyber** — neon cyber-brutalism

### Responsive Layout
Side panels collapse on narrow screens (<900px) with toggle buttons in the header.

## Getting Started

```bash
git clone https://github.com/km-kurisu/neobrutalism-playground.git
cd neobrutalism-playground
npm install
npm run dev
```

Open [https://neobrutalism-playground.vercel.app/](https://neobrutalism-playground.vercel.app/) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Google Fonts
│   ├── page.tsx                # Server entry point
│   ├── globals.css             # CSS custom properties, Tailwind, base styles
│   └── components/
│       ├── Playground.tsx      # Three-panel layout with responsive toggles
│       ├── ThemeSync.tsx       # Syncs Zustand store → CSS custom properties
│       ├── TokenPanel.tsx      # Left panel: presets, sliders, color pickers, fonts
│       ├── ComponentGrid.tsx   # Center panel: live component previews with tabs
│       ├── CodePanel.tsx       # Right panel: code output + contrast checker
│       └── preview/
│           ├── ButtonPreview.tsx
│           ├── CardPreview.tsx
│           ├── InputPreview.tsx
│           ├── BadgePreview.tsx
│           ├── TogglePreview.tsx
│           └── AlertPreview.tsx
└── lib/
    ├── store.ts                # Zustand store (19 theme tokens)
    ├── presets.ts              # 6 theme presets
    └── utils.ts                # Contrast calculator, code generators, HSL color utilities
```

## Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/my-feature`)
3. **Commit your changes** (`git commit -m 'Add my feature'`)
4. **Push to the branch** (`git push origin feature/my-feature`)
5. **Open a Pull Request**

Please make sure your code builds cleanly (`npm run build`) before submitting. For major changes, open an issue first to discuss what you'd like to change.


