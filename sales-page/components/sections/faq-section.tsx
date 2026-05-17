'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Is this specific to my state?',
    a: 'The Compliance Manual is built around federal CMS Conditions for Coverage and AAAHC standards, which apply to all Medicare-certified ASCs nationwide. While state-specific licensure requirements vary, the core compliance framework — policies, procedures, equipment logs, and survey checklists — translates across all 50 states. We recommend supplementing with your state health department\'s specific addendums.',
  },
  {
    q: 'Will this guarantee I pass my survey?',
    a: 'No compliance resource can guarantee survey passage — outcomes depend on your specific facility, implementation, and the surveyor\'s findings. What this system does is ensure you have every required document organized, current, and accessible. Centers that maintain organized compliance systems consistently perform better during surveys than those working from disjointed files.',
  },
  {
    q: 'Do I need both tiers?',
    a: 'The Essential Package ($97) covers the three most critical compliance documents — your accreditation roadmap, equipment logs, and survey readiness checklist. The Complete System ($197) adds staff training tracking, 18 policy templates, and quarterly update guides. If you already have established policies and training systems, Essential may be sufficient. If you\'re building or rebuilding your compliance program from scratch, the Complete System provides everything you need.',
  },
  {
    q: 'How often is this updated?',
    a: 'The Quarterly Update Guide (included in the Complete tier) provides a framework for staying current with CMS and accreditation body changes. The core templates and checklists are designed around stable regulatory requirements that rarely change fundamentally. When significant CMS rule changes occur, update notifications are provided.',
  },
  {
    q: 'What format are the documents?',
    a: 'All documents are delivered in editable Markdown format, making them easy to customize, print, and adapt to your center\'s specific needs. They can be opened in any text editor, converted to Word or PDF, and integrated into your existing documentation systems.',
  },
]

export default function FaqSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-3">
            Common Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A8A] tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq: typeof faqs[0], i: number) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.07 * i }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-200 flex items-start gap-4 ${
                    isOpen ? 'bg-[#0D9488]/5 shadow-sm' : 'bg-[#F8FAFB] hover:bg-[#0D9488]/5'
                  }`}
                  aria-expanded={isOpen}
                >
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                    isOpen ? 'text-[#0D9488]' : 'text-gray-400'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold transition-colors ${
                        isOpen ? 'text-[#0D9488]' : 'text-[#1E3A8A]'
                      }`}>
                        {faq.q}
                      </h3>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0D9488]' : 'text-gray-400'
                      }`} />
                    </div>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-gray-500 text-sm leading-relaxed mt-3"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
