import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './CancellationPolicy.css'

export default function CancellationPolicy() {
  return (
    <main className="policy-page">
      <SEO
        canonical="/cancellation-policy"
        title="Cancellation & Refund Policy — Regal Maxi Cabs"
        description="Understand our cancellation and refund policy for maxi cab and taxi bookings. Tiered refunds based on notice period."
        noindex={false}
      />

      {/* Hero */}
      <section className="policy-hero">
        <div className="container policy-hero-inner">
          <div className="chip">Policies</div>
          <h1>Cancellation &amp; <span className="policy-accent">Refund Policy</span></h1>
          <p>Last updated: June 2025</p>
        </div>
      </section>

      <section className="policy-section">
        <div className="container policy-body">

          {/* Overview */}
          <div className="policy-block">
            <p>We understand that plans can change. This policy explains how cancellations and refunds are handled for all bookings made with Regal Maxi Cabs. Please read it carefully before booking.</p>
          </div>

          {/* Cancellation notice */}
          <div className="policy-block">
            <h2>How to Cancel a Booking</h2>
            <p>Customers must notify Regal Maxi Cabs as soon as possible when needing to cancel or modify a booking. The refund amount depends on the advance notice provided before the scheduled pickup time.</p>
            <p>To cancel, contact us by phone or email with your booking reference number:</p>
            <ul>
              <li>Phone: <a href="tel:+61485880106">+61 485 880 106</a></li>
              <li>Email: <a href="mailto:info@regalmaxicabs.com.au">info@regalmaxicabs.com.au</a></li>
            </ul>
          </div>

          {/* Fee table */}
          <div className="policy-block">
            <h2>Cancellation Fee Schedule</h2>
            <p>Refunds are calculated based on how much notice is given before your scheduled pickup:</p>
            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Notice Given</th>
                    <th>Cancellation Charge</th>
                    <th>Refund Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>More than 24 hours</td>
                    <td>$30 admin fee</td>
                    <td>Full refund minus $30</td>
                  </tr>
                  <tr>
                    <td>12 – 24 hours</td>
                    <td>25% of fare</td>
                    <td>75% of fare</td>
                  </tr>
                  <tr>
                    <td>6 – 12 hours</td>
                    <td>50% of fare</td>
                    <td>50% of fare</td>
                  </tr>
                  <tr>
                    <td>3 – 6 hours</td>
                    <td>75% of fare</td>
                    <td>25% of fare</td>
                  </tr>
                  <tr className="policy-table--no-refund">
                    <td>Less than 3 hours</td>
                    <td>100% of fare</td>
                    <td>No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Refund processing */}
          <div className="policy-block">
            <h2>Refund Processing</h2>
            <ul>
              <li>Refunds are returned to the original payment method used at the time of booking.</li>
              <li>Processing typically takes <strong>3 to 10 business days</strong> depending on your bank or card provider.</li>
              <li>For international bank accounts, any applicable bank transfer fees will be deducted from the refund amount.</li>
              <li>Online payment surcharges are non-refundable.</li>
            </ul>
          </div>

          {/* No-refund situations */}
          <div className="policy-block">
            <h2>Non-Refundable Situations</h2>
            <p>No refund will be issued in the following circumstances:</p>
            <ul>
              <li>The booking is cancelled within <strong>3 hours</strong> of the scheduled pickup time.</li>
              <li>Incorrect booking information was supplied (wrong address, date, time, or contact details).</li>
              <li>The passenger fails to appear at the designated pickup location.</li>
              <li>The passenger leaves the pickup point without notifying the driver or our team.</li>
            </ul>
          </div>

          {/* Modifications */}
          <div className="policy-block">
            <h2>Booking Modifications</h2>
            <p>Changes to booking details such as pickup time, location, or vehicle type are subject to availability. Where a modification results in a price difference, the adjusted fare applies. Please contact us as early as possible to make changes.</p>
          </div>

          {/* Contact */}
          <div className="policy-cta">
            <p>Have a question about your booking or refund?</p>
            <div className="policy-cta-btns">
              <a href="tel:+61485880106" className="btn-accent">Call Us</a>
              <Link to="/contact" className="btn-outline">Contact Form</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
