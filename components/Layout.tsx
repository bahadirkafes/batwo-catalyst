import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title = 'BATWO Catalyst' }) => (
  <div className="min-h-screen bg-gray-100">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="container mx-auto px-6 py-8">
      {children}
    </main>
    <Footer />
  </div>
)