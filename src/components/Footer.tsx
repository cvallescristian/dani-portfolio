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
        <img className="footer__icon" src={hamster} alt="" width="32" height="32" />
      </div>
    </footer>
  )
}

export default Footer
