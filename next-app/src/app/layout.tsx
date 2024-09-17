// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coding Ferpa',
  description: 'Comunidade de tecnologia para jovens em Fernandópolis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
