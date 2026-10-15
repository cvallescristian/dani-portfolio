import { profile } from '../data/profile'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <span className="header__name">{profile.name}</span>
      </div>
    </header>
  )
}

export default Header
