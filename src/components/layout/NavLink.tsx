'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/helpers'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary',
        isActive
          ? 'text-primary font-semibold'
          : 'text-neutral-700 hover:text-primary'
      )}
    >
      {children}
    </Link>
  )
}
