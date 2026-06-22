import { useRef } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/siteContent";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Client Voices"
          title="What Our Clients Say"
        />

        <div className="testimonial-wrapper">
          <button className="slider-btn left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-slider" ref={sliderRef}>
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <FaQuoteLeft className="quote-icon" />

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="testimonial-text">{item.quote}</p>

                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.city}</span>
                </div>
              </article>
            ))}
          </div>

          <button className="slider-btn right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;