'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data.results)
    } catch (error) {
      console.error('Fehler bei der Suche:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Projekt-Suche</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="flex space-x-2">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suchbegriff eingeben..."
            className="flex-grow"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Suche...' : 'Suchen'}
          </Button>
        </form>
        <div className="mt-4">
          {results.map((result: any) => (
            <div key={result._id} className="mb-2 p-2 border rounded">
              <h3 className="font-bold">{result._source.title}</h3>
              <p>{result._source.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}