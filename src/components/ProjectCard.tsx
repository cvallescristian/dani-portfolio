import type { Project } from '../data/types'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
  onSelect?: (project: Project) => void
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onSelect?.(project)}
    >
      <div className="project-card__media">
        {project.thumbnail ? (
          <img
            className="project-card__thumb"
            src={project.thumbnail}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="project-card__thumb project-card__thumb--placeholder" />
        )}
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__tags">{project.tags.join(' • ')}</p>
    </button>
  )
}

export default ProjectCard
