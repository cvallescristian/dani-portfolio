import { profile } from '../data/profile'
import ButtonIcon from './ButtonIcon'
import './ContactLinks.css'

type ContactLinksProps = {
  centered?: boolean
}

function ContactLinks({ centered = false }: ContactLinksProps) {
  return (
    <ul className={`contact-links ${centered ? 'contact-links--centered' : ''}`}>
      {profile.contacts.map((contact) => {
        const opensNewTab = !contact.url.startsWith('mailto:')
        return (
          <li key={contact.label}>
            <a
              className="contact-links__link"
              href={contact.url}
              target={opensNewTab ? '_blank' : undefined}
              rel={opensNewTab ? 'noopener noreferrer' : undefined}
            >
              <ButtonIcon name={contact.icon} />
              {contact.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default ContactLinks
