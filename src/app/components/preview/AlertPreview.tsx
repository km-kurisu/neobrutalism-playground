'use client'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useThemeStore } from "@/lib/store"
import { IconInfo, IconAlertTriangle, IconCheck, IconX } from "../Icons"

export default function AlertPreview() {
  const shake = useThemeStore((s) => s.tokens.shakeEnabled)
  const shakeClass = shake ? 'animate-nb-shake' : ''

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-2xl">
      <Alert className={shakeClass}>
        <IconInfo className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your project using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="warning" className={shakeClass}>
        <IconAlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your subscription is about to expire. Please renew it soon.
        </AlertDescription>
      </Alert>

      <Alert variant="success" className={shakeClass}>
        <IconCheck className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your profile has been updated successfully.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive" className={shakeClass}>
        <IconX className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was an error processing your request. Please try again.
        </AlertDescription>
      </Alert>
    </div>
  )
}
