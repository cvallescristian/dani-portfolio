import { profile } from '../data/profile'
import './ContactLinks.css'

type ContactLinksProps = {
  centered?: boolean
}

function ContactLinks({ centered = false }: ContactLinksProps) {
  return (
    <ul className={`contact-links ${centered ? 'contact-links--centered' : ''}`}>
      {profile.contacts.map((contact) => {
        const isExternal = contact.url.startsWith('http')
        return (
          <li key={contact.label}>
            <a
              className="contact-links__link"
              href={contact.url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              {contact.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default ContactLinks
