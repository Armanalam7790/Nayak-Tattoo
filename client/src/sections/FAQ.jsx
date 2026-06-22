import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/siteContent'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section dark-section" id="faq">
      <div className="container narrow">
        <SectionHeading eyebrow="Questions & Answers" title="Frequently Asked" />
        <div className="faq-list">
          {faqs.map((item, index) => {
            const open = index === openIndex

            return (
              <article className={`faq-item ${open ? 'open' : ''}`} key={item.question}>
                <button type="button" onClick={() => setOpenIndex(open ? -1 : index)}>
                  {item.question}
                  <FiChevronDown aria-hidden="true" />
                </button>
                {open ? <p>{item.answer}</p> : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
