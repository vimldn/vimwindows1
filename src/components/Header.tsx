'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 6v14a2 2 0 002 2h12a2 2 0 002-2V6M4 6l2-4h12l2 4M10 11v6M14 11v6" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-gray-900">
              UK Windows<span className="text-primary-600">Direct</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services/new-windows" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              New Windows
            </Link>
            <Link href="/services/double-glazing" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Double Glazing
            </Link>
            <Link href="/services/upvc-windows" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              uPVC Windows
            </Link>
            <Link href="/locations" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Locations
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/quote" className="btn-primary">
              Get Free Quote
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link href="/services/new-windows" className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                New Windows
              </Link>
              <Link href="/services/double-glazing" className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                Double Glazing
              </Link>
              <Link href="/services/upvc-windows" className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                uPVC Windows
              </Link>
              <Link href="/locations" className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                Locations
              </Link>
              <Link href="/quote" className="btn-primary mt-2">
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
