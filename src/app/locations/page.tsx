import { Metadata } from 'next'
import Link from 'next/link'
import { cities, regions, getCitiesByRegion, getCitiesByTier } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Window Installers Near You | All UK Locations',
  description: 'Find trusted window installers across the UK. Get free quotes for new windows, double glazing & uPVC installation in your local area. FENSA certified.',
  keywords: ['window installers UK', 'double glazing near me', 'window replacement UK', 'local window companies'],
}

export default function LocationsPage() {
  const tier1Cities = getCitiesByTier(1)
  const tier2Cities = getCitiesByTier(2)
  const tier3Cities = getCitiesByTier(3)
  const tier4Cities = getCitiesByTier(4)

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
            <span className="text-white">Locations</span>
          </nav>

          <h1 className="heading-1 text-white mb-6">
            Window Installers Across the <span className="text-accent-400">UK</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Find trusted, FENSA-certified window installers in your area. We cover {cities.length} cities and towns throughout England, Scotland, Wales and Northern Ireland.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">{cities.length}</div>
              <div className="text-gray-600 text-sm">Locations Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{regions.length}</div>
              <div className="text-gray-600 text-sm">UK Regions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-gray-600 text-sm">Verified Installers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">4.8★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-2">Major Cities</h2>
          <p className="text-gray-600 mb-8">Window installers in the UK's largest cities</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-primary-50 px-4 py-3 rounded-lg text-center hover:bg-primary-100 transition-colors text-primary-700 font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Large Cities */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-2">Large Cities</h2>
          <p className="text-gray-600 mb-8">Window replacement services in major urban areas</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tier2Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white px-4 py-3 rounded-lg text-center hover:bg-primary-50 hover:text-primary-700 transition-colors border border-gray-100 text-gray-700 font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Cities */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-2">Medium Cities</h2>
          <p className="text-gray-600 mb-8">Double glazing installers in growing urban centres</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tier3Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white px-4 py-3 rounded-lg text-center hover:bg-primary-50 hover:text-primary-700 transition-colors border border-gray-100 text-sm text-gray-700 font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Large Towns */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-2">Large Towns</h2>
          <p className="text-gray-600 mb-8">Local window companies across the UK</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {tier4Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white px-3 py-2 rounded-lg text-center hover:bg-primary-50 hover:text-primary-700 transition-colors border border-gray-100 text-xs text-gray-600 font-medium"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Region */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">Browse by Region</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => {
              const regionCities = getCitiesByRegion(region)
              return (
                <div key={region} className="card p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {region}
                    <span className="text-sm font-normal text-gray-500">({regionCities.length})</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {regionCities.slice(0, 8).map((city) => (
                      <Link
                        key={city.slug}
                        href={`/locations/${city.slug}`}
                        className="text-sm text-primary-600 hover:text-primary-800 hover:underline"
                      >
                        {city.name}
                      </Link>
                    ))}
                    {regionCities.length > 8 && (
                      <span className="text-sm text-gray-400">+{regionCities.length - 8} more</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container-main text-center">
          <h2 className="heading-2 text-white mb-4">Can't Find Your Location?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We cover most of the UK. Enter your postcode to get quotes from local installers in your area.
          </p>
          <Link href="/quote" className="btn-accent">
            Get Free Quotes
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
