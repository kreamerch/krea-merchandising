import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Providers } from '@/components/providers/Providers'
import Topbar from '@/components/layout/Topbar'
import Header from '@/components/layout/Header'

const inter = localFont({
  src: '../fonts/Inter-VariableFont_slnt,wght.ttf',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Krea Merch',
  description: 'Catálogo de merchandising personalizado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>

      <body className="font-sans antialiased">
        <Providers>
          <Topbar />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
