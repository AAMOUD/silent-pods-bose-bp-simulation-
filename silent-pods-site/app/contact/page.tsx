import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe projet Silent Pods pour des informations, partenariats ou demandes média.",
};

export default function ContactPage() {
  return (
    <SectionWrapper
      eyebrow="Contact"
      title="Parlons du projet Silent Pods"
      description="Formulaire frontend de démonstration. Réponse simulée sous 24 à 48 heures ouvrables."
      className="pt-16"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <aside className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Coordonnées</p>
            <p className="mt-3 text-sm text-zinc-200">silentpods@bose.com (démo)</p>
            <p className="text-sm text-zinc-200">+33 1 84 88 20 26</p>
            <p className="text-sm text-zinc-200">Urgence pod bloqué: +33 1 80 00 00 24</p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Partenariats</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Vous représentez un gestionnaire de gare, un aéroport ou un centre commercial ?
              Nous pouvons vous présenter le cadre de pilote 2026 et les conditions de collaboration.
            </p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-zinc-300">
              Délai de réponse visé: 24 heures ouvrées (48h max selon la demande).
            </p>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}