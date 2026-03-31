import { ChecklistCard, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

const actionFields = [
  "Owner",
  "Status",
  "Due date",
  "Linked documents",
  "Comments",
  "Approval history",
  "Projected score impact",
  "Actual score impact after completion",
];

const statuses = [
  "Not started",
  "In progress",
  "Blocked",
  "Awaiting review",
  "Complete",
  "Verified",
];

const executionStages = [
  {
    id: "01",
    title: "Track in-flight work",
    description: "Every accepted action becomes an owned work item with dependencies, due dates, linked evidence, and review visibility.",
    bullets: ["Owner views", "Due dates", "Dependency tracking"],
    status: "Active",
  },
  {
    id: "02",
    title: "Review and approval history",
    description: "Approvers can move actions into review, leave comments, and maintain a traceable approval history for internal trust.",
    bullets: ["Comments", "Approvals", "Review trace"],
    status: "Governed",
  },
  {
    id: "03",
    title: "Measure projected vs actual impact",
    description: "The app should compare expected score lift to actual movement once work and evidence are completed.",
    bullets: ["Projected points", "Actual points", "Variance tracking"],
    status: "Measured",
  },
];

export default function ExecutionPage() {
  return (
    <ProductShell
      title="Execution Layer"
      subtitle="This stage turns recommendations into traceable work. The mocked execution view covers statuses, owners, history, linked evidence, and projected versus actual impact."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 7"
          title="Run the plan with clear ownership and traceability"
          description="This is where internal trust is built. Users should be able to see exactly who owns each action, what is blocked, and what has already been reviewed."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={executionStages} />
            <div className="space-y-6">
              <ChecklistCard title="Each action should include" items={actionFields} />
              <ChecklistCard title="Supported statuses" items={statuses} />
            </div>
          </div>
        </ProductSection>

        <NextStageCard
          title="Evidence vault"
          description="As execution progresses, the product should manage the supporting evidence as a first-class system, not just a file attachment list."
          href="/evidence"
          action="Open Evidence Vault"
        />
      </div>
    </ProductShell>
  );
}
