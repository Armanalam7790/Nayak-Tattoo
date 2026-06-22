import { FiClock, FiMapPin, FiPhone, FiUpload } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { studio, tattooSizes, timeSlots } from '../data/siteContent'

const Appointment = () => {
  return (
    <section className="section dark-section" id="appointment">
      <div className="container booking-grid">
        <div>
          <SectionHeading eyebrow="Book Your Session" title="Reserve Your Spot" align="left" />
          <p>
            Fill in the form and we'll get back to you within a few hours to confirm your
            appointment, discuss your design, and answer any questions.
          </p>
          <div className="booking-info">
            <a href={`tel:${studio.phoneHref}`}>
              <FiPhone aria-hidden="true" />
              {studio.phone}
            </a>
            <span>
              <FiClock aria-hidden="true" />
              Mon - Sat: 11:00 AM - 8:00 PM
            </span>
            <span>
              <FiMapPin aria-hidden="true" />
              {studio.location}
            </span>
          </div>
        </div>

        <form className="appointment-form">
          <h3>Appointment Request</h3>
          <div className="form-grid">
            <label>
              Full Name *
              <input type="text" required />
            </label>
            <label>
              Phone *
              <input type="tel" required />
            </label>
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Preferred Date
              <input type="date" />
            </label>
            <label>
              Preferred Time
              <select defaultValue="">
                <option value="" disabled>
                  Select time
                </option>
                {timeSlots.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </label>
            <label>
              Tattoo Size
              <select defaultValue="">
                <option value="" disabled>
                  Select size
                </option>
                {tattooSizes.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Placement
            <input type="text" />
          </label>
          <label>
            Tattoo Description *
            <textarea required rows="5" />
          </label>
          <label className="file-control">
            <FiUpload aria-hidden="true" />
            <span>Upload reference image (optional)</span>
            <input type="file" />
          </label>
          <button className="gold-button full" type="submit">
            Submit Appointment Request
          </button>
        </form>
      </div>
    </section>
  )
}

export default Appointment
