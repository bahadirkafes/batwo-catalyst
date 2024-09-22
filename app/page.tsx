import { Layout } from '@/components/Layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Willkommen bei BATWO Catalyst</h1>
        <p className="text-xl mb-8">Beschleunigen Sie Ihre Projektinnovation mit KI-gestütztem Projektmanagement</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>KI-Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Integration von KI-Funktionen in bestehende Systeme</p>
              <p className="mb-2">12 Aufgaben</p>
              <Progress value={75} className="w-full" />
              <p className="text-right mt-1">75% abgeschlossen</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>UI-Neugestaltung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Überarbeitung der Benutzeroberfläche für bessere UX</p>
              <p className="mb-2">8 Aufgaben</p>
              <Progress value={40} className="w-full" />
              <p className="text-right mt-1">40% abgeschlossen</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Backend-Optimierung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Verbesserung der Serverleistung und Skalierbarkeit</p>
              <p className="mb-2">15 Aufgaben</p>
              <Progress value={60} className="w-full" />
              <p className="text-right mt-1">60% abgeschlossen</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Hauptfunktionen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>KI-gestützte Planung</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Optimieren Sie Ihre Projektplanung mit fortschrittlichen KI-Algorithmen</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Echtzeit-Zusammenarbeit</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Arbeiten Sie nahtlos mit Ihrem Team zusammen, egal wo Sie sich befinden</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fortschrittliche Analysen</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gewinnen Sie tiefe Einblicke in Ihre Projektleistung mit detaillierten Berichten</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Anpassbare Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gestalten Sie Ihre Arbeitsabläufe so, dass sie perfekt zu Ihrem Team passen</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg">Jetzt starten</Button>
        </div>
      </div>
    </Layout>
  )
}
