import { FiChevronDown } from "react-icons/fi";
import { image, studio ,images } from "../data/siteContent";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <img
        className="hero-bg"
        src={images.hero}
        alt="Tattoo artist at work"
      />

      <div className="hero-shade" />

      <div className="vertical-label">
        NAYAK TATTOO STUDIO · EST. 2015 · PROFESSIONAL ARTISTRY
      </div>

      <div className="container hero-wrapper">
        {/* Left Side */}
        <div className="hero-content">
          <p className="eyebrow">Premium Tattoo Artistry - India</p>

          <h1>
            Turn Your Ideas Into <span>Timeless</span> Art
          </h1>

          <p className="hero-copy">
            Custom tattoos crafted with surgical precision, artistic vision,
            and a commitment to hygiene that never compromises. Your skin is
            our canvas.
          </p>

          <div className="hero-phone">
            <span />
            <a href={`tel:${studio.phoneHref}`}>{studio.phone}</a>
          </div>

          <div className="hero-actions">
            <a className="gold-button" href="#appointment">
              Book Appointment
            </a>

            <a className="outline-button" href="#portfolio">
              View Portfolio
            </a>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="hero-gallery">
          <img src={image.img5} alt="Tattoo Design" />
          <img src={image.img6} alt="Tattoo Artist" />
          <img src={image.img7} alt="Tattoo Work" />
          <img src={image.img8} alt="Tattoo Studio" />
        </div>
      </div>

      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll to about section"
      >
        <span />
        <FiChevronDown aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;