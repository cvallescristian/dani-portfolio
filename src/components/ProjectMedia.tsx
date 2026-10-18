import type { ProjectMedia as Media } from '../data/types'
import ButtonIcon from './ButtonIcon'
import './ProjectMedia.css'

type ProjectMediaProps = {
  media: Media
  title: string
}

function instagramEmbedUrl(url: string) {
  return `${url.replace(/\/+$/, '')}/embed`
}

function tiktokEmbedUrl(url: string) {
  const videoId = url.match(/video\/(\d+)/)?.[1]
  return `https://www.tiktok.com/embed/v2/${videoId}`
}

function ProjectMedia({ media, title }: ProjectMediaProps) {
  switch (media.type) {
    case 'image':
      return <img className="project-media__image" src={media.src} alt={title} />
    case 'youtube':
      return (
        <div className="project-media__frame project-media__frame--video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${media.videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    case 'vimeo':
      return (
        <div className="project-media__frame project-media__frame--video">
          <iframe
            src={`https://player.vimeo.com/video/${media.videoId}`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    case 'instagram':
      return (
        <div className="project-media__frame project-media__frame--post">
          <iframe src={instagramEmbedUrl(media.url)} title={title} />
        </div>
      )
    case 'tiktok':
      return (
        <div className="project-media__frame project-media__frame--vertical">
          <iframe src={tiktokEmbedUrl(media.url)} title={title} allowFullScreen />
        </div>
      )
    case 'link':
      return (
        <a
          className="project-media__link"
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonIcon name="external" />
          View project
        </a>
      )
  }
}

export default ProjectMedia
