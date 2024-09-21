import React, { createContext, ReactNode, useContext, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tasks: number
  progress: number
}

interface AppContextType {
  projects: Project[]
  addProject: (project: Omit<Project, 'id'>) => void
  updateProject: (id: number, project: Partial<Project>) => void
  deleteProject: (id: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'KI-Integration', description: 'Integration von KI-Funktionen in bestehende Systeme', tasks: 12, progress: 75 },
    { id: 2, title: 'UI-Neugestaltung', description: 'Überarbeitung der Benutzeroberfläche für bessere UX', tasks: 8, progress: 40 },
    { id: 3, title: 'Backend-Optimierung', description: 'Verbesserung der Serverleistung und Skalierbarkeit', tasks: 15, progress: 60 },
  ])

  const addProject = (project: Omit<Project, 'id'>) => {
    setProjects(prev => [...prev, { ...project, id: Date.now() }])
  }

  const updateProject = (id: number, updatedProject: Partial<Project>) => {
    setProjects(prev => prev.map(project => project.id === id ? { ...project, ...updatedProject } : project))
  }

  const deleteProject = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id))
  }

  return (
    <AppContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </AppContext.Provider>
  )
}