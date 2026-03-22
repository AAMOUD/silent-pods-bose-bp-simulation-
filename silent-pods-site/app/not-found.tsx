import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
        Erreur 404
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Cette capsule n&apos;existe pas encore
      </h1>
      <p className="mt-4 max-w-xl text-zinc-300">
        La page demandee est introuvable. Revenez a l&apos;accueil pour poursuivre la visite du projet Silent Pods.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ice-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-ice-300"
      >
        Retour a l&apos;accueil
      </Link>
    </section>
  );
}
