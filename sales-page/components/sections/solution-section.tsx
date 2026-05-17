'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, CalendarCheck, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Pre-Built Templates',
    desc: 'Start with 18 professionally structured policy and procedure templates that cover every CMS Condition for Coverage. Fill in your center-specific details and you are compliant.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Monthly Compliance Trackers',
    desc: 'A 12-month accreditation roadmap tells you exactly what to review, update, and document each month — no more guessing what is due when.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Mock Survey Checklists',
    desc: 'Walk through your facility the way a CMS surveyor would. Our inspector-style checklists catch gaps before they become citations.',
  },
]

export default function SolutionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="solution" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-3">
            The Solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A8A] tracking-tight mb-4">
            From Hours of Chaos to{' '}
            <span className="text-[#0D9488]">Minutes of Clarity</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A complete, ready-to-implement compliance system designed specifically for small ASCs operating with minimal staff.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((s: typeof steps[0], i: number) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#0D9488]/10 flex items-center justify-center group-hover:bg-[#0D9488] transition-colors duration-300">
                    <s.icon className="w-6 h-6 text-[#0D9488] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0D9488]/60 uppercase">Step {s.step}</span>
                  <h3 className="font-display font-bold text-xl text-[#1E3A8A] mb-2">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://cdn.abacus.ai/images/0ce51295-19f6-4541-b601-caa4ad853ff1.png"
              alt="Organized compliance system with templates and checklists"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
