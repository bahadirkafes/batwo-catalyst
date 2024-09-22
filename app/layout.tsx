import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BATWO Catalyst',
  description: 'KI-gestütztes Projektmanagement für Ihre Innovationen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}