import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiPhone, FiMail, FiSend, FiCheckCircle, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SEO from '../components/SEO'
import './Contact.css'

/*
  EmailJS setup for Contact form:
  Create a second template (or reuse the same service) for contact enquiries.
  Template variables: {{from_name}}, {{email}}, {{phone}}, {{message}}
  Replace the values below with your real EmailJS IDs.
*/
const EMAILJS_SERVICE_ID = 'service_u1vxs5r'
const EMAILJS_TEMPLATE_ID = 'template_8dpeeud'
const EMAILJS_PUBLIC_KEY = '331t2N8cbBNRYAWj0'

const contactInfo = [
  {
    icon: <FiPhone />,
    title: 'Phone',
    value: '+61 485 880 106',
    sub: 'Available 24/7',
    href: 'tel:+61485880106',
  },
  {
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    value: '+61 489 188 284',
    sub: 'Message us anytime',
    href: 'https://wa.me/61489188284',
  },
  {
    icon: <FiMail />,
    title: 'Email',
    value: 'info@regalmaxicabs.com.au',
    sub: 'Reply within a few hours',
    href: 'mailto:info@regalmaxicabs.com.au',
  },
  {
    icon: <FiMapPin />,
    title: 'Coverage',
    value: 'All Over Australia',
    sub: 'Sydney · Melbourne · Brisbane · Perth & more',
  },
  {
    icon: <FiClock />,
    title: 'Hours',
    value: '24 Hours / 7 Days',
    sub: 'Never closed',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ from_name: '', email: '', phone: '', message: '' })

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ from_name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      <SEO
        canonical="/contact"
        title="Contact Us | 24/7 Maxi Cab & Taxi Service"
        description="Contact Regal Maxi Cabs 24/7. Call, WhatsApp or email our team to book a maxi cab, silver taxi, WAV cab or airport transfer anywhere in Australia. Fast response guaranteed."
      />

      {/* ── HERO ── */}
      <section className="cp-hero">
        <div className="cp-hero-bg" />
        <div className="container cp-hero-inner">
          <div className="chip">Get In Touch</div>
          <h1>Contact <span className="cp-accent">Regal Maxi Cabs</span></h1>
          <p>Have questions? We're here to help! Send us a message and we'll respond as soon as possible.</p>
          <div className="cp-hero-quick">
            <a href="tel:+61485880106" className="btn-accent"><FiPhone /> Call Us Now</a>
            <a href="https://wa.me/61489188284" className="btn-outline"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="cp-info-sec">
        <div className="container cp-info-grid">
          {contactInfo.map(item => (
            <div key={item.title} className="cp-info-card">
              <div className="cp-info-icon">{item.icon}</div>
              <div className="cp-info-title">{item.title}</div>
              {item.href
                ? <a href={item.href} className="cp-info-value">{item.value}</a>
                : <div className="cp-info-value">{item.value}</div>
              }
              <div className="cp-info-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="cp-form-sec">
        <div className="container cp-form-inner">

          <div className="cp-form-header">
            <div className="chip">Send a Message</div>
            <h2>Get In Touch With Us</h2>
            <p>Have questions? We're here to help! Send us a message and we'll respond as soon as possible.</p>
          </div>

          {status === 'success' ? (
            <div className="cp-success">
              <FiCheckCircle className="cp-success-icon" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within a few hours.</p>
              <button className="btn-accent" onClick={() => setStatus('idle')}>Send Another</button>
            </div>
          ) : (
            <form ref={formRef} className="cp-form" onSubmit={handleSubmit}>

              <div className="cf-row">
                <div className="field-group">
                  <label className="field-label">Your Name <span className="req">*</span></label>
                  <input name="from_name" type="text" className="field-input"
                    placeholder="Your Full Name"
                    value={form.from_name} onChange={set('from_name')} required />
                </div>
                <div className="field-group">
                  <label className="field-label">Your Email <span className="req">*</span></label>
                  <input name="email" type="email" className="field-input"
                    placeholder="your.email@example.com"
                    value={form.email} onChange={set('email')} required />
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Phone Number</label>
                <div className="phone-row">
                  <span className="phone-flag">🇦🇺 +61</span>
                  <input name="phone" type="tel" className="field-input phone-field"
                    placeholder="Your Phone Number"
                    value={form.phone} onChange={set('phone')} />
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Your Message <span className="req">*</span></label>
                <textarea name="message" className="field-textarea"
                  placeholder="How can we help you?"
                  value={form.message} onChange={set('message')}
                  rows={6} required />
              </div>

              {status === 'error' && (
                <div className="cp-error">Something went wrong. Please try again or call us directly on +61 485 880 106.</div>
              )}

              <button type="submit" className="cp-submit btn-accent" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : <><FiSend /> Send Message</>}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
