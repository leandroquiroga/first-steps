import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'First step with Next.14',
  description: 'Generated by Next.js - Version 14.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={monserrat.className}>
        {children}
      </body>
    </html>
  )
}
