'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, ArrowRight, Clock, Lock } from 'lucide-react'

export default function FinalCtaSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1E3A8A] to-[#0D4F8A] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div ref={ref} className="relative max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
            <ShieldCheck className="w-8 h-8 text-[#5EEAD4]" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Your Next Survey Is Coming.
            <br />
            <span className="text-[#5EEAD4]">Will You Be Ready?</span>
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Every day without a compliance system is another day of risk. Get the templates, checklists, and roadmaps that protect your center — starting today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => scrollTo('pricing')}
              className="bg-[#0D9488] hover:bg-[#0B7C72] text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Get Survey-Ready Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Instant Download
            </span>
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Secure Checkout
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Editable Templates
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
