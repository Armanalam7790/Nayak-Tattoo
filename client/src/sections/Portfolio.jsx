import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { portfolioFilters, portfolioItems } from '../data/siteContent'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <SectionHeading eyebrow="Our Work" title="The Portfolio" />

        <div className="filter-row" aria-label="Portfolio filters">
          {portfolioFilters.map((filter) => (
            <button
              className={filter === activeFilter ? 'active' : ''}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visibleItems.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
