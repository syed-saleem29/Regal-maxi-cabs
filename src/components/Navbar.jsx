import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import mainLogo from '../assets/main-logo.webp'
import './Navbar.css'

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [taxiOpen, setTaxiOpen] = useState(false)
  const [premiumOpen, setPremiumOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setMenuOpen(false); setTaxiOpen(false); setPremiumOpen(false)
  }, [location])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {/* Main nav */}
      <div className="navbar-main">
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src={mainLogo} alt="Regal Maxi Cabs" fetchpriority="high" />
          </Link>

          <nav className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/airport-transfer" className="nav-link">Airport Transfer</Link>

            <div className="nav-dropdown"
              onMouseEnter={() => setTaxiOpen(true)}
              onMouseLeave={() => setTaxiOpen(false)}>
              <button className="nav-link dropdown-trigger">
                Taxi Services <FiChevronDown className={`chevron${taxiOpen ? ' open' : ''}`} />
              </button>
              {taxiOpen && (
                <div className="dropdown-menu">
                  {taxiServices.map(s => (
                    <Link key={s.path} to={s.path} className="dropdown-item">{s.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <div className="nav-dropdown"
              onMouseEnter={() => setPremiumOpen(true)}
              onMouseLeave={() => setPremiumOpen(false)}>
              <button className="nav-link dropdown-trigger">
                Premium Services <FiChevronDown className={`chevron${premiumOpen ? ' open' : ''}`} />
              </button>
              {premiumOpen && (
                <div className="dropdown-menu">
                  {premiumServices.map(s => (
                    <Link key={s.path} to={s.path} className="dropdown-item">{s.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className="nav-link">Gallery</Link>
            {/* <Link to="/blog" className="nav-link">Blog</Link> */}
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </nav>

          <div className="navbar-actions">
            <Link to="/book" className="btn-gold nav-book">Book Now</Link>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mob-link">Home</Link>
          <Link to="/airport-transfer" className="mob-link">Airport Transfer</Link>
          <div className="mob-heading">Taxi Services</div>
          {taxiServices.map(s => <Link key={s.path} to={s.path} className="mob-link sub">{s.label}</Link>)}
          <div className="mob-heading">Premium Services</div>
          {premiumServices.map(s => <Link key={s.path} to={s.path} className="mob-link sub">{s.label}</Link>)}
          <Link to="/gallery" className="mob-link">Gallery</Link>
          <Link to="/blog" className="mob-link">Blog</Link>
          <Link to="/contact" className="mob-link">Contact Us</Link>
          <div className="mob-actions">
            <Link to="/book" className="btn-accent">Book Now</Link>
            <a href="tel:+61485880106" className="btn-accent"><FiPhone /> Call Us</a>
          </div>
        </div>
      )}
    </header>
  )
}
