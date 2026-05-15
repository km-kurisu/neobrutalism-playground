'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useThemeStore } from "@/lib/store"
import { IconArrowRight } from "../Icons"

export default function HeroPreview() {
  const shake = useThemeStore((s) => s.tokens.shakeEnabled)
  const shakeClass = shake ? 'animate-nb-shake' : ''
  
  return (
    <div className="flex flex-col gap-6 max-w-2xl py-8">
      <div className="flex flex-col gap-2">
        <Badge variant="success" className={`w-fit ${shakeClass}`}>New Update v2.0</Badge>
        <h1 
          className={`text-5xl font-display leading-tight ${shakeClass}`}
          style={{ fontWeight: 'var(--nb-heading-weight)' }}
          contentEditable
          suppressContentEditableWarning
        >
          Build Bold Interfaces with Neo-Brutalism
        </h1>
        <p className="text-lg font-body opacity-80 max-w-lg" contentEditable suppressContentEditableWarning>
          Forget soft shadows and rounded corners. It's time for high-contrast, thick borders, and vibrant energy.
        </p>
      </div>
      
      <div className="flex gap-4">
        <Button size="lg" className={`gap-2 ${shakeClass}`}>
          Get Started <IconArrowRight />
        </Button>
        <Button variant="outline" size="lg" className={shakeClass}>
          View Docs
        </Button>
      </div>
    </div>
  )
}
