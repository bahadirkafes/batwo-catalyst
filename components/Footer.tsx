import Link from 'next/link'
import React from 'react'

export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8 mt-12">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} BATWO. Alle Rechte vorbehalten.</p>
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:text-gray-300">Datenschutz</Link>
          <Link href="/terms" className="hover:text-gray-300">AGB</Link>
          <Link href="/contact" className="hover:text-gray-300">Kontakt</Link>
        </div>
      </div>
    </div>
  </footer>
)