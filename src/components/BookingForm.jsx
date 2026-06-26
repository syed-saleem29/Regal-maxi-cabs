import { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FiMapPin, FiCheckCircle, FiSend, FiCalendar, FiClock } from 'react-icons/fi'
import './BookingForm.css'

/*
  EmailJS setup:
  1. Sign up free at https://www.emailjs.com
  2. Connect your Gmail and set sender as booking@regalmaxicabs.com.au
  3. Create a template — use these variables: {{transfer_type}}, {{pickup}}, {{dropoff}},
     {{date}}, {{time}}, {{name}}, {{email}}, {{phone}}, {{passengers}}, {{business}},
     {{business_name}}, {{taxi_type}}, {{trip_type}}, {{instructions}}
  4. Replace the three placeholder values below with your real IDs
*/
const EMAILJS_SERVICE_ID = 'service_iy018xs'
const EMAILJS_TEMPLATE_ID = 'template_yybqdkq'
const EMAILJS_PUBLIC_KEY = '331t2N8cbBNRYAWj0'

const TRANSFER_TYPES = [
  'Airport Transfer',
  'Corporate Transfer',
  'Cruise Transfer',
  'Wedding Transfer',
  'Event Transfer',
  'General Transfer',
  'Blue Mountains Tour',
  'Race Day Transfer',
  'Parcel Delivery',
]

const TAXI_TYPES = [
  'Sedan (1–4 Passengers)',
  'SUV (1–5 Passengers)',
  'Maxi Cab (1–11 Passengers)',
  'People Mover (1–7 Passengers)',
  'Wheelchair Accessible',
  'Coach Hire (Up to 40 Passengers)',
  'Large Coach (Up to 50 Passengers)',
  'Premium Party Bus (Up to 20 Passengers)',
]


export default function BookingForm({ compact = false, initialValues = {} }) {
  const formRef = useRef(null)
  const pickupRef = useRef(null)
  const dropRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const [form, setForm] = useState({
    transfer_type: '',
    pickup: initialValues.pickup || '',
    dropoff: initialValues.dropoff || '',
    date: initialValues.date || '',
    dateObj: null,
    time: '',
    timeObj: null,
    name: initialValues.name || '',
    email: initialValues.email || '',
    phone: '',
    passengers: '',
    business: 'Personal',
    business_name: '',
    taxi_type: '',
    trip_type: 'One Way',
    instructions: '',
  })

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const now = new Date()
  const isSelectedToday = form.dateObj &&
    form.dateObj.getFullYear() === now.getFullYear() &&
    form.dateObj.getMonth() === now.getMonth() &&
    form.dateObj.getDate() === now.getDate()

  const timeMin = (() => {
    if (isSelectedToday) return now
    const d = new Date(); d.setHours(0, 0, 0, 0); return d
  })()
  const timeMax = (() => { const d = new Date(); d.setHours(23, 30, 0, 0); return d })()

  // Attach Google Places autocomplete when API is available
  useEffect(() => {
    if (!window.google?.maps?.places) return
    const opts = { componentRestrictions: { country: 'au' } }
    const pa = new window.google.maps.places.Autocomplete(pickupRef.current, opts)
    pa.addListener('place_changed', () => setForm(f => ({ ...f, pickup: pickupRef.current.value })))
    const da = new window.google.maps.places.Autocomplete(dropRef.current, opts)
    da.addListener('place_changed', () => setForm(f => ({ ...f, dropoff: dropRef.current.value })))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bf-success">
        <FiCheckCircle className="bf-success-icon" />
        <h3>Booking Request Sent!</h3>
        <p>We have received your request and will confirm your booking within a few hours. Check your email for updates.</p>
        <button className="btn-accent" onClick={() => setStatus('idle')}>Make Another Booking</button>
      </div>
    )
  }

  return (
    <form ref={formRef} className={`booking-form${compact ? ' compact' : ''}`} onSubmit={handleSubmit}>
      <div className="bf-grid">

        {/* Transfer Type */}
        <div className="field-group bf-full">
          <label className="field-label">Select Transfer Type <span className="req">*</span></label>
          <select name="transfer_type" className="field-select" value={form.transfer_type} onChange={set('transfer_type')} required>
            <option value="" disabled>Select Transfer Type</option>
            {TRANSFER_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>

        {/* Pickup */}
        <div className="field-group bf-full">
          <label className="field-label"><FiMapPin className="fl-icon accent" /> Pick-Up Address <span className="req">*</span></label>
          <input
            ref={pickupRef} name="pickup" type="text"
            className="field-input" placeholder="Pick-Up Address"
            value={form.pickup} onChange={set('pickup')} required
          />
        </div>

        {/* Drop-off */}
        <div className="field-group bf-full">
          <label className="field-label"><FiMapPin className="fl-icon gold" /> Drop-Off Address <span className="req">*</span></label>
          <input
            ref={dropRef} name="dropoff" type="text"
            className="field-input" placeholder="Drop-Off Address"
            value={form.dropoff} onChange={set('dropoff')} required
          />
        </div>

        {/* Date */}
        <div className="field-group">
          <label className="field-label"><FiCalendar className="fl-icon accent" /> Date <span className="req">*</span></label>
          <div className="dp-wrap">
            <DatePicker
              selected={form.dateObj || null}
              onChange={(d) => setForm(f => ({
                ...f,
                dateObj: d,
                date: d ? `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` : '',
                timeObj: null,
                time: '',
              }))}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
              className="field-input dp-input"
              wrapperClassName="dp-wrapper"
              calendarClassName="rmc-calendar"
              popperClassName="rmc-popper"
              popperPlacement="bottom-start"
              showPopperArrow={false}
              required
            />
            <input type="hidden" name="date" value={form.date} />
          </div>
        </div>

        {/* Time */}
        <div className="field-group">
          <label className="field-label"><FiClock className="fl-icon accent" /> Time <span className="req">*</span></label>
          <div className="dp-wrap">
            <DatePicker
              selected={form.timeObj || null}
              onChange={(d) => setForm(f => ({
                ...f,
                timeObj: d,
                time: d ? `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}` : '',
              }))}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              minTime={timeMin}
              maxTime={timeMax}
              timeCaption=""
              timeFormat="HH:mm"
              dateFormat="HH:mm"
              placeholderText="Select Time"
              className="field-input dp-input"
              wrapperClassName="dp-wrapper"
              calendarClassName="rmc-calendar rmc-time-only"
              popperClassName="rmc-popper"
              popperPlacement="bottom-start"
              showPopperArrow={false}
              required
            />
            <input type="hidden" name="time" value={form.time} />
          </div>
        </div>

        {/* Name */}
        <div className="field-group">
          <label className="field-label">Name <span className="req">*</span></label>
          <input name="name" type="text" className="field-input" placeholder="Your Full Name"
            value={form.name} onChange={set('name')} required />
        </div>

        {/* Email */}
        <div className="field-group">
          <label className="field-label">Email <span className="req">*</span></label>
          <input name="email" type="email" className="field-input" placeholder="your.email@example.com"
            value={form.email} onChange={set('email')} required />
        </div>

        {/* Phone */}
        <div className="field-group">
          <label className="field-label">Phone Number <span className="req">*</span></label>
          <div className="phone-wrap">
            <span className="phone-prefix">+61</span>
            <input name="phone" type="tel" className="field-input phone-input"
              placeholder="Your Phone Number"
              value={form.phone} onChange={set('phone')} required />
          </div>
        </div>

        {/* Passengers */}
        <div className="field-group">
          <label className="field-label">Passengers</label>
          <select name="passengers" className="field-select" value={form.passengers} onChange={set('passengers')}>
            <option value="">Select Passengers</option>
            {[...Array(11)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>

        {/* Business Use */}
        <div className="field-group">
          <label className="field-label">Business Use</label>
          <select name="business" className="field-select" value={form.business} onChange={set('business')}>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Business Name — shown only when Business is selected */}
        {form.business === 'Business' && (
          <div className="field-group">
            <label className="field-label">Business Name <span className="req">*</span></label>
            <input
              name="business_name" type="text" className="field-input"
              placeholder="Your Company or Business Name"
              value={form.business_name} onChange={set('business_name')} required
            />
          </div>
        )}

        {/* Taxi Type */}
        <div className="field-group">
          <label className="field-label">Select Taxi Type <span className="req">*</span></label>
          <select name="taxi_type" className="field-select" value={form.taxi_type} onChange={set('taxi_type')} required>
            <option value="" disabled>Select Taxi Type</option>
            {TAXI_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>

        {/* Trip Type */}
        <div className="field-group">
          <label className="field-label">Select Trip Type <span className="req">*</span></label>
          <div className="trip-type-row">
            {['One Way', 'Return'].map(type => (
              <label key={type} className={`trip-option${form.trip_type === type ? ' selected' : ''}`}>
                <input type="radio" name="trip_type" value={type}
                  checked={form.trip_type === type} onChange={set('trip_type')} />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div className="field-group bf-full">
          <label className="field-label">Special Instructions</label>
          <textarea name="instructions" className="field-textarea" placeholder="Special Instructions"
            value={form.instructions} onChange={set('instructions')} rows={3} />
        </div>

      </div>

      {status === 'error' && (
        <div className="bf-error">Something went wrong. Please try again or call us directly.</div>
      )}

      <button type="submit" className="bf-submit btn-accent" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : <><FiSend /> Confirm Booking Request</>}
      </button>
    </form>
  )
}
