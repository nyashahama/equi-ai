import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Clock3,
  Database,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export type Metric = {
  label: string;
  value: string;
};

export type Pillar = {
  name: string;
  score: string;
  progress: number;
  tone: string;
};

export type ActionItem = {
  priority: "High" | "Medium" | "Low";
  points: string;
  text: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ScoreBreakdownItem = {
  name: string;
  score: number;
  max: number;
  progress: number;
  color: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  suffix: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export type TrustPillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const trustedBy = [
  "Meridian Group",
  "Apex Capital",
  "Strata Holdings",
  "Novus Ventures",
  "Prism Financial",
  "Coreway Ltd",
];

export const announcementItems = [
  "Live score recalculation",
  "Audit-ready exports",
  "Procurement intelligence",
  "AI-ranked action plans",
  "Certificate expiry alerts",
];

export const heroMetrics: Metric[] = [
  { label: "Companies onboarded", value: "340+" },
  { label: "Avg. score gain / quarter", value: "2.4pts" },
  { label: "Audit pass rate", value: "98%" },
];

export const heroTrustChips = [
  "Role-based access controls",
  "Audit-ready exports",
  "Guided implementation",
  "Clear evidence ownership",
];

export const trustStats: Metric[] = [
  { label: "Implementation time", value: "< 10 days" },
  { label: "Evidence exports generated", value: "12k+" },
  { label: "Document reminder coverage", value: "100%" },
  { label: "Account reviews", value: "Quarterly" },
];

export const pillars: Pillar[] = [
  { name: "Ownership", score: "24/25", progress: 96, tone: "bg-emerald-400" },
  { name: "Management", score: "17/19", progress: 89, tone: "bg-emerald-400" },
  { name: "Skills Dev", score: "15/20", progress: 75, tone: "bg-amber-400" },
  { name: "Procurement", score: "22/31", progress: 71, tone: "bg-amber-400" },
  { name: "Socio-Economic", score: "0/5", progress: 12, tone: "bg-rose-400" },
];

export const platformMetrics = [
  { label: "Total score", value: "78/100", delta: "+2.3 this quarter" },
  { label: "Current level", value: "L2", delta: "4pts to Level 1" },
  { label: "Audit ready", value: "84%", delta: "6 docs pending" },
];

export const platformTabs = ["Score Overview", "Action Plan", "Documents", "Audit Trail"];

export const actionItems: ActionItem[] = [
  {
    priority: "High",
    points: "+5 pts",
    text: "Register for sector levy exemption and recover missed compliance value.",
  },
  {
    priority: "High",
    points: "+4 pts",
    text: "Increase supplier development spend to 2% of NPAT with verified partners.",
  },
  {
    priority: "Medium",
    points: "+3 pts",
    text: "Appoint two additional Black female board members to unlock control gains.",
  },
  {
    priority: "Low",
    points: "+2 pts",
    text: "Refresh procurement policy to favor 51% Black-owned suppliers by default.",
  },
];

export const features: Feature[] = [
  {
    icon: Clock3,
    title: "Real-time score engine",
    description:
      "Continuous recalculation across all five pillars so leadership sees movement before the audit does.",
  },
  {
    icon: Sparkles,
    title: "AI action planner",
    description:
      "Every remediation step is ranked by likely points gained, cost, and implementation effort.",
  },
  {
    icon: FileCheck2,
    title: "Audit-ready document packs",
    description:
      "Evidence, certificates, and verification files stay organized in one clean export path.",
  },
  {
    icon: BarChart3,
    title: "Procurement intelligence",
    description:
      "Monitor supplier mix, qualifying spend, and leakage across the full procurement base.",
  },
  {
    icon: Users,
    title: "Skills and training tracker",
    description:
      "Tie bursaries, learnerships, and spend to the exact score outcomes they should drive.",
  },
  {
    icon: ShieldCheck,
    title: "Verification vault",
    description:
      "Keep certificate expiry, renewal, and chain-of-custody history visible without manual chasing.",
  },
];

export const scoreBreakdown: ScoreBreakdownItem[] = [
  { name: "Ownership", score: 24, max: 25, progress: 96, color: "bg-emerald-400" },
  { name: "Management Control", score: 17, max: 19, progress: 89, color: "bg-emerald-400" },
  { name: "Skills Development", score: 15, max: 20, progress: 75, color: "bg-amber-400" },
  { name: "Enterprise & Supplier", score: 22, max: 31, progress: 71, color: "bg-amber-400" },
  { name: "Socio-Economic Dev", score: 0, max: 5, progress: 10, color: "bg-rose-400" },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Connect your data",
    description:
      "Sync payroll, procurement, and financials via API or upload so the scorecard maps itself.",
  },
  {
    number: "02",
    title: "See your live score",
    description:
      "Get pillar-level visibility, sub-minimum exposure, and gaps that are actively costing you.",
  },
  {
    number: "03",
    title: "Execute the roadmap",
    description:
      "Assign owners, follow ranked actions, and track projected score lift against real changes.",
  },
  {
    number: "04",
    title: "Walk into audit ready",
    description:
      "Export the exact evidence trail, templates, and document pack your team needs in one pass.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We moved from Level 4 to Level 2 in 18 months because the team finally had a clear operating system instead of a vague spreadsheet.",
    name: "Nomsa Khumalo",
    role: "Group CFO, Meridian Group",
    initials: "NK",
  },
  {
    quote:
      "Audit prep used to take three weeks. Now we export the pack, review exceptions, and move on with the business.",
    name: "Thabo Radebe",
    role: "Head of Compliance, Apex Capital",
    initials: "TR",
  },
  {
    quote:
      "The procurement module surfaced millions in qualifying spend we were missing. The ROI showed up before the renewal call.",
    name: "Sarah Botha",
    role: "Transformation Director, Strata Holdings",
    initials: "SB",
  },
];

export const pricing: PricingPlan[] = [
  {
    name: "Starter",
    price: "R4,900",
    suffix: "/mo",
    description:
      "For smaller teams that need clean score visibility and a disciplined first improvement plan.",
    features: [
      "Live score dashboard",
      "5-pillar breakdown",
      "Top 10 AI actions",
      "Basic document vault",
      "1 user seat",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "R14,900",
    suffix: "/mo",
    description:
      "For companies actively pushing toward Level 1 or 2 with broader automation and procurement depth.",
    features: [
      "Everything in Starter",
      "Unlimited action items",
      "Supplier scanner",
      "Audit-ready exports",
      "Skills tracker",
      "5 user seats",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    description:
      "For groups, subsidiaries, or regulated entities that need integrations, support, and governance controls.",
    features: [
      "Everything in Growth",
      "Multi-entity management",
      "ERP and payroll integrations",
      "Dedicated success manager",
      "SLA-backed uptime",
      "Unlimited seats",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

export const trustPillars: TrustPillar[] = [
  {
    icon: LockKeyhole,
    title: "Security and access control",
    description:
      "Role-based access, controlled document visibility, and clear ownership over who can upload, review, and export evidence.",
  },
  {
    icon: Database,
    title: "Structured source data",
    description:
      "Payroll, procurement, and training inputs are mapped into scorecard logic so teams can see exactly what is driving each movement.",
  },
  {
    icon: FileCheck2,
    title: "Audit-ready evidence flow",
    description:
      "Every recommended action ties back to the supporting evidence and the output expected during verification.",
  },
  {
    icon: ShieldCheck,
    title: "Operational accountability",
    description:
      "Assigned owners, review cycles, and status history make the platform feel like a governed system, not a black box.",
  },
];

export const implementationSteps = [
  "Connect payroll, spend, and certificate inputs.",
  "Review the live baseline with your compliance owner.",
  "Prioritize actions by impact, cost, and timing.",
  "Export evidence packs when verification starts.",
];

export const footerLinks = ["Privacy", "Terms", "Security", "Docs", "Status"];
