import { InfoGrid, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

const outputs = [
  {
    id: "01",
    title: "Current total score and level",
    description: "Show the baseline score, current contributor level, and score confidence from available data.",
    bullets: ["Total score", "Level / rating", "Confidence from source completeness"],
    status: "Primary output",
  },
  {
    id: "02",
    title: "Pillar performance and sub-minimum exposure",
    description: "Break the score into pillars, show underperforming elements, and flag sub-minimum risks that could block progression.",
    bullets: ["Pillar performance", "Sub-minimum risks", "Likely exposure areas"],
    status: "Risk output",
  },
  {
    id: "03",
    title: "Readiness and opportunity summary",
    description: "Surface missing evidence, audit readiness percentage, and the highest-impact actions available from the current baseline.",
    bullets: ["Missing evidence", "Audit readiness %", "Top opportunities by impact"],
    status: "Aha moment",
  },
];

export default function AssessmentPage() {
  return (
    <ProductShell
      title="Baseline Assessment"
      subtitle="This is the first real payoff for the user. The app should calculate a credible baseline and immediately translate it into exposure, readiness, and opportunity."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 4"
          title="Turn source data into a baseline the team can act on"
          description="The mocked baseline assessment covers every output you listed: score, level, pillar performance, sub-minimum risks, missing evidence, exposure areas, and readiness."
        >
          <StageCards items={outputs} />
        </ProductSection>

        <InfoGrid
          items={[
            { label: "Current score", value: "78/100", helper: "Baseline calculated from connected FY2026 inputs." },
            { label: "Current level", value: "Level 2", helper: "4 points away from Level 1 threshold." },
            { label: "Audit readiness", value: "84%", helper: "Main blocker is incomplete training evidence." },
            { label: "Score confidence", value: "87%", helper: "Confidence reduced by missing supplier metadata." },
          ]}
        />

        <NextStageCard
          title="Insights and diagnosis"
          description="Once the baseline exists, the product should explain why the score is what it is, what is missing, what is underperforming, and what will move the number fastest."
          href="/insights"
          action="Open Insights"
        />
      </div>
    </ProductShell>
  );
}
