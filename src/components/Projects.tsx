import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/types'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import './Projects.css'

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__heading">Top projects</h2>
        <ul className="projects__grid">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} onSelect={setSelected} />
            </li>
          ))}
        </ul>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Projects
