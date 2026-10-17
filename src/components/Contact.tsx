import ContactLinks from './ContactLinks'
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
        <ContactLinks />
      </Reveal>
    </section>
  )
}

export default Contact
