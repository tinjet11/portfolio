import Head from 'next/head'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Leong Tin Jet',
  description: 'I am Leong Tin Jet. Currently studying CSAI in Univeristy of Nottingham Malaysia ',

}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </head>
      <body>
        <Providers>
          <div className="container mx-auto p-4">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
