import React from 'react'

type Props = {
  title: string
  description: string
}

const ProjectCard = ({ title, description }: Props) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
)

export default ProjectCard