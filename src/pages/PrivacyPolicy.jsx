import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './CancellationPolicy.css'

export default function PrivacyPolicy() {
  return (
    <main className="policy-page">
      <SEO
        canonical="/privacy-policy"
        title="Privacy Policy — Regal Maxi Cabs"
        description="Learn how Regal Maxi Cabs collects, uses, and protects your personal information in accordance with the Australian Privacy Act 1988."
      />

      <section className="policy-hero">
        <div className="container policy-hero-inner">
          <div className="chip">Policies</div>
          <h1>Privacy <span className="policy-accent">Policy</span></h1>
          <p>Last updated: June 2025</p>
        </div>
      </section>

      <section className="policy-section">
        <div className="container policy-body">

          <div className="policy-block">
            <p>Regal Maxi Cabs Pty Ltd ("we", "us", "our") is committed to protecting your privacy in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs). This policy explains what personal information we collect, how we use it, and your rights regarding that information.</p>
          </div>

          <div className="policy-block">
            <h2>1. Information We Collect</h2>
            <p>We collect personal information necessary to provide our transport services, including:</p>
            <ul>
              <li><strong>Identity information:</strong> name, and where required, date of birth</li>
              <li><strong>Contact information:</strong> phone number, email address</li>
              <li><strong>Booking information:</strong> pickup and drop-off addresses, travel dates and times, passenger count, special requirements</li>
              <li><strong>Payment information:</strong> billing address and payment method details (processed securely via third-party payment processors — we do not store full card details)</li>
              <li><strong>Communication records:</strong> emails, SMS, and call logs related to your bookings</li>
              <li><strong>Usage data:</strong> IP address, browser type, and pages visited when using our website</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To confirm, fulfil, and manage your transport bookings</li>
              <li>To communicate with you about your booking, including confirmations, updates, and driver details</li>
              <li>To process payments and issue invoices or receipts</li>
              <li>To respond to enquiries, complaints, or feedback</li>
              <li>To comply with our legal and regulatory obligations</li>
              <li>To improve our services and website experience</li>
              <li>To send service updates or promotions, where you have opted in</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>3. Sharing Your Information</h2>
            <p>We do not sell, rent, or trade your personal information. We may share it with:</p>
            <ul>
              <li><strong>Drivers and fleet operators</strong> — solely to fulfil your booking</li>
              <li><strong>Payment processors</strong> — to securely process your payment</li>
              <li><strong>IT and software providers</strong> — who assist in operating our booking systems, subject to confidentiality obligations</li>
              <li><strong>Regulatory bodies or law enforcement</strong> — where required by law</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>4. Cookies & Website Tracking</h2>
            <p>Our website uses cookies and similar technologies to improve functionality and analyse traffic. Cookies do not identify you personally. You can disable cookies in your browser settings, though some website features may not function correctly as a result.</p>
            <p>We use Google Analytics to understand website usage. This data is aggregated and anonymous.</p>
          </div>

          <div className="policy-block">
            <h2>5. Data Storage & Security</h2>
            <p>Your personal information is stored securely on Australian-based servers. We implement industry-standard security measures including encrypted transmission (HTTPS), access controls, and regular security reviews to protect your data from unauthorised access, disclosure, or loss.</p>
            <p>We retain your information for as long as necessary to fulfil the purposes outlined above and to meet our legal obligations, typically no longer than 7 years.</p>
          </div>

          <div className="policy-block">
            <h2>6. Your Rights</h2>
            <p>Under the Australian Privacy Act, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or outdated information</li>
              <li>Opt out of direct marketing communications at any time</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) if you believe your privacy rights have been breached</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:info@regalmaxicabs.com.au">info@regalmaxicabs.com.au</a>.</p>
          </div>

          <div className="policy-block">
            <h2>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.</p>
          </div>

          <div className="policy-block">
            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </div>

          <div className="policy-block">
            <h2>9. Contact Us</h2>
            <p>For any privacy-related enquiries or to exercise your rights, please contact:</p>
            <ul>
              <li>Email: <a href="mailto:info@regalmaxicabs.com.au">info@regalmaxicabs.com.au</a></li>
              <li>Phone: <a href="tel:+61485880106">+61 485 880 106</a></li>
            </ul>
          </div>

          <div className="policy-cta">
            <p>Privacy questions or concerns?</p>
            <div className="policy-cta-btns">
              <a href="mailto:info@regalmaxicabs.com.au" className="btn-accent">Email Us</a>
              <Link to="/contact" className="btn-outline">Contact Form</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
