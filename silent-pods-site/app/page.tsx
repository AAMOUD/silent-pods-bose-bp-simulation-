import { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { LocationCards } from "@/components/location-cards";
import { SectionWrapper } from "@/components/section-wrapper";
import { benefits, kpis, useCases } from "@/data/site";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Decouvrez Silent Pods, le concept Bose de pods insonorises premium pour travailler, se reposer et mediter dans les lieux publics.",
};

export default function Home() {
  return (
    <>
      <Hero />

      <SectionWrapper
        eyebrow="Indicateurs"
        title="Un pilote concret, concu pour des lieux a fort trafic"
        description="Un modele simple et operationnel pour demonstrer rapidement la valeur business et l'impact utilisateur."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {kpis.map((kpi, index) => (
            <article
              key={kpi.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-3xl font-semibold text-white">{kpi.value}</p>
              <p className="mt-2 text-sm text-zinc-300">{kpi.label}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Benefices"
        title="Un pod, plusieurs usages"
        description="Silent Pods s'adresse aux voyageurs, professionnels mobiles, etudiants et personnes sous pression qui ont besoin d'une parenthese de calme."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon className="h-5 w-5 text-ice-200" />
              <p className="mt-4 text-lg font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Pourquoi Bose ?"
        title="L'expertise acoustique au service d'un usage public"
        description="La differenciation Silent Pods repose sur la credibilite technologique Bose: reduction de bruit, design premium et experience sonore immersive."
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-7">
          <p className="max-w-4xl text-base leading-relaxed text-zinc-200">
            Dans des environnements bruyants comme les gares ou les aeroports, Bose apporte un avantage decisif:
            transformer quelques metres carres en une bulle de calme utile, rassurante et valorisante.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Comment ca marche"
        title="Reserver en trois etapes"
        description="Un parcours volontairement court pour un service pay-per-use accessible a tous."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["1", "Localisez", "Selectionnez la gare pilote la plus proche."],
            ["2", "Reservez", "Choisissez duree, horaire et option immersive."],
            ["3", "Profitez", "Entrez dans votre pod et profitez du silence."],
          ].map(([step, title, description], index) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Etape {step}</p>
              <p className="mt-3 text-xl font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm text-zinc-300">{description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Localisations"
        title="Ou nous trouver"
        description="Deux gares pilotes demarrent le programme avant un deploiement progressif vers les aeroports et centres commerciaux."
      >
        <LocationCards />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Cas d'usage"
        title="Ils en ont besoin"
        description="Un meme service repond a plusieurs besoins critiques du quotidien dans les espaces de transit."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <article
              key={useCase.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <useCase.icon className="h-5 w-5 text-violet-200" />
              <p className="mt-3 text-lg font-medium text-white">{useCase.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{useCase.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Proposer le calme comme un service"
        description="Silent Pods est pret pour un pilote business credible avec une execution locale simple, un pricing lisible et une experience premium Bose."
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
          <p className="mx-auto max-w-2xl text-zinc-300">
            Convainquez votre direction avec une vitrine claire du concept et un parcours de reservation
            demonstrable en quelques minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CtaButton href="/reservation">Reserver un pod</CtaButton>
            <CtaButton href="/contact" variant="ghost">
              Contacter l&apos;equipe projet
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
