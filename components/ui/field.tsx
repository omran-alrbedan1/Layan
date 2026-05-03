"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical"
    dataInvalid?: boolean
  }
>(({ className, orientation = "vertical", dataInvalid, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid gap-2",
      orientation === "horizontal" && "grid-cols-[1fr_auto] items-center",
      dataInvalid && "text-destructive",
      className
    )}
    data-invalid={dataInvalid}
    {...props}
  />
))
Field.displayName = "Field"

const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("grid gap-4", className)} {...props} />
))
FieldGroup.displayName = "FieldGroup"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
FieldLabel.displayName = "FieldLabel"

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground", className)}
    {...props}
  />
))
FieldDescription.displayName = "FieldDescription"

const FieldError = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    errors?: Array<{ message?: string } | null | undefined>
  }
>(({ className, errors, ...props }, ref) => {
  if (!errors || errors.length === 0) return null
  
  const error = errors[0]
  if (!error?.message) return null

  return (
    <div
      ref={ref}
      className={cn("text-xs text-destructive font-medium", className)}
      {...props}
    >
      {error.message}
    </div>
  )
})
FieldError.displayName = "FieldError"

export {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
}
