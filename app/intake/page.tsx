"use client";

import Link from "next/link";

import { ChecklistCard, InfoGrid, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { IntakeEditor, StageProgressEditor, WorkspaceSnapshot } from "@/components/product/editors";
import { useWorkspace } from "@/components/product/workspace-context";
import { ProductShell } from "@/components/product/shell";
import { Button } from "@/components/ui/button";

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
  const { workspace } = useWorkspace();

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
          title="Editable intake record"
          description="This is now backed by shared mock workspace state. Update these values and the setup shell and downstream product pages will reflect the same company context."
        >
          <div className="space-y-4">
            <IntakeEditor />
            <WorkspaceSnapshot />
          </div>
        </ProductSection>

        <InfoGrid
          items={[
            { label: "Workspace state", value: workspace.stageStatus.intake.completed ? "Completed" : "In progress", helper: "Draft workspace initialized from intake." },
            { label: "Scorecard model", value: "Generic", helper: "Selected from company structure and size." },
            { label: "Onboarding mode", value: "Guided", helper: "Customer success tasks assigned automatically." },
            { label: "Initial checklist", value: `${workspace.stageStatus.intake.progress}%`, helper: "Generated from entity and reporting cycle." },
          ]}
        />

        <ProductSection
          eyebrow="Progress State"
          title="Stage completion"
          description="This state now persists across the setup and onboarding steps so the mocked product flow behaves like a real implementation tracker."
        >
          <StageProgressEditor />
        </ProductSection>

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
