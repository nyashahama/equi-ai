import { ChecklistCard, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

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

        <NextStageCard
          title="Audit and verification workspace"
          description="When verification starts, the app should switch into a mode focused on readiness, unresolved issues, pack export, approval workflow, and immutable logging."
          href="/audit-center"
          action="Go to Audit Center"
        />
      </div>
    </ProductShell>
  );
}
