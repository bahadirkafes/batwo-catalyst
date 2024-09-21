import { Layout } from '@/components/Layout'
import { ProjectCard } from '@/components/ProjectCard'
import React from 'react'

// Temporäre Mock-Daten
const mockProjects = [
  { id: 1, title: 'KI-Integration', description: 'Integration von KI-Funktionen in bestehende Systeme', tasks: 12, progress: 75 },
  { id: 2, title: 'UI-Neugestaltung', description: 'Überarbeitung der Benutzeroberfläche für bessere UX', tasks: 8, progress: 40 },
  { id: 3, title: 'Backend-Optimierung', description: 'Verbesserung der Serverleistung und Skalierbarkeit', tasks: 15, progress: 60 },
]

const ProjectsPage: React.FC = () => {
  return (
    <Layout title="Projekte - BATWO Catalyst">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Projekte</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage