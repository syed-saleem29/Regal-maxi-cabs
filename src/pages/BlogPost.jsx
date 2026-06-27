import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi'
import SEO from '../components/SEO'
import posts from '../data/blogPosts'
import logo from '../assets/main-logo.webp'
import './BlogPost.css'

function renderBlock(block, i) {
  switch (block.type) {
    case 'p':   return <p key={i} className="bp-para">{block.text}</p>
    case 'h2':  return <h2 key={i} className="bp-h2">{block.text}</h2>
    case 'ul':  return (
      <ul key={i} className="bp-list">
        {block.items.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    )
    case 'tip': return (
      <div key={i} className="bp-tip">
        <strong>Regal Tip:</strong> {block.text}
      </div>
    )
    default: return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <main className="bp-notfound">
        <div className="container">
          <h1>Post not found</h1>
          <Link to="/blog" className="bp-back"><FiArrowLeft /> Back to Blog</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bp-page">
      <SEO
        canonical={`/blog/${post.slug}`}
        title={post.title}
        description={post.excerpt}
        image={post.img}
      />

      {/* Hero */}
      <div className="bp-hero" style={{ backgroundImage: `url(${post.img})` }}>
        <div className="bp-hero-overlay" />
        <div className="blog-logo-bar blog-logo-bar--hero">
          <img src={logo} alt="Regal Maxi Cabs" className="blog-logo" />
        </div>
        <div className="container bp-hero-inner">
          <h1>{post.title}</h1>
          <div className="bp-meta">
            <span><FiCalendar /> {post.date}</span>
            <span><FiClock /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <section className="bp-section">
        <div className="container">
          <Link to="/blog" className="bp-back"><FiArrowLeft /> Back to Blog</Link>

          <article className="bp-article">
            {post.content.map((block, i) => renderBlock(block, i))}
          </article>

          {/* CTA */}
          <div className="bp-cta-box">
            <p>Ready to book your next trip?</p>
            <Link to="/book" className="btn-accent">Book Online</Link>
            <a href="tel:+61485880106" className="btn-outline">Call Us</a>
          </div>
        </div>
      </section>

      {/* More posts */}
      <section className="bp-more-section">
        <div className="container">
          <h2 className="bp-more-heading">More Articles</h2>
          <div className="bp-more-grid">
            {posts.filter(p => p.slug !== slug).slice(0, 3).map(p => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="bp-more-card" target="_blank" rel="noopener noreferrer">
                <div className="bp-more-img">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <div className="blog-logo-bar">
                    <img src={logo} alt="Regal Maxi Cabs" className="blog-logo" />
                  </div>
                </div>
                <div className="bp-more-content">
                  <h3>{p.title}</h3>
                  <span className="bp-more-meta"><FiCalendar /> {p.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
