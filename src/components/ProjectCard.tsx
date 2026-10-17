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
      <span className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </span>
    </button>
  )
}

export default ProjectCard
