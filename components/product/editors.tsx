"use client";

import { useWorkspace, type RoleKey } from "@/components/product/workspace-context";
import { Card, CardContent } from "@/components/ui/card";

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
        {label}
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/40"
      />
    </label>
  );
}

export function IntakeEditor() {
  const { workspace, updateWorkspace } = useWorkspace();

  return (
    <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
      <CardContent className="grid gap-4 p-6 md:grid-cols-2">
        <Field
          label="Company name"
          value={workspace.companyName}
          onChange={(value) => updateWorkspace({ companyName: value })}
        />
        <Field
          label="Industry"
          value={workspace.industry}
          onChange={(value) => updateWorkspace({ industry: value })}
        />
        <Field
          label="Entity structure"
          value={workspace.entityStructure}
          onChange={(value) => updateWorkspace({ entityStructure: value })}
        />
        <Field
          label="Employee count"
          value={workspace.employeeCount}
          onChange={(value) => updateWorkspace({ employeeCount: value })}
        />
        <Field
          label="Current compliance level"
          value={workspace.currentComplianceLevel}
          onChange={(value) => updateWorkspace({ currentComplianceLevel: value })}
        />
        <Field
          label="Reporting period"
          value={workspace.reportingPeriod}
          onChange={(value) => updateWorkspace({ reportingPeriod: value })}
        />
        <Field
          label="Primary contact"
          value={workspace.primaryContact}
          onChange={(value) => updateWorkspace({ primaryContact: value })}
        />
        <Field
          label="Onboarding mode"
          value={workspace.onboardingMode}
          onChange={(value) => updateWorkspace({ onboardingMode: value })}
        />
      </CardContent>
    </Card>
  );
}

const roleLabels: Array<{ key: RoleKey; label: string }> = [
  { key: "admin", label: "Admin" },
  { key: "complianceLead", label: "Compliance lead" },
  { key: "financeLead", label: "Finance lead" },
  { key: "peopleLead", label: "HR / People lead" },
  { key: "procurementLead", label: "Procurement lead" },
  { key: "executiveViewer", label: "Executive viewer" },
  { key: "auditor", label: "Auditor / verifier" },
];

export function SetupEditor() {
  const { workspace, updateWorkspace, updateRole, updateDocumentCategory } = useWorkspace();

  return (
    <div className="space-y-6">
      <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
          <Field
            label="Scorecard model"
            value={workspace.scorecardModel}
            onChange={(value) => updateWorkspace({ scorecardModel: value })}
          />
          <Field
            label="Workspace name"
            value={workspace.workspaceName}
            onChange={(value) => updateWorkspace({ workspaceName: value })}
          />
          <Field
            label="Audit cycle start"
            value={workspace.auditCycleStart}
            onChange={(value) => updateWorkspace({ auditCycleStart: value })}
          />
          <Field
            label="Audit cycle end"
            value={workspace.auditCycleEnd}
            onChange={(value) => updateWorkspace({ auditCycleEnd: value })}
          />
        </CardContent>
      </Card>

      <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
          {roleLabels.map((role) => (
            <Field
              key={role.key}
              label={role.label}
              value={workspace.roles[role.key]}
              onChange={(value) => updateRole(role.key, value)}
            />
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
          {workspace.documentCategories.map((category, index) => (
            <Field
              key={`${category}-${index}`}
              label={`Document category ${index + 1}`}
              value={category}
              onChange={(value) => updateDocumentCategory(index, value)}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export function WorkspaceSnapshot() {
  const { workspace } = useWorkspace();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
        <CardContent className="p-6 text-sm leading-7 text-white/90">
          <p><strong>Company:</strong> {workspace.companyName}</p>
          <p><strong>Industry:</strong> {workspace.industry}</p>
          <p><strong>Entity structure:</strong> {workspace.entityStructure}</p>
          <p><strong>Employees:</strong> {workspace.employeeCount}</p>
          <p><strong>Current level:</strong> {workspace.currentComplianceLevel}</p>
        </CardContent>
      </Card>
      <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
        <CardContent className="p-6 text-sm leading-7 text-white/90">
          <p><strong>Reporting period:</strong> {workspace.reportingPeriod}</p>
          <p><strong>Primary contact:</strong> {workspace.primaryContact}</p>
          <p><strong>Onboarding mode:</strong> {workspace.onboardingMode}</p>
          <p><strong>Workspace:</strong> {workspace.workspaceName}</p>
          <p><strong>Scorecard:</strong> {workspace.scorecardModel}</p>
        </CardContent>
      </Card>
    </div>
  );
}
