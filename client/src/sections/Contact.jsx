import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { studio } from '../data/siteContent'

const contactCards = [
  { label: 'Call / WhatsApp', value: studio.phone, href: `tel:${studio.phoneHref}`, Icon: FiPhone },
  { label: 'Email Us', value: studio.email, href: `mailto:${studio.email}`, Icon: FiMail },
  { label: 'Find Us', value: studio.location, Icon: FiMapPin },
  { label: 'Studio Hours', value: studio.hours, Icon: FiClock },
]

const Contact = () => {
  return (
    <section className="section dark-section" id="contact">
      <div className="container">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" />
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-cards">
              {contactCards.map((card) => {
                const ContactIcon = card.Icon

                return (
                  <article className="contact-card" key={card.label}>
                    <ContactIcon aria-hidden="true" />
                    <p>{card.label}</p>
                    {card.href ? <a href={card.href}>{card.value}</a> : <span>{card.value}</span>}
                  </article>
                )
              })}
            </div>
            <div className="map-card">
              <FiMapPin aria-hidden="true" />
              <p>{studio.location}</p>
              <span>{studio.phone}</span>
            </div>
          </div>

          <form className="message-form">
            <h3>Send a Message</h3>
            <label>
              Your Name
              <input type="text" placeholder="Arjun Nayak" />
            </label>
            <label>
              Email Address
              <input type="email" placeholder="arjun@email.com" />
            </label>
            <label>
              Message *
              <textarea rows="5" required placeholder="Tell us about your tattoo idea or ask us anything..." />
            </label>
            <button className="gold-button full" type="submit">
              <FiSend aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
