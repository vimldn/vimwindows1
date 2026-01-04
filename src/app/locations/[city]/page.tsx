import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getAllCitySlugs, services, getCitiesByRegion } from '@/data/cities'
import QuoteForm from '@/components/QuoteForm'

interface PageProps {
  params: { city: string }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Window Replacement ${city.name} | New Windows & Double Glazing`,
    description: `Get free quotes for new windows, double glazing & uPVC window installation in ${city.name}. Compare prices from FENSA-certified local installers. Save up to 40%.`,
    keywords: [
      `new windows ${city.name}`,
      `window replacement ${city.name}`,
      `double glazing ${city.name}`,
      `uPVC windows ${city.name}`,
      `window installers ${city.name}`,
      `${city.name} window companies`,
    ],
    openGraph: {
      title: `Window Replacement ${city.name} | Free Quotes`,
      description: `Compare prices from trusted window installers in ${city.name}. FENSA certified, 10-year guarantee.`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  const nearbyCities = getCitiesByRegion(city.region)
    .filter(c => c.slug !== city.slug)
    .slice(0, 6)

  const faqs = [
    {
      question: `How much do new windows cost in ${city.name}?`,
      answer: `The average cost for new windows in ${city.name} ranges from £550 to £3,600 per window, depending on the type, material, and size. A full house replacement typically costs between £6,000 and £15,000. Get free quotes to compare exact prices for your property.`
    },
    {
      question: `How long does window installation take in ${city.name}?`,
      answer: `Most window installations in ${city.name} can be completed in 1-3 days for a standard home. Single window replacements typically take 2-4 hours. Our local installers will provide an accurate timeline based on your specific requirements.`
    },
    {
      question: `Are your ${city.name} window installers FENSA certified?`,
      answer: `Yes, all our partner installers in ${city.name} are FENSA certified, meaning they're approved to self-certify compliance with Building Regulations. This ensures your installation is legally compliant and you'll receive the necessary documentation.`
    },
    {
      question: `What type of windows are best for homes in ${city.name}?`,
      answer: `The best windows depend on your property type and budget. uPVC windows are the most popular in ${city.name} due to their durability and value. For period properties, timber or aluminium frames may be more suitable. Our installers can advise on the best options for your home.`
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-main relative py-16 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{city.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-sm font-medium">{city.region}</span>
              </div>

              <h1 className="heading-1 text-white mb-6">
                Window Replacement &amp; Double Glazing in{' '}
                <span className="text-accent-400">{city.name}</span>
              </h1>

              <p className="text-xl text-primary-100 mb-8">
                Get free quotes from trusted, FENSA-certified window installers in {city.name} and the surrounding {city.region} area. 
                Compare prices and save up to 40% on your new windows.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-primary-200 text-sm">Local Installers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">4.8★</div>
                  <div className="text-primary-200 text-sm">Average Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">10 Yr</div>
                  <div className="text-primary-200 text-sm">Guarantee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">Free</div>
                  <div className="text-primary-200 text-sm">No-Obligation Quotes</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  FENSA Certified
                </span>
                <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Building Regs Compliant
                </span>
                <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  A-Rated Energy
                </span>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <QuoteForm variant="hero" cityName={city.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-4 text-center">
            Window Services in {city.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Our {city.name} window specialists offer a complete range of installation and replacement services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.slug} className="card p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6v14a2 2 0 002 2h12a2 2 0 002-2V6M4 6l2-4h12l2 4M10 11v6M14 11v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title} {city.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional {service.keyword.toLowerCase()} services from trusted local installers in {city.name} and {city.region}.
                </p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="text-primary-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Why Choose Our {city.name} Window Installers?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">FENSA Registered Installers</h3>
                    <p className="text-gray-600">All our {city.name} partners are FENSA certified, ensuring full compliance with building regulations and proper certification.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Competitive {city.name} Prices</h3>
                    <p className="text-gray-600">Compare quotes from multiple local installers and save up to 40% on your new windows.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Energy Efficient A-Rated Glass</h3>
                    <p className="text-gray-600">All our windows feature A-rated energy efficient glass, helping {city.name} homeowners reduce heating bills.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">10-Year Comprehensive Guarantee</h3>
                    <p className="text-gray-600">Every installation comes with a full 10-year guarantee covering both the windows and workmanship.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Average Window Prices in {city.name}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-primary-500">
                  <span>uPVC Casement Window</span>
                  <span className="font-bold">£550 - £900</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-500">
                  <span>uPVC Sash Window</span>
                  <span className="font-bold">£800 - £1,400</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-500">
                  <span>Aluminium Window</span>
                  <span className="font-bold">£900 - £1,800</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-500">
                  <span>Bay Window</span>
                  <span className="font-bold">£1,200 - £3,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>Full House (8-12 windows)</span>
                  <span className="font-bold">£6,000 - £15,000</span>
                </div>
              </div>
              <p className="text-sm text-primary-200 mt-4">*Prices include installation. Actual costs may vary based on specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-4 text-center">
            Frequently Asked Questions About Windows in {city.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Common questions from {city.name} homeowners about window replacement
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      {nearbyCities.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-main">
            <h2 className="heading-3 text-gray-900 mb-6">
              Window Installers Near {city.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/locations/${nearbyCity.slug}`}
                  className="bg-white px-4 py-3 rounded-lg text-center hover:bg-primary-50 hover:text-primary-700 transition-colors border border-gray-100 text-sm font-medium text-gray-700"
                >
                  {nearbyCity.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container-main text-center">
          <h2 className="heading-2 text-white mb-4">
            Get Your Free Window Quote in {city.name}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of {city.name} homeowners who have saved money on quality windows through our free comparison service.
          </p>
          <Link href="/quote" className="btn-accent">
            Get Free Quotes Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
