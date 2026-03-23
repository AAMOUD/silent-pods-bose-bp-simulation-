import { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { SectionWrapper } from "@/components/section-wrapper";
import { b2bPlans, b2bValueProps } from "@/data/site";

export const metadata: Metadata = {
  title: "Offre B2B",
  description:
    "Offre entreprise Silent Pods: location 799 EUR/pod/mois, installation en 2 jours, sans travaux.",
};

export default function B2BPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="B2B"
        title="Offrez le silence à vos équipes"
        description="Cas d'usage: réunion confidentielle, appel important, concentration."
        className="pt-16"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {b2bValueProps.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <item.icon className="h-5 w-5 text-ice-200" />
              <p className="mt-3 text-lg font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Tarifs B2B"
        title="Location vs achat"
        description="Comparatif simplifié pour décider rapidement."
      >
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03]">
          <table className="min-w-full text-left text-sm text-zinc-200">
            <thead className="border-b border-white/10 text-zinc-300">
              <tr>
                <th className="px-4 py-3">Solution</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Atout principal</th>
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
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Devis"
        title="Formulaire devis B2B"
        description="Collecte des informations nécessaires (simulation locale)."
      >
        <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2">
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Nom" />
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Prénom" />
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Email professionnel" />
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Entreprise" />
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Taille entreprise (salariés)" />
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Ville / site souhaité" />
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Nombre de pods souhaités" />
          <input className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white" placeholder="Date de contact souhaitée" />
          <textarea className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white md:col-span-2" rows={4} placeholder="Message libre" />
          <label className="inline-flex items-start gap-2 text-sm text-zinc-300 md:col-span-2">
            <input type="checkbox" className="mt-1 h-4 w-4 accent-cyan-300" />
            J&apos;accepte le traitement de mes données (RGPD).
          </label>
          <div className="md:col-span-2">
            <CtaButton href="/contact">Envoyer la demande de devis</CtaButton>
            <p className="mt-2 text-xs text-zinc-400">Confirmation email automatique et réponse sous 48h (simulation).</p>
          </div>
        </form>
      </SectionWrapper>
    </>
  );
}