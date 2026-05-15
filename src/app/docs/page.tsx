import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-nb-bg text-nb-text p-4 md:p-8 font-body">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-nb p-8 bg-nb-surface shadow-nb">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter">
              NB<span className="text-nb-primary">/</span>DOCS
            </h1>
            <p className="text-lg md:text-xl font-bold opacity-80">
              The ultimate guide to neobrutalist interface design.
            </p>
          </div>
          <Link href="/">
            <Button size="lg" className="shadow-nb-lg">
              ← Back to Playground
            </Button>
          </Link>
        </header>

        {/* Installation */}
        <section id="installation" className="space-y-6">
          <h2 className="text-3xl font-heading font-black">Installation</h2>
          <Card>
            <CardHeader>
              <CardTitle>NPM Package Installation</CardTitle>
              <CardDescription>The fastest way to get started with the neobrutalist UI kit.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>1. Install the package via npm:</p>
              <pre className="bg-nb-text text-nb-bg p-4 border-nb overflow-x-auto font-mono text-sm">
                npm install neobrutalism-ui-kit
              </pre>
              <p>2. Import the styles in your main entry file (e.g., <code className="font-bold">layout.tsx</code> or <code className="font-bold">App.tsx</code>):</p>
              <pre className="bg-nb-text text-nb-bg p-4 border-nb overflow-x-auto font-mono text-sm">
                import 'neobrutalism-ui-kit/styles.css';
              </pre>
              <p>3. Start using the components:</p>
              <pre className="bg-nb-text text-nb-bg p-4 border-nb overflow-x-auto font-mono text-sm">
{`import { Button, Card } from 'neobrutalism-ui-kit';

export default function App() {
  return (
    <Card>
      <Button>Click Me</Button>
    </Card>
  );
}`}
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Design Guidelines */}
        <section id="design" className="space-y-6">
          <h2 className="text-3xl font-heading font-black">Design Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-nb-primary/20">
              <CardHeader>
                <CardTitle>Bold Strokes</CardTitle>
              </CardHeader>
              <CardContent>
                Always use a consistent border width (default 3px) for all interactive elements. Never use soft borders or gradients.
              </CardContent>
            </Card>
            <Card className="bg-nb-secondary/20">
              <CardHeader>
                <CardTitle>Hard Shadows</CardTitle>
              </CardHeader>
              <CardContent>
                Shadows must be offset (not blurred) and 100% opaque. Use the <code className="font-bold">shadow-nb</code> utility.
              </CardContent>
            </Card>
            <Card className="bg-nb-danger/10">
              <CardHeader>
                <CardTitle>Flat Colors</CardTitle>
              </CardHeader>
              <CardContent>
                Use high-saturation, flat background colors. Avoid transparency unless for subtle hover effects.
              </CardContent>
            </Card>
            <Card className="bg-nb-text text-nb-bg">
              <CardHeader>
                <CardTitle className="text-nb-bg">Typography</CardTitle>
              </CardHeader>
              <CardContent>
                Use bold, display fonts for headings (like Syne or Space Grotesk) and clean sans-serif for body text.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Component Reference */}
        <section id="reference" className="space-y-6">
          <h2 className="text-3xl font-heading font-black">Component Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button</CardTitle>
                <CardDescription>Main interactive element.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm font-bold">Variants:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>default</Badge>
                  <Badge variant="secondary">secondary</Badge>
                  <Badge variant="destructive">destructive</Badge>
                  <Badge variant="outline">outline</Badge>
                  <Badge variant="outline">ghost</Badge>
                  <Badge variant="outline">link</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Alert</CardTitle>
                <CardDescription>Feedback messages.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm font-bold">Variants:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>default</Badge>
                  <Badge variant="secondary">warning</Badge>
                  <Badge variant="destructive">destructive</Badge>
                  <Badge variant="success">success</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-heading font-black">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why is it called Neobrutalism?</AccordionTrigger>
              <AccordionContent>
                It's a modern digital evolution of the architectural Brutalist style, which emphasizes raw materials, bold structures, and functionality over decoration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it mobile-friendly?</AccordionTrigger>
              <AccordionContent>
                Yes! The thick borders actually provide better tap targets and higher contrast on small screens, making it very accessible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I change the border width?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Just update the <code className="font-bold">--nb-border-width</code> variable in your CSS root, and all components will sync instantly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I override the theme colors?</AccordionTrigger>
              <AccordionContent>
                The library uses standard CSS variables. You can override them in your project's CSS:
                <pre className="bg-nb-text text-nb-bg p-2 border-nb mt-2 font-mono text-xs">
{`:root {
  --nb-primary: #your-color;
  --nb-radius: 12px;
}`}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <footer className="text-center py-12 border-t-nb border-nb-border/20 opacity-60">
          <p>© 2026 Neobrutalist Playground. Stay bold.</p>
        </footer>
      </div>
    </div>
  )
}
