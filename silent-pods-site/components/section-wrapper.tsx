import { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-14 md:py-20 ${className ?? ""}`}>
      <div className="mb-8 md:mb-10 animate-fade-in-up">
        {eyebrow ? (
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ice-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
