import { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Legal et RGPD",
  description: "Politique de confidentialite, cookies, CGU, CGV et mentions legales.",
};

export default function LegalPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Conformite"
        title="RGPD et obligations legales"
        description="Documents legaux accessibles et references de conformite pour la plateforme Silent Pods."
        className="pt-16"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article id="confidentialite" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">Politique de confidentialite</p>
            <p className="mt-2 text-sm text-zinc-300">
              Donnees utilisateurs stockees en Europe. Droit d&apos;acces, effacement, rectification et portabilite (RGPD art. 17 et 20).
            </p>
          </article>
          <article id="cookies" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">Cookies</p>
            <p className="mt-2 text-sm text-zinc-300">
              Bandeau cookies avec gestion des preferences. Consentement explicite avant depots non essentiels.
            </p>
          </article>
          <article id="cgu" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">CGU (PDF)</p>
            <p className="mt-2 text-sm text-zinc-300">Conditions generales d&apos;utilisation telechargeables (demo).</p>
          </article>
          <article id="cgv" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-semibold text-white">CGV (PDF)</p>
            <p className="mt-2 text-sm text-zinc-300">Conditions de vente, politique d&apos;annulation et remboursement (demo).</p>
          </article>
          <article id="mentions" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:col-span-2">
            <p className="font-semibold text-white">Mentions legales</p>
            <p className="mt-2 text-sm text-zinc-300">
              Editeur, directeur de publication, hebergeur, contact legal, support et numero d&apos;urgence operationnel.
            </p>
          </article>
        </div>
      </SectionWrapper>
    </>
  );
}
