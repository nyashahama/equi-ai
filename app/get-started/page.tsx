import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

import {
  flowChecklist,
  flowModules,
  flowSteps,
} from "@/components/product/data";
import { ProductShell } from "@/components/product/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GetStartedPage() {
  return (
    <ProductShell
      title="Implementation Flow"
      subtitle="A complete path from workspace setup to audit-ready operations. This gives the product a credible post-marketing experience instead of stopping at the landing page."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Card className="rounded-[2rem] border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(17,24,24,0.95),rgba(8,11,10,0.96))]">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-4 lg:grid-cols-2">
                {flowModules.map((module) => {
                  const Icon = module.icon;

                  return (
                    <div
                      key={module.title}
                      className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
                    >
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="mt-4 text-xl font-semibold text-white">{module.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                        {module.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {flowSteps.map((step) => (
              <Card key={step.step} className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
                <CardContent className="grid gap-5 p-6 lg:grid-cols-[88px_1fr]">
                  <div className="font-mono text-5xl text-emerald-400/20">{step.step}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                      <Badge variant="secondary">Required</Badge>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted-foreground)]">
                      {step.description}
                    </p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {step.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-center gap-3 rounded-[1rem] border border-white/8 bg-black/10 px-4 py-3"
                        >
                          <div className="flex size-5 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                            <Check className="size-3" />
                          </div>
                          <span className="text-sm text-white/90">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Go-live checklist
              </p>
              <div className="mt-4 space-y-3">
                {flowChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-white/8 bg-black/10 p-4">
                    <div className="mt-0.5 flex size-5 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Check className="size-3" />
                    </div>
                    <p className="text-sm leading-6 text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.75rem] border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(99,241,171,0.12),rgba(13,19,16,0.94))]">
            <CardContent className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Next step
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Open the live workspace</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                Once the flow is configured, the dashboard becomes the operating surface for score movement,
                evidence status, owner reviews, and audit pack generation.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/dashboard">
                    Open Dashboard
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/">
                    Back to Landing
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProductShell>
  );
}
