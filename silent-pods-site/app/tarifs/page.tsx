import { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { PricingCards } from "@/components/pricing-cards";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs Silent Pods: 5 EUR / 30 min, 10 EUR / 1 h, pack voyageur frequent a 29 EUR et option immersive +3 EUR.",
};

export default function TarifsPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Tarification"
        title="Un modele pay-per-use simple et accessible"
        description="Les prix Silent Pods sont concus pour rester lisibles, credibles et compatibles avec une adoption rapide en environnement public."
        className="pt-16"
      >
        <PricingCards />
      </SectionWrapper>

      <SectionWrapper
        title="Pour les entreprises et partenaires"
        description="Des offres dediees peuvent etre construites pour les gestionnaires de gares, aeroports, centres commerciaux et acteurs de la mobilite."
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
            Le pilote 2026 permet de tester le modele economique, mesurer l&apos;usage et calibrer une extension
            progressive. L&apos;objectif est de proposer une experience premium tout en conservant un prix final
            clair pour l&apos;utilisateur.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CtaButton href="/contact">Demander un echange partenariat</CtaButton>
            <CtaButton href="/reservation" variant="ghost">
              Tester le parcours de reservation
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
