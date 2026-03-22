"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/[0.03] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-white uppercase">
          Silent Pods
        </Link>
        <nav aria-label="Navigation principale" className="hidden gap-1 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/reservation"
          className="rounded-full border border-ice-300/50 bg-ice-400/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition hover:bg-ice-300"
        >
          Pilote 2026
        </Link>
      </div>
      <nav
        aria-label="Navigation principale mobile"
        className="flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden"
      >
        {navLinks.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors ${
                active ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
