import { useState, useEffect, useCallback, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import SEO from '../components/SEO'
import logo from '../assets/main-logo.webp'
import './Gallery.css'

// Hero slider — only images in hero-slides/
const heroModules = import.meta.glob('../assets/hero-slides/*', { eager: true })
const heroImages = Object.values(heroModules).map(m => m.default).filter(Boolean)

// Gallery grid — only images in gallery/
const galleryModules = import.meta.glob('../assets/gallery/*', { eager: true })
const galleryImages = Object.values(galleryModules).map(m => m.default).filter(Boolean)

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const total = images.length
  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowRight')  onNext()
      if (e.key === 'ArrowLeft')   onPrev()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose, onNext, onPrev])

  return (
    <div className="gal-lightbox" onClick={onClose}>
      <div className="gal-lb-inner" onClick={e => e.stopPropagation()}>
        <button className="gal-lb-close" onClick={onClose}><FiX /></button>
        {total > 1 && (
          <>
            <button className="gal-lb-arrow gal-lb-arrow--left"  onClick={onPrev}><FiChevronLeft /></button>
            <button className="gal-lb-arrow gal-lb-arrow--right" onClick={onNext}><FiChevronRight /></button>
          </>
        )}
        <div className="gal-lb-img-wrap">
          <img src={images[index]} alt={`Image ${index + 1}`} />
          <div className="gal-logo-bar">
            <img src={logo} alt="Regal Maxi Cabs" className="gal-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [current, setCurrent]       = useState(0)
  const [heroLb, setHeroLb]         = useState(null)
  const [gridLb, setGridLb]         = useState(null)
  const [paused, setPaused]         = useState(false)
  const intervalRef                 = useRef(null)

  const heroTotal    = heroImages.length
  const galleryTotal = galleryImages.length

  const next = useCallback(() => setCurrent(i => (i + 1) % heroTotal), [heroTotal])
  const prev = useCallback(() => setCurrent(i => (i - 1 + heroTotal) % heroTotal), [heroTotal])

  useEffect(() => {
    if (heroTotal < 2 || paused) return
    intervalRef.current = setInterval(next, 4000)
    return () => clearInterval(intervalRef.current)
  }, [next, paused, heroTotal])

  const handlePrev = () => { clearInterval(intervalRef.current); setPaused(true); prev(); setTimeout(() => setPaused(false), 6000) }
  const handleNext = () => { clearInterval(intervalRef.current); setPaused(true); next(); setTimeout(() => setPaused(false), 6000) }

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

        {/* ── Hero Slider ── */}
        {heroTotal > 0 && (
          <div
            className="gal-slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="gal-slider-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onClick={() => setHeroLb(current)}
            >
              {heroImages.map((src, i) => (
                <div key={i} className="gal-slide">
                  <img src={src} alt={`Slide ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
                  <div className="gal-logo-bar gal-logo-bar--hero">
                    <img src={logo} alt="Regal Maxi Cabs" className="gal-logo" />
                  </div>
                </div>
              ))}
            </div>

            {heroTotal > 1 && (
              <>
                <button className="gal-arrow gal-arrow--left"  onClick={handlePrev}><FiChevronLeft /></button>
                <button className="gal-arrow gal-arrow--right" onClick={handleNext}><FiChevronRight /></button>
              </>
            )}
          </div>
        )}

        {/* ── Gallery Grid ── */}
        {galleryTotal === 0 ? (
          <div className="container">
            <div className="gal-empty">
              <p>Photos coming soon — drop images into <code>src/assets/gallery/</code> and they appear automatically.</p>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="gal-grid">
              {galleryImages.map((src, i) => (
                <div key={i} className="gal-item" onClick={() => setGridLb(i)}>
                  <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
                  <div className="gal-logo-bar">
                    <img src={logo} alt="Regal Maxi Cabs" className="gal-logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* Hero slider lightbox */}
      {heroLb !== null && (
        <Lightbox
          images={heroImages}
          index={heroLb}
          onClose={() => setHeroLb(null)}
          onPrev={() => setHeroLb(i => (i - 1 + heroTotal) % heroTotal)}
          onNext={() => setHeroLb(i => (i + 1) % heroTotal)}
        />
      )}

      {/* Gallery grid lightbox */}
      {gridLb !== null && (
        <Lightbox
          images={galleryImages}
          index={gridLb}
          onClose={() => setGridLb(null)}
          onPrev={() => setGridLb(i => (i - 1 + galleryTotal) % galleryTotal)}
          onNext={() => setGridLb(i => (i + 1) % galleryTotal)}
        />
      )}
    </main>
  )
}
