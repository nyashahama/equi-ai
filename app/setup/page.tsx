import { ChecklistCard, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

const setupPages = [
  {
    id: "01",
    title: "Company profile",
    description: "Confirm legal entity, registration details, reporting period, and executive ownership.",
    bullets: ["Legal entity profile", "Operating entities", "Executive sponsor"],
    status: "Wizard step",
  },
  {
    id: "02",
    title: "Legal and structure",
    description: "Define subsidiaries, reporting scope, and which entities roll up into the compliance view.",
    bullets: ["Parent-child mapping", "Reporting scope", "Shared services flags"],
    status: "Wizard step",
  },
  {
    id: "03",
    title: "Scorecard configuration",
    description: "Assign the active scorecard model, weighting assumptions, and audit cycle settings.",
    bullets: ["Ruleset selection", "Reporting dates", "Verification deadlines"],
    status: "Wizard step",
  },
  {
    id: "04",
    title: "Users, permissions, and document categories",
    description: "Invite the right team, define permission boundaries, and create the evidence structure that the rest of the app will use.",
    bullets: ["User invites", "Role permissions", "Document categories"],
    status: "Wizard step",
  },
];

const roles = [
  "Admin",
  "Compliance lead",
  "Finance lead",
  "HR / People lead",
  "Procurement lead",
  "Executive viewer",
  "Auditor / verifier read-only",
];

const setupOutputs = [
  "Role-aware workspace access",
  "Audit cycle dates saved",
  "Scorecard configuration locked",
  "Document taxonomy ready for onboarding",
];

export default function SetupPage() {
  return (
    <ProductShell
      title="Workspace Setup Wizard"
      subtitle="This stage covers the setup pages and role model the product needs before data onboarding starts. The goal is to create the right governance structure, not just collect settings."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 2"
          title="Configure the operating workspace"
          description="These mocked setup steps cover the pages you listed and establish role-aware access from the start."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={setupPages} />
            <div className="space-y-6">
              <ChecklistCard title="Critical roles" items={roles} />
              <ChecklistCard title="Setup outcomes" items={setupOutputs} />
            </div>
          </div>
        </ProductSection>

        <NextStageCard
          title="Data onboarding"
          description="Once the workspace and permissions are in place, the next stage is connecting payroll, procurement, supplier, training, ownership, and evidence sources."
          href="/onboarding"
          action="Go to Data Onboarding"
        />
      </div>
    </ProductShell>
  );
}
