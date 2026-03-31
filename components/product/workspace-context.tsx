"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type RoleKey =
  | "admin"
  | "complianceLead"
  | "financeLead"
  | "peopleLead"
  | "procurementLead"
  | "executiveViewer"
  | "auditor";

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
};

type WorkspaceContextValue = {
  workspace: WorkspaceState;
  updateWorkspace: (patch: Partial<WorkspaceState>) => void;
  updateRole: (role: RoleKey, value: string) => void;
  updateDocumentCategory: (index: number, value: string) => void;
  setCurrentUserRole: (role: RoleKey) => void;
};

const STORAGE_KEY = "equi-mock-workspace";

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
};

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
      return JSON.parse(saved) as WorkspaceState;
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
