import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => (
  <header className="bg-red-600 text-white shadow-md">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">BATWO Catalyst</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-200">Dashboard</Link></li>
            <li><Link href="/projects" className="hover:text-gray-200">Projekte</Link></li>
            <li><Link href="/team" className="hover:text-gray-200">Team</Link></li>
            <li><Link href="/settings" className="hover:text-gray-200">Einstellungen</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)