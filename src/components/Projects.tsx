import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__heading">Top projects</h2>
        <ul className="projects__grid">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
