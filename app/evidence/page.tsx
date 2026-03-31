"use client";

import { ChecklistCard, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";
import { useWorkspace } from "@/components/product/workspace-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const documentFields = [
  "Category",
  "Linked pillar / action",
  "Owner",
  "Issue date",
  "Expiry date",
  "Status",
  "Verification notes",
  "Version history",
];

const capabilities = [
  "Reminders",
  "Missing evidence alerts",
  "Document requests",
  "Export bundles",
  "Audit trail of uploads and changes",
];

const vaultStages = [
  {
    id: "01",
    title: "Store and classify evidence",
    description: "Documents should be categorized by pillar, action, owner, and verification relevance from the moment they enter the vault.",
    bullets: ["Category tagging", "Owner assignment", "Pillar/action linking"],
    status: "Vault base",
  },
  {
    id: "02",
    title: "Track lifecycle and review state",
    description: "Expiry dates, review notes, missing requests, and version history should all be visible without opening separate tools.",
    bullets: ["Expiry tracking", "Review notes", "Version history"],
    status: "Lifecycle",
  },
  {
    id: "03",
    title: "Prepare exportable bundles",
    description: "The evidence vault should be able to assemble structured exports for actions, audit requests, and verification packs.",
    bullets: ["Action bundles", "Audit exports", "Document requests"],
    status: "Pack ready",
  },
];

export default function EvidencePage() {
  const { workspace, setDocumentStatus, canAccessRoute } = useWorkspace();
  const readyDocuments = workspace.documents.filter((document) => document.status === "Ready").length;
  const readiness = Math.round((readyDocuments / workspace.documents.length) * 100);
  const canManageEvidence = workspace.currentUserRole !== "executiveViewer";

  return (
    <ProductShell
      title="Evidence and Document Vault"
      subtitle="The mocked vault treats evidence as a first-class product area. It covers category, ownership, lifecycle, review state, versioning, alerts, and export behavior."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 8"
          title="Make evidence management part of the operating system"
          description="Users should feel that documents are structured, requestable, reviewable, and exportable at any point in the cycle."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={vaultStages} />
            <div className="space-y-6">
              <ChecklistCard title="Each document includes" items={documentFields} />
              <ChecklistCard title="Vault capabilities" items={capabilities} />
            </div>
          </div>
        </ProductSection>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">Active vault</Badge>
                <Badge variant="secondary">{workspace.currentUserRole}</Badge>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">Configured document categories</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {workspace.documentCategories.map((category) => (
                  <div key={category} className="rounded-[1rem] border border-white/8 bg-black/10 px-4 py-3 text-sm text-white/90">
                    {category}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
            <CardContent className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Role-aware evidence ownership
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/90">
                <p><strong>Compliance lead:</strong> {workspace.roles.complianceLead}</p>
                <p><strong>Finance lead:</strong> {workspace.roles.financeLead}</p>
                <p><strong>People lead:</strong> {workspace.roles.peopleLead}</p>
                <p><strong>Procurement lead:</strong> {workspace.roles.procurementLead}</p>
                <p><strong>Auditor access:</strong> {workspace.roles.auditor}</p>
              </div>
              <div className="mt-4 space-y-3">
                {workspace.currentUserRole === "auditor" ? (
                  <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">
                    Read-only verification mode should expose the final folders, notes, and version history without editing controls.
                  </div>
                ) : (
                  <div className="rounded-[1rem] border border-white/8 bg-black/10 p-4 text-sm text-white/90">
                    This role can curate evidence requests, monitor expiry, and prepare export bundles tied to the configured document model.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <ProductSection
          eyebrow="Live Evidence State"
          title="Document readiness now feeds the workspace"
          description="These mocked controls update shared evidence state. Readiness here should inform dashboard and audit-center behavior."
        >
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
                <CardContent className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">Ready docs</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{readyDocuments}</p>
                </CardContent>
              </Card>
              <Card className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
                <CardContent className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">Total docs</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{workspace.documents.length}</p>
                </CardContent>
              </Card>
              <Card className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
                <CardContent className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">Readiness</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{readiness}%</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              {workspace.documents.map((document) => (
                <Card key={document.id} className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">{document.name}</p>
                      <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                        Owner: {document.owner} • Updated {document.updated}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{document.status}</Badge>
                      {canManageEvidence ? (
                        <>
                          <Button size="sm" onClick={() => setDocumentStatus(document.id, "Ready")}>Ready</Button>
                          <Button size="sm" variant="outline" onClick={() => setDocumentStatus(document.id, "Review")}>Review</Button>
                          <Button size="sm" variant="outline" onClick={() => setDocumentStatus(document.id, "Missing items")}>Missing</Button>
                        </>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ProductSection>

        {canAccessRoute("/audit-center") ? (
          <NextStageCard
            title="Audit and verification workspace"
            description="When verification starts, the app should switch into a mode focused on readiness, unresolved issues, pack export, approval workflow, and immutable logging."
            href="/audit-center"
            action="Go to Audit Center"
          />
        ) : null}
      </div>
    </ProductShell>
  );
}
