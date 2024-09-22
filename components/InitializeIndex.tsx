'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Client } from '@opensearch-project/opensearch'
import { useState } from 'react'

const client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: 'admin',
    password: 's0ek!S96a.T'
  }
})

const indexName = 'batwo-catalyst-index'

const indexMapping = {
  mappings: {
    properties: {
      title: { type: 'text' },
      description: { type: 'text' },
      status: { type: 'keyword' },
      createdAt: { type: 'date' },
      updatedAt: { type: 'date' },
      tags: { type: 'keyword' },
      assignedTo: { type: 'keyword' },
      priority: { type: 'keyword' }
    }
  }
}

export default function InitializeIndex() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const createIndex = async () => {
    setIsLoading(true)
    try {
      const indexExists = await client.indices.exists({ index: indexName })
      
      if (indexExists.body) {
        toast({
          title: "Index existiert bereits",
          description: `Der Index "${indexName}" ist bereits vorhanden.`,
        })
      } else {
        const response = await client.indices.create({
          index: indexName,
          body: indexMapping
        })
        
        if (response.statusCode === 200) {
          toast({
            title: "Index erfolgreich erstellt",
            description: `Der Index "${indexName}" wurde erfolgreich erstellt.`,
          })
        } else {
          throw new Error('Unerwarteter Statuscode')
        }
      }
    } catch (error) {
      console.error('Fehler beim Erstellen des Index:', error)
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Erstellen des Index. Bitte überprüfen Sie die Konsole für weitere Details.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>OpenSearch Index Initialisierung</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={createIndex} disabled={isLoading}>
          {isLoading ? 'Wird erstellt...' : 'Index erstellen'}
        </Button>
      </CardContent>
    </Card>
  )
}