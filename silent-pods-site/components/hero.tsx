import { Sparkles } from "lucide-react";
import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-20 md:pb-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-80 w-80 rounded-full bg-ice-500/25 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ice-200">
            <Sparkles className="h-3.5 w-3.5" />
            Innovation Bose
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Le calme la ou vous ne l&apos;attendez pas.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Silent Pods est un concept porte par Bose: des pods insonorises installes dans les gares,
            aeroports et centres commerciaux pour travailler, se reposer, mediter ou passer un appel
            confidentiel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="/tarifs">Voir les tarifs</CtaButton>
            <CtaButton href="/reservation" variant="ghost">
              Reserver un pod
            </CtaButton>
          </div>
        </div>

        <div className="grid w-full max-w-sm gap-3 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur md:mb-2 animate-fade-in-up-delay">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Pilote 2026</p>
          <p className="text-2xl font-semibold text-white">Experience sonore premium</p>
          <p className="text-sm leading-relaxed text-zinc-300">
            Technologie de reduction de bruit Bose, confort acoustique et reservation immediate.
          </p>
        </div>
      </div>
    </section>
  );
}
