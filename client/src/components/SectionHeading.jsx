const SectionHeading = ({ eyebrow, title, text, align = 'center' }) => {
  return (
    <div className={`section-heading ${align === 'left' ? 'left' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="heading-rule" aria-hidden="true">
        <span />
      </div>
      {text ? <p className="section-copy">{text}</p> : null}
    </div>
  )
}

export default SectionHeading
