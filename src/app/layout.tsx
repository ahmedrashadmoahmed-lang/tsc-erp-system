import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'نظام TSC ERP | إدارة شاملة للأعمال',
  description: 'نظام إدارة موارد المؤسسات الشامل لشركة TSC - محاسبة، مبيعات، مخازن، وموارد بشرية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
