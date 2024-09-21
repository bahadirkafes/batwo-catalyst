import { Layout } from '@/components/Layout'
import { Card, CardContent } from "@/components/ui/card"
import React from 'react'

// Temporäre Mock-Daten
const mockTeamMembers = [
  { id: 1, name: 'Anna Müller', role: 'Projektmanager', image: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Max Schmidt', role: 'Entwickler', image: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'Lisa Weber', role: 'Designer', image: '/placeholder.svg?height=100&width=100' },
  { id: 4, name: 'Tom Becker', role: 'Data Scientist', image: '/placeholder.svg?height=100&width=100' },
]

const TeamMemberCard: React.FC<{ name: string; role: string; image: string }> = ({ name, role, image }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6 flex items-center">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </CardContent>
  </Card>
)

const TeamPage: React.FC = () => {
  return (
    <Layout title="Team - BATWO Catalyst">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Unser Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTeamMembers.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage