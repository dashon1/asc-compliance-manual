'use client'

import { useState, useEffect } from 'react'
import { Shield, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <Shield className="w-7 h-7 text-[#0D9488]" />
            <span className="font-display font-bold text-lg text-[#1E3A8A] tracking-tight">
              ASC Compliance Manual
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {[
              { label: 'The Problem', id: 'problem' },
              { label: 'How It Works', id: 'solution' },
              { label: "What's Inside", id: 'whats-inside' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQ', id: 'faq' },
            ].map((item: { label: string; id: string }) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-gray-600 hover:text-[#0D9488] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('pricing')}
              className="bg-[#0D9488] hover:bg-[#0B7C72] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get the Manual
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {[
                { label: 'The Problem', id: 'problem' },
                { label: 'How It Works', id: 'solution' },
                { label: "What's Inside", id: 'whats-inside' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'FAQ', id: 'faq' },
              ].map((item: { label: string; id: string }) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-3 py-2.5 text-gray-700 hover:bg-[#0D9488]/5 hover:text-[#0D9488] rounded-lg transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('pricing')}
                className="w-full bg-[#0D9488] hover:bg-[#0B7C72] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors mt-2"
              >
                Get the Manual
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
