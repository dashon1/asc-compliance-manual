'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

const tiers = [
  {
    name: 'Essential Compliance Package',
    price: 97,
    desc: 'The core documents every ASC needs to maintain baseline compliance and pass surveys.',
    items: [
      'Accreditation Roadmap — 12-month compliance calendar',
      'Equipment Maintenance Log — standardized tracking templates',
      'Survey Readiness Checklist — mock inspector walkthrough',
    ],
    highlight: false,
    cta: 'Get the Essentials',
  },
  {
    name: 'Complete Certification System',
    price: 197,
    desc: 'Everything in Essential plus advanced tools for comprehensive certification management.',
    items: [
      'Accreditation Roadmap — 12-month compliance calendar',
      'Equipment Maintenance Log — standardized tracking templates',
      'Survey Readiness Checklist — mock inspector walkthrough',
      'Staff Training Checklist — onboarding & competency tracker',
      'Policy Template Library — 18 ready-to-use policy templates',
      'Quarterly Update Guide — seasonal compliance review framework',
    ],
    highlight: true,
    cta: 'Get the Complete System',
  },
]

export default function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-3">
            Simple, Honest Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A8A] tracking-tight mb-4">
            Invest in{' '}
            <span className="text-[#0D9488]">Compliance Confidence</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Choose the package that fits your center&apos;s needs. Every document maps directly to CMS Conditions for Coverage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier: typeof tiers[0], i: number) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight
                  ? 'bg-[#1E3A8A] text-white shadow-xl ring-2 ring-[#0D9488]'
                  : 'bg-white shadow-lg border border-gray-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0D9488] px-4 py-1.5 rounded-full shadow-md">
                    <Star className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`font-display font-bold text-xl mb-2 ${
                tier.highlight ? 'text-white' : 'text-[#1E3A8A]'
              }`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                {tier.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-5xl font-display font-bold ${tier.highlight ? 'text-white' : 'text-[#1E3A8A]'}`}>
                  ${tier.price}
                </span>
                <span className={`text-sm ${tier.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                  one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.items.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      tier.highlight ? 'text-[#5EEAD4]' : 'text-[#0D9488]'
                    }`} />
                    <span className={`text-sm leading-relaxed ${
                      tier.highlight ? 'text-white/85' : 'text-gray-600'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  toast.success(`${tier.name} selected!`, {
                    description: `You chose the $${tier.price} package. Purchase integration coming soon — contact us to order.`,
                    duration: 5000,
                  })
                }}
                className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-lg transition-all duration-200 ${
                  tier.highlight
                    ? 'bg-[#0D9488] hover:bg-[#0B7C72] text-white shadow-md hover:shadow-lg'
                    : 'bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white shadow-sm hover:shadow-md'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          Instant download after purchase. All documents in editable formats.
        </motion.p>
      </div>
    </section>
  )
}
