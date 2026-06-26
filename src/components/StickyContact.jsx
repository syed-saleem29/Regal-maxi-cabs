import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './StickyContact.css'

export default function StickyContact() {
  return (
    <div className="sticky-contact">
      <a href="tel:+61485880106" className="sc-btn sc-phone" aria-label="Call us">
        <FiPhone />
      </a>
      <a href="https://wa.me/61489188284" target='_blank' className="sc-btn sc-wa" aria-label="WhatsApp us">
        <FaWhatsapp />
      </a>
    </div>
  )
}
