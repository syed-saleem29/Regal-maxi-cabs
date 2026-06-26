import { Helmet } from 'react-helmet-async'

const SITE_NAME  = 'Regal Maxi Cabs'
const SITE_URL   = 'https://www.regalmaxicabs.com.au'
const DEFAULT_DESC = 'Australia\'s premier maxi cab & taxi service. Fixed fares, silver service, WAV cabs & airport transfers 24/7 across Sydney, Melbourne, Brisbane, Perth & more. No surge pricing. Book online.'
const BASE_KEYWORDS = 'maxi cab, maxi taxi, taxi maxi, maxi cabs, book maxi taxi, 24/7 taxi service, 24/7 maxi taxi, silver service, silver taxi service, WAV cabs, WAV maxi cabs, WAV minibus, fast maxi cabs, fast maxi, sky maxi cabs, sky cabs, taxi service, taxi near me, sydney taxi service, airport taxi, corporate cab, silver cab service'
const DEFAULT_IMG  = `${SITE_URL}/og-image.jpg`

export default function SEO({ title, description, canonical, image, keywords, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Premier Maxi Cab & Silver Taxi Service Australia`
  const desc      = description || DEFAULT_DESC
  const url       = canonical   ? `${SITE_URL}${canonical}` : SITE_URL
  const img       = image       || DEFAULT_IMG
  const kw        = keywords    ? `${keywords}, ${BASE_KEYWORDS}` : BASE_KEYWORDS

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords"    content={kw} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={img} />
      <meta property="og:locale"      content="en_AU" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image"       content={img} />
    </Helmet>
  )
}
