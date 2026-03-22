"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/site";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-medium text-white">{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-zinc-300 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-300">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
