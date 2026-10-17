import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import type { Project } from '../data/types'
import ProjectMedia from './ProjectMedia'
import './ProjectModal.css'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) {
      dialog.showModal()
      return
    }
    if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  // Clicks on the dialog element itself (not its content) come from the backdrop.
  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      onClose={onClose}
      onClick={handleClick}
      aria-labelledby="project-modal-title"
    >
      {project && (
        <div className="project-modal__body">
          <button
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <h2 id="project-modal-title" className="project-modal__title">
            {project.title}
          </h2>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <p className="project-modal__description">{project.description}</p>
          {project.media && (
            <div className="project-modal__media">
              <ProjectMedia media={project.media} title={project.title} />
            </div>
          )}
        </div>
      )}
    </dialog>
  )
}

export default ProjectModal
