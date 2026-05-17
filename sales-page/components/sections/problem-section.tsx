'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertTriangle, Clock, FileWarning, ShieldAlert } from 'lucide-react'

const problems = [
  {
    icon: ShieldAlert,
    title: 'Existential Risk',
    desc: 'Losing Medicare certification means closing your doors. There is no second chance when CMS revokes your provider agreement.',
  },
  {
    icon: FileWarning,
    title: 'Overwhelming Regulations',
    desc: 'CMS Conditions for Coverage, AAAHC standards, state licensure requirements — hundreds of pages of rules that change regularly.',
  },
  {
    icon: Clock,
    title: '3+ Hours Daily on Paperwork',
    desc: 'Documentation, tracking, logging — compliance tasks devour your day while clinical responsibilities pile up.',
  },
  {
    icon: AlertTriangle,
    title: 'Constant Fear of Surveys',
    desc: 'Unannounced surveys can arrive any day. Without organized systems, every knock at the door triggers panic.',
  },
]

export default function ProblemSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#F8FAFB]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://cdn.abacus.ai/images/51b1f600-2fd0-465f-90af-4ca786aec45f.png"
              alt="Overwhelmed compliance officer managing ASC documentation alone"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-3">
                The Reality
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A8A] tracking-tight mb-4">
                Managing ASC Compliance Alone Is a{' '}
                <span className="text-[#0D9488]">Ticking Time Bomb</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Small ambulatory surgery centers face the same regulatory burden as large hospital systems — but with a fraction of the staff. One missed requirement can trigger a chain reaction that threatens everything.
              </p>
            </motion.div>

            <div className="space-y-5">
              {problems.map((p: typeof problems[0], i: number) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A8A] mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
