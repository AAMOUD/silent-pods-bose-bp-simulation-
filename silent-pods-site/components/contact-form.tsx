"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Nom</span>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
            placeholder="Votre nom"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Email</span>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
            placeholder="vous@entreprise.com"
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm text-zinc-200">Sujet</span>
          <input
            required
            name="subject"
            type="text"
            className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
            placeholder="Partenariat, media, informations..."
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm text-zinc-200">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
            placeholder="Expliquez votre besoin en quelques lignes."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ice-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-ice-300 sm:w-auto"
      >
        Envoyer
      </button>

      {submitted ? (
        <p className="mt-4 rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
          Merci, votre message a bien ete pris en compte. Reponse estimee sous 24 a 48 heures (simulation).
        </p>
      ) : null}
    </form>
  );
}
