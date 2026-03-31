import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProductSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <Badge variant="secondary" className="w-fit">
          {eyebrow}
        </Badge>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
          {description ? (
            <p className="max-w-3xl text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export function InfoGrid({
  items,
}: {
  items: Array<{ label: string; value: string; helper?: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="rounded-[1.5rem] border-white/8 bg-white/[0.03]">
          <CardContent className="p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
              {item.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
            {item.helper ? (
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{item.helper}</p>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
      <CardContent className="p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
          {title}
        </p>
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item} className="rounded-[1rem] border border-white/8 bg-black/10 px-4 py-3 text-sm text-white/90">
              {item}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function StageCards({
  items,
}: {
  items: Array<{
    id: string;
    title: string;
    description: string;
    bullets?: string[];
    status?: string;
  }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="rounded-[1.75rem] border-white/8 bg-white/[0.03]">
          <CardContent className="grid gap-5 p-6 lg:grid-cols-[80px_1fr]">
            <div className="font-mono text-4xl text-emerald-400/25">{item.id}</div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                {item.status ? <Badge variant="secondary">{item.status}</Badge> : null}
              </div>
              <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">{item.description}</p>
              {item.bullets?.length ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-[1rem] border border-white/8 bg-black/10 px-4 py-3 text-sm text-white/90">
                      {bullet}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function NextStageCard({
  title,
  description,
  href,
  action,
}: {
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <Card className="rounded-[1.75rem] border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(99,241,171,0.12),rgba(13,19,16,0.94))]">
      <CardContent className="p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
          Next stage
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">{description}</p>
        <div className="mt-5">
          <Button asChild>
            <Link href={href}>
              {action}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
