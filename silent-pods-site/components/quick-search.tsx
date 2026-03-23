"use client";

import { LocateFixed, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { sites } from "@/data/site";

const durations = ["30", "60", "120"];

export function QuickSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [availableNow, setAvailableNow] = useState(true);
  const [duration, setDuration] = useState("30");
  const [startAt, setStartAt] = useState(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toISOString().slice(0, 16);
  });

  const autocompleteOptions = useMemo(() => {
    const tokens = new Set<string>();
    for (const site of sites) {
      tokens.add(site.name);
      tokens.add(site.city);
      tokens.add(site.type);
    }
    return Array.from(tokens).sort((a, b) => a.localeCompare(b));
  }, []);

  const onUseLocation = () => {
    setQuery("Pres de moi");
  };

  const onSearch = () => {
    const params = new URLSearchParams({
      q: query,
      availableNow: String(availableNow),
      duration,
      startAt,
    });
    router.push(`/reservation?${params.toString()}`);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Recherche rapide</p>
      <div className="mt-4 grid gap-3 md:grid-cols-[1.5fr_auto_auto_auto_auto] md:items-end">
        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Gare / Aéroport / Entreprise</span>
          <input
            list="quick-search-options"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex: Gare du Nord, CDG, Lyon..."
            className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
          />
          <datalist id="quick-search-options">
            {autocompleteOptions.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Date/heure</span>
          <input
            type="datetime-local"
            value={startAt}
            onChange={(event) => setStartAt(event.target.value)}
            className="rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Durée</span>
          <select
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            className="rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 text-sm text-white focus:border-ice-300 focus:outline-none"
          >
            {durations.map((value) => (
              <option key={value} value={value}>
                {value} min
              </option>
            ))}
          </select>
        </label>

        <label className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-zinc-100">
          <input
            type="checkbox"
            checked={availableNow}
            onChange={(event) => setAvailableNow(event.target.checked)}
            className="h-4 w-4 accent-cyan-300"
          />
          Maintenant disponible
        </label>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onUseLocation}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-zinc-200 hover:border-ice-300/60"
            aria-label="Utiliser ma géolocalisation"
          >
            <LocateFixed className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onSearch}
            className="inline-flex items-center gap-2 rounded-xl bg-ice-400 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-ice-300"
          >
            <Search className="h-4 w-4" />
            Trouver un pod
          </button>
        </div>
      </div>
    </div>
  );
}