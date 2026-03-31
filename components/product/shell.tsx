import Link from "next/link";
import { ArrowLeftRight, Search } from "lucide-react";

import { EquiLogo } from "@/components/brand/equi-logo";
import { productNav } from "@/components/product/data";
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
              {productNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-[color:var(--muted-foreground)] transition hover:text-white"
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
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
                <p className="text-sm text-white">Meridian Group • FY2026 Verification Cycle</p>
              </div>
            </Card>
          </div>

          {children}
        </div>
      </div>
    </main>
  );
}
