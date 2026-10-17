import { profile } from '../data/profile'
import Reveal from './Reveal'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="container">
        <h2 className="contact__heading">Let's connect</h2>
        <p className="contact__text">
          Have a project in mind or want to collaborate? Reach out.
        </p>
        <ul className="contact__links">
          {profile.contacts.map((contact) => {
            const isExternal = contact.url.startsWith('http')
            return (
              <li key={contact.label}>
                <a
                  className="contact__link"
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
      </Reveal>
    </section>
  )
}

export default Contact
