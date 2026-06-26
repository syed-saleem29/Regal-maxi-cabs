import { useSearchParams } from 'react-router-dom'
import { FiShield, FiClock, FiPhone, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import BookingForm from '../components/BookingForm'
import SEO from '../components/SEO'
import './Booking.css'

const features = [
  { icon: <FiCheckCircle />, title: 'Fixed Fares', desc: 'No surge pricing. Know your fare before you confirm.' },
  { icon: <FiShield />, title: 'Secure Booking', desc: 'Your details are safe and your booking is guaranteed.' },
  { icon: <FiClock />, title: 'Fast Confirmation', desc: 'We confirm within minutes via email and SMS.' },
]

export default function Booking() {
  const [searchParams] = useSearchParams()

  const initialValues = {
    pickup: searchParams.get('pickup') || '',
    dropoff: searchParams.get('dropoff') || '',
    date: searchParams.get('date') || '',
  }

  return (
    <main className="booking-page">
      <SEO
        canonical="/book"
        title="Book a Maxi Cab | Instant Online Taxi Booking"
        description="Book your maxi cab, silver taxi or WAV cab online in minutes. Fixed fares, no surge pricing. Airport transfers, corporate travel & more — 24/7 across Australia. Instant confirmation."
      />

      {/* ── HERO ── */}
      <section className="bp-hero">
        <div className="bp-hero-bg" />
        <div className="container bp-hero-inner">
          <div className="chip">Online Booking</div>
          <h1>Book Your Maxi Cabs Now!</h1>
          <p>Fill in your trip details below. We confirm within minutes — available 24/7 across Australia.</p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="bp-main">
        <div className="container bp-grid">

          {/* Form */}
          <div className="bp-form-col">
            <div className="bp-form-card">
              <BookingForm initialValues={initialValues} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bp-sidebar">
            <div className="bp-sidebar-card">
              <h3>Why Book With Us?</h3>
              <div className="bp-features">
                {features.map(f => (
                  <div key={f.title} className="bp-feature">
                    <div className="bp-feature-icon">{f.icon}</div>
                    <div>
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bp-sidebar-card bp-contact-card">
              <h3>Need Help Booking?</h3>
              <p>Our team is available 24/7 to help you with your booking.</p>
              <a href="tel:+61485880106" className="btn-accent bp-call-btn">
                <FiPhone /> Call +61 485 880 106
              </a>
              <a href="https://wa.me/61489188284" className="btn-outline bp-wa-btn">
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>

            <div className="bp-note">
              <FiShield />
              <p>Your personal information is secure and will only be used to process your booking request.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
