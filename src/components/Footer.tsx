import Link from 'next/link'
import { cities, regions } from '@/data/cities'

export default function Footer() {
  const popularCities = cities.filter(c => c.tier === 1).slice(0, 8)
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6v14a2 2 0 002 2h12a2 2 0 002-2V6M4 6l2-4h12l2 4M10 11v6M14 11v6" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">
                UK Windows<span className="text-primary-400">Direct</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Connecting homeowners with trusted, FENSA-certified window installers across the UK since 2024.
            </p>
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                FENSA Certified
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/new-windows" className="hover:text-primary-400 transition-colors">
                  New Windows
                </Link>
              </li>
              <li>
                <Link href="/services/window-replacement" className="hover:text-primary-400 transition-colors">
                  Window Replacement
                </Link>
              </li>
              <li>
                <Link href="/services/double-glazing" className="hover:text-primary-400 transition-colors">
                  Double Glazing
                </Link>
              </li>
              <li>
                <Link href="/services/upvc-windows" className="hover:text-primary-400 transition-colors">
                  uPVC Windows
                </Link>
              </li>
              <li>
                <Link href="/services/window-installers" className="hover:text-primary-400 transition-colors">
                  Window Installers
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Popular Locations</h4>
            <ul className="space-y-3">
              {popularCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="hover:text-primary-400 transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-primary-400 hover:text-primary-300 font-medium">
                  View all locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@ukwindowsdirect.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Fri: 8am-6pm<br />Sat: 9am-4pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} UK Windows Direct. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-500 hover:text-gray-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
