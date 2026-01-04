'use client'

import { useState } from 'react'

interface QuoteFormProps {
  cityName?: string
  serviceName?: string
  variant?: 'default' | 'hero' | 'sidebar'
}

export default function QuoteForm({ cityName, serviceName, variant = 'default' }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    propertyType: '',
    windowCount: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-2xl p-8 text-center ${variant === 'sidebar' ? '' : 'max-w-2xl mx-auto'}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
        <p className="text-gray-600">
          Thank you for your enquiry. One of our {cityName ? `${cityName} ` : ''}window specialists will contact you within 24 hours with your free, no-obligation quote.
        </p>
      </div>
    )
  }

  const isCompact = variant === 'sidebar'
  const isHero = variant === 'hero'

  return (
    <form onSubmit={handleSubmit} className={`${isHero ? 'bg-white rounded-2xl shadow-2xl p-6 md:p-8' : isCompact ? 'space-y-4' : 'space-y-6'}`}>
      {isHero && (
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Get Your Free Quote</h3>
          <p className="text-gray-500 text-sm">No obligation • Takes 30 seconds</p>
        </div>
      )}
      
      <div className={isCompact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="07123 456789"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
            Postcode *
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            required
            value={formData.postcode}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="SW1A 1AA"
          />
        </div>

        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
          >
            <option value="">Select property type</option>
            <option value="detached">Detached House</option>
            <option value="semi-detached">Semi-Detached</option>
            <option value="terraced">Terraced House</option>
            <option value="bungalow">Bungalow</option>
            <option value="flat">Flat / Apartment</option>
          </select>
        </div>

        <div>
          <label htmlFor="windowCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Windows
          </label>
          <select
            id="windowCount"
            name="windowCount"
            value={formData.windowCount}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
          >
            <option value="">Select quantity</option>
            <option value="1-3">1-3 windows</option>
            <option value="4-6">4-6 windows</option>
            <option value="7-10">7-10 windows</option>
            <option value="10+">10+ windows</option>
            <option value="full-house">Full house</option>
          </select>
        </div>
      </div>

      {!isCompact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </span>
        ) : (
          <>
            Get Free Quotes
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
        We'll never share your details with third parties.
      </p>
    </form>
  )
}
