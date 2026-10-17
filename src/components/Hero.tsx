import { Link } from 'react-router'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import './Hero.css'

function HeroImage({ src, className }: { src: string | null; className: string }) {
  if (src) {
    return <img className={`hero__image ${className}`} src={src} alt="" />
  }
  return <div className={`hero__image hero__image--placeholder ${className}`} />
}

function Hero() {
  const [mainImage, sideImage] = profile.heroImages

  return (
    <section className="hero">
      <div className="container">
        <Reveal>
          <h1 className="hero__title">Portfolio</h1>
        </Reveal>
        <Reveal className="hero__images" delay={150}>
          <HeroImage src={mainImage} className="hero__image--main" />
          <HeroImage src={sideImage} className="hero__image--side" />
        </Reveal>
        <Reveal className="hero__content" delay={300}>
          <p className="hero__tagline">{profile.tagline}</p>
          <Link className="hero__button" to="/contact">
            Let's connect
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
