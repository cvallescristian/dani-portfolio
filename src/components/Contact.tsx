import { profile } from '../data/profile'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
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
      </div>
      <footer className="contact__footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </section>
  )
}

export default Contact
