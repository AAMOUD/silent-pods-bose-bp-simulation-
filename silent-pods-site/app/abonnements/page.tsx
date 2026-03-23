import { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { subscriptionPlans } from "@/data/site";

export const metadata: Metadata = {
  title: "Abonnements",
  description: "Details des abonnements Silent Pods: heures incluses, politique de report et resiliation.",
};

export default function AbonnementsPage() {
  return (
    <SectionWrapper
      eyebrow="Abonnements"
      title="Offres mensuelles"
      description="Detail des 8h incluses, heures supplementaires et conditions d'annulation/resiliation."
      className="pt-16"
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
          <p className="text-lg font-semibold text-white">Politique de resiliation</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Resiliation possible a tout moment, effective en fin de periode.</li>
            <li>Heures non utilisees reportables pendant 30 jours.</li>
            <li>Annulation d&apos;une session: gratuite jusqu&apos;a 60 min avant le creneau.</li>
          </ul>
        </article>
      </div>
    </SectionWrapper>
  );
}
