import Link from "next/link";
import { legalLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Silent Pods</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
            Concept de pods insonorises portes par Bose pour offrir des bulles de calme dans les lieux publics.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Liens</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/tarifs" className="hover:text-white">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/reservation" className="hover:text-white">
                Reservation
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/b2b" className="hover:text-white">
                Offre B2B
              </Link>
            </li>
            <li>
              <Link href="/espace-client" className="hover:text-white">
                Espace client
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Contact et support</p>
          <p className="mt-3 text-sm text-zinc-400">silentpods@bose.com (demo)</p>
          <p className="text-sm text-zinc-400">+33 1 84 88 20 26</p>
          <p className="mt-2 text-xs text-zinc-500">Reponse sous 24h ouvrees.</p>
          <p className="text-xs text-zinc-500">Urgence pod bloque: +33 1 80 00 00 24.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/15 px-2 py-1 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">Mentions legales fictives - Demo academique 2026.</p>
        </div>
      </div>
    </footer>
  );
}
