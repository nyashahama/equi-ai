"use client";

import { InfoGrid, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";
import { useWorkspace } from "@/components/product/workspace-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  const { workspace, setActionDecision, setActionStatus, canAccessRoute } = useWorkspace();
  const acceptedActions = workspace.actions.filter((action) => action.decision === "accepted");
  const canManageActions =
    workspace.currentUserRole !== "executiveViewer" && workspace.currentUserRole !== "auditor";

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
            { label: "Recommended actions", value: `${workspace.actions.length}`, helper: "Generated from current baseline and missing evidence." },
            { label: "Accepted actions", value: `${acceptedActions.length}`, helper: "Approved into the current quarter plan." },
            { label: "Projected score lift", value: `+${acceptedActions.reduce((sum, action) => sum + Number(action.points.replace("+", "")), 0)} pts`, helper: "Based on currently accepted actions in shared workspace state." },
            { label: "Assigned owners", value: `${new Set(workspace.actions.map((action) => action.owner)).size}`, helper: "Across finance, HR, procurement, and compliance." },
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

          {canManageActions ? (
            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                  Live action decisions
                </p>
                <div className="mt-4 space-y-3">
                  {workspace.actions.map((action) => (
                    <div key={action.id} className="rounded-[1rem] border border-white/8 bg-black/10 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-medium text-white">{action.title}</p>
                        <Badge variant="secondary">{action.status}</Badge>
                      </div>
                      <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                        Decision: {action.decision} • Owner: {action.owner} • Due {action.due}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button size="sm" onClick={() => setActionDecision(action.id, "accepted")}>Accept</Button>
                        <Button size="sm" variant="outline" onClick={() => setActionDecision(action.id, "pending")}>Pending</Button>
                        <Button size="sm" variant="outline" onClick={() => setActionDecision(action.id, "rejected")}>Reject</Button>
                        <Button size="sm" variant="outline" onClick={() => setActionStatus(action.id, "verified")}>Verify</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                  Access mode
                </p>
                <p className="mt-4 text-sm leading-7 text-white/90">
                  This role can review action outcomes and accepted plans, but cannot approve or modify the planning queue.
                </p>
                <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
                  Detailed execution remains visible through the dashboard and reporting views available to this role.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {canAccessRoute("/execution") ? (
          <NextStageCard
            title="Execution layer"
            description="Once actions are approved, the app needs a proper work management layer with statuses, comments, linked documents, projected impact, and review history."
            href="/execution"
            action="Go to Execution Layer"
          />
        ) : null}
      </div>
    </ProductShell>
  );
}
