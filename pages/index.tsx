import { BoltIcon, ChartBarIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'

const ProjectCard = ({ title, description, tasks, progress }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{tasks} Aufgaben</span>
      <div className="w-24 bg-gray-200 rounded-full h-2.5">
        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </div>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex items-start">
    <div className="flex-shrink-0 mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default function Home() {
  const projects = [
    { id: 1, title: 'KI-Integration', description: 'Integration von KI-Funktionen in bestehende Systeme', tasks: 12, progress: 75 },
    { id: 2, title: 'UI-Neugestaltung', description: 'Überarbeitung der Benutzeroberfläche für bessere UX', tasks: 8, progress: 40 },
    { id: 3, title: 'Backend-Optimierung', description: 'Verbesserung der Serverleistung und Skalierbarkeit', tasks: 15, progress: 60 },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>BATWO Catalyst - Beschleunigt Ihre Projektinnovation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">BATWO Catalyst</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-200">Dashboard</a></li>
                <li><a href="#" className="hover:text-gray-200">Projekte</a></li>
                <li><a href="#" className="hover:text-gray-200">Team</a></li>
                <li><a href="#" className="hover:text-gray-200">Einstellungen</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Willkommen bei BATWO Catalyst</h2>
          <p className="text-xl text-gray-600 mb-8">Beschleunigen Sie Ihre Projektinnovation mit KI-gestütztem Projektmanagement</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Hauptfunktionen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<BoltIcon className="h-8 w-8 text-red-600" />}
              title="KI-gestützte Planung"
              description="Optimieren Sie Ihre Projektplanung mit fortschrittlichen KI-Algorithmen"
            />
            <FeatureCard 
              icon={<ClockIcon className="h-8 w-8 text-red-600" />}
              title="Echtzeit-Zusammenarbeit"
              description="Arbeiten Sie nahtlos mit Ihrem Team zusammen, egal wo Sie sich befinden"
            />
            <FeatureCard 
              icon={<ChartBarIcon className="h-8 w-8 text-red-600" />}
              title="Fortschrittliche Analysen"
              description="Gewinnen Sie tiefe Einblicke in Ihre Projektleistung mit detaillierten Berichten"
            />
            <FeatureCard 
              icon={<ChevronRightIcon className="h-8 w-8 text-red-600" />}
              title="Anpassbare Workflows"
              description="Gestalten Sie Ihre Arbeitsabläufe so, dass sie perfekt zu Ihrem Team passen"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Beginnen Sie noch heute</h2>
          <p className="text-gray-600 mb-4">Melden Sie sich an, um die Kraft von BATWO Catalyst zu erleben</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
            Jetzt starten
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 BATWO. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Datenschutz</a>
              <a href="#" className="hover:text-gray-300">AGB</a>
              <a href="#" className="hover:text-gray-300">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}