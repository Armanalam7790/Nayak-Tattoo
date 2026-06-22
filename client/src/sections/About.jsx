import SectionHeading from '../components/SectionHeading'
import { aboutStats, badges, images } from '../data/siteContent'

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img src={images.about} alt="Tattoo artist creating custom artwork" />
          <div className="experience-card">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
          <div className="corner-line" />
        </div>

        <div>
          <SectionHeading eyebrow="Our Story" title="Where Craft Meets Skin" align="left" />
          <p>
            Nayak Tattoo Studio was founded on a single conviction: that every person deserves
            museum-quality art permanently etched on their body. What began as a one-chair studio has
            grown into one of India's most respected tattoo destinations - built on word of mouth,
            obsessive craft, and an uncompromising hygiene standard.
          </p>
          <p>
            Our artists are trained across disciplines - from photorealistic portraiture to bold
            blackwork - so your vision is always met by exactly the right skill set. We do not rush,
            we do not compromise, and we never use a template when custom is possible.
          </p>

          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="badge-list">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
