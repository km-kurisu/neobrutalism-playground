# Neobrutalism UI Kit ⚡️

A premium, high-contrast neobrutalist component library built with **React**, **TypeScript**, and **Tailwind CSS**. Designed for builders who want to stand out with bold strokes, hard shadows, and vibrant energy.

![Neobrutalism UI Banner](https://raw.githubusercontent.com/your-username/neobrutalism-ui-kit/main/public/banner.png)

## ✨ Features

- 🎨 **Bold Aesthetics**: Signature thick borders and offset shadows.
- 🧩 **Shadcn Compatible**: Built on top of Shadcn patterns for familiar implementation.
- ⌨️ **Accessible**: Fully accessible primitives powered by Base UI.
- 🛠️ **Fully Customizable**: Controlled via standard CSS variables.
- 📦 **Lightweight**: Zero-config bundling with full ESM/CJS support.

## 🚀 Installation

Install the package via your preferred package manager:

```bash
npm install neobrutalism-ui-kit
# or
yarn add neobrutalism-ui-kit
# or
pnpm add neobrutalism-ui-kit
```

## 🛠️ Setup

Import the core neobrutalist styles in your main entry file (e.g., `layout.tsx`, `App.tsx`, or `main.ts`):

```tsx
import 'neobrutalism-ui-kit/styles.css';
```

## 📖 Usage

```tsx
import { Button, Card, Badge } from 'neobrutalism-ui-kit';

export default function App() {
  return (
    <Card className="p-6">
      <h2 className="font-heading text-2xl font-black mb-4">Hello World</h2>
      <p className="font-body mb-6">Neobrutalism is about being raw and bold.</p>
      
      <div className="flex gap-4">
        <Button variant="primary">Get Started</Button>
        <Badge variant="secondary">v1.0.0</Badge>
      </div>
    </Card>
  );
}
```

## 🎨 Customization

You can easily override the theme by redefining the CSS variables in your global stylesheet:

```css
:root {
  --nb-primary: #FFD23F;   /* Change your primary color */
  --nb-radius: 8px;        /* Soften the corners */
  --nb-border-width: 4px;  /* Make the lines even thicker */
  --nb-shadow: 6px 6px 0px #000;
}
```

## 📦 Available Components

- **Accordion**: `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
- **Alert**: `Alert`, `AlertTitle`, `AlertDescription` (Variants: `default`, `destructive`, `success`, `warning`)
- **Avatar**: `Avatar`, `AvatarImage`, `AvatarFallback`
- **Badge**: `Badge` (Variants: `default`, `secondary`, `destructive`, `outline`)
- **Button**: `Button` (Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`)
- **Card**: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- **Input**: `Input` (Neobrutalist text input)
- **Tooltip**: `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider`

## 🛠️ Utilities

We also export the `cn` utility (a combination of `clsx` and `tailwind-merge`) to help you merge your own classes with the neobrutalist ones:

```tsx
import { cn } from 'neobrutalism-ui-kit';

const myClass = cn("border-nb", "custom-class");
```

## 📜 License

MIT © [km-kurisu]
