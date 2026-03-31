"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftRight, Search } from "lucide-react";

import { EquiLogo } from "@/components/brand/equi-logo";
import { productNav } from "@/components/product/data";
import { useWorkspace } from "@/components/product/workspace-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProductShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { workspace, setCurrentUserRole, canAccessRoute } = useWorkspace();

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,241,171,0.1),transparent_24%),linear-gradient(rgba(99,241,171,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,241,171,0.025)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <div className="relative z-10">
        <header className="border-b border-white/8 bg-[color:var(--background)]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" aria-label="Equi.ai home">
              <EquiLogo />
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              {productNav.filter((item) => canAccessRoute(item.href)).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                      pathname === item.href
                        ? "border-emerald-400/30 bg-emerald-400/10 text-white"
                        : "border-white/8 bg-white/[0.03] text-[color:var(--muted-foreground)] hover:text-white"
                    }`}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={workspace.currentUserRole}
                onChange={(event) => setCurrentUserRole(event.target.value as keyof typeof workspace.roles)}
                className="hidden rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-[color:var(--muted-foreground)] outline-none md:block"
              >
                <option value="admin">Admin</option>
                <option value="complianceLead">Compliance lead</option>
                <option value="financeLead">Finance lead</option>
                <option value="peopleLead">HR / People lead</option>
                <option value="procurementLead">Procurement lead</option>
                <option value="executiveViewer">Executive viewer</option>
                <option value="auditor">Auditor / verifier</option>
              </select>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                <Search className="size-4" />
                Search
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard">
                  <ArrowLeftRight className="size-4" />
                  Open Workspace
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <Badge variant="secondary" className="w-fit">
                Product Workspace
              </Badge>
              <div className="space-y-2">
                <h1 className="font-serif text-4xl tracking-[-0.04em] text-white sm:text-5xl">{title}</h1>
                <p className="max-w-3xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
                  {subtitle}
                </p>
              </div>
            </div>

            <Card className="rounded-[1.5rem] border-white/8 bg-white/[0.03] px-5 py-4">
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                  Workspace
                </p>
                <p className="text-sm text-white">{workspace.companyName} • {workspace.reportingPeriod}</p>
                <p className="text-xs text-[color:var(--muted-foreground)]">
                  {workspace.roles[workspace.currentUserRole]} • {workspace.currentUserRole}
                </p>
              </div>
            </Card>
          </div>

          {children}
        </div>
      </div>
    </main>
  );
}
