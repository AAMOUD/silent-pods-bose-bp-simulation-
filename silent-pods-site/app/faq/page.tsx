import { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur Silent Pods: réservation, confidentialité, hygiène, accessibilité, annulation et sécurité.",
};

export default function FaqPage() {
  return (
    <SectionWrapper
      eyebrow="FAQ"
      title="Questions fréquentes"
      description="Des réponses claires pour rassurer les utilisateurs et faciliter le déploiement du service."
      className="pt-16"
    >
      <FaqAccordion />
    </SectionWrapper>
  );
}