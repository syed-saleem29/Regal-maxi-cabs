import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import SEO from '../components/SEO'
import posts from '../data/blogPosts'
import imgHero from '../assets/services/maxi cab in traffic.webp'
import logo from '../assets/main-logo.webp'
import './Blog.css'

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <main className="blog-page">
      <SEO
        canonical="/blog"
        title="Blog | Maxi Cab & Travel Tips — Regal Maxi Cabs"
        description="Travel tips, airport guides, corporate transport advice and more from Australia's premier maxi cab service."
      />

      {/* Hero */}
      <section className="blog-hero" style={{ backgroundImage: `url(${imgHero})` }}>
        <div className="blog-hero-overlay" />
        <div className="container blog-hero-inner">
          <div className="chip">Our Blog</div>
          <h1>Travel Tips &amp; <span className="blog-accent">Insights</span></h1>
          <p>Airport guides, corporate travel advice, special occasion tips and more.</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">

          {/* Featured post */}
          <a href={`/blog/${featured.slug}`} className="blog-featured" target="_blank" rel="noopener noreferrer">
            <div className="bf-img">
              <img src={featured.img} alt={featured.title} />
              <div className="blog-logo-bar">
                <img src={logo} alt="Regal Maxi Cabs" className="blog-logo" />
              </div>
            </div>
            <div className="bf-content">
              <div className="bf-meta">
                <span><FiCalendar /> {featured.date}</span>
                <span><FiClock /> {featured.readTime}</span>
              </div>
              <h2 className="bf-title">{featured.title}</h2>
              <p className="bf-excerpt">{featured.excerpt}</p>
              <span className="bf-cta">Read Article <FiArrowRight /></span>
            </div>
          </a>

          {/* Post grid */}
          <div className="blog-grid">
            {rest.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card" target="_blank" rel="noopener noreferrer">
                <div className="bc-img">
                  <img src={post.img} alt={post.title} loading="lazy" />
                  <div className="blog-logo-bar">
                    <img src={logo} alt="Regal Maxi Cabs" className="blog-logo" />
                  </div>
                </div>
                <div className="bc-content">
                  <div className="bc-meta">
                    <span><FiCalendar /> {post.date}</span>
                    <span><FiClock /> {post.readTime}</span>
                  </div>
                  <h3 className="bc-title">{post.title}</h3>
                  <p className="bc-excerpt">{post.excerpt}</p>
                  <span className="bc-link">Read More <FiArrowRight /></span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}
