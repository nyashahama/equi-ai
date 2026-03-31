import {
  CtaSection,
  FeaturesSection,
  HeroSection,
  LandingFooter,
  LandingHeader,
  PlatformSection,
  PricingSection,
  ProcessSection,
  ScoreSection,
  TestimonialsSection,
  TrustedBySection,
  TrustSection,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,241,171,0.12),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.08),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(99,241,171,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,241,171,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <LandingHeader />
      <HeroSection />
      <TrustedBySection />
      <TrustSection />
      <PlatformSection />
      <FeaturesSection />
      <ScoreSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <LandingFooter />
    </main>
  );
}
