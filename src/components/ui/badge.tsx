import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--nb-radius)] border-nb px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-nb-primary text-foreground hover:bg-nb-primary/80",
        secondary: "bg-nb-secondary text-foreground hover:bg-nb-secondary/80",
        destructive: "bg-nb-danger text-foreground hover:bg-nb-danger/80",
        success: "bg-nb-success text-foreground hover:bg-nb-success/80",
        warning: "bg-nb-warning text-foreground hover:bg-nb-warning/80",
        outline: "bg-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
