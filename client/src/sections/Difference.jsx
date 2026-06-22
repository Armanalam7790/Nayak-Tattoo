import { FiAward, FiDollarSign, FiDroplet, FiShield, FiTool, FiUsers } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { differenceItems } from '../data/siteContent'

const icons = [FiShield, FiUsers, FiAward, FiTool, FiDroplet, FiDollarSign]

const Difference = () => {
  return (
    <section className="section" id="difference">
      <div className="container">
        <SectionHeading eyebrow="Why Nayak" title="The Nayak Difference" />
        <div className="difference-grid">
          {differenceItems.map((item, index) => {
            const Icon = icons[index]

            return (
              <article className="difference-card" key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Difference
