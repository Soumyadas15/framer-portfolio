import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import AnimatedCursor from "react-animated-cursor"

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Saumya',
  description: 'Saumyas portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        ${font.className}
        overflow-hidden
      `}
      suppressHydrationWarning
      >
        <Navbar/>
        
        {children}
      </body>
    </html>
  )
}
