import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, cities } from '@/data/cities'
import QuoteForm from '@/components/QuoteForm'

interface PageProps {
  params: { service: string }
}

const serviceContent: Record<string, {
  heroTitle: string
  heroDescription: string
  benefits: { title: string; description: string }[]
  longDescription: string
}> = {
  'new-windows': {
    heroTitle: 'New Windows Installation',
    heroDescription: 'Transform your home with brand new, energy-efficient windows. Our FENSA-certified installers provide professional installation with a 10-year guarantee.',
    benefits: [
      { title: 'Energy Efficient', description: 'A-rated double glazing reduces heat loss by up to 60%' },
      { title: 'Increase Property Value', description: 'New windows can add 5-10% to your home value' },
      { title: 'Reduce Noise', description: 'Modern glazing significantly reduces outside noise' },
      { title: 'Low Maintenance', description: 'uPVC frames require minimal upkeep for decades' },
    ],
    longDescription: 'Whether you\'re building a new home or upgrading tired, inefficient windows, our network of trusted installers can help. We only work with FENSA-certified companies who meet the highest standards of workmanship and customer service.',
  },
  'window-replacement': {
    heroTitle: 'Window Replacement Services',
    heroDescription: 'Replace your old, draughty windows with modern, energy-efficient alternatives. Professional installation from local experts.',
    benefits: [
      { title: 'Quick Installation', description: 'Most replacements completed in 1-2 days' },
      { title: 'Better Security', description: 'Modern multi-point locking systems' },
      { title: 'Less Condensation', description: 'Warm edge spacer bars reduce moisture' },
      { title: 'No Mess', description: 'Professional teams leave your home tidy' },
    ],
    longDescription: 'Old windows can account for up to 25% of your home\'s heat loss. Replacing them with modern double or triple glazing can significantly reduce your energy bills while improving comfort and security.',
  },
  'double-glazing': {
    heroTitle: 'Double Glazing Installation',
    heroDescription: 'Energy-efficient double glazing from trusted local installers. Reduce your heating bills and improve home comfort.',
    benefits: [
      { title: 'Save Money', description: 'Cut heating bills by up to £120-155 per year' },
      { title: 'Warmer Home', description: 'No more cold spots near windows' },
      { title: 'Eco-Friendly', description: 'Reduce your carbon footprint' },
      { title: 'Quiet Living', description: 'Block out traffic and neighbourhood noise' },
    ],
    longDescription: 'Double glazing consists of two panes of glass with an insulating gap between them, typically filled with argon gas. This creates a thermal barrier that keeps heat in during winter and out during summer.',
  },
  'upvc-windows': {
    heroTitle: 'uPVC Windows Installation',
    heroDescription: 'Durable, affordable and low-maintenance uPVC windows. The UK\'s most popular choice for home glazing.',
    benefits: [
      { title: 'Affordable', description: 'Best value option for most homeowners' },
      { title: 'Durable', description: 'Resistant to rot, rust and weathering' },
      { title: 'Range of Styles', description: 'Available in many colours and finishes' },
      { title: 'Easy Care', description: 'Just wipe clean - no painting needed' },
    ],
    longDescription: 'uPVC (unplasticized polyvinyl chloride) windows now account for over 75% of all window installations in the UK. They offer excellent value, durability and energy efficiency with minimal maintenance requirements.',
  },
  'window-installers': {
    heroTitle: 'Find Local Window Installers',
    heroDescription: 'Connect with FENSA-certified window installers in your area. Compare quotes from up to 3 trusted local companies.',
    benefits: [
      { title: 'Verified Installers', description: 'All partners are FENSA registered' },
      { title: 'Local Experts', description: 'Companies who know your area' },
      { title: 'Compare Prices', description: 'Get multiple quotes to find the best deal' },
      { title: 'No Obligation', description: 'Free quotes with no pressure to buy' },
    ],
    longDescription: 'Finding a trustworthy window installer can be challenging. We\'ve done the hard work for you by vetting and verifying installers across the UK. All our partners are FENSA certified and have excellent customer reviews.',
  },
}

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service)
  
  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.title} | Free Quotes from Local Installers`,
    description: `Get free quotes for ${service.keyword.toLowerCase()} from FENSA-certified installers. Compare prices and save up to 40% on ${service.title.toLowerCase()}.`,
    keywords: [
      service.keyword,
      `${service.keyword} near me`,
      `${service.keyword} UK`,
      `${service.keyword} prices`,
      `best ${service.keyword}`,
    ],
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find(s => s.slug === params.service)

  if (!service) {
    notFound()
  }

  const content = serviceContent[params.service]
  const popularCities = cities.filter(c => c.tier === 1)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-main relative py-16 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="heading-1 text-white mb-6">
                {content.heroTitle.split(' ').map((word, i) => 
                  i === 0 ? <span key={i} className="text-accent-400">{word} </span> : word + ' '
                )}
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                {content.heroDescription}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-primary-200 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <QuoteForm variant="hero" serviceName={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-6">
              About Our {service.title} Service
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {content.longDescription}
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included?</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Free, no-obligation quotes from up to 3 local installers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">FENSA-certified installers for building regulation compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">A-rated energy efficient glass as standard</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">10-year guarantee on all installations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Full disposal of old windows and clean-up</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <h2 className="heading-2 text-gray-900 mb-4 text-center">
            {service.title} Across the UK
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Find {service.keyword.toLowerCase()} services in your local area
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white px-4 py-3 rounded-lg text-center hover:bg-primary-50 hover:text-primary-700 transition-colors border border-gray-100 text-sm font-medium text-gray-700"
              >
                {city.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locations" className="btn-secondary">
              View All Locations
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container-main text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready for Your New Windows?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get free quotes today and join thousands of homeowners who have saved money on quality {service.title.toLowerCase()}.
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
