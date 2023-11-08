import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import AnimatedCursor from "react-animated-cursor"

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Bhupendr',
  description: 'Bhupendrs portfolio',
}

const options = {
    getDirection: true,
  };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        font-gilroy
        no-scrollbar
      `}
      suppressHydrationWarning
      >
        
        
        {children}
      </body>
    </html>
  )
}
