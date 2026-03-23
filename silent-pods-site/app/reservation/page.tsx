import { Metadata } from "next";
import { LocationCards } from "@/components/location-cards";
import { ReservationForm } from "@/components/reservation-form";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteExplorer } from "@/components/site-explorer";
import { operationFeatures } from "@/data/site";

export const metadata: Metadata = {
  title: "Reservation et localisations",
  description:
    "Reservez un Silent Pod en simulation locale et decouvrez les localisations pilotes a Paris Gare du Nord et Lyon Part-Dieu.",
};

export default function ReservationPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Reservation"
        title="Reservez votre pod en quelques secondes"
        description="Moteur de reservation fictif en frontend local: choisissez le lieu, la duree, l'horaire et l'option immersive."
        className="pt-16"
      >
        <ReservationForm />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Localisations"
        title="Reseau pilote et extension prevue"
        description="Lancement sur deux grandes gares francaises, puis deploiement progressif vers certains aeroports et centres commerciaux."
      >
        <LocationCards />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Temps reel"
        title="Systeme de reservation et d'acces"
        description="Simulation des briques techniques: disponibilite, verrouillage de creneau, paiement securise, QR et controle d'acces."
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
        title="Carte interactive et fiche detaillee"
        description="Filtrage par type/ville/disponibilite, marqueurs et detail complet de chaque site."
      >
        <SiteExplorer />
      </SectionWrapper>
    </>
  );
}
