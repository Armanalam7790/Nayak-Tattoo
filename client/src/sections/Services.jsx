import SectionHeading from '../components/SectionHeading'
import { services } from '../data/siteContent'

const Services = () => {
  return (
    <section className="section dark-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Specialities"
          text="Eight distinct disciplines. One studio. Mastered."
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
