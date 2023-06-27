import '../app/styles/globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header/page'
import Footer from './components/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Asif's Porfolio",
  description: 'Muhammad Asif Shahzad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
