import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight, FiPhone, FiShield, FiClock, FiAward, FiTruck,
  FiStar, FiChevronDown, FiChevronUp, FiCheckCircle,
} from 'react-icons/fi'
import {
  MdFlightTakeoff, MdBusinessCenter, MdDirectionsBoat, MdEmojiTransportation,
  MdCardGiftcard, MdOutlineStadium, MdLocalShipping, MdFamilyRestroom,
  MdAccessible, MdPark,
} from 'react-icons/md'
import { FaQuoteLeft, FaRegClock } from 'react-icons/fa'
import BookingForm from '../components/BookingForm'
import FleetMarquee from '../components/FleetMarquee'
import SEO from '../components/SEO'
import imgHero       from '../assets/services/maxi cab in traffic.webp'
import imgAirport    from '../assets/services/airport.webp'
import imgCorporate  from '../assets/services/corporate.webp'
import imgCruise     from '../assets/services/cruise.webp'
import imgGeneral    from '../assets/services/general.webp'
import imgWedding    from '../assets/services/wedding.webp'
import imgEvent      from '../assets/services/event.webp'
import imgParcel     from '../assets/services/parcel.webp'
import imgBabySeat   from '../assets/services/baby Seat.webp'
import imgWheelchair from '../assets/services/wheel_chair.webp'
import imgBlueMtn    from '../assets/services/blue_mountain.webp'
import imgRaceDay    from '../assets/services/race_day.webp'
import './Home.css'

const services = [
  {
    icon: <MdFlightTakeoff />, label: 'Airport Transfer',
    desc: 'Never miss a flight. We monitor your flight in real-time and adjust your pickup window automatically, with meet-and-greet service waiting at arrivals.',
    points: ['Real-time flight monitoring & auto-adjusted pickup', 'Meet & greet at all major Australian airports', 'Fixed fares — no surge pricing, ever'],
    path: '/airport-transfer', bgImg: imgAirport,
  },
  {
    icon: <MdBusinessCenter />, label: 'Corporate Cabs',
    desc: 'Premium business transport built for executives. Uniformed drivers, immaculate vehicles, and a corporate account system for simplified monthly billing.',
    points: ['Uniformed, professional & discreet drivers', 'Corporate accounts with monthly invoicing', 'Priority booking for last-minute travel'],
    path: '/corporate-cabs', bgImg: imgCorporate,
  },
  {
    icon: <MdDirectionsBoat />, label: 'Cruise Transfer',
    desc: 'Start and end your cruise in comfort. We handle port-to-hotel and hotel-to-port transfers with full luggage assistance across all major Australian cruise terminals.',
    points: ['All major Australian cruise terminals', 'Luggage assistance included', 'On-time, stress-free boarding'],
    path: '/cruise-transfer', bgImg: imgCruise,
  },
  {
    icon: <MdEmojiTransportation />, label: 'General Transfer',
    desc: 'Need a reliable ride anywhere in Australia? Point-to-point transfers available 24/7 in sedans, SUVs and maxi cabs — any distance, any time.',
    points: ['24/7 availability across all cities', 'Sedan, SUV & Maxi Cab options', 'Fixed fare quoted before you confirm'],
    path: '/general-transfer', bgImg: imgGeneral,
  },
  {
    icon: <MdCardGiftcard />, label: 'Wedding Transfer',
    desc: 'Make your wedding day flawless. We provide luxury transport for bridal parties, guests and VIPs — punctual, elegant and tailored to your schedule.',
    points: ['Luxury vehicles for bridal & guest parties', 'Immaculately presented drivers', 'Custom route & timing planning'],
    path: '/wedding-transfer', bgImg: imgWedding,
  },
  {
    icon: <MdOutlineStadium />, label: 'Event Transfer',
    desc: 'Concerts, grand finals, corporate galas — we move groups of all sizes to and from events across Australia with no parking stress.',
    points: ['Groups of all sizes accommodated', 'Concerts, sports & corporate events', 'Pre-booked fixed price, no surge'],
    path: '/event-transfer', bgImg: imgEvent,
  },
  {
    icon: <MdLocalShipping />, label: 'Parcel Delivery',
    desc: 'Same-day parcel and document delivery across metro areas. Fast, tracked and handled with care by our professional drivers.',
    points: ['Same-day metro delivery', 'Fragile & document item specialists', 'Real-time driver tracking'],
    path: '/parcel-delivery', bgImg: imgParcel,
  },
  {
    icon: <MdFamilyRestroom />, label: 'Baby Seat Maxi',
    desc: 'Family travel done right. We provide Australian Standards certified infant capsules, forward-facing and booster seats — just tell us your children\'s ages when booking.',
    points: ['Australian Standards certified seats', 'Infant capsules, forward-facing & booster', 'Spacious family-sized vehicles'],
    path: '/baby-seat-maxi', bgImg: imgBabySeat,
  },
  {
    icon: <MdAccessible />, label: 'Wheelchair Taxi',
    desc: 'Accessible transport with dignity. Our WAV vehicles are fully equipped with powered ramps and certified tie-down systems. NDIS funding accepted.',
    points: ['Powered ramps & certified tie-down systems', 'NDIS funding accepted', 'Trained disability support drivers'],
    path: '/wheelchair-taxi', bgImg: imgWheelchair,
  },
  {
    icon: <MdPark />, label: 'Blue Mountains Tours',
    desc: 'Discover the magic of the Blue Mountains with a private guided day trip from Sydney. Scenic lookouts, hidden trails and iconic landmarks — all in one journey.',
    points: ['Full-day scenic tours from Sydney', 'Private or group bookings available', 'Customisable stops & itinerary'],
    path: '/blue-mountains-tours', bgImg: imgBlueMtn,
  },
  {
    icon: <MdOutlineStadium />, label: 'Race Day Transfer',
    desc: 'Skip the traffic and the parking. We get your group to all major Australian racecourses in style — on time, every time.',
    points: ['All major Australian racecourses', 'Group bookings for any party size', 'Door-to-door, no parking required'],
    path: '/race-day-transfer', bgImg: imgRaceDay,
  },
]


const whyUs = [
  { icon: <FiClock />,  title: '24/7 Availability',    desc: 'Anytime, any day — always ready to pick you up across 500+ suburbs.' },
  { icon: <FiShield />, title: 'No Surge Pricing',     desc: 'Fixed fares guaranteed. No hidden fees, no peak-hour surcharges, ever.' },
  { icon: <FiAward />,  title: '20+ Years Experience', desc: 'Two decades of trusted service with over 2.5 million rides completed.' },
  { icon: <FiTruck />,  title: '100+ Fleet Vehicles',  desc: 'Sedans, SUVs, maxi cabs and accessible vehicles across all cities.' },
]

const steps = [
  { num: '01', title: 'Book Online',    desc: 'Fill in the booking form with your trip details. Takes less than 2 minutes.' },
  { num: '02', title: 'Get Confirmed', desc: 'We confirm your booking with driver details and an exact arrival time.' },
  { num: '03', title: 'Ride in Royalty', desc: 'Your driver arrives on time. Sit back and enjoy a premium, stress-free ride.' },
]

const testimonials = [
  { name: 'Sarah M.',   city: 'Sydney',      rating: 5, text: 'Used Regal Maxi Cabs for our airport transfer at 4 AM. Driver was early, vehicle was spotless and the fare was exactly as quoted. Absolutely flawless service.' },
  { name: 'James T.',   city: 'Melbourne',   rating: 5, text: 'Booked a corporate cab for a major client event. The driver was professional, the car was immaculate, and my client was very impressed. Will always use Regal.' },
  { name: 'Priya K.',   city: 'Brisbane',    rating: 5, text: 'The baby seat was set up perfectly before we even got in the car. As a mum, that kind of attention to detail means everything. Highly recommend for families!' },
  { name: 'Michael D.', city: 'Perth',       rating: 5, text: 'Transferred a group of 10 from the hotel to the cruise terminal. Huge Sprinter, loads of boot space for luggage, and the driver was a legend. 10/10 would book again.' },
  { name: 'Emily R.',   city: 'Adelaide',    rating: 5, text: 'Used them for my wedding day transfer. The car arrived spotless and decorated exactly as requested. Our photos looked amazing. Cannot thank the team enough!' },
  { name: 'David L.',   city: 'Gold Coast',  rating: 5, text: 'Fixed fare was a godsend — no surge pricing even on New Year\'s Eve. Driver texted me 10 minutes before arrival. Smooth, comfortable ride all the way. Brilliant service.' },
]

const faqs = [
  { q: 'How do I book a Regal Maxi Cab?',           a: 'Book instantly online using our booking form above, call us on +61 485 880 106, or send us a WhatsApp message. We are available 24/7 to confirm your booking.' },
  { q: 'How many passengers can a maxi cab fit?',    a: 'Our maxi cabs accommodate 1–11 passengers, making them perfect for families, groups, corporate teams and tour groups. We also have sedans (1–4), SUVs (1–5) and people movers (1–7).' },
  { q: 'Are your fares fixed or metered?',           a: 'All our fares are 100% fixed. No surge pricing, no hidden fees, no meter surprises. You see the exact price before you confirm your booking.' },
  { q: 'Do you provide baby and child seats?',       a: 'Yes. We carry Australian Standard certified infant capsules, forward-facing and booster seats. Simply specify the ages of your children when booking.' },
  { q: 'Which airports and cities do you cover?',    a: 'We cover all major Australian airports and cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Gold Coast and many regional areas.' },
  { q: 'Is wheelchair accessible transport available?', a: 'Yes. Our wheelchair accessible vehicles are equipped with powered ramps and certified tie-down systems. Our drivers are trained in disability assistance. We also accept NDIS funding.' },
]

const stats = [
  { value: '500+',  label: 'Suburbs Covered' },
  { value: '2.5M+', label: 'Rides Completed' },
  { value: '4.9★',  label: 'Google Rating' },
  { value: '20+',   label: 'Years Serving' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
          <div className="faq-q">
            <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="faq-question">{faq.q}</span>
            <span className="faq-chevron">{open === i ? <FiChevronUp /> : <FiChevronDown />}</span>
          </div>
          {open === i && <div className="faq-a">{faq.a}</div>}
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="home">
      <SEO
        canonical="/"
        title="Premier Maxi Cab, Maxi Taxi & Silver Service Australia"
        description="Australia's #1 maxi cab & silver taxi service. Fixed fares, no surge pricing. Airport transfers, corporate silver service, WAV cabs, wedding & event transport — 24/7 across Sydney, Melbourne, Brisbane, Perth & all major cities. Book your maxi taxi online instantly."
      />

      {/* ── HERO ── */}
      <section className="hero" style={{ backgroundImage: `url(${imgHero})` }}>
        <div className="hero-overlay" />
        <div className="hero-grid-pattern" />
        <div className="container hero-inner">

          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              Australia's Premier Transport Service
            </div>
            <h1 className="hero-title">
              <span className="hero-outline">Ride in</span>
              <span className="hero-solid">Royalty</span>
            </h1>
            <p className="hero-subtitle">
              Professional drivers, fixed fares, no surge pricing — from airport
              runs to luxury group transfers across Australia.
            </p>
            <div className="hero-trust">
              <span><FiCheckCircle /> No Surge Pricing</span>
              <span><FiCheckCircle /> Fixed Fares</span>
              <span><FiCheckCircle /> 500+ Suburbs</span>
              <span><FiCheckCircle /> 4.9★ Google</span>
              <span><FiCheckCircle /> 24/7 Service</span>
            </div>
            <div className="hero-actions">
              <Link to="/book" className="btn-gold hero-btn-main">Book Now <FiArrowRight /></Link>
              <a href="tel:+61485880106" className="btn-outline"><FiPhone /> +61 485 880 106</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-card-title">Quick Booking</span>
              <span className="hero-card-sub">Takes 2 minutes</span>
            </div>
            <div className="hero-quick-links">
              {services.slice(0, 6).map(s => (
                <Link key={s.path} to={s.path} className="hql-item">
                  <span className="hql-icon">{s.icon}</span>
                  <span>{s.label}</span>
                  <FiArrowRight className="hql-arrow" />
                </Link>
              ))}
            </div>
            <Link to="/book" className="btn-gold hero-card-cta">Open Full Booking Form <FiArrowRight /></Link>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map(s => (
            <div key={s.label} className="hs-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FIRST RIDE PROMO ── */}
      <section className="promo-banner">
        <div className="container promo-inner">
          <div className="promo-badge">LIMITED OFFER</div>
          <div className="promo-text">
            <strong>15% OFF</strong> your first ride with Regal Maxi Cabs
          </div>
          {/* <div className="promo-sub">Use code <span className="promo-code">REGAL15</span> at checkout &mdash; no min. spend required</div> */}
          <Link to="/book" className="btn-gold promo-cta">Claim Offer <FiArrowRight /></Link>
        </div>
      </section>

      {/* ── SERVICES BENTO ── */}
      <section className="section services-sec">
        <div className="container">
          <div className="section-header">
            <div className="chip">What We Offer</div>
            <h2 className="section-title">Every Journey,<br />Expertly Handled</h2>
            <p className="section-desc">11 premium transport services available 24/7 across Australia.</p>
          </div>
          <div className="services-list">
            {services.map((s, i) => (
              <div key={s.path} className={`svc-row${i % 2 === 1 ? ' svc-row--flip' : ''}`}>
                <div className="svc-row-img" style={{ backgroundImage: `url(${s.bgImg})` }}>
                  <div className="svc-row-img-fade" />
                </div>
                <div className="svc-row-content">
                  <div className="svc-row-icon">{s.icon}</div>
                  <h3 className="svc-row-title">{s.label}</h3>
                  <p className="svc-row-desc">{s.desc}</p>
                  <ul className="svc-row-points">
                    {s.points.map(pt => (
                      <li key={pt}><FiCheckCircle /> {pt}</li>
                    ))}
                  </ul>
                  <div className="svc-row-actions">
                    <Link to="/book" className="svc-row-btn">Book Now <FiArrowRight /></Link>
                    <Link to={s.path} className="svc-row-link">View Service <FiArrowRight /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section className="section booking-sec" id="book">
        <div className="container">
          <div className="booking-sec-header">
            <div>
              <div className="chip gold">Book Your Ride</div>
              <h2 className="section-title">Book Your Maxi Cabs Now!</h2>
              <p className="section-desc">Fill in your trip details and we confirm promptly. Fixed fares — no surprises.</p>
            </div>
            <div className="booking-trust-badges">
              <div className="btb-item"><FiShield /> Fixed Fares</div>
              <div className="btb-item"><FiClock /> 24/7 Available</div>
              <div className="btb-item"><FaRegClock /> Fast Confirmation</div>
            </div>
          </div>
          <div className="booking-form-wrap">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section className="section fleet-sec">
        <div className="container">
          <div className="section-header center">
            <div className="chip" style={{ justifyContent: 'center' }}>Our Fleet</div>
            <h2 className="section-title">Vehicles for Every Journey</h2>
            <p className="section-desc c">Hover to pause · Explore our full range of immaculately maintained vehicles.</p>
          </div>
        </div>
        <FleetMarquee />
      </section>

      {/* ── WHY US ── */}
      <section className="section whyus-sec">
        <div className="container">
          <div className="whyus-layout">
            <div className="whyus-left">
              <div className="chip">Why Choose Us</div>
              <h2 className="section-title">The Regal<br />Difference</h2>
              <p className="section-desc">We don't just drive you — we deliver a premium experience that reflects the quality our name stands for.</p>
              <Link to="/book" className="btn-gold whyus-cta">Book a Ride <FiArrowRight /></Link>
            </div>

            <div className="whyus-right">
              <div className="wus-stats">
                {stats.map(s => (
                  <div key={s.label} className="wus-stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="whyus-grid">
                {whyUs.map(w => (
                  <div key={w.title} className="why-card">
                    <div className="why-icon">{w.icon}</div>
                    <div>
                      <h4>{w.title}</h4>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section how-sec">
        <div className="container">
          <div className="section-header center">
            <div className="chip" style={{ justifyContent: 'center' }}>Simple Process</div>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="how-grid">
            {steps.map((s, i) => (
              <div key={s.num} className="how-card">
                <div className="how-num">{s.num}</div>
                {i < steps.length - 1 && <div className="how-connector" />}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section reviews-sec">
        <div className="container">
          <div className="section-header center">
            <div className="chip gold" style={{ justifyContent: 'center' }}>Passenger Reviews</div>
            <h2 className="section-title">Trusted by Thousands</h2>
            <div className="google-rating-bar">
              <div className="grb-brand">
                <svg viewBox="0 0 48 48" width="38" height="38" aria-label="Google">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span className="grb-google-wordmark">Google</span>
              </div>
              <div className="grb-divider" />
              <div className="grb-center">
                <span className="grb-score">4.9</span>
                <div className="grb-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" width="20" height="20">
                      <path fill="#FBBC05" d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78z"/>
                    </svg>
                  ))}
                </div>
                <span className="grb-count">2,500+ Google reviews</span>
              </div>
              <div className="grb-divider" />
              <div className="grb-verified-col">
                <span className="grb-verified">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#34A853"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Verified Business
                </span>
                <span className="grb-verified">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#34A853"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Verified Reviews
                </span>
              </div>
            </div>
          </div>
          <div className="reviews-grid">
            {testimonials.map(t => (
              <div key={t.name} className="review-card">
                <div className="review-top">
                  <FaQuoteLeft className="review-quote" />
                  <div className="review-stars">
                    {[...Array(t.rating)].map((_, i) => <FiStar key={i} className="star" />)}
                  </div>
                </div>
                <p className="review-text">{t.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-sec">
        <div className="container">
          <div className="section-header center">
            <div className="chip" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc c">Can't find the answer? Call us 24/7 or send us a message.</p>
          </div>
          <FAQ />
          <div className="faq-bottom-row">
            <a href="tel:+61485880106" className="btn-outline"><FiPhone /> Call Us Now</a>
            <Link to="/contact" className="btn-outline">Send a Message</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-sec" style={{ backgroundImage: `url(${imgHero})` }}>
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <h2>Ready to Ride in Royalty?</h2>
          <p>Book your next trip with Regal Maxi Cabs — 24/7 across Australia.</p>
          <div className="cta-actions">
            <Link to="/book" className="btn-gold">Book Now <FiArrowRight /></Link>
            <a href="https://wa.me/61489188284" className="btn-outline">WhatsApp Us</a>
            <a href="tel:+61485880106" className="btn-outline"><FiPhone /> Call Us</a>
          </div>
        </div>
      </section>

    </main>
  )
}
