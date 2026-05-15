import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-nb",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-nb hover:translate-x-[var(--nb-hover-offset)] hover:translate-y-[var(--nb-hover-offset)] hover:shadow-nb-lg active:translate-x-[var(--nb-active-offset)] active:translate-y-[var(--nb-active-offset)] active:shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground shadow-nb hover:translate-x-[var(--nb-hover-offset)] hover:translate-y-[var(--nb-hover-offset)] hover:shadow-nb-lg active:translate-x-[var(--nb-active-offset)] active:translate-y-[var(--nb-active-offset)] active:shadow-none",
        outline:
          "bg-background shadow-nb hover:bg-accent hover:text-accent-foreground hover:translate-x-[var(--nb-hover-offset)] hover:translate-y-[var(--nb-hover-offset)] hover:shadow-nb-lg active:translate-x-[var(--nb-active-offset)] active:translate-y-[var(--nb-active-offset)] active:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground shadow-nb hover:translate-x-[var(--nb-hover-offset)] hover:translate-y-[var(--nb-hover-offset)] hover:shadow-nb-lg active:translate-x-[var(--nb-active-offset)] active:translate-y-[var(--nb-active-offset)] active:shadow-none",
        ghost: "border-none hover:bg-accent hover:text-accent-foreground shadow-none",
        link: "text-primary underline-offset-4 hover:underline border-none shadow-none",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
