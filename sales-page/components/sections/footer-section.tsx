import { Shield } from 'lucide-react'

export default function FooterSection() {
  const currentYear = 2026

  return (
    <footer className="bg-[#0F172A] py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-[#0D9488]" />
            <span className="font-display font-bold text-lg text-white">ASC Compliance Manual</span>
          </div>

          <div className="max-w-2xl mb-8">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-gray-300">Disclaimer:</strong> This is an educational resource and does not constitute legal or medical advice. Always consult with your accreditation body and legal counsel for specific compliance requirements. Compliance standards and regulations change — verify all information with current CMS and accreditation body publications.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 w-full">
            <p className="text-gray-500 text-xs">
              © {currentYear} ASC Compliance Manual. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
