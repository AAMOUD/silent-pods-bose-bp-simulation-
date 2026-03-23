import Image from "next/image";
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
            Retrouvez le silence en pleine zone de transit.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Silent Pods est un concept porté par Bose: des pods insonorisés installés dans les gares,
            aéroports et hubs entreprise pour travailler, se reposer, méditer ou passer un appel
            confidentiel. ANC Bose, expérience premium et réservation instantanée depuis l&apos;app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="/reservation">Trouver un pod</CtaButton>
            <CtaButton href="/tarifs" variant="ghost">
              Voir les tarifs
            </CtaButton>
          </div>
        </div>

        <div className="grid w-full max-w-sm gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur md:mb-2 animate-fade-in-up-delay">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Visuel pod (rendu concept)</p>
          <div className="relative h-52 overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/pod-concept.png"
              alt="Pod Silent Pods"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">
            Capsule insonorisée avec ANC, éclairage doux, USB-C, Wi-Fi sécurisé et accès QR/NFC.
          </p>
        </div>
      </div>
    </section>
  );
}