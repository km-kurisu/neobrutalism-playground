import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.Root.Props
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={className}
    {...props}
  />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.Item.Props
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-nb border-nb-border mb-2 rounded-[var(--nb-radius)] bg-nb-surface overflow-hidden",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.Trigger.Props
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between py-4 px-4 text-left text-sm font-bold transition-all outline-none hover:bg-nb-primary/10",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/accordion-trigger:rotate-180" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.Panel.Props
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Panel
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 px-4 font-body", className)}>{children}</div>
  </AccordionPrimitive.Panel>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
