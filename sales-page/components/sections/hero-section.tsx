'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowDown } from 'lucide-react'

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/2415e403-bfdb-4bf7-a176-3fbc0788a257.png"
          alt="Ambulatory Surgery Center compliance team reviewing documentation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 via-[#1E3A8A]/75 to-[#1E3A8A]/50" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#5EEAD4]" />
            <span className="text-sm font-medium text-white/90">For 1–2 Person ASC Compliance Teams</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Stop Losing Sleep Over Your Next{' '}
            <span className="text-[#5EEAD4]">Medicare Survey</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
            The complete compliance system that transforms chaotic ASC documentation into survey-ready confidence — even if you&apos;re the only person managing it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('pricing')}
              className="bg-[#0D9488] hover:bg-[#0B7C72] text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Get Survey-Ready Today
            </button>
            <button
              onClick={() => scrollTo('whats-inside')}
              className="bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200"
            >
              See What&apos;s Inside
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#5EEAD4] rounded-full" />
              18 Ready-to-Use Templates
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#5EEAD4] rounded-full" />
              12-Month Compliance Calendar
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#5EEAD4] rounded-full" />
              Mock Survey Walkthrough
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <button onClick={() => scrollTo('problem')} aria-label="Scroll to learn more">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </button>
      </motion.div>
    </section>
  )
}
