import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import mainLogo from '../assets/main-logo.webp'
import './Footer.css'

const taxiServices = [
  { label: 'Corporate Cabs', path: '/corporate-cabs' },
  { label: 'Cruise Transfer', path: '/cruise-transfer' },
  { label: 'General Transfer', path: '/general-transfer' },
  { label: 'Wedding Transfer', path: '/wedding-transfer' },
  { label: 'Event Transfer', path: '/event-transfer' },
  { label: 'Parcel Delivery', path: '/parcel-delivery' },
]
const premiumServices = [
  { label: 'Baby Seat Maxi', path: '/baby-seat-maxi' },
  { label: 'Wheelchair Taxi', path: '/wheelchair-taxi' },
  { label: 'Blue Mountains Tours', path: '/blue-mountains-tours' },
  { label: 'Race Day Transfer', path: '/race-day-transfer' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-top container">

        <div className="fc brand-col">
          <Link to="/" className="footer-logo-wrap">
            <img src={mainLogo} alt="Regal Maxi Cabs" className="footer-logo" />
          </Link>
          <p className="footer-desc">
            Australia's premier maxi cab service. Professional drivers, fixed fares,
            and 24/7 availability across all major Australian cities.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://wa.me/61489188284" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="fc">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/airport-transfer">Airport Transfer</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/book">Book a Ride</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="fc">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-list">
            {[...taxiServices, ...premiumServices].map(s => (
              <li key={s.path}><Link to={s.path}>{s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="fc">
          <h4 className="footer-heading">Policies</h4>
          <ul className="footer-list">
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cancellation-policy">Refund Policy</Link></li>
          </ul>
        </div>

        <div className="fc">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li><FiPhone /><a href="tel:+61485880106">+61 485 880 106</a></li>
            <li><FiMail /><a href="mailto:info@regalmaxicabs.com.au">info@regalmaxicabs.com.au</a></li>
            <li><FaWhatsapp /><a href="https://wa.me/61489188284">WhatsApp Us</a></li>
            <li><FiMapPin /><span>All over Australia — 24/7</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Regal Maxi Cabs Pty Ltd</p>
        <p className="footer-tagline">Ride in Royalty</p>
      </div>
    </footer>
  )
}
