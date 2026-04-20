import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unily – Your Whole College in One Place',
  description: 'The super-app your campus never had. Sell stuff, get assignments done, find your squad — all in one app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
