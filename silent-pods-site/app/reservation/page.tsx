import { Metadata } from "next";
import { LocationCards } from "@/components/location-cards";
import { ReservationForm } from "@/components/reservation-form";
import { SectionWrapper } from "@/components/section-wrapper";

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
    </>
  );
}
