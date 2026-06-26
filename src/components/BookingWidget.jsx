import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMapPin, FiCalendar, FiClock, FiUsers, FiArrowRight } from 'react-icons/fi'
import './BookingWidget.css'

export default function BookingWidget() {
  const pickupRef = useRef(null)
  const dropRef = useRef(null)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: '',
    passengers: '1',
  })

  // Attach Google Places Autocomplete when API is available
  useEffect(() => {
    if (!window.google?.maps?.places) return

    const opts = { componentRestrictions: { country: 'au' } }

    const pickupAuto = new window.google.maps.places.Autocomplete(pickupRef.current, opts)
    pickupAuto.addListener('place_changed', () => {
      setForm(f => ({ ...f, pickup: pickupRef.current.value }))
    })

    const dropAuto = new window.google.maps.places.Autocomplete(dropRef.current, opts)
    dropAuto.addListener('place_changed', () => {
      setForm(f => ({ ...f, drop: dropRef.current.value }))
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(form).toString()
    navigate(`/contact?${params}`)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <form className="booking-widget" onSubmit={handleSubmit}>
      <div className="bw-header">
        <span className="bw-title">Book Your Ride</span>
        <span className="bw-badge">Instant Quote</span>
      </div>

      <div className="bw-fields">
        {/* Pickup */}
        <div className="bw-field">
          <label htmlFor="bw-pickup"><FiMapPin className="bw-icon accent" /> Pickup Location</label>
          <input
            id="bw-pickup"
            ref={pickupRef}
            type="text"
            placeholder="Enter pickup address or suburb"
            value={form.pickup}
            onChange={e => setForm(f => ({ ...f, pickup: e.target.value }))}
            required
          />
        </div>

        {/* Drop */}
        <div className="bw-field">
          <label htmlFor="bw-drop"><FiMapPin className="bw-icon gold" /> Drop Location</label>
          <input
            id="bw-drop"
            ref={dropRef}
            type="text"
            placeholder="Enter destination address or suburb"
            value={form.drop}
            onChange={e => setForm(f => ({ ...f, drop: e.target.value }))}
            required
          />
        </div>

        <div className="bw-row">
          {/* Date */}
          <div className="bw-field">
            <label htmlFor="bw-date"><FiCalendar className="bw-icon" /> Date</label>
            <input
              id="bw-date"
              type="date"
              min={today}
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
              required
            />
          </div>

          {/* Time */}
          <div className="bw-field">
            <label htmlFor="bw-time"><FiClock className="bw-icon" /> Time</label>
            <input
              id="bw-time"
              type="time"
              value={form.time}
              onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
              required
            />
          </div>

          {/* Passengers */}
          <div className="bw-field">
            <label htmlFor="bw-passengers"><FiUsers className="bw-icon" /> Passengers</label>
            <select
              id="bw-passengers"
              value={form.passengers}
              onChange={e => setForm(f => ({ ...f, passengers: e.target.value }))}
            >
              {[...Array(11)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button type="submit" className="bw-submit">
        Book Now <FiArrowRight />
      </button>
    </form>
  )
}
