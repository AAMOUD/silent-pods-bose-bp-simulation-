"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { sites } from "@/data/site";

type Step = 1 | 2 | 3 | 4 | 5;

const formulaOptions = [
  {
    id: "solo-30",
    label: "Solo 30 min",
    price: 5,
    description: "Format express pour appel, concentration ou pause rapide.",
  },
  {
    id: "solo-60",
    label: "Solo 1h",
    price: 9,
    description: "Inclut pret de casque Bose pour immersion acoustique.",
  },
  {
    id: "premium-60",
    label: "Premium 1h",
    price: 14,
    description: "Meditation guidee + ambiance sonore + assise massage.",
  },
  {
    id: "abonnement",
    label: "Abonnement",
    price: 49,
    description: "A partir de 49 EUR/mois, 8h incluses.",
  },
];

const durationOptions = [
  { label: "30 min", value: 30 },
  { label: "1h", value: 60 },
  { label: "2h", value: 120 },
  { label: "Duree libre", value: 45 },
];

const paymentMethods = ["Carte bancaire", "Apple Pay", "Google Pay", "Solde abonnement"];

const slots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:30",
  "17:00",
  "18:30",
  "20:00",
];

export function ReservationForm() {
  const [step, setStep] = useState<Step>(1);
  const [siteId, setSiteId] = useState(sites[0]?.id ?? "");
  const [duration, setDuration] = useState(durationOptions[0].value);
  const [time, setTime] = useState(slots[3]);
  const [day, setDay] = useState(new Date().toISOString().slice(0, 10));
  const [formulaId, setFormulaId] = useState(formulaOptions[0].id);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [identMode, setIdentMode] = useState("invite");
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [secureLock, setSecureLock] = useState(300);

  useEffect(() => {
    if (step !== 1) return;
    const id = setInterval(() => {
      setSecureLock((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  const currentSite = useMemo(() => sites.find((item) => item.id === siteId) ?? sites[0], [siteId]);
  const selectedFormula = useMemo(
    () => formulaOptions.find((item) => item.id === formulaId) ?? formulaOptions[0],
    [formulaId],
  );

  const totalPrice = useMemo(() => {
    if (formulaId === "abonnement") return 49;
    const ratio = duration / 60;
    return Number((selectedFormula.price * ratio).toFixed(2));
  }, [formulaId, duration, selectedFormula.price]);

  const lockMinutes = String(Math.floor(secureLock / 60)).padStart(2, "0");
  const lockSeconds = String(secureLock % 60).padStart(2, "0");

  const canMoveNextFromStep3 = email.trim().length > 3 && fullName.trim().length > 2;
  const canPay = acceptTerms;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canPay) return;
    setStep(5);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="mb-5 grid gap-2 sm:grid-cols-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={`rounded-full px-3 py-1 text-center text-xs ${
                step >= index ? "bg-ice-300/25 text-ice-100" : "bg-white/[0.04] text-zinc-400"
              }`}
            >
              Etape {index}
            </div>
          ))}
        </div>

        {step === 1 ? (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Selection du creneau (verrouillage 5 min)</p>
            <p className="rounded-xl border border-amber-300/40 bg-amber-300/10 px-3 py-2 text-sm text-amber-100">
              Creneau reserve temporairement: {lockMinutes}:{lockSeconds}
            </p>
            <label className="space-y-2">
              <span className="text-sm text-zinc-200">Site</span>
              <select
                className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white"
                value={siteId}
                onChange={(event) => setSiteId(event.target.value)}
              >
                {sites.map((site) => (
                  <option key={site.id} value={site.id}>
                    {site.name} - {site.city}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="space-y-2">
                <span className="text-sm text-zinc-200">Date</span>
                <input
                  type="date"
                  value={day}
                  onChange={(event) => setDay(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-zinc-200">Heure</span>
                <select
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white"
                >
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm text-zinc-200">Duree</span>
                <select
                  value={duration}
                  onChange={(event) => setDuration(Number(event.target.value))}
                  className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white"
                >
                  {durationOptions.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <p className="rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200">
              Disponibilite: {currentSite.podsAvailableNow > 0 ? "Disponible maintenant" : "Libre dans 10 min"}
            </p>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Selection de la formule</p>
            <div className="grid gap-3">
              {formulaOptions.map((option) => (
                <label
                  key={option.id}
                  className={`rounded-2xl border px-4 py-3 ${
                    formulaId === option.id ? "border-ice-300/70 bg-ice-300/10" : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <input
                    type="radio"
                    name="formula"
                    value={option.id}
                    checked={formulaId === option.id}
                    onChange={(event) => setFormulaId(event.target.value)}
                    className="mr-2 accent-cyan-300"
                  />
                  <span className="font-medium text-white">{option.label}</span>
                  <span className="ml-2 text-zinc-300">- {option.price} EUR</span>
                  <p className="mt-1 text-sm text-zinc-300">{option.description}</p>
                </label>
              ))}
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Identification</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                ["invite", "Mode invite"],
                ["create", "Creer un compte"],
                ["sso", "Connexion Bose"],
              ].map(([id, label]) => (
                <label key={id} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200">
                  <input
                    type="radio"
                    value={id}
                    checked={identMode === id}
                    onChange={(event) => setIdentMode(event.target.value)}
                    className="mr-2 accent-cyan-300"
                  />
                  {label}
                </label>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-zinc-200">Nom complet</span>
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white"
                  placeholder="Prenom Nom"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-zinc-200">Email</span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white"
                  placeholder="vous@email.com"
                  type="email"
                />
              </label>
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Paiement</p>
            <label className="space-y-2">
              <span className="text-sm text-zinc-200">Methode</span>
              <select
                value={paymentMethod}
                onChange={(event) => setPaymentMethod(event.target.value)}
                className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white"
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </label>
            <label className="inline-flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(event) => setAcceptTerms(event.target.checked)}
                className="mt-1 h-4 w-4 accent-cyan-300"
              />
              J&apos;accepte les CGV et confirme un paiement securise HTTPS (simulation).
            </label>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="space-y-4">
            <p className="rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
              Reservation confirmee. QR code genere et email de confirmation envoye (simulation).
            </p>
            <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-center">
              <p className="font-mono text-xs text-zinc-300">QR-{siteId.toUpperCase()}-{day.replaceAll("-", "")}-{time.replace(":", "")}</p>
              <p className="mt-3 text-sm text-zinc-300">Pod: {currentSite.name} - {currentSite.area}</p>
              <p className="text-sm text-zinc-300">Ajout calendrier: iCal / Google (demo)</p>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-red-300/50 px-4 py-2 text-sm text-red-100 hover:bg-red-300/10"
            >
              Annuler la reservation
            </button>
          </div>
        ) : null}

        {step < 5 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={step === 1}
              onClick={() => setStep((prev) => Math.max(1, prev - 1) as Step)}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200 disabled:opacity-40"
            >
              Retour
            </button>

            {step < 4 ? (
              <button
                type="button"
                disabled={(step === 3 && !canMoveNextFromStep3) || (step === 1 && secureLock === 0)}
                onClick={() => setStep((prev) => Math.min(4, prev + 1) as Step)}
                className="rounded-full bg-ice-400 px-5 py-2 text-sm font-semibold text-zinc-950 disabled:opacity-40"
              >
                Continuer
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canPay}
                className="rounded-full bg-ice-400 px-5 py-2 text-sm font-semibold text-zinc-950 disabled:opacity-40"
              >
                Payer et confirmer
              </button>
            )}
          </div>
        ) : null}
      </form>

      <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Recapitulatif TTC</p>
        <div className="mt-5 space-y-3 text-sm text-zinc-200">
          <p className="flex justify-between gap-4">
            <span>Site</span>
            <span className="font-medium text-white">{currentSite.name}</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Creneau</span>
            <span className="font-medium text-white">
              {day} {time}
            </span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Duree</span>
            <span className="font-medium text-white">{duration} min</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Formule</span>
            <span className="font-medium text-white">{selectedFormula.label}</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Disponibilite</span>
            <span className="font-medium text-white">
              {currentSite.podsAvailableNow} / {currentSite.podsTotal}
            </span>
          </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="flex items-center justify-between text-base font-semibold text-white">
            <span>Total TTC</span>
            <span>{totalPrice} EUR</span>
          </p>
          <p className="mt-2 text-xs text-zinc-400">Paiement securise HTTPS (demo frontend sans transaction reelle).</p>
        </div>
      </aside>
    </div>
  );
}
