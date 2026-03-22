import {
  Briefcase,
  Brain,
  Building2,
  Clock3,
  Headphones,
  Phone,
  Train,
} from "lucide-react";

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Reservation", href: "/reservation" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const benefits = [
  {
    title: "Se concentrer",
    description:
      "Un espace acoustiquement isole pour avancer sur un dossier, preparer une presentation ou etudier sans interruption.",
    icon: Briefcase,
  },
  {
    title: "Se reposer",
    description:
      "Quelques minutes de calme entre deux trajets pour reduire la fatigue et recuperer dans un cadre confortable.",
    icon: Clock3,
  },
  {
    title: "Mediter",
    description:
      "Un cocon silencieux ideal pour une pause respiratoire, recentrer son attention et faire retomber la pression.",
    icon: Brain,
  },
  {
    title: "Passer un appel en toute confidentialite",
    description:
      "Un environnement discret pour les conversations sensibles, les reunions rapides ou les appels personnels.",
    icon: Phone,
  },
];

export const kpis = [
  { value: "2", label: "gares pilotes en 2026" },
  { value: "Jusqu'a 5", label: "pods au lancement" },
  { value: "< 30 s", label: "pour reserver" },
];

export const useCases = [
  {
    title: "Voyageurs en transit",
    description:
      "Rester productif ou se detendre pendant une correspondance sans quitter la gare.",
    icon: Train,
  },
  {
    title: "Professionnels mobiles",
    description:
      "Passer un appel strategique dans un environnement maitrise, meme au coeur d'un flux de passagers.",
    icon: Building2,
  },
  {
    title: "Etudiants et jeunes actifs",
    description:
      "Reviser, travailler ou se ressourcer dans un espace premium accessible a la demande.",
    icon: Headphones,
  },
];

export const pricingPlans = [
  {
    name: "Express",
    price: "5 EUR",
    duration: "30 min",
    description: "Pour un appel urgent ou une micro-pause efficace.",
    highlight: false,
    features: [
      "Acces a un pod standard",
      "Isolation phonique Bose",
      "Reservation rapide",
    ],
  },
  {
    name: "Confort",
    price: "10 EUR",
    duration: "1 h",
    description: "L'equilibre ideal entre productivite et recuperation.",
    highlight: true,
    features: [
      "Tout le contenu de l'offre Express",
      "Temps adapte au travail profond",
      "Parfait pour les correspondances longues",
    ],
  },
  {
    name: "Voyageur frequent",
    price: "29 EUR",
    duration: "Pack mensuel",
    description:
      "Une formule simple incluant plusieurs creneaux pour les utilisateurs reguliers.",
    highlight: false,
    features: [
      "Creneaux inclus chaque mois",
      "Priorite sur certaines plages",
      "Suivi de consommation simplifie",
    ],
  },
];

export const immersiveOption = {
  name: "Option immersive Bose",
  price: "+3 EUR",
  description:
    "Activez une ambiance sonore premium pour la relaxation, la concentration ou la meditation guidee.",
};

export const locations = [
  {
    name: "Paris Gare du Nord",
    status: "Pilote actif",
    description:
      "Implantation en zone de correspondance, acces direct depuis le hall principal.",
  },
  {
    name: "Lyon Part-Dieu",
    status: "Pilote actif",
    description:
      "Pods situes a proximite des quais grande vitesse et de l'espace services.",
  },
  {
    name: "Aeroports et centres commerciaux",
    status: "Prochainement",
    description:
      "Extension en preparation dans certains hubs de transport et malls urbains.",
  },
];

export const faqItems = [
  {
    question: "Comment reserver un Silent Pod ?",
    answer:
      "Choisissez votre lieu, votre duree et votre horaire depuis la page Reservation. Une confirmation immediate est ensuite affichee.",
  },
  {
    question: "Quelle est la duree minimale ?",
    answer:
      "La duree minimale est de 30 minutes, pour offrir un format rapide et accessible a tous les usages.",
  },
  {
    question: "Mes appels sont-ils vraiment confidentiels ?",
    answer:
      "Oui. Les pods reposent sur l'expertise acoustique Bose pour limiter fortement les bruits exterieurs et la diffusion de votre voix.",
  },
  {
    question: "Comment est geree l'hygiene ?",
    answer:
      "Chaque pod est nettoye regulierement avec un protocole renforce. Les surfaces de contact sont desinfectees plusieurs fois par jour.",
  },
  {
    question: "Le service est-il accessible ?",
    answer:
      "Les zones pilotes sont pensees pour etre accessibles. L'equipe terrain accompagne les utilisateurs en cas de besoin.",
  },
  {
    question: "Que faire en cas de retard ou d'annulation ?",
    answer:
      "Vous pouvez annuler ou deplacer votre creneau jusqu'a une limite horaire indiquee lors de la reservation. Au-dela, le creneau peut etre facture.",
  },
  {
    question: "Mes effets personnels sont-ils en securite ?",
    answer:
      "Chaque pod est equipe d'un verrouillage temporaire et d'une surveillance de zone. Nous recommandons toutefois de garder vos objets de valeur avec vous.",
  },
  {
    question: "L'option immersive est-elle obligatoire ?",
    answer:
      "Non. L'option immersive est facultative. Vous pouvez profiter du pod en mode silence total sans surcout.",
  },
];
