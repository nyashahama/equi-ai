import {
  BellRing,
  ClipboardList,
  FileBadge2,
  FileCheck2,
  FolderKanban,
  Gauge,
  Layers3,
  LineChart,
  PackageCheck,
  PlaySquare,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

export const flowSteps = [
  {
    step: "01",
    title: "Set your workspace",
    description:
      "Choose the entity, reporting period, and scorecard model. Equi creates a governed workspace with the right review structure from day one.",
    outcomes: ["Entity profile configured", "Review cadence assigned", "Access roles confirmed"],
  },
  {
    step: "02",
    title: "Connect source systems",
    description:
      "Bring in payroll, procurement, training, and certificate data so the baseline score is calculated from real operating inputs instead of spreadsheet assumptions.",
    outcomes: ["Payroll and spend imported", "Supplier records mapped", "Document vault initialized"],
  },
  {
    step: "03",
    title: "Review the baseline",
    description:
      "Compliance owners and leadership see the current score, audit exposure, and point opportunities. Equi highlights the changes most likely to move the next verification outcome.",
    outcomes: ["Baseline score approved", "Priority actions ranked", "Owners and due dates assigned"],
  },
  {
    step: "04",
    title: "Run the operating cadence",
    description:
      "Track score movement, resolve evidence gaps, monitor reminders, and export audit packs when verification starts.",
    outcomes: ["Weekly dashboard reviews", "Evidence completion tracked", "Export-ready audit pack"],
  },
];

export const flowChecklist = [
  "Workspace owner and approvers assigned",
  "Payroll and procurement data source confirmed",
  "Training and certificate evidence uploaded",
  "Baseline score review scheduled",
  "Action owners and reporting cadence locked in",
];

export const flowModules = [
  {
    icon: ClipboardList,
    title: "Workspace setup",
    description: "Create a compliant operating model with role ownership and review structure.",
  },
  {
    icon: Layers3,
    title: "Data onboarding",
    description: "Map raw inputs into the scorecard logic and surface missing source coverage.",
  },
  {
    icon: Target,
    title: "Action planning",
    description: "Rank interventions by points, spend, timing, and operational effort.",
  },
  {
    icon: ShieldCheck,
    title: "Verification readiness",
    description: "Maintain evidence status and export structured packs when audit starts.",
  },
];

export const dashboardStatCards = [
  { label: "Total score", value: "78/100", delta: "+2.3 this quarter" },
  { label: "Current level", value: "Level 2", delta: "4pts to Level 1" },
  { label: "Audit readiness", value: "84%", delta: "6 documents pending" },
  { label: "Active owners", value: "12", delta: "3 reviews due this week" },
];

export const dashboardPillars = [
  { name: "Ownership", score: "24/25", progress: 96, color: "bg-emerald-400" },
  { name: "Management Control", score: "17/19", progress: 89, color: "bg-emerald-400" },
  { name: "Skills Development", score: "15/20", progress: 75, color: "bg-amber-400" },
  { name: "Enterprise & Supplier", score: "22/31", progress: 71, color: "bg-amber-400" },
  { name: "Socio-Economic Dev", score: "0/5", progress: 8, color: "bg-rose-400" },
];

export const dashboardActions = [
  { priority: "High", title: "Finalize sector levy exemption submission", owner: "Finance", due: "Apr 03", points: "+5" },
  { priority: "High", title: "Approve supplier development budget shift", owner: "CFO", due: "Apr 05", points: "+4" },
  { priority: "Medium", title: "Upload learnership evidence for Q2 cohort", owner: "HR", due: "Apr 07", points: "+3" },
  { priority: "Low", title: "Refresh preferred supplier policy wording", owner: "Procurement", due: "Apr 10", points: "+2" },
];

export const dashboardDocuments = [
  { name: "Employee demographic register", status: "Ready", owner: "People Ops", updated: "2h ago" },
  { name: "Supplier certificate vault", status: "Review", owner: "Procurement", updated: "5h ago" },
  { name: "Training evidence pack", status: "Missing items", owner: "L&D", updated: "Yesterday" },
  { name: "Ownership verification bundle", status: "Ready", owner: "Legal", updated: "Yesterday" },
];

export const dashboardFeed = [
  {
    icon: TrendingUp,
    title: "Score increased by 1.2 points after supplier update",
    time: "18 minutes ago",
  },
  {
    icon: FileCheck2,
    title: "Training evidence pack export generated for Q2 review",
    time: "1 hour ago",
  },
  {
    icon: BellRing,
    title: "Three certificates approaching expiry within 21 days",
    time: "Today",
  },
  {
    icon: Users,
    title: "Compliance review assigned to finance and procurement leads",
    time: "Yesterday",
  },
];

export const dashboardMilestones = [
  { title: "Baseline score review", date: "Apr 02", status: "Complete" },
  { title: "Owner action workshop", date: "Apr 05", status: "Scheduled" },
  { title: "Evidence completeness review", date: "Apr 12", status: "Scheduled" },
  { title: "Audit pack export", date: "Apr 25", status: "Planned" },
];

export const productNav = [
  { href: "/intake", label: "Intake", icon: ClipboardList },
  { href: "/setup", label: "Setup", icon: Layers3 },
  { href: "/onboarding", label: "Onboarding", icon: PackageCheck },
  { href: "/assessment", label: "Assessment", icon: Gauge },
  { href: "/insights", label: "Insights", icon: LineChart },
  { href: "/actions", label: "Actions", icon: Target },
  { href: "/execution", label: "Execution", icon: PlaySquare },
  { href: "/evidence", label: "Evidence", icon: FolderKanban },
  { href: "/audit-center", label: "Audit", icon: ShieldCheck },
  { href: "/monitoring", label: "Monitoring", icon: WalletCards },
  { href: "/dashboard", label: "Dashboard", icon: FileBadge2 },
];
