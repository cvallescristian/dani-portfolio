import { profile } from '../data/profile'
import ContactLinks from '../components/ContactLinks'
import Reveal from '../components/Reveal'
import './AboutPage.css'

function AboutPage() {
  return (
    <section className="container page-section">
      <Reveal>
        <h1 className="page-title">About me</h1>
      </Reveal>
      <div className="about__layout">
        <Reveal delay={100}>
          {profile.photo ? (
            <img className="about__photo" src={profile.photo} alt={profile.name} />
          ) : (
            <div className="about__photo about__photo--placeholder" />
          )}
        </Reveal>
        <Reveal className="about__content" delay={200}>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="about__paragraph">
              {paragraph}
            </p>
          ))}
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
          <p className="about__tools">{profile.tools.join(' · ')}</p>
          <ContactLinks />
        </Reveal>
      </div>
    </section>
  )
}

export default AboutPage
