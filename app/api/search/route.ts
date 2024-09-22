import { Client } from '@opensearch-project/opensearch'
import { NextRequest, NextResponse } from 'next/server'

const client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: 'admin',
    password: 's0ek!S96a.T'
  }
})

const indexName = 'batwo-catalyst-index'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ error: 'Suchbegriff fehlt' }, { status: 400 })
  }

  try {
    const searchResponse = await client.search({
      index: indexName,
      body: {
        query: {
          multi_match: {
            query: query,
            fields: ['title', 'description', 'tags']
          }
        }
      }
    })

    return NextResponse.json({ results: searchResponse.body.hits.hits })
  } catch (error) {
    console.error('Fehler bei der Suche:', error)
    return NextResponse.json({ error: 'Fehler bei der Suche' }, { status: 500 })
  }
}