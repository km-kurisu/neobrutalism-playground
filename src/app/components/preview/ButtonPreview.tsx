'use client'

import { Button } from "@/components/ui/button"
import { useThemeStore } from "@/lib/store"

export default function ButtonPreview() {
  const shake = useThemeStore((s) => s.tokens.shakeEnabled)
  const shakeClass = shake ? 'animate-nb-shake' : ''

  return (
    <div className="flex flex-wrap gap-4 items-center p-4">
      <Button className={shakeClass}>Default</Button>
      <Button variant="secondary" className={shakeClass}>Secondary</Button>
      <Button variant="outline" className={shakeClass}>Outline</Button>
      <Button variant="destructive" className={shakeClass}>Destructive</Button>
      <Button variant="ghost" className={shakeClass}>Ghost</Button>
      <Button variant="link" className={shakeClass}>Link</Button>
    </div>
  )
}
