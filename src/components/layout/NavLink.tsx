'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/helpers'

type NavLinkProps = {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        isActive
          ? 'text-primary font-semibold'
          : 'text-foreground/80 hover:text-primary'
      )}
    >
      {children}
    </Link>
  )
}
