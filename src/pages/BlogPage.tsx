import { posts } from '../data/posts'
import PostCard from '../components/PostCard'
import Reveal from '../components/Reveal'
import './BlogPage.css'

function BlogPage() {
  return (
    <section className="container page-section">
      <Reveal>
        <h1 className="page-title">Blog</h1>
      </Reveal>
      <ul className="blog__grid">
        {posts.map((post, index) => (
          <li key={post.id}>
            <Reveal delay={(index % 3) * 100}>
              <PostCard post={post} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogPage
