import Link from "next/link";
import { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function CtaButton({ href, children, variant = "solid", className }: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";

  const styles =
    variant === "solid"
      ? "bg-ice-400 text-zinc-950 hover:bg-ice-300 hover:shadow-[0_0_24px_rgba(167,243,255,0.25)]"
      : "border border-white/20 bg-white/5 text-white hover:border-ice-300/70 hover:bg-white/10";

  return (
    <Link href={href} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
