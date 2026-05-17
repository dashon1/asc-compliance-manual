'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingDown, ShieldCheck, Moon } from 'lucide-react'
import CountUp from '@/components/ui/count-up'

const benefits = [
  {
    icon: ShieldCheck,
    stat: 100,
    suffix: '%',
    label: 'Survey Coverage',
    desc: 'Every CMS Condition for Coverage addressed with actionable templates and checklists.',
  },
  {
    icon: TrendingDown,
    stat: 70,
    suffix: '%',
    label: 'Less Compliance Time',
    desc: 'Reduce daily documentation workload from 3+ hours to under an hour with pre-built systems.',
  },
  {
    icon: Moon,
    stat: 12,
    suffix: ' mo',
    label: 'Year-Round Preparedness',
    desc: 'Month-by-month roadmap ensures you are always survey-ready, not just cramming before inspections.',
  },
]

export default function SuccessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="success" className="py-20 sm:py-28 bg-[#F8FAFB]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-3">
                The Outcome
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A8A] tracking-tight mb-4">
                Pass Surveys With{' '}
                <span className="text-[#0D9488]">Confidence</span>,
                <br />Not Just Hope
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Imagine walking into your next Medicare survey knowing every document is current, every policy is in place, and every checklist is completed. That is what this system delivers.
              </p>
            </motion.div>

            <div className="space-y-6">
              {benefits.map((b: typeof benefits[0], i: number) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                  className="flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#0D9488]/10 flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-display text-3xl font-bold text-[#1E3A8A]">
                        <CountUp end={b.stat} trigger={inView} />
                      </span>
                      <span className="text-lg font-bold text-[#0D9488]">{b.suffix}</span>
                    </div>
                    <h3 className="font-semibold text-[#1E3A8A] mb-0.5">{b.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://cdn.abacus.ai/images/cdf72654-98fb-4925-90f4-d7de2e5e9f3a.png"
              alt="Confident ASC team after passing Medicare compliance survey"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
