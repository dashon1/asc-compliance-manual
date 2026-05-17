import Navigation from '@/components/sections/navigation'
import HeroSection from '@/components/sections/hero-section'
import ProblemSection from '@/components/sections/problem-section'
import SolutionSection from '@/components/sections/solution-section'
import WhatsInsideSection from '@/components/sections/whats-inside-section'
import PricingSection from '@/components/sections/pricing-section'
import SuccessSection from '@/components/sections/success-section'
import FaqSection from '@/components/sections/faq-section'
import FinalCtaSection from '@/components/sections/final-cta-section'
import FooterSection from '@/components/sections/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatsInsideSection />
      <PricingSection />
      <SuccessSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  )
}
