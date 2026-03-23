import { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Espace utilisateur",
  description: "Historique, QR codes, factures PDF, abonnement et préférences utilisateur.",
};

const upcoming = [
  { date: "2026-03-25 10:00", site: "Gare du Nord", duration: "1h", amount: "9 EUR", qr: "QR-GDN-20260325-1000" },
  { date: "2026-03-28 18:30", site: "CDG Terminal 2E", duration: "30min", amount: "5 EUR", qr: "QR-CDG-20260328-1830" },
];

const history = [
  { date: "2026-03-01", site: "Gare de Lyon", duration: "30min", amount: "5 EUR" },
  { date: "2026-02-22", site: "Gare du Nord", duration: "1h", amount: "9 EUR" },
  { date: "2026-02-10", site: "Lyon Part-Dieu", duration: "1h", amount: "14 EUR" },
];

export default function EspaceClientPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Mon compte"
        title="Espace utilisateur"
        description="Historique, réservations à venir, QR codes, moyens de paiement, factures et abonnement."
        className="pt-16"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Abonnement</p>
            <p className="mt-2 text-lg font-semibold text-white">Actif - 49 EUR/mois</p>
            <p className="mt-2 text-sm text-zinc-300">Solde restant: 5h20</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Paiements enregistrés</p>
            <p className="mt-2 text-lg font-semibold text-white">Visa **** 1245</p>
            <p className="mt-2 text-sm text-zinc-300">Apple Pay active</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Préférences</p>
            <p className="mt-2 text-lg font-semibold text-white">Formule préférée: Solo 1h</p>
            <p className="mt-2 text-sm text-zinc-300">Favoris: Gare du Nord, CDG</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Réservations à venir" description="QR codes d'accès et détails des prochaines sessions.">
        <div className="grid gap-3">
          {upcoming.map((item) => (
            <article key={item.qr} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-base font-medium text-white">{item.site}</p>
              <p className="text-sm text-zinc-300">{item.date} - {item.duration} - {item.amount}</p>
              <p className="mt-2 font-mono text-xs text-zinc-300">{item.qr}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Historique des réservations" description="Dates, sites, durées, montants et accès aux factures PDF.">
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03]">
          <table className="min-w-full text-left text-sm text-zinc-200">
            <thead className="border-b border-white/10 text-zinc-300">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Site</th>
                <th className="px-4 py-3">Durée</th>
                <th className="px-4 py-3">Montant</th>
                <th className="px-4 py-3">Facture</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={`${item.date}-${item.site}`} className="border-b border-white/10 last:border-b-0">
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.site}</td>
                  <td className="px-4 py-3">{item.duration}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">PDF (démo)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>
    </>
  );
}