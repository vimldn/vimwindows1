import { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get Free Window Quotes | No Obligation',
  description: 'Get up to 3 free quotes from FENSA-certified window installers in your area. Compare prices and save up to 40% on new windows & double glazing.',
}

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 md:py-20">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Get Quote</span>
          </nav>

          <div className="max-w-xl">
            <h1 className="heading-1 text-white mb-6">
              Get Your <span className="text-accent-400">Free</span> Window Quote
            </h1>
            <p className="text-xl text-primary-100">
              Fill out the form below to receive up to 3 free, no-obligation quotes from trusted local window installers.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h2>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Why Get Quotes From Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">100% Free Service</strong>
                      <p className="text-sm text-gray-600">No fees, no obligation to proceed</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">FENSA Certified Only</strong>
                      <p className="text-sm text-gray-600">All installers are verified</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Save Up To 40%</strong>
                      <p className="text-sm text-gray-600">By comparing multiple quotes</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Quick Response</strong>
                      <p className="text-sm text-gray-600">Quotes within 24-48 hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our team is here to help you find the perfect windows for your home.
                </p>
                <a href="tel:08001234567" className="flex items-center gap-2 text-primary-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0800 123 4567
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <strong>4.8/5</strong> from 2,847 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
