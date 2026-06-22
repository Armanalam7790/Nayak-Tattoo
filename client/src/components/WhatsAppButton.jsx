import { FiMessageCircle } from 'react-icons/fi'
import { studio } from '../data/siteContent'

const WhatsAppButton = () => {
  return (
    <a className="whatsapp-button" href={studio.whatsapp} target="_blank" rel="noreferrer">
      <FiMessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton
