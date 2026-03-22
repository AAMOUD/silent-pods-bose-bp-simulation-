import { TrainFrontTunnel, Waypoints } from "lucide-react";
import { locations } from "@/data/site";

export function LocationCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {locations.map((location) => (
        <article key={location.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300">
            {location.status === "Prochainement" ? (
              <Waypoints className="h-3.5 w-3.5" />
            ) : (
              <TrainFrontTunnel className="h-3.5 w-3.5" />
            )}
            {location.status}
          </p>
          <p className="mt-4 text-xl font-semibold text-white">{location.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{location.description}</p>
        </article>
      ))}
    </div>
  );
}
