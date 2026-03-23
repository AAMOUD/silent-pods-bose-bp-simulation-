import { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { PricingCards } from "@/components/pricing-cards";
import { SectionWrapper } from "@/components/section-wrapper";
import { b2bPlans, subscriptionPlans, tariffFaqItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs Silent Pods: 5 EUR / 30 min, 10 EUR / 1 h, pack voyageur fréquent à 29 EUR et option immersive +3 EUR.",
};

export default function TarifsPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Tarification"
        title="Un modèle pay-per-use simple et accessible"
        description="Les prix Silent Pods sont conçus pour rester lisibles, crédibles et compatibles avec une adoption rapide en environnement public."
        className="pt-16"
      >
        <PricingCards />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="TTC"
        title="Grille tarifaire claire"
        description="Tous les prix affichés sont TTC. Le récapitulatif avant paiement reprend site, créneau, formule et prix final."
      >
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03]">
          <table className="min-w-full text-left text-sm text-zinc-200">
            <thead className="border-b border-white/10 text-zinc-300">
              <tr>
                <th className="px-4 py-3">Formule</th>
                <th className="px-4 py-3">Prix TTC</th>
                <th className="px-4 py-3">Inclus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-4 py-3">Solo 30 min</td>
                <td className="px-4 py-3">5 EUR</td>
                <td className="px-4 py-3">Pod standard, ANC Bose, Wi-Fi, USB</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-3">Solo 1 heure</td>
                <td className="px-4 py-3">9 EUR</td>
                <td className="px-4 py-3">Tout Solo 30 min + casque Bose en prêt</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-3">Premium 1 heure</td>
                <td className="px-4 py-3">14 EUR</td>
                <td className="px-4 py-3">Tout Solo 1h + meditation + mode massage</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Abonnement mensuel</td>
                <td className="px-4 py-3">49 EUR / mois</td>
                <td className="px-4 py-3">8h incluses, QR rapide, priorité créneaux</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Abonnement"
        title="Détails abonnement"
        description="Politique de report, validité des heures et gestion depuis l&apos;espace utilisateur."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {subscriptionPlans.map((plan) => (
            <article key={plan.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xl font-semibold text-white">{plan.name}</p>
              <p className="mt-2 text-2xl font-semibold text-ice-200">{plan.price}</p>
              <p className="mt-2 text-sm text-zinc-300">{plan.details}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                {plan.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-lg font-semibold text-white">FAQ abonnements</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              <li>Report des heures possible sous 30 jours.</li>
              <li>Résiliation à tout moment, effet fin de période.</li>
              <li>Annulation de réservation: gratuite jusqu&apos;à 60 min avant.</li>
            </ul>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Pour les entreprises et partenaires"
        description="Des offres dédiées sont disponibles pour gares, aéroports, centres commerciaux et campus entreprise."
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
          <div className="mb-4 overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-full text-left text-sm text-zinc-200">
              <thead className="border-b border-white/10 text-zinc-300">
                <tr>
                  <th className="px-4 py-3">Modele</th>
                  <th className="px-4 py-3">Prix</th>
                  <th className="px-4 py-3">Commentaire</th>
                </tr>
              </thead>
              <tbody>
                {b2bPlans.map((plan) => (
                  <tr key={plan.name} className="border-b border-white/10 last:border-b-0">
                    <td className="px-4 py-3">{plan.name}</td>
                    <td className="px-4 py-3">{plan.price}</td>
                    <td className="px-4 py-3">{plan.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
            Le pilote 2026 permet de tester le modèle économique, mesurer l&apos;usage et calibrer une extension
            progressive. L&apos;objectif est de proposer une expérience premium tout en conservant un prix final
            clair pour l&apos;utilisateur.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CtaButton href="/b2b">Demander un devis partenariat</CtaButton>
            <CtaButton href="/reservation" variant="ghost">
              Tester le parcours de réservation
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="FAQ Tarifs"
        title="Questions fréquentes sur la facturation"
        description="Les points clés juridiques et opérationnels avant paiement."
      >
        <div className="space-y-3">
          {tariffFaqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-medium text-white">{item.question}</p>
              <p className="mt-2 text-sm text-zinc-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}