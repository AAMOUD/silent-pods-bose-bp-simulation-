# Silent Pods - Demo Frontend Academique

Site vitrine local pour un projet d'ecole intitule **Silent Pods** (concept Bose):
pods insonorises installes dans des gares, aeroports et centres commerciaux.

## Prerequis

- Node.js 20+ (LTS recommande)
- npm 10+

## Installation

```bash
npm install
```

## Lancement en local

```bash
npm run dev
```

Puis ouvrir:

```text
http://localhost:3000
```

## Structure du projet

```text
app/
	page.tsx                # Accueil
	tarifs/page.tsx         # Tarifs
	reservation/page.tsx    # Reservation + localisations
	faq/page.tsx            # FAQ
	contact/page.tsx        # Contact
	not-found.tsx           # Page 404
components/
	header.tsx
	footer.tsx
	hero.tsx
	cta-button.tsx
	section-wrapper.tsx
	pricing-cards.tsx
	faq-accordion.tsx
	reservation-form.tsx
	location-cards.tsx
	contact-form.tsx
	back-to-top.tsx
data/
	site.ts                 # Contenu statique metier
```

## Choix techniques

- Next.js App Router
- TypeScript
- Tailwind CSS (v4)
- Icones: lucide-react
- Contenu 100% statique/local
- Aucune base de donnees
- Aucun backend
- Aucune API externe obligatoire

## Fonctionnalites incluses

- Navigation fixe + footer
- Hero premium avec CTA
- Sections business (benefices, cas d'usage, pourquoi Bose, KPI, localisations)
- Tarification claire (30 min, 1 h, pack frequent, option immersive)
- Reservation mock locale avec recapitulatif et confirmation simulee
- FAQ en accordion
- Formulaire de contact frontend avec message de confirmation simule
- Bouton retour en haut
- Animations d'apparition legeres
- SEO de base (metadata globale + metadata par page)
- Page 404 stylisee

## Note importante

Ce projet est une **demo frontend academique** concue pour une presentation ecole.
Les reservations, confirmations et contacts sont simules cote client (aucun traitement serveur).
