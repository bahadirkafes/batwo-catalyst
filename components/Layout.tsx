import Link from 'next/link'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">BATWO Catalyst</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/projects" className="hover:underline">Projekte</Link></li>
              <li><Link href="/team" className="hover:underline">Team</Link></li>
              <li><Link href="/settings" className="hover:underline">Einstellungen</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} BATWO Catalyst. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  )
}