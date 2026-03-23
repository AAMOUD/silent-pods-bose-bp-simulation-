import { Check } from "lucide-react";
import { immersiveOption, pricingPlans } from "@/data/site";

export function PricingCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {pricingPlans.map((plan) => (
        <article
          key={plan.name}
          className={`rounded-3xl border p-6 transition-transform duration-300 hover:-translate-y-1 ${
            plan.highlight
              ? "border-ice-300/60 bg-white/[0.07]"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.16em] text-zinc-400">{plan.name}</p>
          <p className="mt-4 text-3xl font-semibold text-white">{plan.price}</p>
          <p className="text-sm text-zinc-300">{plan.duration}</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">{plan.description}</p>
          <ul className="mt-5 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-zinc-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-ice-200" />
                {feature}
              </li>
            ))}
          </ul>
        </article>
      ))}

      <article className="rounded-3xl border border-violet-300/35 bg-violet-300/10 p-6 md:col-span-3">
        <p className="text-sm uppercase tracking-[0.16em] text-violet-100">Option complémentaire</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xl font-semibold text-white">{immersiveOption.name}</p>
            <p className="mt-2 max-w-2xl text-sm text-zinc-200">{immersiveOption.description}</p>
          </div>
          <p className="text-2xl font-semibold text-violet-100">{immersiveOption.price}</p>
        </div>
      </article>
    </div>
  );
}