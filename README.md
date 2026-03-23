# Silent Pods - Demo Frontend Academique

Silent Pods est un site vitrine realise pour un projet d'ecole.
Le concept imagine des pods insonorises premium (inspiration Bose) installes dans des lieux a fort trafic: gares, aeroports et centres commerciaux.

Objectif du projet:
- presenter une proposition business claire
- offrir un parcours utilisateur lisible (tarifs, reservation, FAQ, contact)
- disposer d'une demo locale rapide a lancer pour soutenance

## Sommaire

- Apercu
- Stack technique
- Pages disponibles
- Fonctionnalites
- Checklist produit
- Installation et lancement
- Scripts npm
- Structure du projet
- Personnalisation rapide
- Depannage
- Limites du projet

## Apercu

Le site met en avant:
- une page d'accueil orientee valeur business
- des tarifs simples et comprehensibles
- une simulation de reservation
- une FAQ orientee usage reel
- une page contact demo

Tout le contenu est statique/local et concu pour une presentation academique.

## Stack technique

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react (icones)

## Pages disponibles

- / : Accueil
- /tarifs : Offres et prix
- /reservation : Reservation fictive + localisations pilotes
- /faq : Questions frequentes
- /contact : Formulaire de contact demo
- /not-found : Page 404 personnalisee

## Fonctionnalites

- Header sticky et navigation desktop/mobile
- Hero avec CTA principal
- Sections metier: KPI, benefices, cas d'usage, localisations
- Cartes de prix et proposition de valeur
- Formulaire de reservation local avec recapitulatif et confirmation simulee
- Formulaire de contact local avec feedback utilisateur
- FAQ type accordion
- Bouton retour en haut
- Metadata SEO de base (globale + par page)
- Theme visuel unifie pour un scrolling fluide

## Checklist produit

Checklist complete (fonctionnel, UX, legal, tech, B2B, roadmap):

- Voir [CHECKLIST_SITE.md](CHECKLIST_SITE.md)

## Installation et lancement

### 1) Prerequis

- Node.js 20+ recommande
- npm 10+

### 2) Installer les dependances

```bash
npm install
```

### 3) Lancer le serveur de dev

```bash
npm run dev
```

Ouvrir ensuite:

```text
http://localhost:3000
```

Si le port 3000 est occupe:

```bash
npm run dev -- -p 3001
```

## Scripts npm

- npm run dev : lance le serveur de developpement
- npm run build : genere le build de production
- npm run start : lance le build en mode production
- npm run lint : verifie le code avec ESLint

## Structure du projet

```text
app/
	layout.tsx             # Layout global (header, footer, metadata)
	globals.css            # Styles globaux
	page.tsx               # Accueil
	tarifs/page.tsx        # Tarifs
	reservation/page.tsx   # Reservation + localisations
	faq/page.tsx           # FAQ
	contact/page.tsx       # Contact
	not-found.tsx          # 404

components/
	header.tsx
	footer.tsx
	hero.tsx
	section-wrapper.tsx
	cta-button.tsx
	pricing-cards.tsx
	reservation-form.tsx
	contact-form.tsx
	faq-accordion.tsx
	location-cards.tsx
	back-to-top.tsx

data/
	site.ts                # Donnees statiques de contenu
```

## Personnalisation rapide

Pour adapter rapidement la demo:
- textes et donnees: modifier data/site.ts
- style global: modifier app/globals.css
- structure des pages: modifier app/*/page.tsx
- composants reutilisables: modifier components/*

## Depannage

### npm non reconnu dans PowerShell

Ajoutez Node.js au PATH de la session:

```powershell
$env:Path += ";C:\Program Files\nodejs"
```

Puis relancez:

```powershell
npm run dev
```

### Les changements CSS ne s'affichent pas

- faire un hard refresh du navigateur
- redemarrer le serveur dev

## Limites du projet

- pas de backend
- pas de persistance de donnees
- formulaires en simulation locale uniquement
- aucune integration de paiement

Ce projet est volontairement concentre sur l'experience frontend et la qualite de presentation.
