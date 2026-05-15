'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useThemeStore } from "@/lib/store"
import { IconCheck } from "../Icons"

export default function PricingPreview() {
  const shake = useThemeStore((s) => s.tokens.shakeEnabled)
  const shakeClass = shake ? 'animate-nb-shake' : ''

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl py-4">
      {/* Free Plan */}
      <Card className={shakeClass}>
        <CardHeader>
          <CardTitle className="text-xl font-heading">Free</CardTitle>
          <CardDescription className="text-3xl font-display text-foreground font-bold">$0<span className="text-sm font-normal">/mo</span></CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3 font-body text-sm">
            <li className="flex gap-2 items-center"><IconCheck className="w-4 h-4 text-green-600" /> 3 Projects</li>
            <li className="flex gap-2 items-center"><IconCheck className="w-4 h-4 text-green-600" /> Basic Components</li>
            <li className="flex gap-2 items-center"><IconCheck className="w-4 h-4 text-green-600" /> Community Support</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Join Now</Button>
        </CardFooter>
      </Card>

      {/* Pro Plan */}
      <Card className={`bg-primary ${shakeClass}`}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-heading">Pro</CardTitle>
            <Badge className="bg-foreground text-background border-none">POPULAR</Badge>
          </div>
          <CardDescription className="text-3xl font-display text-foreground font-bold">$19<span className="text-sm font-normal">/mo</span></CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3 font-body text-sm">
            <li className="flex gap-2 items-center"><IconCheck className="w-4 h-4" /> Unlimited Projects</li>
            <li className="flex gap-2 items-center"><IconCheck className="w-4 h-4" /> All Advanced Components</li>
            <li className="flex gap-2 items-center"><IconCheck className="w-4 h-4" /> Priority Support</li>
            <li className="flex gap-2 items-center"><IconCheck className="w-4 h-4" /> Custom Export Formats</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-foreground text-background hover:bg-foreground/90">Go Pro</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
