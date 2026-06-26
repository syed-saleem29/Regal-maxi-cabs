import mainLogo from '../assets/main-logo.webp'
import './FleetMarquee.css'

// Vite resolves these at build time — drop any image into the folder and it appears automatically
const globs = {
  'sedan':            import.meta.glob('../assets/cars/sedan/*',            { eager: true }),
  'business-sedan':   import.meta.glob('../assets/cars/business-sedan/*',   { eager: true }),
  'luxury-sedan':     import.meta.glob('../assets/cars/luxury-sedan/*',     { eager: true }),
  'suv':              import.meta.glob('../assets/cars/suv/*',              { eager: true }),
  'minivan':          import.meta.glob('../assets/cars/minivan/*',          { eager: true }),
  'business-minivan': import.meta.glob('../assets/cars/business-minivan/*', { eager: true }),
  'minibus':          import.meta.glob('../assets/cars/minibus/*',          { eager: true }),
  'coach-hire-40':    import.meta.glob('../assets/cars/coach-hire-40/*',    { eager: true }),
  'coach-hire-50':    import.meta.glob('../assets/cars/coach-hire-50/*',    { eager: true }),
  'premium-party-bus':import.meta.glob('../assets/cars/premium-party-bus/*',{ eager: true }),
}

function randomImg(key) {
  const urls = Object.values(globs[key]).map(m => m.default).filter(Boolean)
  if (!urls.length) return null
  return urls[Math.floor(Math.random() * urls.length)]
}

const FLEET = [
  { category: 'Sedan',            pax: '1–4',  key: 'sedan'            },
  { category: 'Business Sedan',   pax: '1–4',  key: 'business-sedan'   },
  { category: 'Luxury Sedan',     pax: '1–4',  key: 'luxury-sedan'     },
  { category: 'SUV',              pax: '1–5',  key: 'suv'              },
  { category: 'Minivan',          pax: '1–7',  key: 'minivan'          },
  { category: 'Business Minivan', pax: '1–7',  key: 'business-minivan' },
  { category: 'Minibus',          pax: '1–11', key: 'minibus'          },
  { category: 'Coach Hire',       pax: 'Up to 40', key: 'coach-hire-40'    },
  { category: 'Large Coach',      pax: 'Up to 50', key: 'coach-hire-50'    },
  { category: 'Premium Party Bus',pax: 'Up to 20', key: 'premium-party-bus'},
]

// Two independent sets so each copy can show a different random image from the folder
const cards = [
  ...FLEET.map(v => ({ ...v, img: randomImg(v.key) })),
  ...FLEET.map(v => ({ ...v, img: randomImg(v.key) })),
]

export default function FleetMarquee() {
  return (
    <div className="fm-outer">
      <div className="fm-track">
        {cards.filter(v => v.img).map((v, i) => (
          <div key={i} className="fm-card">
            <div className="fm-img-wrap">
              <img src={v.img} alt={v.category} loading="lazy" decoding="async" />
              <div className="fm-logo-bar">
                <img src={mainLogo} alt="Regal Maxi Cabs" className="fm-logo" />
              </div>
            </div>
            <div className="fm-info">
              <div className="fm-category">{v.category}</div>
              <div className="fm-pax">{v.pax} Passengers</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
