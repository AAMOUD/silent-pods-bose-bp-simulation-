import { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions frequentes sur Silent Pods: reservation, confidentialite, hygiene, accessibilite, annulation et securite.",
};

export default function FaqPage() {
  return (
    <SectionWrapper
      eyebrow="FAQ"
      title="Questions frequentes"
      description="Des reponses claires pour rassurer les utilisateurs et faciliter le deploiement du service."
      className="pt-16"
    >
      <FaqAccordion />
    </SectionWrapper>
  );
}
