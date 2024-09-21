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

export const projectService = {
  getProjects: (): Promise<Project[]> => {
    return Promise.resolve(mockProjects)
  },

  getProjectById: (id: number): Promise<Project | undefined> => {
    return Promise.resolve(mockProjects.find(project => project.id === id))
  },

  // Hier können weitere Methoden wie createProject, updateProject, deleteProject hinzugefügt werden
}