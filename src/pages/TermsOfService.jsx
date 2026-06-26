import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './CancellationPolicy.css'

export default function TermsOfService() {
  return (
    <main className="policy-page">
      <SEO
        canonical="/terms-of-service"
        title="Terms of Service — Regal Maxi Cabs"
        description="Read the terms and conditions governing all bookings and transport services provided by Regal Maxi Cabs across Australia."
      />

      <section className="policy-hero">
        <div className="container policy-hero-inner">
          <div className="chip">Policies</div>
          <h1>Terms of <span className="policy-accent">Service</span></h1>
          <p>Last updated: June 2025</p>
        </div>
      </section>

      <section className="policy-section">
        <div className="container policy-body">

          <div className="policy-block">
            <p>These Terms of Service govern all bookings, transport services, and interactions between Regal Maxi Cabs Pty Ltd ("we", "us", "our") and customers ("you"). By making a booking, you agree to these terms in full.</p>
          </div>

          <div className="policy-block">
            <h2>1. Bookings & Confirmation</h2>
            <p>All bookings must be made via our website, phone, or approved booking channels. A booking is only confirmed once you receive a written or verbal confirmation from Regal Maxi Cabs.</p>
            <ul>
              <li>You are responsible for providing accurate pickup and drop-off details, contact information, and passenger counts at the time of booking.</li>
              <li>Regal Maxi Cabs reserves the right to decline or cancel a booking at its discretion.</li>
              <li>For group bookings and coaches, a deposit may be required to secure the reservation.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>2. Fares & Payment</h2>
            <p>All fares quoted are fixed unless otherwise stated. Payment is accepted by cash, credit card, bank transfer, or approved corporate account.</p>
            <ul>
              <li>Tolls, parking fees, and airport fees are included in the quoted fare unless explicitly excluded.</li>
              <li>Online payment surcharges are non-refundable.</li>
              <li>Corporate account holders are invoiced monthly. Invoices are payable within 14 days of issue.</li>
              <li>We reserve the right to update fare schedules with reasonable notice.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>3. Cancellations & Refunds</h2>
            <p>Cancellations are subject to our Cancellation & Refund Policy. Please review it carefully before booking.</p>
            <p><Link to="/cancellation-policy">View Cancellation &amp; Refund Policy →</Link></p>
          </div>

          <div className="policy-block">
            <h2>4. Passenger Conduct</h2>
            <p>Passengers are expected to conduct themselves in a respectful and lawful manner throughout the journey.</p>
            <ul>
              <li>Seatbelts must be worn at all times where fitted.</li>
              <li>Consumption of alcohol is not permitted in standard vehicles unless prior written consent has been obtained.</li>
              <li>Smoking, vaping, and the use of illicit substances are strictly prohibited in all vehicles.</li>
              <li>Regal Maxi Cabs reserves the right to refuse or terminate a journey if a passenger's behaviour poses a safety risk or is deemed unacceptable by the driver.</li>
              <li>Damage caused to a vehicle by a passenger will be charged to the passenger at full repair cost.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>5. Waiting Time & No-Shows</h2>
            <ul>
              <li>Drivers will wait up to 15 minutes past the scheduled pickup time for standard bookings, and up to 45 minutes for international flight arrivals (subject to flight tracking).</li>
              <li>After the waiting period, if the passenger cannot be contacted, the booking may be treated as a no-show and the full fare charged.</li>
              <li>Additional waiting time beyond the included period may incur an extra charge.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>6. Liability</h2>
            <p>Regal Maxi Cabs carries appropriate public liability and passenger insurance as required by Australian law. Our liability is limited to direct loss arising from our negligence and does not extend to indirect, consequential, or economic loss.</p>
            <ul>
              <li>We are not responsible for delays caused by traffic, weather, road closures, or events outside our control.</li>
              <li>Passengers are responsible for the safety of their own luggage and personal belongings. We accept no liability for lost, stolen, or damaged items.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>7. Force Majeure</h2>
            <p>Regal Maxi Cabs is not liable for failure to perform services due to events beyond our reasonable control, including natural disasters, government restrictions, severe weather, or major traffic incidents. Where possible, alternative arrangements or a full refund will be offered.</p>
          </div>

          <div className="policy-block">
            <h2>8. Governing Law</h2>
            <p>These terms are governed by the laws of New South Wales, Australia. Any disputes are subject to the exclusive jurisdiction of the courts of New South Wales.</p>
          </div>

          <div className="policy-block">
            <h2>9. Changes to These Terms</h2>
            <p>We may update these terms from time to time. Continued use of our services following any changes constitutes acceptance of the updated terms. The date of the most recent revision is shown at the top of this page.</p>
          </div>

          <div className="policy-cta">
            <p>Questions about our terms?</p>
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
