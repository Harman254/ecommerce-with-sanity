import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import CartProvider from '@/components/Providers'
import ShoppingCartModal from '@/components/ShoppingCardModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GeRich by Harman',
  description: 'Your shopping partner on the move',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <Navbar />
        <ShoppingCartModal />
        {children}
        </CartProvider>
        </body>
    </html>
  )
}
