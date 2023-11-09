import '../globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        font-gilroy
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
