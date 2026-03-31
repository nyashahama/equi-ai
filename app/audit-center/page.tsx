import { ChecklistCard, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

const auditNeeds = [
  "Readiness checklist",
  "Unresolved issues list",
  "Verifier pack export",
  "Structured evidence folders",
  "Approval workflow",
  "Immutable audit log",
  "Final pack builder",
];

const auditStages = [
  {
    id: "01",
    title: "Switch into verification mode",
    description: "The workspace should emphasize readiness, unresolved issues, evidence structure, and final review instead of general operations.",
    bullets: ["Readiness view", "Open issue list", "Verifier-specific exports"],
    status: "Verification mode",
  },
  {
    id: "02",
    title: "Run controlled approvals",
    description: "Actions, evidence, and final submission packs should move through a clear approval workflow before they are released externally.",
    bullets: ["Approval workflow", "Immutable log", "Submission trace"],
    status: "Controlled",
  },
  {
    id: "03",
    title: "Build the final submission pack",
    description: "The app should help teams feel organized instead of scrambling by assembling the final structured pack from already-reviewed materials.",
    bullets: ["Final pack builder", "Issue resolution queue", "Structured evidence folders"],
    status: "Final pack",
  },
];

export default function AuditCenterPage() {
  return (
    <ProductShell
      title="Audit and Verification Workspace"
      subtitle="This mocked workspace is designed to create the feeling you want: ‘We already have everything. We’re organizing, not scrambling.’"
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 9"
          title="Move from operating mode to verification mode"
          description="The audit center should focus the team on readiness, unresolved issues, evidence structure, approvals, and final export."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={auditStages} />
            <ChecklistCard title="Audit workspace needs" items={auditNeeds} />
          </div>
        </ProductSection>

        <NextStageCard
          title="Ongoing monitoring"
          description="After the initial cycle, the product should stay useful through score trends, reminders, owner follow-ups, policy reviews, and next-cycle planning."
          href="/monitoring"
          action="Go to Monitoring"
        />
      </div>
    </ProductShell>
  );
}
