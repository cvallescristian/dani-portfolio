import { profile } from '../data/profile'
import ContactLinks from '../components/ContactLinks'
import Reveal from '../components/Reveal'
import ToolIcon from '../components/ToolIcon'
import './AboutPage.css'

function renderHighlights(text: string) {
  return text.split(/==(.+?)==/).map((part, i) => {
    if (i % 2 === 1) return <mark key={i}>{part}</mark>
    return part
  })
}

function AboutPage() {
  return (
    <section className="container page-section">
      <Reveal>
        <h1 className="page-title">About me</h1>
      </Reveal>
      <div className="about__layout">
        <Reveal className="about__photo-wrap" delay={100}>
          {profile.photo ? (
            <img className="about__photo" src={profile.photo} alt={profile.name} />
          ) : (
            <div className="about__photo about__photo--placeholder" />
          )}
        </Reveal>
        <Reveal className="about__content" delay={200}>
          <p className="about__status">
            <span className="about__status-dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <p className="about__lead">{profile.aboutLead}</p>
          <p className="about__sub">{profile.aboutSub}</p>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="about__paragraph">
              {renderHighlights(paragraph)}
            </p>
          ))}
          <ul className="about__stats">
            {profile.stats.map((stat) => (
              <li key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
                <span className="about__stat-source">{stat.source}</span>
              </li>
            ))}
          </ul>
          <h2 className="about__subheading">What I do</h2>
          <ul className="about__services">
            {profile.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <h2 className="about__subheading">Experience</h2>
          <ul className="about__timeline">
            {profile.experience.map((job) => (
              <li key={job.role} className="about__entry">
                <h3 className="about__entry-title">{job.role}</h3>
                <p className="about__entry-meta">
                  {job.company} · {job.dates} · {job.location}
                </p>
                <p className="about__entry-text">{job.highlight}</p>
              </li>
            ))}
          </ul>

          <h2 className="about__subheading">Education</h2>
          <ul className="about__timeline">
            {profile.education.map((item) => (
              <li key={item.title} className="about__entry">
                <h3 className="about__entry-title">{item.title}</h3>
                <p className="about__entry-meta">
                  {item.school} · {item.dates}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="about__subheading">Tools</h2>
          <ul className="about__tools">
            {profile.tools.map((tool) => (
              <li key={tool.name} className="tool-card">
                <span className="tool-card__badge">
                  <ToolIcon name={tool.icon} />
                </span>
                <span className="tool-card__text">
                  <span className="tool-card__name">{tool.name}</span>
                  <span className="tool-card__use">{tool.use}</span>
                </span>
              </li>
            ))}
          </ul>
          <ContactLinks />
        </Reveal>
      </div>
    </section>
  )
}

export default AboutPage
