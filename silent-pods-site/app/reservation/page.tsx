import { Metadata } from "next";
import { LocationCards } from "@/components/location-cards";
import { ReservationForm } from "@/components/reservation-form";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteExplorer } from "@/components/site-explorer";
import { operationFeatures } from "@/data/site";

export const metadata: Metadata = {
  title: "Réservation et localisations",
  description:
    "Réservez un Silent Pod en simulation locale et découvrez les localisations pilotes à Paris Gare du Nord et Lyon Part-Dieu.",
};

export default function ReservationPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Réservation"
        title="Réservez votre pod en quelques secondes"
        description="Moteur de réservation fictif en frontend local: choisissez le lieu, la durée, l'horaire et l'option immersive."
        className="pt-16"
      >
        <ReservationForm />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Localisations"
        title="Réseau pilote et extension prévue"
        description="Lancement sur deux grandes gares françaises, puis déploiement progressif vers certains aéroports et centres commerciaux."
      >
        <LocationCards />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Temps réel"
        title="Système de réservation et d'accès"
        description="Simulation des briques techniques: disponibilité, verrouillage de créneau, paiement sécurisé, QR et contrôle d'accès."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {operationFeatures.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <item.icon className="mx-auto h-5 w-5 text-ice-200" />
              <p className="mt-3 text-sm text-zinc-200">{item.title}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Sites"
        title="Carte interactive et fiche détaillée"
        description="Filtrage par type/ville/disponibilité, marqueurs et détail complet de chaque site."
      >
        <SiteExplorer />
      </SectionWrapper>
    </>
  );
}