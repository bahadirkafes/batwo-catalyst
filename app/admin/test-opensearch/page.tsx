'use client'

import { Layout } from '@/components/Layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from 'react'

export default function TestOpenSearchPage() {
  const [testResult, setTestResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/opensearch')
      const data = await response.json()
      setTestResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setTestResult('Fehler beim Testen der OpenSearch-Integration')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout title="OpenSearch Test - BATWO Catalyst">
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>OpenSearch Integrationstest</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleTest} disabled={isLoading}>
              {isLoading ? 'Test läuft...' : 'OpenSearch testen'}
            </Button>
            {testResult && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h3 className="font-bold">Testergebnis:</h3>
                <pre className="whitespace-pre-wrap">{testResult}</pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}