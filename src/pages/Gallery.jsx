import { useState, useEffect, useCallback, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import SEO from '../components/SEO'
import './Gallery.css'

// Auto-detects every image dropped into src/assets/gallery/
const imageModules = import.meta.glob('../assets/gallery/*', { eager: true })
const images = Object.values(imageModules)
  .map(m => m.default)
  .filter(Boolean)

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const total = images.length

  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total])
  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total])

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (total < 2 || paused) return
    intervalRef.current = setInterval(next, 4000)
    return () => clearInterval(intervalRef.current)
  }, [next, paused, total])

  const handlePrev = () => { clearInterval(intervalRef.current); setPaused(true); prev(); setTimeout(() => setPaused(false), 6000) }
  const handleNext = () => { clearInterval(intervalRef.current); setPaused(true); next(); setTimeout(() => setPaused(false), 6000) }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return
    const fn = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % total)
      if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [lightbox, total])

  return (
    <main className="gallery-page">
      <SEO
        canonical="/gallery"
        title="Gallery | Regal Maxi Cabs Fleet & Services"
        description="Browse photos from Regal Maxi Cabs — our premium fleet, service highlights and more across Australia."
      />

      {/* Hero */}
      <section className="gal-hero">
        <div className="container gal-hero-inner">
          <h1>Photo <span className="gal-accent">Gallery</span></h1>
          <div className="chip gal-chip-right">Our Gallery</div>
          <p>A look at our premium fleet and services across Australia.</p>
        </div>
      </section>

      <section className="gal-section">

        {total === 0 ? (
          <div className="container">
            <div className="gal-empty">
              <p>Photos coming soon — drop images into <code>src/assets/gallery/</code> and they appear automatically.</p>
            </div>
          </div>
        ) : (
          <>
            {/* ── Featured Slider — outside container so it fills 95vw ── */}
            <div
              className="gal-slider"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="gal-slider-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
                onClick={() => setLightbox(current)}
              >
                {images.map((src, i) => (
                  <div key={i} className="gal-slide">
                    <img src={src} alt={`Gallery ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
                  </div>
                ))}
              </div>

              {total > 1 && (
                <>
                  <button className="gal-arrow gal-arrow--left"  onClick={handlePrev}><FiChevronLeft /></button>
                  <button className="gal-arrow gal-arrow--right" onClick={handleNext}><FiChevronRight /></button>
                </>
              )}
            </div>

            {/* ── Full Grid ── */}
            <div className="container">
              <div className="gal-grid">
                {images.map((src, i) => (
                  <div key={i} className="gal-item" onClick={() => setLightbox(i)}>
                    <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gal-lightbox" onClick={() => setLightbox(null)}>
          <div className="gal-lb-inner" onClick={e => e.stopPropagation()}>
            <button className="gal-lb-close" onClick={() => setLightbox(null)}><FiX /></button>

            {total > 1 && (
              <>
                <button className="gal-lb-arrow gal-lb-arrow--left"  onClick={() => setLightbox(i => (i - 1 + total) % total)}><FiChevronLeft /></button>
                <button className="gal-lb-arrow gal-lb-arrow--right" onClick={() => setLightbox(i => (i + 1) % total)}><FiChevronRight /></button>
              </>
            )}

            <img src={images[lightbox]} alt={`Gallery ${lightbox + 1}`} />
          </div>
        </div>
      )}
    </main>
  )
}
