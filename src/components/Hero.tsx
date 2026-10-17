import { profile } from '../data/profile'
import ContactLinks from './ContactLinks'
import KeywordRotator from './KeywordRotator'
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
          <h1 className="hero__title">{profile.name}</h1>
        </Reveal>
        <Reveal className="hero__images" delay={150}>
          <HeroImage src={mainImage} className="hero__image--main" />
          <HeroImage src={sideImage} className="hero__image--side" />
        </Reveal>
        <Reveal className="hero__content" delay={300}>
          <p className="hero__headline">
            {profile.headline.intro} <KeywordRotator words={profile.headline.keywords} />
          </p>
          <ContactLinks centered />
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
