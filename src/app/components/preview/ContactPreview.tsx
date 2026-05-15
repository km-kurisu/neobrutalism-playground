'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useThemeStore } from "@/lib/store"
import { IconUser, IconMail } from "../Icons"

export default function ContactPreview() {
  const shake = useThemeStore((s) => s.tokens.shakeEnabled)
  const shakeClass = shake ? 'animate-nb-shake' : ''

  return (
    <Card className={`max-w-md w-full p-4 ${shakeClass}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-display">Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="font-heading text-sm font-bold">Your Name</label>
            <div className="relative">
              <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50 z-10" />
              <Input type="text" className="pl-10" placeholder="Jane Doe" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-heading text-sm font-bold">Email Address</label>
            <div className="relative">
              <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50 z-10" />
              <Input type="email" className="pl-10" placeholder="jane@example.com" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-heading text-sm font-bold">Message</label>
            <textarea 
              className="flex min-h-[100px] w-full rounded-[var(--nb-radius)] border-[var(--nb-border-width)] border-nb-border bg-surface px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-nb disabled:cursor-not-allowed disabled:opacity-50 transition-all"
              placeholder="Tell us something..."
            />
          </div>
          
          <Button type="submit" className="mt-2 w-full">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  )
}
