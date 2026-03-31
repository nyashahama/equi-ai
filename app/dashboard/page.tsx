"use client";

import { AlertTriangle, CheckCircle2, ChevronRight, Download, FileText, Filter } from "lucide-react";

import {
  dashboardFeed,
  dashboardMilestones,
  dashboardPillars,
} from "@/components/product/data";
import { ProductShell } from "@/components/product/shell";
import { useWorkspace } from "@/components/product/workspace-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const roleDashboardFocus = {
  admin: {
    label: "Admin focus",
    title: "Cross-functional governance",
    description: "Monitor ownership, permissions, open blockers, and readiness across the full workspace.",
  },
  complianceLead: {
    label: "Compliance focus",
    title: "Readiness and evidence gaps",
    description: "Track missing evidence, readiness movement, and which actions are still blocking verification.",
  },
  financeLead: {
    label: "Finance focus",
    title: "Budget-linked score movement",
    description: "Watch the actions tied to spend, ownership, and supplier development allocations.",
  },
  peopleLead: {
    label: "People focus",
    title: "Representation and training coverage",
    description: "Prioritize management control, demographics, and learnership evidence completeness.",
  },
  procurementLead: {
    label: "Procurement focus",
    title: "Supplier quality and qualifying spend",
    description: "Track certificate coverage, supplier compliance, and spend leakage affecting the score.",
  },
  executiveViewer: {
    label: "Executive focus",
    title: "Outcome and risk visibility",
    description: "Keep the summary at board level: score movement, readiness, risk concentration, and deadlines.",
  },
  auditor: {
    label: "Auditor focus",
    title: "Read-only verification view",
    description: "Review evidence status, timelines, and final-pack readiness without editing operational data.",
  },
} as const;

function statusTone(status: string) {
  if (status === "Ready" || status === "Complete") {
    return "border-emerald-400/30 bg-emerald-400/10 text-emerald-200";
  }

  if (status === "Missing items") {
    return "border-rose-400/30 bg-rose-400/10 text-rose-200";
  }

  return "border-amber-400/30 bg-amber-400/10 text-amber-100";
}

export default function DashboardPage() {
  const { workspace, canAccessRoute } = useWorkspace();
  const focus = roleDashboardFocus[workspace.currentUserRole];
  const currentOwner =
    workspace.roles.complianceLead ?? workspace.primaryContact.split(",")[0];
  const readyDocuments = workspace.documents.filter((document) => document.status === "Ready").length;
  const evidenceReadiness = Math.round((readyDocuments / workspace.documents.length) * 100);
  const acceptedActions = workspace.actions.filter((action) => action.decision === "accepted").length;
  const verifiedActions = workspace.actions.filter((action) => action.status === "verified").length;
  const dashboardStatCards = [
    { label: "Total score", value: "78/100", delta: "+2.3 this quarter" },
    { label: "Current level", value: "Level 2", delta: "4pts to Level 1" },
    { label: "Audit readiness", value: `${evidenceReadiness}%`, delta: `${workspace.documents.length - readyDocuments} documents pending` },
    { label: "Accepted actions", value: `${acceptedActions}`, delta: `${verifiedActions} verified this cycle` },
  ];

  return (
    <ProductShell
      title="Compliance Dashboard"
      subtitle="A working dashboard for score visibility, owner actions, document readiness, and audit operations. This is the product surface your landing page is now pointing toward."
    >
      <div className="space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <Badge>Live workspace</Badge>
            <Badge variant="secondary">Updated 18 minutes ago</Badge>
            <Badge variant="secondary">{workspace.reportingPeriod} cycle active</Badge>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              <Filter className="size-4" />
              Filter view
            </Button>
            <Button size="sm">
              <Download className="size-4" />
              Export Audit Pack
            </Button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {dashboardStatCards.map((card) => (
            <Card key={card.label} className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                  {card.label}
                </p>
                <p className="mt-3 font-mono text-3xl text-white">{card.value}</p>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{card.delta}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">{focus.label}</Badge>
                <Badge variant="secondary">{workspace.currentUserRole}</Badge>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">{focus.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[color:var(--muted-foreground)]">
                {focus.description}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-white/8 bg-black/10 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                    Workspace
                  </p>
                  <p className="mt-2 text-sm text-white">{workspace.workspaceName}</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-black/10 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                    Primary owner
                  </p>
                  <p className="mt-2 text-sm text-white">{currentOwner}</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-black/10 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                    Document model
                  </p>
                  <p className="mt-2 text-sm text-white">{workspace.documentCategories.length} active categories</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Role-specific priority
              </p>
              <div className="mt-4 space-y-3">
                {[
                  `${workspace.currentUserRole} view is active for ${workspace.roles[workspace.currentUserRole]}.`,
                  `${workspace.companyName} is currently configured on the ${workspace.scorecardModel}.`,
                  `Audit window runs from ${workspace.auditCycleStart} to ${workspace.auditCycleEnd}.`,
                ].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                    Score by pillar
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Current weighted performance</h2>
                </div>
                <Badge variant="secondary">Level 2</Badge>
              </div>

              <div className="mt-6 space-y-4">
                {dashboardPillars.map((pillar) => (
                  <div key={pillar.name} className="rounded-[1.25rem] border border-white/8 bg-black/10 p-4">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                        {pillar.name}
                      </p>
                      <p className="font-mono text-sm text-[color:var(--muted-foreground)]">{pillar.score}</p>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/8">
                      <div className={`h-2.5 rounded-full ${pillar.color}`} style={{ width: `${pillar.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {canAccessRoute("/actions") ? (
            <Card className="rounded-[1.75rem] border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(17,24,24,0.95),rgba(8,11,10,0.96))]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                      Action queue
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Top interventions this cycle</h2>
                  </div>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="size-4" />
                    View plan
                  </Button>
                </div>

                <div className="mt-6 space-y-3">
                  {workspace.actions.map((action) => (
                    <div
                      key={action.id}
                      className="grid gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4 lg:grid-cols-[auto_1fr_auto_auto]"
                    >
                      <Badge
                        variant="secondary"
                        className={
                          action.priority === "High"
                            ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
                            : action.priority === "Medium"
                              ? "border-amber-400/30 bg-amber-400/10 text-amber-100"
                              : "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                        }
                      >
                        {action.priority}
                      </Badge>
                      <div>
                        <p className="text-sm font-medium text-white">{action.title}</p>
                        <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                          Owner: {action.owner === "Finance"
                            ? workspace.roles.financeLead
                            : action.owner === "HR"
                              ? workspace.roles.peopleLead
                              : action.owner === "Procurement"
                                ? workspace.roles.procurementLead
                                : action.owner === "CFO"
                                  ? workspace.primaryContact.split(",")[0]
                                  : workspace.roles.complianceLead} • Due {action.due}
                        </p>
                      </div>
                      <p className="font-mono text-sm text-[color:var(--primary)]">{action.points} pts</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{action.decision}</Badge>
                        <Button size="sm" variant="outline">Open</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">Restricted section</p>
                <p className="mt-4 text-sm leading-7 text-white/90">
                  This role does not have access to the action-planning workspace. High-level outcomes remain visible through the summary cards above.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          {canAccessRoute("/evidence") ? (
          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                    Evidence status
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Document readiness by owner</h2>
                </div>
                <Button size="sm" variant="outline">
                  <FileText className="size-4" />
                  View vault
                </Button>
              </div>

              <div className="mt-6 space-y-3">
                {workspace.documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="grid gap-4 rounded-[1.25rem] border border-white/8 bg-black/10 p-4 sm:grid-cols-[1fr_auto_auto]"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{doc.name}</p>
                      <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                        Owner: {doc.owner === "People Ops"
                          ? workspace.roles.peopleLead
                          : doc.owner === "Procurement"
                            ? workspace.roles.procurementLead
                            : doc.owner === "Legal"
                              ? workspace.roles.admin
                              : workspace.roles.complianceLead} • Updated {doc.updated}
                      </p>
                    </div>
                    <Badge variant="secondary" className={statusTone(doc.status)}>
                      {doc.status}
                    </Badge>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          ) : (
            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">Restricted section</p>
                <p className="mt-4 text-sm leading-7 text-white/90">
                  This role cannot open the evidence workspace. Only summarized readiness remains visible on the dashboard.
                </p>
              </CardContent>
            </Card>
          )}

          <div className="space-y-6">
            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                  Activity feed
                </p>
                <div className="mt-5 space-y-4">
                  {dashboardFeed.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex gap-4 rounded-[1.25rem] border border-white/8 bg-black/10 p-4">
                        <div className="flex size-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <p className="text-sm text-white">{item.title}</p>
                          <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">{item.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                  Verification timeline
                </p>
                <div className="mt-5 space-y-3">
                  {dashboardMilestones.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 rounded-[1.25rem] border border-white/8 bg-black/10 p-4">
                      <div
                        className={`mt-0.5 flex size-9 items-center justify-center rounded-full ${
                          item.status === "Complete"
                            ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                            : item.status === "Scheduled"
                              ? "border border-amber-400/20 bg-amber-400/10 text-amber-100"
                              : "border border-white/10 bg-white/[0.03] text-white/70"
                        }`}
                      >
                        {item.status === "Complete" ? (
                          <CheckCircle2 className="size-4" />
                        ) : item.status === "Scheduled" ? (
                          <AlertTriangle className="size-4" />
                        ) : (
                          <ChevronRight className="size-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                          {item.date} • {item.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProductShell>
  );
}
