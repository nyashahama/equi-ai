import { AlertTriangle, CheckCircle2, ChevronRight, Download, FileText, Filter } from "lucide-react";

import {
  dashboardActions,
  dashboardDocuments,
  dashboardFeed,
  dashboardMilestones,
  dashboardPillars,
  dashboardStatCards,
} from "@/components/product/data";
import { ProductShell } from "@/components/product/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
            <Badge variant="secondary">Verification cycle active</Badge>
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
                {dashboardActions.map((action) => (
                  <div
                    key={action.title}
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
                        Owner: {action.owner} • Due {action.due}
                      </p>
                    </div>
                    <p className="font-mono text-sm text-[color:var(--primary)]">{action.points} pts</p>
                    <Button size="sm" variant="outline">Open</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
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
                {dashboardDocuments.map((doc) => (
                  <div
                    key={doc.name}
                    className="grid gap-4 rounded-[1.25rem] border border-white/8 bg-black/10 p-4 sm:grid-cols-[1fr_auto_auto]"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{doc.name}</p>
                      <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                        Owner: {doc.owner} • Updated {doc.updated}
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
