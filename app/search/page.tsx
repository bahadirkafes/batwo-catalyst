import { Layout } from '@/components/Layout'
import Search from '@/components/Search'

export default function SearchPage() {
  return (
    <Layout title="Suche - BATWO Catalyst">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Projekt-Suche</h1>
        <Search />
      </div>
    </Layout>
  )
}