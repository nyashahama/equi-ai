import { ChecklistCard, InfoGrid, NextStageCard, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

const sources = [
  "Payroll / HRIS",
  "Procurement / ERP / accounting",
  "Supplier certificates",
  "Training spend and records",
  "Ownership / board structure",
  "Supporting documents upload",
];

const methods = [
  "CSV upload",
  "Manual entry",
  "API integrations later",
  "Secure vault upload",
];

const onboardingChecks = [
  "Validate data quality",
  "Flag missing fields",
  "Show confidence and completeness",
  "Explain how each source affects score",
];

const onboardingStages = [
  {
    id: "01",
    title: "Connect structured inputs",
    description: "Bring in payroll, spend, ownership, and training data so the scoring engine has baseline source coverage.",
    bullets: ["CSV import", "Manual mapping", "Planned API connections"],
    status: "Coverage stage",
  },
  {
    id: "02",
    title: "Upload evidence and supplier records",
    description: "Load certificates, policy documents, ownership files, and supporting packs into a controlled vault.",
    bullets: ["Supplier certificates", "Ownership files", "Training and policy documents"],
    status: "Vault stage",
  },
  {
    id: "03",
    title: "Run validation and completeness checks",
    description: "The system highlights missing data, low-confidence fields, stale documents, and sources that are not yet contributing to score accuracy.",
    bullets: ["Missing field warnings", "Confidence score", "Source-to-score explanations"],
    status: "Quality stage",
  },
];

export default function OnboardingPage() {
  return (
    <ProductShell
      title="Data Onboarding"
      subtitle="This is one of the highest-value parts of the product. The mocked onboarding view covers the source systems, import methods, validation, and completeness signals that should drive trust in the score."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 3"
          title="Connect data and explain what is usable"
          description="The product should never just say data is uploaded. It should show what is complete, what is missing, and what impact that has on score confidence."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={onboardingStages} />
            <div className="space-y-6">
              <ChecklistCard title="Data sources" items={sources} />
              <ChecklistCard title="Supported methods" items={methods} />
              <ChecklistCard title="System behavior" items={onboardingChecks} />
            </div>
          </div>
        </ProductSection>

        <InfoGrid
          items={[
            { label: "Source coverage", value: "83%", helper: "5 of 6 major source categories connected." },
            { label: "Data confidence", value: "High", helper: "Only supplier expiry metadata still incomplete." },
            { label: "Missing fields", value: "14", helper: "Mostly in supplier and training evidence records." },
            { label: "Score impact trace", value: "Visible", helper: "Each source shows which pillars it affects." },
          ]}
        />

        <NextStageCard
          title="Baseline assessment"
          description="With enough data onboarded, the app should calculate the first baseline score, risk summary, readiness percentage, and top opportunities."
          href="/assessment"
          action="Run Baseline Assessment"
        />
      </div>
    </ProductShell>
  );
}
