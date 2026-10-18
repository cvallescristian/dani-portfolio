import { profile } from '../data/profile'
import hamster from '../assets/hamster.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="footer__mascot">
          <a
            className="footer__credit"
            href="https://thenounproject.com/icon/hamster-8019703/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hamster icon by Rozin Abdul Hafidz Majdudin, Noun Project
          </a>
          <img className="footer__icon" src={hamster} alt="" width="32" height="32" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
