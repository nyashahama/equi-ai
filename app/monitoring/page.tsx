import { ChecklistCard, InfoGrid, ProductSection, StageCards } from "@/components/product/blocks";
import { ProductShell } from "@/components/product/shell";

const recurringValue = [
  "Score trend monitoring",
  "Upcoming expiry alerts",
  "Policy refresh reminders",
  "Owner follow-ups",
  "Quarterly reviews",
  "New risk detection after data changes",
  "Next-cycle planning",
];

const monitoringStages = [
  {
    id: "01",
    title: "Watch score movement continuously",
    description: "The app should keep score trends visible and explain what changed as new source data or evidence enters the system.",
    bullets: ["Score trends", "Movement explanations", "Change alerts"],
    status: "Continuous",
  },
  {
    id: "02",
    title: "Push recurring reminders and follow-ups",
    description: "Expiry alerts, policy reviews, owner nudges, and quarterly checkpoints keep the workspace useful between audit cycles.",
    bullets: ["Expiry alerts", "Owner follow-ups", "Quarterly review cadence"],
    status: "Recurring",
  },
  {
    id: "03",
    title: "Plan the next cycle earlier",
    description: "By maintaining evidence, trend history, and open risk detection, the app should help teams start the next cycle from a position of control.",
    bullets: ["Next-cycle planning", "New risk detection", "Readiness carry-forward"],
    status: "Forward looking",
  },
];

export default function MonitoringPage() {
  return (
    <ProductShell
      title="Ongoing Monitoring"
      subtitle="After setup and verification, the product should remain useful every month. This mocked stage covers the recurring signals and workflows that make the app retainable."
    >
      <div className="space-y-6">
        <ProductSection
          eyebrow="Stage 10"
          title="Keep the workspace valuable after the first audit cycle"
          description="The product should become the default place to monitor readiness, track changes, and prepare earlier for the next verification period."
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <StageCards items={monitoringStages} />
            <ChecklistCard title="Recurring value" items={recurringValue} />
          </div>
        </ProductSection>

        <InfoGrid
          items={[
            { label: "Trend window", value: "12 months", helper: "Score history retained by quarter and event." },
            { label: "Expiry alerts", value: "27 open", helper: "Across supplier, ownership, and training evidence." },
            { label: "Quarterly reviews", value: "4 scheduled", helper: "Owners already assigned per function." },
            { label: "New risks", value: "3 detected", helper: "Triggered by recent source-data changes." },
          ]}
        />
      </div>
    </ProductShell>
  );
}
