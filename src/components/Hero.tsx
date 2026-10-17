import { profile } from '../data/profile'
import Reveal from './Reveal'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <Reveal>
        <div className="container hero__inner">
          {profile.photo ? (
            <img className="hero__photo" src={profile.photo} alt={profile.name} />
          ) : (
            <div className="hero__photo hero__photo--placeholder" aria-hidden="true" />
          )}
          <div className="hero__content">
            <h1 className="hero__tagline">{profile.tagline}</h1>
            <p className="hero__bio">{profile.bio}</p>
            <a className="hero__button" href="#contact">
              Let's connect
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero
