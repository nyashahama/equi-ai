import Link from "next/link";

import { ChecklistCard, NextStageCard, ProductSection } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BookDemoPage() {
  return (
    <ProductShell
      title="Book Demo"
      subtitle="This mocked demo-booking page covers the trust and qualification handoff between the landing page and the product flow."
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card className="rounded-[1.75rem] border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(17,24,24,0.95),rgba(8,11,10,0.96))]">
          <CardContent className="p-6">
            <ProductSection
              eyebrow="Primary Action"
              title="Schedule a guided walkthrough"
              description="The landing page now supports all three primary actions: book demo, start assessment, and open workspace. This mocked page represents the sales/demo entry path."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">
                  <p><strong>Primary contact:</strong> Nomsa Khumalo</p>
                  <p><strong>Email:</strong> nomsa@meridian.example</p>
                  <p><strong>Preferred session:</strong> Guided onboarding demo</p>
                </div>
                <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">
                  <p><strong>Company:</strong> Meridian Group</p>
                  <p><strong>Team size:</strong> 1,420 employees</p>
                  <p><strong>Use case:</strong> FY2026 readiness and action planning</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/intake">Start Assessment</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/dashboard">Open Workspace</Link>
                </Button>
              </div>
            </ProductSection>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <ChecklistCard
            title="What the demo should prove"
            items={[
              "What Equi does",
              "Who it is for",
              "What inputs it needs",
              "What outputs it gives",
              "Why the product is trustworthy",
            ]}
          />
          <NextStageCard
            title="Start the guided intake"
            description="After the demo, the next product step is the intake flow that creates the initial workspace and implementation checklist."
            href="/intake"
            action="Go to Intake"
          />
        </div>
      </div>
    </ProductShell>
  );
}
