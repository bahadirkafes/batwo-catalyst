import { FeatureCard } from '@/components/FeatureCard'
import { Layout } from '@/components/Layout'
import { ProjectCard } from '@/components/ProjectCard'
import { BoltIcon, ChartBarIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tasks: number
  progress: number
}

const mockProjects: Project[] = [
  { id: 1, title: 'KI-Integration', description: 'Integration von KI-Funktionen in bestehende Systeme', tasks: 12, progress: 75 },
  { id: 2, title: 'UI-Neugestaltung', description: 'Überarbeitung der Benutzeroberfläche für bessere UX', tasks: 8, progress: 40 },
  { id: 3, title: 'Backend-Optimierung', description: 'Verbesserung der Serverleistung und Skalierbarkeit', tasks: 15, progress: 60 },
]

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // Simuliere einen API-Aufruf
    setProjects(mockProjects)
  }, [])

  return (
    <Layout>
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
    </Layout>
  )
}

export default Home