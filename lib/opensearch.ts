import { Client } from '@opensearch-project/opensearch'

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

export async function initializeOpenSearchIndex() {
  try {
    const indexExists = await client.indices.exists({ index: indexName })
    
    if (!indexExists.body) {
      await client.indices.create({
        index: indexName,
        body: indexMapping
      })
      console.log(`Index "${indexName}" wurde erfolgreich erstellt.`)
    } else {
      console.log(`Index "${indexName}" existiert bereits.`)
    }
  } catch (error) {
    console.error('Fehler bei der Index-Initialisierung:', error)
    throw error
  }
}

export async function testOpenSearchIntegration() {
  try {
    // Ensure index is initialized
    await initializeOpenSearchIndex()

    // Insert test data
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

    const insertResponse = await client.index({
      index: indexName,
      body: testData
    })

    console.log('Testdaten eingefügt:', insertResponse.body)

    // Perform a test search
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

    console.log('Suchergebnisse:', searchResponse.body.hits.hits)

    return 'OpenSearch-Integration erfolgreich getestet!'
  } catch (error) {
    console.error('Fehler beim Testen der OpenSearch-Integration:', error)
    throw error
  }
}