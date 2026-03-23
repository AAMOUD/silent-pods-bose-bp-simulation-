import { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { LocationCards } from "@/components/location-cards";
import { QuickSearch } from "@/components/quick-search";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteExplorer } from "@/components/site-explorer";
import { b2bValueProps, benefits, kpis, testimonialItems, useCases } from "@/data/site";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Découvrez Silent Pods, le concept Bose de pods insonorisés premium pour travailler, se reposer et méditer dans les lieux publics.",
};

export default function Home() {
  return (
    <>
      <Hero />

      <SectionWrapper
        eyebrow="Trouver un pod"
        title="Recherche rapide"
        description="Filtrez par lieu, disponibilité, date/heure et durée. Géolocalisation et autocomplétion incluses."
      >
        <QuickSearch />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Indicateurs"
        title="Un pilote concret, conçu pour des lieux à fort trafic"
        description="Un modèle simple et opérationnel pour démontrer rapidement la valeur business et l'impact utilisateur."
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
        eyebrow="Bénéfices"
        title="Un pod, plusieurs usages"
        description="Silent Pods s'adresse aux voyageurs, professionnels mobiles, étudiants et personnes sous pression qui ont besoin d'une parenthèse de calme."
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
        description="La différenciation Silent Pods repose sur la crédibilité technologique Bose: réduction de bruit, design premium et expérience sonore immersive."
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-7">
          <p className="max-w-4xl text-base leading-relaxed text-zinc-200">
            Dans des environnements bruyants comme les gares ou les aéroports, Bose apporte un avantage décisif:
            transformer quelques mètres carrés en une bulle de calme utile, rassurante et valorisante.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Comment ça marche"
        title="Réserver en trois étapes"
        description="Un parcours volontairement court pour un service pay-per-use accessible à tous."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["1", "Localisez", "Sélectionnez la gare pilote la plus proche."],
            ["2", "Réservez", "Choisissez durée, horaire et option immersive."],
            ["3", "Profitez", "Entrez dans votre pod et profitez du silence."],
          ].map(([step, title, description], index) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Étape {step}</p>
              <p className="mt-3 text-xl font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm text-zinc-300">{description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Localisations"
        title="Où nous trouver"
        description="Deux gares pilotes démarrent le programme avant un déploiement progressif vers les aéroports et centres commerciaux."
      >
        <LocationCards />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Carte + liste"
        title="Explorer les sites"
        description="Carte interactive avec filtres par type, ville, disponibilité et tri par proximité, disponibilité ou popularité."
      >
        <SiteExplorer />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Cas d'usage"
        title="Ils en ont besoin"
        description="Un même service répond à plusieurs besoins critiques du quotidien dans les espaces de transit."
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
        eyebrow="B2B"
        title="Offrez le silence à vos équipes"
        description="Proposition de valeur entreprise: confidentialité, concentration, installation rapide sans travaux."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {b2bValueProps.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <item.icon className="h-5 w-5 text-ice-200" />
              <p className="mt-3 text-lg font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <CtaButton href="/b2b">Demander un devis B2B</CtaButton>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Avis clients"
        title="Témoignages"
        description="Exemples de retours utilisateurs utilisés pour la démo de lancement."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {testimonialItems.map((item) => (
            <article key={item.author} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-relaxed text-zinc-200">&quot;{item.quote}&quot;</p>
              <p className="mt-4 text-sm font-medium text-white">{item.author}</p>
              <p className="text-xs text-zinc-400">Note: {item.rating}/5</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Proposer le calme comme un service"
        description="Silent Pods est prêt pour un pilote business crédible avec une exécution locale simple, un pricing lisible et une expérience premium Bose."
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
          <p className="mx-auto max-w-2xl text-zinc-300">
            Convainquez votre direction avec une vitrine claire du concept et un parcours de réservation
            démontrable en quelques minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CtaButton href="/reservation">Réserver un pod</CtaButton>
            <CtaButton href="/espace-client" variant="ghost">
              Voir l&apos;espace utilisateur
            </CtaButton>
            <CtaButton href="/contact" variant="ghost">
              Contacter l&apos;équipe projet
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}