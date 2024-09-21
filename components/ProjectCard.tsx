import React from 'react'

type Props = {
  title: string
  description: string
  tasks: number
  progress: number
}

const ProjectCard: React.FC<Props> = ({ title, description, tasks, progress }) => (
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

export default ProjectCard