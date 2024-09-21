import { Layout } from '@/components/Layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'

const SettingsPage: React.FC = () => {
  const [username, setUsername] = useState('MaxMustermann')
  const [email, setEmail] = useState('max@example.com')
  const [language, setLanguage] = useState('Deutsch')
  const [notifications, setNotifications] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Hier würden wir normalerweise die Daten an ein Backend senden
    console.log('Einstellungen gespeichert:', { username, email, language, notifications })
    // TODO: Implementieren Sie hier die tatsächliche Speicherfunktion
  }

  return (
    <Layout title="Einstellungen - BATWO Catalyst">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Einstellungen</h1>
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Benutzername</label>
                <Input 
                  type="text" 
                  id="username" 
                  name="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="mt-1" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="mt-1" 
                />
              </div>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">Sprache</label>
                <select 
                  id="language" 
                  name="language" 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Deutsch</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label htmlFor="notifications" className="flex items-center">
                  <Input 
                    type="checkbox" 
                    id="notifications" 
                    name="notifications" 
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                  />
                  <span className="ml-2 text-sm text-gray-700">E-Mail-Benachrichtigungen aktivieren</span>
                </label>
              </div>
              <Button type="submit" className="w-full">Einstellungen speichern</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

export default SettingsPage