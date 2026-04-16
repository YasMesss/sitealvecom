"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQItem = { question: string; answer: string };

export function FAQ({ items, defaultOpen = 0 }: { items: FAQItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-brand-50/50"
            >
              <span className="font-semibold text-brand-700">{it.question}</span>
              <ChevronDown
                className={cn(
                  "mt-1 h-5 w-5 flex-none text-brand-500 transition-transform",
                  isOpen && "rotate-180"
                )}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1 text-ink-600 leading-relaxed text-pretty">
                {it.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
