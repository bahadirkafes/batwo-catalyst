import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import React from 'react'

interface ProjectCardProps {
  title: string
  description: string
  tasks: number
  progress: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tasks, progress }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">{tasks} Aufgaben</span>
        <span className="text-sm font-medium text-gray-700">{progress}% abgeschlossen</span>
      </div>
      <Progress value={progress} className="w-full" />
    </CardContent>
  </Card>
)