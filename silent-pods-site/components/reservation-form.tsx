"use client";

import { FormEvent, useMemo, useState } from "react";

const placeOptions = ["Paris Gare du Nord", "Lyon Part-Dieu"];
const durationOptions = [
  { label: "30 min", value: "30", basePrice: 5 },
  { label: "1 h", value: "60", basePrice: 10 },
];
const hours = [
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
  const [place, setPlace] = useState(placeOptions[0]);
  const [duration, setDuration] = useState(durationOptions[0].value);
  const [time, setTime] = useState(hours[3]);
  const [immersive, setImmersive] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const selectedDuration = useMemo(
    () => durationOptions.find((item) => item.value === duration) ?? durationOptions[0],
    [duration],
  );

  const totalPrice = selectedDuration.basePrice + (immersive ? 3 : 0);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm text-zinc-200">Lieu</span>
            <select
              className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
            >
              {placeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm text-zinc-200">Duree</span>
            <select
              className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            >
              {durationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm text-zinc-200">Heure</span>
            <select
              className="w-full rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
          <input
            type="checkbox"
            checked={immersive}
            onChange={(event) => setImmersive(event.target.checked)}
            className="h-4 w-4 accent-cyan-300"
          />
          <span className="text-sm text-zinc-200">Ajouter l&apos;option immersive Bose (+3 EUR)</span>
        </label>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-ice-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-ice-300"
        >
          Reserver
        </button>

        {confirmed ? (
          <p className="mt-4 rounded-xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
            Reservation confirmee. Un message de confirmation a ete envoye (simulation locale).
          </p>
        ) : null}
      </form>

      <aside className="rounded-3xl border border-white/10 bg-black/40 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Recapitulatif</p>
        <div className="mt-5 space-y-3 text-sm text-zinc-200">
          <p className="flex justify-between gap-4">
            <span>Lieu</span>
            <span className="font-medium text-white">{place}</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Duree</span>
            <span className="font-medium text-white">{selectedDuration.label}</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Horaire</span>
            <span className="font-medium text-white">{time}</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Option immersive</span>
            <span className="font-medium text-white">{immersive ? "Oui" : "Non"}</span>
          </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="flex items-center justify-between text-base font-semibold text-white">
            <span>Total estime</span>
            <span>{totalPrice} EUR</span>
          </p>
          <p className="mt-2 text-xs text-zinc-400">Simulation locale sans paiement ni backend.</p>
        </div>
      </aside>
    </div>
  );
}
