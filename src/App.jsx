import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyContact from './components/StickyContact'

// Lazy-load all pages so each becomes its own JS chunk
const Home               = lazy(() => import('./pages/Home'))
const Contact            = lazy(() => import('./pages/Contact'))
const Booking            = lazy(() => import('./pages/Booking'))
const Gallery            = lazy(() => import('./pages/Gallery'))
const Blog               = lazy(() => import('./pages/Blog'))
const BlogPost           = lazy(() => import('./pages/BlogPost'))
const CancellationPolicy = lazy(() => import('./pages/CancellationPolicy'))
const TermsOfService     = lazy(() => import('./pages/TermsOfService'))
const PrivacyPolicy      = lazy(() => import('./pages/PrivacyPolicy'))
const ServicePage        = lazy(() => import('./components/ServicePage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <StickyContact />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/"                    element={<Home />} />
          <Route path="/book"                element={<Booking />} />
          <Route path="/contact"             element={<Contact />} />
          <Route path="/airport-transfer"    element={<ServicePage slug="airport-transfer" />} />
          <Route path="/corporate-cabs"      element={<ServicePage slug="corporate-cabs" />} />
          <Route path="/cruise-transfer"     element={<ServicePage slug="cruise-transfer" />} />
          <Route path="/general-transfer"    element={<ServicePage slug="general-transfer" />} />
          <Route path="/wedding-transfer"    element={<ServicePage slug="wedding-transfer" />} />
          <Route path="/event-transfer"      element={<ServicePage slug="event-transfer" />} />
          <Route path="/parcel-delivery"     element={<ServicePage slug="parcel-delivery" />} />
          <Route path="/baby-seat-maxi"      element={<ServicePage slug="baby-seat-maxi" />} />
          <Route path="/wheelchair-taxi"     element={<ServicePage slug="wheelchair-taxi" />} />
          <Route path="/blue-mountains-tours" element={<ServicePage slug="blue-mountains-tours" />} />
          <Route path="/race-day-transfer"   element={<ServicePage slug="race-day-transfer" />} />
          <Route path="/gallery"             element={<Gallery />} />
          <Route path="/blog"                element={<Blog />} />
          <Route path="/blog/:slug"          element={<BlogPost />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/terms-of-service"    element={<TermsOfService />} />
          <Route path="/privacy-policy"      element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
