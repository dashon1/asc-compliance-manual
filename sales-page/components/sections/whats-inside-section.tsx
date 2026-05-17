'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Map, Wrench, ClipboardList, GraduationCap, Library, RefreshCw, Star } from 'lucide-react'

const deliverables = [
  {
    icon: Map,
    title: 'Accreditation Roadmap',
    desc: '12-month compliance calendar with month-by-month tasks, deadlines, and review cycles so nothing falls through the cracks.',
    tier: 'Essential',
  },
  {
    icon: Wrench,
    title: 'Equipment Maintenance Log',
    desc: 'Standardized templates for tracking equipment inspections, calibrations, and preventive maintenance across your entire facility.',
    tier: 'Essential',
  },
  {
    icon: ClipboardList,
    title: 'Survey Readiness Checklist',
    desc: 'A mock inspector walkthrough covering every area surveyors examine — from OR sterility to emergency protocols to patient rights.',
    tier: 'Essential',
  },
  {
    icon: GraduationCap,
    title: 'Staff Training Checklist',
    desc: 'Comprehensive training tracker for onboarding, annual competencies, OSHA requirements, and specialty-specific credentials.',
    tier: 'Complete',
  },
  {
    icon: Library,
    title: 'Policy Template Library',
    desc: '18 professionally written policy and procedure templates covering infection control, patient safety, quality assurance, and more.',
    tier: 'Complete',
  },
  {
    icon: RefreshCw,
    title: 'Quarterly Update Guide',
    desc: 'Seasonal compliance review framework ensuring your documentation stays current with regulatory changes and accreditation body updates.',
    tier: 'Complete',
  },
]

export default function WhatsInsideSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="whats-inside" className="py-20 sm:py-28 bg-[#F8FAFB]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#0D9488] uppercase tracking-wider mb-3">
            Everything Included
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A8A] tracking-tight mb-4">
            What&apos;s Inside the{' '}
            <span className="text-[#0D9488]">Compliance Manual</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every document is designed to be immediately actionable — open, customize with your center&apos;s details, and start using today.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((d: typeof deliverables[0], i: number) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {d.tier === 'Complete' && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-1 rounded-full">
                    <Star className="w-3 h-3" />
                    Complete Tier
                  </span>
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/5 flex items-center justify-center mb-4 group-hover:bg-[#0D9488]/10 transition-colors">
                <d.icon className="w-6 h-6 text-[#1E3A8A] group-hover:text-[#0D9488] transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1E3A8A] mb-2">{d.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
