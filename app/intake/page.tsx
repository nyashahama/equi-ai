import Link from "next/link";

import { ChecklistCard, InfoGrid, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const intakeInputs = [
  "Company name",
  "Industry",
  "Entity structure",
  "Employee count",
  "Current compliance level",
  "Reporting period",
  "Primary contact",
  "Onboarding preference",
];

const intakeSystemOutputs = [
  "Workspace created automatically",
  "Relevant scorecard model selected",
  "Implementation checklist generated",
  "Onboarding steps assigned by role",
];

const intakeSteps = [
  {
    id: "01",
    title: "Company qualification",
    description:
      "Capture the operating context so the platform understands the company structure, reporting cycle, and likely scorecard path.",
    bullets: ["Industry and reporting period", "Entity structure and employee count", "Current level and onboarding mode"],
    status: "Intake step",
  },
  {
    id: "02",
    title: "Primary contact and ownership",
    description:
      "Identify the main compliance owner, executive sponsor, and operational contacts who will own the initial implementation flow.",
    bullets: ["Primary contact", "Executive sponsor", "Self-serve or guided onboarding"],
    status: "Routing step",
  },
];

export default function IntakePage() {
  return (
    <ProductShell
      title="Qualification and Intake"
      subtitle="The app now starts with a guided intake instead of dropping users straight into a dashboard. This stage answers who the customer is, what kind of entity they are, and how the workspace should be initialized."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 1"
          title="Collect the minimum context to create the right workspace"
          description="This mocked intake flow covers every field you listed and shows how the system uses that information immediately."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={intakeSteps} />

            <div className="space-y-6">
              <ChecklistCard title="User provides" items={intakeInputs} />
              <ChecklistCard title="System does" items={intakeSystemOutputs} />
            </div>
          </div>
        </ProductSection>

        <ProductSection
          eyebrow="Mocked Form State"
          title="Sample intake record"
          description="Using mock data for now, but the structure reflects the real information the app should gather before setup begins."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6 text-sm leading-7 text-white/90">
                <p><strong>Company:</strong> Meridian Group Holdings</p>
                <p><strong>Industry:</strong> Financial services</p>
                <p><strong>Entity structure:</strong> Parent + 3 operating subsidiaries</p>
                <p><strong>Employees:</strong> 1,420</p>
                <p><strong>Current level:</strong> Level 4 (estimated)</p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
              <CardContent className="p-6 text-sm leading-7 text-white/90">
                <p><strong>Reporting period:</strong> FY2026</p>
                <p><strong>Primary contact:</strong> Nomsa Khumalo, Group CFO</p>
                <p><strong>Onboarding mode:</strong> Guided onboarding</p>
                <p><strong>Workspace:</strong> Meridian FY2026 Verification Cycle</p>
                <p><strong>Scorecard:</strong> Generic enterprise scorecard</p>
              </CardContent>
            </Card>
          </div>
        </ProductSection>

        <InfoGrid
          items={[
            { label: "Workspace state", value: "Created", helper: "Draft workspace initialized from intake." },
            { label: "Scorecard model", value: "Generic", helper: "Selected from company structure and size." },
            { label: "Onboarding mode", value: "Guided", helper: "Customer success tasks assigned automatically." },
            { label: "Initial checklist", value: "12 items", helper: "Generated from entity and reporting cycle." },
          ]}
        />

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/setup">Continue to Workspace Setup</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">Open Existing Workspace</Link>
          </Button>
        </div>

        <NextStageCard
          title="Workspace setup"
          description="After intake, the app should move the user into a structured setup wizard covering profile, roles, scorecard configuration, audit cycle, and document taxonomy."
          href="/setup"
          action="Go to Setup Wizard"
        />
      </div>
    </ProductShell>
  );
}
