import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Menu } from "lucide-react";

import { EquiLogo } from "@/components/brand/equi-logo";
import {
  actionItems,
  announcementItems,
  features,
  footerLinks,
  heroMetrics,
  heroTrustChips,
  implementationSteps,
  pillars,
  platformMetrics,
  platformTabs,
  pricing,
  scoreBreakdown,
  steps,
  testimonials,
  trustedBy,
  trustPillars,
  trustStats,
} from "@/components/landing/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <Badge variant="secondary" className="w-fit">
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          {title} <span className="text-[color:var(--primary)]">{accent}</span>
        </h2>
        {description ? (
          <p className="max-w-xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Equi.ai home">
          <EquiLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#platform" className="text-sm text-[color:var(--muted-foreground)] transition hover:text-white">
            Platform
          </a>
          <a href="#scoring" className="text-sm text-[color:var(--muted-foreground)] transition hover:text-white">
            Scoring
          </a>
          <a href="#process" className="text-sm text-[color:var(--muted-foreground)] transition hover:text-white">
            Process
          </a>
          <a href="#pricing" className="text-sm text-[color:var(--muted-foreground)] transition hover:text-white">
            Pricing
          </a>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/get-started">Request Access</Link>
          </Button>
        </div>

        <details className="group md:hidden">
          <summary className="flex list-none items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-3 text-[color:var(--foreground)] marker:hidden">
            <Menu className="size-4" />
          </summary>
          <div className="absolute right-4 top-[calc(100%-0.25rem)] mt-3 w-64 rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-3 shadow-2xl shadow-black/40">
            <div className="flex flex-col gap-1">
              <a className="rounded-2xl px-4 py-3 text-sm text-[color:var(--muted-foreground)] hover:bg-white/5 hover:text-white" href="#platform">
                Platform
              </a>
              <a className="rounded-2xl px-4 py-3 text-sm text-[color:var(--muted-foreground)] hover:bg-white/5 hover:text-white" href="#scoring">
                Scoring
              </a>
              <a className="rounded-2xl px-4 py-3 text-sm text-[color:var(--muted-foreground)] hover:bg-white/5 hover:text-white" href="#process">
                Process
              </a>
              <a className="rounded-2xl px-4 py-3 text-sm text-[color:var(--muted-foreground)] hover:bg-white/5 hover:text-white" href="#pricing">
                Pricing
              </a>
              <Button asChild className="mt-2 w-full">
                <Link href="/get-started">Request Access</Link>
              </Button>
            </div>
          </div>
        </details>
      </div>

      <div className="border-t border-white/6 bg-[color:var(--card)]/80">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {announcementItems.map((item) => (
            <Badge key={item} variant="secondary" className="shrink-0">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:px-8 lg:py-28">
      <div className="relative z-10 flex flex-col justify-center">
        <Badge className="mb-6 w-fit">Compliance Intelligence Platform</Badge>
        <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
          Compliance visibility
          <span className="block text-[color:var(--primary)]">your team can trust.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)] sm:text-lg lg:text-xl">
          Equi gives leadership and compliance teams a live operating view of score movement, evidence gaps,
          and next actions, so audit prep is governed, traceable, and less dependent on manual follow-up.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link href="/get-started">
              Request Early Access
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-7">
            <Link href="/dashboard">See Platform</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {heroMetrics.map((metric) => (
            <Card key={metric.label} className="rounded-[1.5rem] bg-white/[0.03]">
              <CardContent className="p-5">
                <p className="font-mono text-2xl text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-xs text-[color:var(--muted-foreground)]">
          {heroTrustChips.map((item) => (
            <div key={item} className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 lg:pl-8">
        <Card className="overflow-hidden rounded-[2rem] border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(17,24,24,0.95),rgba(8,11,10,0.96))]">
          <CardHeader className="border-b border-white/8 pb-5">
            <div className="flex items-start justify-between gap-6">
              <div>
                <CardDescription className="font-mono uppercase tracking-[0.26em]">
                  Live Score Overview
                </CardDescription>
                <CardTitle className="mt-3 text-2xl text-white sm:text-3xl">Level 2 contributor</CardTitle>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                Updated 2m ago
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
              <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                <div className="flex size-28 items-center justify-center rounded-full border border-emerald-400/20 bg-[radial-gradient(circle,rgba(99,241,171,0.2),rgba(99,241,171,0.03))] font-mono text-4xl text-emerald-300 shadow-[0_0_60px_rgba(99,241,171,0.12)_inset]">
                  78
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                  BEE Score
                </p>
              </div>

              <div className="space-y-3">
                {pillars.map((pillar) => (
                  <div key={pillar.name} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                        {pillar.name}
                      </p>
                      <p className="font-mono text-sm text-[color:var(--muted-foreground)]">{pillar.score}</p>
                    </div>
                    <div className="h-2 rounded-full bg-white/8">
                      <div className={`h-2 rounded-full ${pillar.tone}`} style={{ width: `${pillar.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Card className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
                <CardContent className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                    Total Score
                  </p>
                  <p className="mt-3 font-mono text-3xl text-white">78/100</p>
                  <p className="mt-2 text-sm text-emerald-300">+2.3 this quarter</p>
                </CardContent>
              </Card>
              <Card className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
                <CardContent className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                    Current Level
                  </p>
                  <p className="mt-3 font-mono text-3xl text-white">L2</p>
                  <p className="mt-2 text-sm text-amber-300">4pts to Level 1</p>
                </CardContent>
              </Card>
              <Card className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
                <CardContent className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                    Audit Ready
                  </p>
                  <p className="mt-3 font-mono text-3xl text-white">84%</p>
                  <p className="mt-2 text-sm text-emerald-300">6 docs pending</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function TrustedBySection() {
  return (
    <section className="border-y border-white/8 bg-white/[0.03]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--muted-foreground)]">
          Trusted by teams under pressure
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {trustedBy.map((company) => (
            <span key={company} className="font-mono text-sm uppercase tracking-[0.18em] text-white/55">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <SectionHeading
          eyebrow="Why Teams Trust Equi"
          title="Built to reduce"
          accent="compliance uncertainty."
          description="Trust does not come from saying the platform is intelligent. It comes from showing how data is handled, how evidence is tracked, and how your team stays in control."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Card key={pillar.title} className="rounded-[1.75rem] border-white/8 bg-white/[0.025]">
                <CardContent className="p-6">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trustStats.map((stat) => (
          <Card key={stat.label} className="rounded-[1.5rem] border-white/8 bg-white/[0.02]">
            <CardContent className="p-5">
              <p className="font-mono text-2xl text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function PlatformSection() {
  return (
    <section id="platform" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <SectionHeading
          eyebrow="Platform"
          title="Your compliance"
          accent="command center."
          description="The product view is positioned as an operating console rather than a speculative dashboard. That makes the platform feel more dependable for teams buying around risk, governance, and audit outcomes."
        />

        <Card className="rounded-[2rem] overflow-hidden border-[color:var(--border-strong)]">
          <CardHeader className="border-b border-white/8">
            <div className="flex flex-wrap items-center gap-2">
              {platformTabs.map((tab, index) => (
                <Badge key={tab} variant={index === 0 ? "default" : "secondary"}>
                  {tab}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="grid gap-6 p-6 lg:grid-cols-[280px_1fr]">
            <div className="space-y-3">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.name}
                  className={`rounded-[1.35rem] border p-4 ${
                    index === 0 ? "border-emerald-400/30 bg-emerald-400/8" : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                      {pillar.name}
                    </span>
                    <span className="font-mono text-sm text-[color:var(--muted-foreground)]">
                      {pillar.score}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-black/30">
                    <div className={`h-2 rounded-full ${pillar.tone}`} style={{ width: `${pillar.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {platformMetrics.map((metric) => (
                  <Card key={metric.label} className="rounded-[1.35rem] border-white/8 bg-white/[0.03]">
                    <CardContent className="p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-mono text-2xl text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{metric.delta}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                  AI-ranked action items
                </p>
                <div className="space-y-3">
                  {actionItems.map((item) => (
                    <div
                      key={item.text}
                      className="flex flex-col gap-3 rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4 sm:flex-row sm:items-center"
                    >
                      <Badge
                        variant="secondary"
                        className={
                          item.priority === "High"
                            ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
                            : item.priority === "Medium"
                              ? "border-amber-400/30 bg-amber-400/10 text-amber-100"
                              : "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                        }
                      >
                        {item.priority}
                      </Badge>
                      <p className="flex-1 text-sm leading-6 text-white/90">{item.text}</p>
                      <p className="font-mono text-sm text-[color:var(--primary)]">{item.points}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="rounded-[1.35rem] border-white/8 bg-white/[0.02]">
                <CardContent className="grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                      Implementation flow
                    </p>
                    <div className="mt-3 grid gap-2">
                      {implementationSteps.map((step) => (
                        <div key={step} className="flex items-start gap-3">
                          <div className="mt-1 flex size-5 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                            <Check className="size-3" />
                          </div>
                          <p className="text-sm leading-6 text-white/90">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/8 bg-black/10 px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                      Customer success
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">Guided onboarding</p>
                    <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                      Quarterly reviews and workflow support.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section id="scoring" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Capabilities"
        title="Built for the"
        accent="whole stack."
        description="The feature set still spans score visibility, planning, procurement, training, and verification, but the framing now emphasizes practical control instead of product theater."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group rounded-[1.75rem] border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)]"
            >
              <CardContent className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/35">0{index + 1}</p>
                <div className="mt-8 flex size-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export function ScoreSection() {
  return (
    <section className="border-y border-white/8 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Scorecard"
          title="Five pillars."
          accent="One number."
          description="Equi maps the scorecard into a working model leadership can monitor. The presentation now emphasizes contribution, exposure, and evidence readiness instead of decorative analytics."
        />

        <Card className="rounded-[2rem] border-white/8 bg-[linear-gradient(180deg,rgba(11,16,14,0.96),rgba(8,11,10,0.96))]">
          <CardContent className="space-y-4 p-6">
            {scoreBreakdown.map((pillar) => (
              <div key={pillar.name} className="rounded-[1.35rem] border border-white/8 bg-black/10 p-4">
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">{pillar.name}</p>
                  <p className="font-mono text-sm text-[color:var(--muted-foreground)]">
                    {pillar.score}/{pillar.max}
                  </p>
                </div>
                <div className="h-2.5 rounded-full bg-white/8">
                  <div className={`h-2.5 rounded-full ${pillar.color}`} style={{ width: `${pillar.progress}%` }} />
                </div>
              </div>
            ))}
            <div className="pt-2">
              <Button asChild size="lg">
                <Link href="/get-started">
                  Run Free Assessment
                  <ChevronRight />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="How It Works" title="From onboarding to" accent="audit in four steps." />

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step.number} className="relative rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <p className="font-mono text-5xl text-emerald-400/18">{step.number}</p>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">{step.description}</p>
              {index < steps.length - 1 ? (
                <div className="absolute -right-2 top-10 hidden size-4 rounded-full border border-emerald-400/30 bg-[color:var(--background)] lg:block">
                  <div className="absolute inset-1 rounded-full bg-emerald-300" />
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-y border-white/8 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Customer Stories"
          title="Results that"
          accent="speak plainly."
          description="The stories are framed around real operating outcomes: less audit prep, clearer decisions, and measurable score improvement."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="rounded-[1.75rem] border-white/8 bg-[color:var(--background)]/60">
              <CardContent className="p-6">
                <p className="font-serif text-2xl leading-9 tracking-[-0.02em] text-white">“{testimonial.quote}”</p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/8 pt-5">
                  <div className="flex size-12 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 font-mono text-sm text-emerald-200">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, scalable"
        accent="pricing."
        description="Pricing is more credible when buyers understand the level of operational support they are getting, so each tier now reads as a maturity step rather than a vague bundle."
      />

      <div className="mt-10 grid gap-4 xl:grid-cols-3">
        {pricing.map((plan) => (
          <Card
            key={plan.name}
            className={`rounded-[2rem] ${
              plan.featured
                ? "border-emerald-400/35 bg-[linear-gradient(180deg,rgba(99,241,171,0.12),rgba(14,18,17,0.92))]"
                : "border-white/8 bg-white/[0.03]"
            }`}
          >
            <CardContent className="flex h-full flex-col p-6">
              {plan.featured ? <Badge className="mb-5 w-fit">Most Popular</Badge> : <div className="mb-5 h-6" />}
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                {plan.name}
              </p>
              <div className="mt-4 flex items-end gap-2 text-white">
                <span className="font-mono text-5xl tracking-[-0.05em]">{plan.price}</span>
                {plan.suffix ? (
                  <span className="pb-1 font-mono text-sm text-[color:var(--muted-foreground)]">{plan.suffix}</span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">{plan.description}</p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Check className="size-3" />
                    </div>
                    <p className="text-sm text-white/90">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild variant={plan.featured ? "default" : "outline"} className="w-full">
                  <Link href="/get-started">{plan.cta}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 rounded-[1.75rem] border border-white/8 bg-white/[0.025] p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
              Included in every plan
            </p>
            <p className="mt-3 text-lg font-semibold text-white">Support that reduces rollout risk</p>
          </div>
          <div className="space-y-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
            <p>Baseline score review and initial action-plan setup.</p>
            <p>Document structure aligned to verification workflows.</p>
          </div>
          <div className="space-y-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
            <p>Guided onboarding with compliance stakeholder input.</p>
            <p>Platform support as reporting cycles and evidence needs change.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Card className="overflow-hidden rounded-[2.25rem] border-[color:var(--border-strong)] bg-[linear-gradient(135deg,rgba(99,241,171,0.16),rgba(12,18,16,0.92)_35%,rgba(10,12,12,0.98))]">
        <CardContent className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-x-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
          <Badge className="relative z-10">Next Step</Badge>
          <h2 className="relative z-10 mt-5 font-serif text-4xl leading-none tracking-[-0.05em] text-white sm:text-6xl">
            Your next level is
            <span className="block text-[color:var(--primary)]">one decision away.</span>
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)] sm:text-lg">
            Join 340+ companies using Equi to turn compliance from a reporting burden into a measurable strategic advantage.
          </p>
          <div className="relative z-10 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/get-started">Request Early Access</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
          <p className="relative z-10 mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
            No credit card required • Setup in under 10 minutes • Cancel anytime
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <EquiLogo />
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Compliance intelligence for ambitious teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-[color:var(--muted-foreground)]">
          {footerLinks.map((item) => (
            <a key={item} href="#" className="transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <p className="text-sm text-[color:var(--muted-foreground)]">© 2026 Equi Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
