'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/helpers'

type Variant = 'default' | 'outline' | 'destructive'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseClasses = 'rounded-md font-medium transition cursor-pointer'

    const variants: Record<Variant, string> = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
    }

    const sizes: Record<Size, string> = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
