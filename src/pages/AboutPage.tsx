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
          <ContactLinks />
        </Reveal>
      </div>
    </section>
  )
}

export default AboutPage
