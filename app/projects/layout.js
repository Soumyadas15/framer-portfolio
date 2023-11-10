import { Montserrat } from 'next/font/google'
import '../globals.css'


const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        ${font.className}
        no-scrollbar
        overflow-x-none
        
      `}
      suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
