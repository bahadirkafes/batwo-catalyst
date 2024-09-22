import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
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
  )
}