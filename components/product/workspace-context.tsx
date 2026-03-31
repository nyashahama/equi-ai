"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  dashboardActions,
  dashboardDocuments,
} from "@/components/product/data";

type RoleKey =
  | "admin"
  | "complianceLead"
  | "financeLead"
  | "peopleLead"
  | "procurementLead"
  | "executiveViewer"
  | "auditor";

type StageKey = "intake" | "setup" | "onboarding";

type StageStatus = {
  completed: boolean;
  progress: number;
};

type ActionDecision = "accepted" | "rejected" | "pending";

type WorkspaceAction = {
  id: string;
  priority: "High" | "Medium" | "Low";
  title: string;
  owner: string;
  due: string;
  points: string;
  decision: ActionDecision;
  status:
    | "not_started"
    | "in_progress"
    | "blocked"
    | "awaiting_review"
    | "complete"
    | "verified";
};

type EvidenceStatus = "Ready" | "Review" | "Missing items";

type WorkspaceDocument = {
  id: string;
  name: string;
  status: EvidenceStatus;
  owner: string;
  updated: string;
};

type DataSource = {
  id: string;
  label: string;
  connected: boolean;
};

type WorkspaceState = {
  companyName: string;
  industry: string;
  entityStructure: string;
  employeeCount: string;
  currentComplianceLevel: string;
  reportingPeriod: string;
  primaryContact: string;
  onboardingMode: string;
  workspaceName: string;
  scorecardModel: string;
  auditCycleStart: string;
  auditCycleEnd: string;
  documentCategories: string[];
  currentUserRole: RoleKey;
  roles: Record<RoleKey, string>;
  stageStatus: Record<StageKey, StageStatus>;
  dataSources: DataSource[];
  actions: WorkspaceAction[];
  documents: WorkspaceDocument[];
};

type WorkspaceContextValue = {
  workspace: WorkspaceState;
  updateWorkspace: (patch: Partial<WorkspaceState>) => void;
  updateRole: (role: RoleKey, value: string) => void;
  updateDocumentCategory: (index: number, value: string) => void;
  setCurrentUserRole: (role: RoleKey) => void;
  setStageStatus: (stage: StageKey, patch: Partial<StageStatus>) => void;
  toggleDataSource: (id: string) => void;
  setActionDecision: (id: string, decision: ActionDecision) => void;
  setActionStatus: (id: string, status: WorkspaceAction["status"]) => void;
  setDocumentStatus: (id: string, status: EvidenceStatus) => void;
  canAccessRoute: (href: string) => boolean;
};

const STORAGE_KEY = "equi-mock-workspace";

const roleRouteAccess: Record<RoleKey, string[]> = {
  admin: [
    "/intake",
    "/setup",
    "/onboarding",
    "/assessment",
    "/insights",
    "/actions",
    "/execution",
    "/evidence",
    "/audit-center",
    "/monitoring",
    "/dashboard",
    "/book-demo",
    "/get-started",
  ],
  complianceLead: [
    "/intake",
    "/setup",
    "/onboarding",
    "/assessment",
    "/insights",
    "/actions",
    "/execution",
    "/evidence",
    "/audit-center",
    "/monitoring",
    "/dashboard",
    "/book-demo",
    "/get-started",
  ],
  financeLead: ["/assessment", "/insights", "/actions", "/execution", "/evidence", "/monitoring", "/dashboard"],
  peopleLead: ["/assessment", "/insights", "/actions", "/execution", "/evidence", "/monitoring", "/dashboard"],
  procurementLead: ["/assessment", "/insights", "/actions", "/execution", "/evidence", "/monitoring", "/dashboard"],
  executiveViewer: ["/assessment", "/insights", "/monitoring", "/dashboard"],
  auditor: ["/evidence", "/audit-center", "/dashboard"],
};

const defaultWorkspace: WorkspaceState = {
  companyName: "Meridian Group Holdings",
  industry: "Financial services",
  entityStructure: "Parent + 3 operating subsidiaries",
  employeeCount: "1420",
  currentComplianceLevel: "Level 4 (estimated)",
  reportingPeriod: "FY2026",
  primaryContact: "Nomsa Khumalo, Group CFO",
  onboardingMode: "Guided onboarding",
  workspaceName: "Meridian FY2026 Verification Cycle",
  scorecardModel: "Generic enterprise scorecard",
  auditCycleStart: "2026-04-01",
  auditCycleEnd: "2026-09-30",
  documentCategories: [
    "Ownership",
    "Management Control",
    "Skills Development",
    "Enterprise & Supplier Development",
    "Socio-Economic Development",
  ],
  currentUserRole: "complianceLead",
  roles: {
    admin: "Anele Maseko",
    complianceLead: "Nomsa Khumalo",
    financeLead: "Lerato Nkosi",
    peopleLead: "Thando Molefe",
    procurementLead: "Kagiso Dlamini",
    executiveViewer: "James Petersen",
    auditor: "Pending assignment",
  },
  stageStatus: {
    intake: { completed: true, progress: 100 },
    setup: { completed: false, progress: 65 },
    onboarding: { completed: false, progress: 83 },
  },
  dataSources: [
    { id: "payroll", label: "Payroll / HRIS", connected: true },
    { id: "procurement", label: "Procurement / ERP / accounting", connected: true },
    { id: "supplier-certificates", label: "Supplier certificates", connected: true },
    { id: "training", label: "Training spend and records", connected: false },
    { id: "ownership", label: "Ownership / board structure", connected: true },
    { id: "documents", label: "Supporting documents upload", connected: true },
  ],
  actions: dashboardActions.map((action, index) => ({
    id: `action-${index + 1}`,
    ...action,
    priority: action.priority as WorkspaceAction["priority"],
    decision: index < 2 ? "accepted" : index === 2 ? "pending" : "rejected",
    status: index === 0 ? "in_progress" : index === 1 ? "awaiting_review" : index === 2 ? "not_started" : "blocked",
  })),
  documents: dashboardDocuments.map((document, index) => ({
    id: `document-${index + 1}`,
    ...document,
    status: document.status as EvidenceStatus,
  })),
};

function mergeWorkspaceState(saved: Partial<WorkspaceState> | null | undefined): WorkspaceState {
  if (!saved) {
    return defaultWorkspace;
  }

  return {
    ...defaultWorkspace,
    ...saved,
    roles: {
      ...defaultWorkspace.roles,
      ...saved.roles,
    },
    stageStatus: {
      ...defaultWorkspace.stageStatus,
      ...saved.stageStatus,
    },
    dataSources: saved.dataSources ?? defaultWorkspace.dataSources,
    actions: saved.actions ?? defaultWorkspace.actions,
    documents: saved.documents ?? defaultWorkspace.documents,
    documentCategories: saved.documentCategories ?? defaultWorkspace.documentCategories,
  };
}

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [workspace, setWorkspace] = useState<WorkspaceState>(() => {
    if (typeof window === "undefined") {
      return defaultWorkspace;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return defaultWorkspace;
    }

    try {
      return mergeWorkspaceState(JSON.parse(saved) as Partial<WorkspaceState>);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return defaultWorkspace;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(workspace));
  }, [workspace]);

  const value = useMemo<WorkspaceContextValue>(
    () => ({
      workspace,
      updateWorkspace: (patch) =>
        setWorkspace((current) => {
          const next = { ...current, ...patch };

          if (
            patch.companyName ||
            patch.reportingPeriod ||
            patch.workspaceName === undefined
          ) {
            next.workspaceName = `${next.companyName.split(" ")[0]} ${next.reportingPeriod} Verification Cycle`;
          }

          return next;
        }),
      updateRole: (role, value) =>
        setWorkspace((current) => ({
          ...current,
          roles: {
            ...current.roles,
            [role]: value,
          },
        })),
      updateDocumentCategory: (index, value) =>
        setWorkspace((current) => ({
          ...current,
          documentCategories: current.documentCategories.map((category, currentIndex) =>
            currentIndex === index ? value : category,
          ),
        })),
      setCurrentUserRole: (role) =>
        setWorkspace((current) => ({
          ...current,
          currentUserRole: role,
        })),
      setStageStatus: (stage, patch) =>
        setWorkspace((current) => ({
          ...current,
          stageStatus: {
            ...current.stageStatus,
            [stage]: {
              ...current.stageStatus[stage],
              ...patch,
            },
          },
        })),
      toggleDataSource: (id) =>
        setWorkspace((current) => {
          const dataSources = current.dataSources.map((source) =>
            source.id === id ? { ...source, connected: !source.connected } : source,
          );
          const connectedCount = dataSources.filter((source) => source.connected).length;
          const progress = Math.round((connectedCount / dataSources.length) * 100);

          return {
            ...current,
            dataSources,
            stageStatus: {
              ...current.stageStatus,
              onboarding: {
                completed: progress === 100,
                progress,
              },
            },
          };
        }),
      setActionDecision: (id, decision) =>
        setWorkspace((current) => ({
          ...current,
          actions: current.actions.map((action) =>
            action.id === id ? { ...action, decision } : action,
          ),
        })),
      setActionStatus: (id, status) =>
        setWorkspace((current) => ({
          ...current,
          actions: current.actions.map((action) =>
            action.id === id ? { ...action, status } : action,
          ),
        })),
      setDocumentStatus: (id, status) =>
        setWorkspace((current) => ({
          ...current,
          documents: current.documents.map((document) =>
            document.id === id ? { ...document, status } : document,
          ),
        })),
      canAccessRoute: (href) => roleRouteAccess[workspace.currentUserRole].includes(href),
    }),
    [workspace],
  );

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used within WorkspaceProvider");
  }

  return context;
}

export type { RoleKey, WorkspaceState };
