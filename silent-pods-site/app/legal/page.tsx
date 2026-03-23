import { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Légal et RGPD",
  description: "Politique de confidentialité, cookies, CGU, CGV et mentions légales.",
};

export default function LegalPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Conformité"
        title="RGPD et obligations légales"
        description="Documents légaux accessibles et références de conformité pour la plateforme Silent Pods."
        className="pt-16"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article id="confidentialite" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">Politique de confidentialité</p>
            <p className="mt-2 text-sm text-zinc-300">
              Données utilisateurs stockées en Europe. Droit d&apos;accès, effacement, rectification et portabilité (RGPD art. 17 et 20).
            </p>
          </article>
          <article id="cookies" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">Cookies</p>
            <p className="mt-2 text-sm text-zinc-300">
              Bandeau cookies avec gestion des préférences. Consentement explicite avant dépôts non essentiels.
            </p>
          </article>
          <article id="cgu" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">CGU (PDF)</p>
            <p className="mt-2 text-sm text-zinc-300">Conditions générales d&apos;utilisation téléchargeables (démo).</p>
          </article>
          <article id="cgv" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">CGV (PDF)</p>
            <p className="mt-2 text-sm text-zinc-300">Conditions de vente, politique d&apos;annulation et remboursement (démo).</p>
          </article>
          <article id="mentions" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:col-span-2">
            <p className="font-semibold text-white">Mentions légales</p>
            <p className="mt-2 text-sm text-zinc-300">
              Éditeur, directeur de publication, hébergeur, contact légal, support et numéro d&apos;urgence opérationnel.
            </p>
          </article>
        </div>
      </SectionWrapper>
    </>
  );
}