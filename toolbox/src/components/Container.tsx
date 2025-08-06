"use client"

import type { ReactNode } from "react"

interface ContainerProps {
  title: string
  children: ReactNode
  description?: ReactNode
  subDescription?: string
  showConfetti?: boolean
  logoSrc?: string
  logoAlt?: string
}

export function Container({
  title,
  children,
  description,
  subDescription,
  logoSrc = "/small-logo.png",
  logoAlt = "Logo",
}: ContainerProps) {
  return (
    <div>

      {/* Header - matching FlowNavigation style */}

      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <div className="text-sm text-muted-foreground mt-1">
          {description}
        </div>
      )}
      {subDescription && (
        <p className="text-sm text-muted-foreground mt-1">{subDescription}</p>
      )}


      {/* Content area - matching ConsoleLayout content styling */}
      <div className="p-6">
        
          <div className="space-y-6 text-foreground prose prose-sm max-w-none dark:prose-invert">
            {children}
          </div>
        </div>
    </div>
  )
}

