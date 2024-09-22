import { Client } from '@opensearch-project/opensearch'
import { NextResponse } from 'next/server'

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

export async function GET() {
  try {
    const indexExists = await client.indices.exists({ index: indexName })
    
    if (!indexExists.body) {
      await client.indices.create({
        index: indexName,
        body: indexMapping
      })
    }

    const testData = {
      title: 'Test Projekt',
      description: 'Dies ist ein Testprojekt für OpenSearch',
      status: 'In Bearbeitung',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: ['test', 'opensearch'],
      assignedTo: 'Max Mustermann',
      priority: 'Hoch'
    }

    await client.index({
      index: indexName,
      body: testData
    })

    const searchResponse = await client.search({
      index: indexName,
      body: {
        query: {
          match: {
            title: 'Test Projekt'
          }
        }
      }
    })

    return NextResponse.json({ 
      message: 'OpenSearch-Integration erfolgreich getestet!',
      searchResults: searchResponse.body.hits.hits
    })
  } catch (error) {
    console.error('Fehler beim Testen der OpenSearch-Integration:', error)
    return NextResponse.json({ error: 'Fehler beim Testen der OpenSearch-Integration' }, { status: 500 })
  }
}