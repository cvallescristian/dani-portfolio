import { profile } from '../data/profile'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}

export default Footer
