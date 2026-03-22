import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
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
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Contact fictif</p>
          <p className="mt-3 text-sm text-zinc-400">contact@silentpods-bose.demo</p>
          <p className="text-sm text-zinc-400">+33 1 84 88 20 26</p>
          <p className="mt-4 text-xs text-zinc-500">Mentions legales fictives - Demo academique 2026.</p>
        </div>
      </div>
    </footer>
  );
}
