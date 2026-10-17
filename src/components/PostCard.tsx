import type { Post } from '../data/types'
import './PostCard.css'

const dateFormat = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

function PostCard({ post }: { post: Post }) {
  return (
    <a className="post-card" href={post.url} target="_blank" rel="noopener noreferrer">
      <div className="post-card__media">
        {post.thumbnail ? (
          <img className="post-card__thumb" src={post.thumbnail} alt="" loading="lazy" />
        ) : (
          <div className="post-card__thumb post-card__thumb--placeholder" />
        )}
      </div>
      <time className="post-card__date" dateTime={post.date}>
        {dateFormat.format(new Date(post.date))}
      </time>
      <h2 className="post-card__title">{post.title}</h2>
      <p className="post-card__excerpt">{post.excerpt}</p>
    </a>
  )
}

export default PostCard
