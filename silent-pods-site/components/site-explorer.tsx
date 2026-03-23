"use client";

import { ExternalLink, Plane, Train, Building, CircleDot } from "lucide-react";
import { useMemo, useState } from "react";
import { sites, type SiteRecord, type SiteType } from "@/data/site";

type SortMode = "proximite" | "disponibilite" | "popularite";

const allTypes: Array<"Tous" | SiteType> = ["Tous", "Gare SNCF", "Aeroport", "Entreprise"];

const pinIconByType = {
  "Gare SNCF": Train,
  Aeroport: Plane,
  Entreprise: Building,
};

const FRANCE_BOUNDS = {
  north: 51.3,
  south: 42.1,
  west: -5.2,
  east: 8.8,
};

const CITY_ANCHORS: Record<string, { x: number; y: number }> = {
  paris: { x: 42, y: 33 },
  roissy: { x: 58, y: 22 },
  orly: { x: 41, y: 37 },
  lille: { x: 36, y: 18 },
  strasbourg: { x: 63, y: 42 },
  lyon: { x: 52, y: 54 },
  marseille: { x: 52, y: 82 },
  nice: { x: 70, y: 83 },
  bordeaux: { x: 24, y: 67 },
};

const TYPE_SHIFT: Record<SiteType, { dx: number; dy: number }> = {
  "Gare SNCF": { dx: -1.2, dy: 0 },
  Aeroport: { dx: 1.2, dy: -1 },
  Entreprise: { dx: 0.8, dy: 1.2 },
};

const SPREAD_OFFSETS: Array<{ dx: number; dy: number }> = [
  { dx: 0, dy: 0 },
  { dx: -8, dy: -5.5 },
  { dx: 8, dy: -5.5 },
  { dx: -8, dy: 5.5 },
  { dx: 8, dy: 5.5 },
  { dx: 0, dy: -8.5 },
  { dx: 0, dy: 8.5 },
  { dx: -11, dy: 0 },
  { dx: 11, dy: 0 },
  { dx: -12, dy: -8 },
  { dx: 12, dy: 8 },
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getZone(city: string) {
  const normalized = city.toLowerCase();
  if (["paris", "roissy", "orly"].includes(normalized)) return "Ile-de-France";
  if (["lille", "strasbourg"].includes(normalized)) return "Nord et Est";
  if (["lyon", "marseille", "nice"].includes(normalized)) return "Sud et Sud-Est";
  if (["bordeaux"].includes(normalized)) return "Sud-Ouest";
  return "Autres zones";
}

function getMapPositionFromLatLng(lat: number, lng: number) {
  const xRatio = (lng - FRANCE_BOUNDS.west) / (FRANCE_BOUNDS.east - FRANCE_BOUNDS.west);
  const yRatio = (FRANCE_BOUNDS.north - lat) / (FRANCE_BOUNDS.north - FRANCE_BOUNDS.south);
  const x = 8 + xRatio * 84;
  const y = 8 + yRatio * 84;
  return { x: clamp(x, 6, 92), y: clamp(y, 6, 92) };
}

function getBaseMapPosition(site: SiteRecord) {
  const anchor = CITY_ANCHORS[site.city.toLowerCase()];
  if (anchor) {
    return { x: anchor.x, y: anchor.y };
  }
  return getMapPositionFromLatLng(site.lat, site.lng);
}


function computeDistanceScore(site: SiteRecord, city: string) {
  if (!city) return 999;
  return site.city.toLowerCase() === city.toLowerCase() ? 1 : 10;
}

export function SiteExplorer() {
  const [type, setType] = useState<"Tous" | SiteType>("Tous");
  const [city, setCity] = useState("");
  const [availableOnly, setAvailableOnly] = useState(true);
  const [sortMode, setSortMode] = useState<SortMode>("disponibilite");
  const [selectedId, setSelectedId] = useState(sites[0]?.id ?? "");

  const cities = useMemo(() => Array.from(new Set(sites.map((site) => site.city))).sort(), []);

  const filteredSites = useMemo(() => {
    const filtered = sites
      .filter((site) => (type === "Tous" ? true : site.type === type))
      .filter((site) => (city ? site.city === city : true))
      .filter((site) => (availableOnly ? site.podsAvailableNow > 0 : true));

    const sorted = [...filtered].sort((a, b) => {
      if (sortMode === "popularite") return b.popularity - a.popularity;
      if (sortMode === "proximite") {
        return computeDistanceScore(a, city) - computeDistanceScore(b, city);
      }
      return b.podsAvailableNow - a.podsAvailableNow;
    });

    return sorted;
  }, [type, city, availableOnly, sortMode]);

  const selectedSite =
    filteredSites.find((site) => site.id === selectedId) ?? filteredSites[0] ?? sites[0] ?? null;

  const groupedByZone = useMemo(() => {
    const groups = new Map<string, SiteRecord[]>();
    for (const site of filteredSites) {
      const zone = getZone(site.city);
      const existing = groups.get(zone) ?? [];
      existing.push(site);
      groups.set(zone, existing);
    }

    return Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filteredSites]);

  const markerPositions = useMemo(() => {
    const groupedByCity = new Map<string, SiteRecord[]>();
    for (const site of filteredSites) {
      const key = site.city.toLowerCase();
      const existing = groupedByCity.get(key) ?? [];
      existing.push(site);
      groupedByCity.set(key, existing);
    }

    const markerMap = new Map<string, { left: string; top: string }>();

    for (const [, citySites] of groupedByCity.entries()) {
      const ordered = [...citySites].sort((a, b) => a.id.localeCompare(b.id));

      ordered.forEach((site, index) => {
        const base = getBaseMapPosition(site);
        const spread = SPREAD_OFFSETS[index % SPREAD_OFFSETS.length];
        const typeShift = TYPE_SHIFT[site.type];

        const x = clamp(base.x + spread.dx + typeShift.dx, 6, 92);
        const y = clamp(base.y + spread.dy + typeShift.dy, 6, 92);

        markerMap.set(site.id, { left: `${x}%`, top: `${y}%` });
      });
    }

    return markerMap;
  }, [filteredSites]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-5">
        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Type</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value as "Tous" | SiteType)}
            className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 text-sm text-white"
          >
            {allTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Ville</span>
          <select
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 text-sm text-white"
          >
            <option value="">Toutes les villes</option>
            {cities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Disponibilite</span>
          <select
            value={availableOnly ? "now" : "any"}
            onChange={(event) => setAvailableOnly(event.target.value === "now")}
            className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 text-sm text-white"
          >
            <option value="now">Disponible maintenant</option>
            <option value="any">Date/heure choisie</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Tri</span>
          <select
            value={sortMode}
            onChange={(event) => setSortMode(event.target.value as SortMode)}
            className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 text-sm text-white"
          >
            <option value="proximite">Proximite</option>
            <option value="disponibilite">Disponibilite</option>
            <option value="popularite">Popularite</option>
          </select>
        </label>

        <div className="flex items-end">
          <p className="rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200">
            {filteredSites.length} site(s) correspondant(s)
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Carte interactive (demo)</p>
          <div className="relative mt-4 h-80 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.14),transparent_40%)]" />
            <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/25 px-2 py-1 text-[11px] text-zinc-300">
              Carte orientee: nord en haut, sud en bas, sites espaces par ville
            </div>
            {filteredSites.map((site) => {
              const position = markerPositions.get(site.id) ?? { left: "50%", top: "50%" };
              const Icon = pinIconByType[site.type];
              const isAvailable = site.podsAvailableNow > 0;

              return (
                <button
                  key={site.id}
                  type="button"
                  onClick={() => setSelectedId(site.id)}
                  title={site.name}
                  className={`absolute inline-flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[10px] font-semibold ${
                    selectedSite?.id === site.id
                      ? "border-ice-300/80 bg-ice-300/30 text-ice-100"
                      : "border-white/25 bg-black/45 text-zinc-100"
                  }`}
                  style={position}
                >
                  <span className="relative inline-flex items-center justify-center">
                    <Icon className="h-3.5 w-3.5" />
                    <CircleDot
                      className={`absolute -bottom-2 -right-2 h-3.5 w-3.5 ${
                        isAvailable ? "text-emerald-300" : "text-zinc-500"
                      }`}
                    />
                  </span>
                  <span className="sr-only">{site.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          {selectedSite ? (
            <article className="space-y-3">
              <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300">
                {selectedSite.type}
              </p>
              <h3 className="text-2xl font-semibold text-white">{selectedSite.name}</h3>
              <p className="text-sm text-zinc-300">
                {selectedSite.address} - {selectedSite.city} {selectedSite.postalCode}
              </p>
              <p className="text-sm text-zinc-300">Localisation: {selectedSite.area}</p>
              <p className="text-sm text-zinc-300">Horaires: {selectedSite.openingHours}</p>
              <p className="text-sm text-zinc-300">Pods: {selectedSite.podsTotal}</p>
              <p className="text-sm text-zinc-300">
                Disponibilite temps reel: {selectedSite.podsAvailableNow} pod(s) disponible(s) maintenant
              </p>
              <p className="text-sm text-zinc-300">Acces PMR: {selectedSite.pmr}</p>
              <p className="text-sm text-zinc-300">Transports: {selectedSite.transports}</p>
              <p className="text-sm text-zinc-300">Note moyenne: {selectedSite.rating.toFixed(1)} / 5</p>
              <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Equipements</p>
                <p className="mt-2 text-sm text-zinc-300">{selectedSite.equipments.join(" - ")}</p>
              </div>
              <a
                href={selectedSite.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-ice-300/70"
              >
                Voir sur Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ) : null}
        </div>
      </div>

      <div className="space-y-4">
        {groupedByZone.map(([zone, zoneSites]) => (
          <section key={zone} className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-300">{zone}</h4>
            <div className="grid gap-3">
              {zoneSites.map((site) => (
                <button
                  key={site.id}
                  type="button"
                  onClick={() => setSelectedId(site.id)}
                  className="grid gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-ice-300/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-lg font-medium text-white">{site.name}</p>
                    <p className="text-sm text-zinc-300">
                      {site.city} - {site.type}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-300">{site.area}</p>
                  <p className="text-sm text-zinc-300">
                    {site.podsAvailableNow > 0 ? "Disponible maintenant" : "Complet"} - {site.podsAvailableNow}/{site.podsTotal}
                  </p>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
