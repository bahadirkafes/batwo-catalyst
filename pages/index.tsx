import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

const IndexPage = () => (
  <Layout title="Home | BATWO Catalyst">
    <h1 className="text-4xl font-bold text-center my-8">Welcome to BATWO Catalyst</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard title="Project 1" description="Description of Project 1" />
      <ProjectCard title="Project 2" description="Description of Project 2" />
      <ProjectCard title="Project 3" description="Description of Project 3" />
    </div>
  </Layout>
)

export default IndexPage