import { InfoGrid, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

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
            { label: "Recommended actions", value: "18", helper: "Generated from current baseline and missing evidence." },
            { label: "Accepted actions", value: "11", helper: "Approved into the current quarter plan." },
            { label: "Projected score lift", value: "+9 pts", helper: "If the top approved actions are completed." },
            { label: "Assigned owners", value: "6", helper: "Across finance, HR, procurement, and compliance." },
          ]}
        />

        <NextStageCard
          title="Execution layer"
          description="Once actions are approved, the app needs a proper work management layer with statuses, comments, linked documents, projected impact, and review history."
          href="/execution"
          action="Go to Execution Layer"
        />
      </div>
    </ProductShell>
  );
}
