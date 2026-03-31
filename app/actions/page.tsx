"use client";

import { InfoGrid, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";
import { useWorkspace } from "@/components/product/workspace-context";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const planningStages = [
  {
    id: "01",
    title: "Generate recommendations",
    description: "The system proposes actions with projected point gain, cost or effort estimate, due date, owner, required evidence, dependencies, and business impact.",
    bullets: ["Projected point gain", "Cost / effort estimate", "Required evidence"],
    status: "System output",
  },
  {
    id: "02",
    title: "Review and shape the plan",
    description: "Users accept or reject recommendations, assign owners, set deadlines, and group work into quarterly initiatives.",
    bullets: ["Accept / reject", "Assign owners", "Quarterly grouping"],
    status: "User action",
  },
  {
    id: "03",
    title: "Publish the operating plan",
    description: "Approved recommendations become the execution queue that the wider team manages across finance, HR, procurement, and compliance.",
    bullets: ["Task conversion", "Cross-functional alignment", "Plan visibility"],
    status: "Published plan",
  },
];

export default function ActionsPage() {
  const { workspace } = useWorkspace();

  return (
    <ProductShell
      title="Action Planning"
      subtitle="This is the operational core. The mocked planning flow covers generated recommendations, owner assignment, deadlines, dependencies, and quarterly planning."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 6"
          title="Turn diagnosis into an operating plan"
          description="The product should transform insight into prioritized, owned work. Every recommendation should be specific enough to execute and defensible enough to trust."
        >
          <StageCards items={planningStages} />
        </ProductSection>

        <InfoGrid
          items={[
            { label: "Recommended actions", value: "18", helper: "Generated from current baseline and missing evidence." },
            { label: "Accepted actions", value: "11", helper: "Approved into the current quarter plan." },
            { label: "Projected score lift", value: "+9 pts", helper: "If the top approved actions are completed." },
            { label: "Assigned owners", value: "6", helper: "Across finance, HR, procurement, and compliance." },
          ]}
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">Active planner</Badge>
                <Badge variant="secondary">{workspace.currentUserRole}</Badge>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">Current planning context</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/90">
                <p><strong>Workspace:</strong> {workspace.workspaceName}</p>
                <p><strong>Primary contact:</strong> {workspace.primaryContact}</p>
                <p><strong>Finance owner:</strong> {workspace.roles.financeLead}</p>
                <p><strong>People owner:</strong> {workspace.roles.peopleLead}</p>
                <p><strong>Procurement owner:</strong> {workspace.roles.procurementLead}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Role-aware planning emphasis
              </p>
              <div className="mt-4 space-y-3">
                {workspace.currentUserRole === "financeLead" ? (
                  <>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Prioritize spend-linked actions and supplier development allocations.</div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Review cost / effort estimates before accepting action bundles.</div>
                  </>
                ) : workspace.currentUserRole === "procurementLead" ? (
                  <>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Prioritize supplier certificate coverage and qualifying spend actions.</div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Group procurement fixes into quarter-level initiatives with linked evidence requirements.</div>
                  </>
                ) : workspace.currentUserRole === "peopleLead" ? (
                  <>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Focus on management-control and training actions with strong documentation requirements.</div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Assign owners for learnership and workforce evidence before approval.</div>
                  </>
                ) : (
                  <>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Use this view to accept, reject, assign, and publish the cross-functional operating plan.</div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">Approved actions should convert directly into execution work with visible dependencies and evidence needs.</div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <NextStageCard
          title="Execution layer"
          description="Once actions are approved, the app needs a proper work management layer with statuses, comments, linked documents, projected impact, and review history."
          href="/execution"
          action="Go to Execution Layer"
        />
      </div>
    </ProductShell>
  );
}
