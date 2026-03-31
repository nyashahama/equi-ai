import { ChecklistCard, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

const insightViews = [
  "Pillar breakdown",
  "Sub-element drilldown",
  "Trend over time",
  "What-if simulation",
  "Point leakage analysis",
];

const diagnoses = [
  {
    id: "01",
    title: "Why the score is 78",
    description: "Explain which pillars are carrying the score and which missing sub-elements are capping the next level.",
    bullets: ["Strong ownership and management", "Skills documentation gap", "Supplier metadata leakage"],
    status: "Diagnosis",
  },
  {
    id: "02",
    title: "What is missing and underperforming",
    description: "Show evidence gaps, weak sub-elements, and policy/process issues that are suppressing score and readiness.",
    bullets: ["Missing learnership evidence", "Unclassified supplier records", "Weak socio-economic coverage"],
    status: "Gap view",
  },
  {
    id: "03",
    title: "What actions produce the best return",
    description: "Rank the interventions that offer the strongest score movement relative to cost, timing, and operational effort.",
    bullets: ["High points per effort", "Dependencies surfaced", "Quarterly planning fit"],
    status: "Decision support",
  },
];

export default function InsightsPage() {
  return (
    <ProductShell
      title="Insights and Diagnosis"
      subtitle="The product should not stop at displaying a number. This stage explains the score, the blockers, the missing evidence, and the best-return actions."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 5"
          title="Explain the score and expose the blockers"
          description="These mocked insight surfaces cover the diagnostic layer the product needs so users understand not just where they stand, but why."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={diagnoses} />
            <ChecklistCard title="Required views" items={insightViews} />
          </div>
        </ProductSection>

        <NextStageCard
          title="Action planning"
          description="After diagnosis, the product should generate recommended actions with impact, owner, evidence, deadlines, and dependencies."
          href="/actions"
          action="Build Action Plan"
        />
      </div>
    </ProductShell>
  );
}
