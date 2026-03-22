import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'equipe projet Silent Pods pour des informations, partenariats ou demandes media.",
};

export default function ContactPage() {
  return (
    <SectionWrapper
      eyebrow="Contact"
      title="Parlons du projet Silent Pods"
      description="Formulaire frontend de demonstration. Reponse simulee sous 24 a 48 heures ouvrables."
      className="pt-16"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <aside className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Coordonnees</p>
            <p className="mt-3 text-sm text-zinc-200">contact@silentpods-bose.demo</p>
            <p className="text-sm text-zinc-200">+33 1 84 88 20 26</p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Partenariats</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Vous representez un gestionnaire de gare, un aeroport ou un centre commercial ?
              Nous pouvons vous presenter le cadre de pilote 2026 et les conditions de collaboration.
            </p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-zinc-300">
              Delai de reponse vise: 24 a 48 heures ouvrables selon la nature de la demande.
            </p>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
