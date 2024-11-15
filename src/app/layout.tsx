import { ThemeProvider } from '@/components/common/ThemeProvider'
import { manrope } from '@/components/fonts'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body className={manrope.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastContainer
              autoClose={2000}
              bodyClassName="text-sm font-medium"
              position="top-right"
            />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
