import { Link } from 'react-router-dom'
import { FiCheckCircle, FiArrowRight, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaCar, FaWhatsapp } from 'react-icons/fa'
import { servicesData } from '../data/services'
import FleetMarquee from './FleetMarquee'
import SEO from './SEO'
import './ServicePage.css'

const serviceKeywords = {
  'airport-transfer':   'maxi cab airport transfer, airport taxi, airport maxi cab sydney, fast airport transfer australia',
  'corporate-cabs':     'corporate cab, silver service taxi, corporate maxi cab, silver cab service australia',
  'cruise-transfer':    'cruise transfer maxi cab, port taxi, cruise port transfer australia',
  'general-transfer':   'taxi service near me, maxi taxi, general taxi service australia',
  'wedding-transfer':   'wedding taxi, wedding maxi cab, bridal car hire australia',
  'event-transfer':     'event taxi, group maxi cab, event transfer australia',
  'parcel-delivery':    'same day parcel delivery, taxi delivery service australia',
  'baby-seat-maxi':     'baby seat taxi, maxi cab baby seat, family taxi australia',
  'wheelchair-taxi':    'WAV cab, WAV maxi cab, wheelchair taxi, NDIS transport australia',
  'blue-mountains-tours': 'blue mountains tour taxi, blue mountains day trip sydney',
  'race-day-transfer':  'race day taxi, race day maxi cab, horse racing transfer australia',
}

export default function ServicePage({ slug }) {
  const service = servicesData[slug]
  if (!service) return <div className="sp-404">Service not found.</div>

  const seoDesc = `${service.shortDesc} Fixed fares, no surge pricing, professional drivers available 24/7 across Australia. ${service.coverageAreas.slice(0,3).join(', ')} and more.`

  return (
    <main className="service-page">
      <SEO
        canonical={`/${slug}`}
        title={`${service.title} | Maxi Cab & Taxi Service Australia`}
        description={seoDesc}
      />

      {/* ── HERO ── */}
      <section className="sp-hero" style={service.heroImg ? { backgroundImage: `url(${service.heroImg})` } : {}}>
        <div className="sp-hero-bg" />
        <div className="container sp-hero-inner">
          <div className="sp-hero-left">
            <div className="chip">Regal Maxi Cabs</div>
            <h1>{service.title}</h1>
            <p className="sp-tagline">{service.tagline}</p>
            <p className="sp-desc">{service.shortDesc}</p>
            <div className="sp-hero-actions">
              <Link to="/book" className="btn-accent">Book Now <FiArrowRight /></Link>
              <a href="tel:61485880106" className="btn-outline"><FiPhone /> Call Us</a>
            </div>
          </div>

          <div className="sp-hero-right">
            <div className="sp-service-badge">
              <div className="sp-badge-icon"><FaCar /></div>
              <h3>{service.title}</h3>
              <p>{service.tagline}</p>
              <div className="sp-badge-vehicles">
                {service.vehicles.map(v => (
                  <span key={v} className="sp-vehicle-chip">{v}</span>
                ))}
              </div>
              <Link to="/book" className="btn-accent sp-badge-cta">Book This Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="sp-section sp-about-sec">
        <div className="container sp-about-inner">
          <div className="sp-about-text">
            <div className="chip">About This Service</div>
            <h2 className="section-title">{service.title}</h2>
            <p>{service.description}</p>
          </div>
          <div className="sp-coverage-card">
            <h4><FiMapPin /> Coverage Areas</h4>
            <ul>
              {service.coverageAreas.map(a => (
                <li key={a}><FiCheckCircle /> {a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="sp-section sp-features-sec">
        <div className="container">
          <div className="section-header center">
            <div className="chip" style={{ justifyContent: 'center' }}>What You Get</div>
            <h2 className="section-title">Key Features</h2>
          </div>
          <div className="sp-features-grid">
            {service.features.map(f => (
              <div key={f.title} className="sp-feature-card">
                <FiCheckCircle className="sp-feat-icon" />
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sp-section sp-how-sec">
        <div className="container">
          <div className="section-header center">
            <div className="chip" style={{ justifyContent: 'center' }}>Simple Process</div>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="sp-how-grid">
            {service.howItWorks.map((step, i) => (
              <div key={step.step} className="sp-how-card">
                <div className="sp-step-num">{step.step}</div>
                {i < service.howItWorks.length - 1 && <div className="sp-connector" />}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEHICLES ── */}
      <section className="sp-section sp-vehicles-sec">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 40 }}>
            <div className="chip" style={{ justifyContent: 'center' }}>Our Fleet</div>
            <h2 className="section-title">Available Vehicles</h2>
            <p className="sp-fleet-sub">Hover to pause · All categories available across our service area</p>
          </div>
        </div>
        <FleetMarquee />
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta">
        <div className="sp-cta-glow" />
        <div className="container sp-cta-inner">
          <h2>Ready to Book Your {service.title}?</h2>
          <p>Fixed fares · Professional drivers · Available 24/7 across Australia</p>
          <div className="sp-cta-actions">
            <Link to="/book" className="btn-accent">Book Now <FiArrowRight /></Link>
            <a href="https://wa.me/61489188284" className="btn-outline"><FaWhatsapp /> WhatsApp</a>
            <a href="tel:61485880106" className="btn-outline"><FiPhone /> Call Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}
