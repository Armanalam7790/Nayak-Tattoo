import { FiInstagram } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { instagramImages, studio } from '../data/siteContent'

const Instagram = () => {
  return (
    <section className="section instagram-section" id="instagram">
      <div className="container">
        <SectionHeading
          eyebrow={studio.instagram}
          title="Follow Our Work"
          text="Fresh ink drops daily on Instagram."
        />
        <div className="instagram-grid">
          {instagramImages.map((image) => (
            <a className="instagram-card" href="#instagram" key={image}>
              <img src={image} alt="Instagram gallery" />
              <FiInstagram aria-hidden="true" />
            </a>
          ))}
        </div>
        <a className="outline-button centered" href="#instagram">
          <FiInstagram aria-hidden="true" />
          Follow {studio.instagram}
        </a>
      </div>
    </section>
  )
}

export default Instagram
