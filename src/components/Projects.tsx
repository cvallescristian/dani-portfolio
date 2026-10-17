import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/types'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import './Projects.css'

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__heading">Top projects</h2>
        <ul className="projects__grid">
          {projects.map((project, index) => (
            <li key={project.id}>
              <Reveal delay={(index % 3) * 100}>
                <ProjectCard project={project} onSelect={setSelected} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Projects
