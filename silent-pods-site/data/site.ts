import {
  Accessibility,
  AlarmClock,
  Briefcase,
  Brain,
  Building2,
  Building,
  Bus,
  CalendarRange,
  Clock3,
  CreditCard,
  Gem,
  Headphones,
  Hotel,
  Landmark,
  MapPin,
  Plane,
  Phone,
  ShieldCheck,
  Train,
  Wifi,
} from "lucide-react";

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Sites", href: "/reservation" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Abonnements", href: "/abonnements" },
  { label: "B2B", href: "/b2b" },
  { label: "Espace client", href: "/espace-client" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const benefits = [
  {
    title: "Se concentrer",
    description:
      "Un espace acoustiquement isolé pour avancer sur un dossier, préparer une présentation ou étudier sans interruption.",
    icon: Briefcase,
  },
  {
    title: "Se reposer",
    description:
      "Quelques minutes de calme entre deux trajets pour réduire la fatigue et récupérer dans un cadre confortable.",
    icon: Clock3,
  },
  {
    title: "Méditer",
    description:
      "Un cocon silencieux ideal pour une pause respiratoire, recentrer son attention et faire retomber la pression.",
    icon: Brain,
  },
  {
    title: "Passer un appel en toute confidentialité",
    description:
      "Un environnement discret pour les conversations sensibles, les réunions rapides ou les appels personnels.",
    icon: Phone,
  },
];

export const kpis = [
  { value: "14", label: "sites références dans le plan" },
  { value: "3 a 5", label: "pods par site pilote" },
  { value: "< 30 s", label: "pour réserver" },
];

export const useCases = [
  {
    title: "Voyageurs en transit",
    description:
      "Rester productif ou se détendre pendant une correspondance sans quitter la gare.",
    icon: Train,
  },
  {
    title: "Professionnels mobiles",
    description:
      "Passer un appel strategique dans un environnement maitrise, meme au coeur d'un flux de passagers.",
    icon: Building2,
  },
  {
    title: "Étudiants et jeunes actifs",
    description:
      "Réviser, travailler ou se ressourcer dans un espace premium accessible a la demande.",
    icon: Headphones,
  },
];

export const pricingPlans = [
  {
    name: "Solo",
    price: "5 EUR",
    duration: "30 min",
    description: "Pour un appel urgent, une micro-pause ou une concentration rapide.",
    highlight: false,
    features: [
      "Accès a un pod standard",
      "Isolation phonique Bose",
      "Wi-Fi sécurisé + USB-C",
    ],
  },
  {
    name: "Solo Plus",
    price: "9 EUR",
    duration: "1 h",
    description: "L'équilibre ideal pour travailler ou récupérer avant un trajet.",
    highlight: true,
    features: [
      "Tout le contenu de l'offre Solo",
      "Prêt d'un casque Bose",
      "Meilleur prix à l'heure",
    ],
  },
  {
    name: "Premium",
    price: "14 EUR",
    duration: "1 h",
    description: "L'offre immersive: meditation guidée, assise massage et ambiance sonore premium.",
    highlight: false,
    features: [
      "Tout le contenu de l'offre Solo Plus",
      "Programme relaxation Bose",
      "Priorité sur certains créneaux",
    ],
  },
];

export const subscriptionPlans = [
  {
    name: "Abonnement mensuel",
    price: "49 EUR / mois",
    details: "8 heures incluses, puis 6 EUR / heure supplémentaire.",
    perks: [
      "Historique de réservation détaillé",
      "QR code toujours disponible dans l'espace client",
      "Report possible des heures non consommées (30 jours)",
    ],
  },
];

export const b2bPlans = [
  {
    name: "Location B2B",
    price: "799 EUR / pod / mois",
    details: "Accès salarié illimité, maintenance incluse, installation en 2 jours sans travaux.",
  },
  {
    name: "Achat cabine concurrente",
    price: "11 000 EUR (one-shot)",
    details: "Investissement initial élevé, moins flexible pour des sites évolutifs.",
  },
];

export const immersiveOption = {
  name: "Option immersive Bose",
  price: "+3 EUR",
  description:
    "Activez une ambiance sonore premium pour la relaxation, la concentration ou la meditation guidée.",
};

export const locations = [
  {
    name: "Paris Gare du Nord",
    status: "Pilote actif",
    description:
      "Implantation en zone de correspondance, accès direct depuis le hall principal.",
  },
  {
    name: "Lyon Part-Dieu",
    status: "Pilote actif",
    description:
      "Pods situés à proximité des quais grande vitesse et de l'espace services.",
  },
  {
    name: "Aéroports et centres commerciaux",
    status: "Prochainement",
    description:
      "Extension en preparation dans certains hubs de transport et malls urbains.",
  },
];

export type SiteType = "Gare SNCF" | "Aéroport" | "Entreprise";

export type SiteRecord = {
  id: string;
  name: string;
  type: SiteType;
  city: string;
  postalCode: string;
  address: string;
  area: string;
  openingHours: string;
  podsTotal: number;
  podsAvailableNow: number;
  openingYear: string;
  transports: string;
  pmr: string;
  googleMapsUrl: string;
  equipments: string[];
  formulas: string[];
  rating: number;
  popularity: number;
  lat: number;
  lng: number;
};

export const sites: SiteRecord[] = [
  {
    id: "gdn",
    name: "Gare du Nord",
    type: "Gare SNCF",
    city: "Paris",
    postalCode: "75010",
    address: "18 Rue de Dunkerque, 75010 Paris",
    area: "Hall principal niveau voyageurs",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 3,
    podsAvailableNow: 2,
    openingYear: "Pilote 2026",
    transports: "Metro 4/5, RER B/D, Bus 26/38/43",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+du+Nord+Paris",
    equipments: ["Wi-Fi sécurisé", "USB-C", "Casque Bose", "Assise confort"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC", "Premium 1h - 14 EUR TTC"],
    rating: 4.7,
    popularity: 98,
    lat: 48.8809,
    lng: 2.3553,
  },
  {
    id: "gly",
    name: "Gare de Lyon",
    type: "Gare SNCF",
    city: "Paris",
    postalCode: "75012",
    address: "Place Louis-Armand, 75012 Paris",
    area: "Niveau TGV depart",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 2,
    podsAvailableNow: 1,
    openingYear: "Pilote 2026",
    transports: "Metro 1/14, RER A/D, Bus 24/57/61",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+de+Lyon+Paris",
    equipments: ["Wi-Fi sécurisé", "USB-C", "Casque Bose"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC"],
    rating: 4.5,
    popularity: 95,
    lat: 48.8443,
    lng: 2.373,
  },
  {
    id: "gmp",
    name: "Gare Montparnasse",
    type: "Gare SNCF",
    city: "Paris",
    postalCode: "75015",
    address: "17 Boulevard de Vaugirard, 75015 Paris",
    area: "Zone services passagers",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 2,
    podsAvailableNow: 0,
    openingYear: "An 2",
    transports: "Metro 4/6/12/13, Bus 28/39/58",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+Montparnasse+Paris",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC"],
    rating: 4.3,
    popularity: 88,
    lat: 48.8402,
    lng: 2.3208,
  },
  {
    id: "gsl",
    name: "Gare Saint-Lazare",
    type: "Gare SNCF",
    city: "Paris",
    postalCode: "75008",
    address: "13 Rue d'Amsterdam, 75008 Paris",
    area: "Couloir central niveau commerces",
    openingHours: "06:30 - 22:00, 7j/7",
    podsTotal: 1,
    podsAvailableNow: 1,
    openingYear: "An 2",
    transports: "Metro 3/12/13/14, RER E",
    pmr: "Accès PMR partiel",
    googleMapsUrl: "https://maps.google.com/?q=Gare+Saint-Lazare+Paris",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC"],
    rating: 4.1,
    popularity: 82,
    lat: 48.8766,
    lng: 2.3257,
  },
  {
    id: "lyp",
    name: "Gare Part-Dieu",
    type: "Gare SNCF",
    city: "Lyon",
    postalCode: "69003",
    address: "5 Place Charles Beraudier, 69003 Lyon",
    area: "Niveau services a proximité des quais",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 2,
    podsAvailableNow: 1,
    openingYear: "An 3",
    transports: "Metro B, Tram T1/T3/T4, Rhonexpress",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+Part-Dieu+Lyon",
    equipments: ["Wi-Fi sécurisé", "USB-C", "Casque Bose"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC", "Premium 1h - 14 EUR TTC"],
    rating: 4.6,
    popularity: 91,
    lat: 45.7608,
    lng: 4.8599,
  },
  {
    id: "msc",
    name: "Gare Saint-Charles",
    type: "Gare SNCF",
    city: "Marseille",
    postalCode: "13001",
    address: "Square Narvik, 13001 Marseille",
    area: "Niveau voyageurs, aile est",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 2,
    podsAvailableNow: 2,
    openingYear: "An 3",
    transports: "Metro M1/M2, Bus 49/52",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+Saint-Charles+Marseille",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC"],
    rating: 4.2,
    popularity: 86,
    lat: 43.3031,
    lng: 5.3811,
  },
  {
    id: "bsj",
    name: "Gare Bordeaux-St-Jean",
    type: "Gare SNCF",
    city: "Bordeaux",
    postalCode: "33800",
    address: "Rue Charles Domercq, 33800 Bordeaux",
    area: "Niveau depart TGV",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 2,
    podsAvailableNow: 1,
    openingYear: "An 3",
    transports: "Tram C/D, Bus 1/9/10",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+Bordeaux+St+Jean",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC"],
    rating: 4.3,
    popularity: 84,
    lat: 44.8256,
    lng: -0.5562,
  },
  {
    id: "lil",
    name: "Gare Lille-Europe",
    type: "Gare SNCF",
    city: "Lille",
    postalCode: "59777",
    address: "1 Place Francois Mitterrand, 59777 Lille",
    area: "Niveau correspondances",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 2,
    podsAvailableNow: 0,
    openingYear: "An 3",
    transports: "Metro 2, Tram R/T, Bus 14",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+Lille+Europe",
    equipments: ["Wi-Fi sécurisé", "USB-C", "Casque Bose"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Premium 1h - 14 EUR TTC"],
    rating: 4.4,
    popularity: 80,
    lat: 50.6393,
    lng: 3.075,
  },
  {
    id: "str",
    name: "Gare Strasbourg-Ville",
    type: "Gare SNCF",
    city: "Strasbourg",
    postalCode: "67000",
    address: "20 Place de la Gare, 67000 Strasbourg",
    area: "Niveau billetterie",
    openingHours: "06:00 - 22:00, 7j/7",
    podsTotal: 1,
    podsAvailableNow: 1,
    openingYear: "An 3",
    transports: "Tram A/C/D",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Gare+Strasbourg+Ville",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC"],
    rating: 4,
    popularity: 76,
    lat: 48.5853,
    lng: 7.7347,
  },
  {
    id: "cdg",
    name: "CDG Terminal 2E",
    type: "Aéroport",
    city: "Roissy",
    postalCode: "95700",
    address: "Terminal 2E, 95700 Roissy-en-France",
    area: "Zone embarquement internationale",
    openingHours: "05:30 - 23:30, 7j/7",
    podsTotal: 2,
    podsAvailableNow: 1,
    openingYear: "An 2",
    transports: "RER B, Bus CDGVal",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=CDG+Terminal+2E",
    equipments: ["Wi-Fi sécurisé", "USB-C", "Casque Bose", "Mode meditation"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC", "Premium 1h - 14 EUR TTC"],
    rating: 4.6,
    popularity: 93,
    lat: 49.0032,
    lng: 2.5711,
  },
  {
    id: "ory",
    name: "Orly Terminal 4",
    type: "Aéroport",
    city: "Orly",
    postalCode: "94390",
    address: "Terminal 4, 94390 Orly",
    area: "Niveau departs hall C",
    openingHours: "05:30 - 23:00, 7j/7",
    podsTotal: 1,
    podsAvailableNow: 0,
    openingYear: "An 2",
    transports: "Orlyval, Tram T7, Bus 183",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Orly+Terminal+4",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC"],
    rating: 4.2,
    popularity: 79,
    lat: 48.7274,
    lng: 2.3592,
  },
  {
    id: "lys",
    name: "Lyon Saint-Exupery",
    type: "Aéroport",
    city: "Lyon",
    postalCode: "69125",
    address: "Aéroport Lyon Saint-Exupery, 69125 Colombier-Saugnieu",
    area: "Terminal 1, zone restauration",
    openingHours: "05:30 - 23:00, 7j/7",
    podsTotal: 1,
    podsAvailableNow: 1,
    openingYear: "An 3",
    transports: "Rhonexpress, Bus navettes",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Lyon+Saint+Exupery+Airport",
    equipments: ["Wi-Fi sécurisé", "USB-C", "Casque Bose"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Premium 1h - 14 EUR TTC"],
    rating: 4.1,
    popularity: 73,
    lat: 45.7256,
    lng: 5.0811,
  },
  {
    id: "nce",
    name: "Nice Cote d'Azur",
    type: "Aéroport",
    city: "Nice",
    postalCode: "06200",
    address: "19 Rue Costes et Bellonte, 06200 Nice",
    area: "Terminal 2, hall departs",
    openingHours: "05:30 - 23:00, 7j/7",
    podsTotal: 1,
    podsAvailableNow: 1,
    openingYear: "An 3",
    transports: "Tram L2, Bus 12",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Nice+Cote+d+Azur+Airport",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Solo Plus 1h - 9 EUR TTC"],
    rating: 4,
    popularity: 71,
    lat: 43.6653,
    lng: 7.215,
  },
  {
    id: "mrs",
    name: "Marseille Provence",
    type: "Aéroport",
    city: "Marseille",
    postalCode: "13700",
    address: "Aéroport Marseille Provence, 13700 Marignane",
    area: "Terminal 1, zone commerces",
    openingHours: "05:30 - 23:00, 7j/7",
    podsTotal: 1,
    podsAvailableNow: 0,
    openingYear: "An 3",
    transports: "Navette gare Saint-Charles, Bus 13",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=Marseille+Provence+Airport",
    equipments: ["Wi-Fi sécurisé", "USB-C"],
    formulas: ["Solo 30 min - 5 EUR TTC", "Premium 1h - 14 EUR TTC"],
    rating: 3.9,
    popularity: 69,
    lat: 43.4367,
    lng: 5.214,
  },
  {
    id: "corp-ladefense",
    name: "Campus Enterprise La Defense",
    type: "Entreprise",
    city: "Paris",
    postalCode: "92400",
    address: "1 Parvis de La Defense, 92400 Courbevoie",
    area: "Atrium principal, zone coworking",
    openingHours: "08:00 - 20:00, lun-ven",
    podsTotal: 4,
    podsAvailableNow: 3,
    openingYear: "Pilote B2B",
    transports: "Metro 1, RER A, Tram T2",
    pmr: "Accès PMR complet",
    googleMapsUrl: "https://maps.google.com/?q=La+Defense+Paris",
    equipments: ["Wi-Fi sécurisé", "USB-C", "Visio HD", "Mode focus"],
    formulas: ["Abonnement entreprise 799 EUR / pod / mois"],
    rating: 4.8,
    popularity: 99,
    lat: 48.8919,
    lng: 2.2392,
  },
];

export const siteTypeIcons = {
  "Gare SNCF": Train,
  Aéroport: Plane,
  Entreprise: Building,
};

export const equipmentHighlights = [
  { label: "Wi-Fi sécurisé", icon: Wifi },
  { label: "Casque Bose", icon: Headphones },
  { label: "Accessibilité PMR", icon: Accessibility },
  { label: "Paiement sécurisé", icon: ShieldCheck },
];

export const operationFeatures = [
  { title: "Mise à jour disponibilité / 30s", icon: AlarmClock },
  { title: "Blocage créneau 5 min", icon: CalendarRange },
  { title: "Paiement et facturation", icon: CreditCard },
  { title: "Contrôle d'accès QR", icon: Gem },
];

export const b2bValueProps = [
  {
    title: "Offrez le silence à vos équipes",
    description: "Dans un contexte flex-office, les pods renforcent concentration, confidentialité et confort.",
    icon: Building2,
  },
  {
    title: "Marché estimé à 1,2 MdEUR",
    description: "Le marché des espaces acoustiques premium continue de croître dans les hubs urbains.",
    icon: Landmark,
  },
  {
    title: "Installation en 2 jours sans travaux",
    description: "Une logique de location modulaire plus agile qu'un achat lourd type cabine fixe.",
    icon: MapPin,
  },
  {
    title: "QVT et RSE",
    description: "Moins de bruit, plus de bien-être et une expérience salarié mesurable.",
    icon: Hotel,
  },
];

export const testimonialItems = [
  {
    quote:
      "J'ai réservé en moins de 30 secondes et j'ai enfin pu passer mon appel client sans le bruit du hall.",
    author: "Nadia, consultante en mobilité",
    rating: 5,
  },
  {
    quote:
      "Le pod m'a permis de me concentrer avant un entretien. Le casque Bose fait la différence.",
    author: "Thomas, étudiant",
    rating: 5,
  },
  {
    quote:
      "Super utile pendant une correspondance longue. Expérience premium et très simple à utiliser.",
    author: "Sofia, voyageuse fréquente",
    rating: 4,
  },
];

export const tariffFaqItems = [
  {
    question: "Que se passe-t-il si je dépasse la durée réservée ?",
    answer:
      "Un tarif de prolongation est appliqué par tranche de 15 minutes, uniquement si un pod reste disponible.",
  },
  {
    question: "Puis-je prolonger ma réservation en cours ?",
    answer:
      "Oui, depuis l'application ou l'écran du pod, sous réserve de disponibilité immédiate.",
  },
  {
    question: "Quelle est la politique d'annulation ?",
    answer:
      "Annulation gratuite jusqu'à 60 minutes avant le début du créneau. Passé ce délai, remboursement partiel.",
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer: "Oui, paiement HTTPS avec chiffrement, tokenisation et conformité PCI via prestataire certifié.",
  },
];

export const legalLinks = [
  { label: "Politique de confidentialité", href: "/legal#confidentialité" },
  { label: "Cookies", href: "/legal#cookies" },
  { label: "CGU", href: "/legal#cgu" },
  { label: "CGV", href: "/legal#cgv" },
  { label: "Mentions légales", href: "/legal#mentions" },
];

export const transportIcons = [Bus, Train, Plane];

export const faqItems = [
  {
    question: "Comment réserver un Silent Pod ?",
    answer:
      "Choisissez votre lieu, votre durée et votre horaire depuis la page Réservation. Une confirmation immédiate est ensuite affichée.",
  },
  {
    question: "Quelle est la durée minimale ?",
    answer:
      "La durée minimale est de 30 minutes, pour offrir un format rapide et accessible à tous les usages.",
  },
  {
    question: "Mes appels sont-ils vraiment confidentiels ?",
    answer:
      "Oui. Les pods reposent sur l'expertise acoustique Bose pour limiter fortement les bruits extérieurs et la diffusion de votre voix.",
  },
  {
    question: "Comment est gérée l'hygiène ?",
    answer:
      "Chaque pod est nettoyé régulièrement avec un protocole renforcé. Les surfaces de contact sont désinfectées plusieurs fois par jour.",
  },
  {
    question: "Le service est-il accessible ?",
    answer:
      "Les zones pilotes sont pensées pour être accessibles. L'équipe terrain accompagne les utilisateurs en cas de besoin.",
  },
  {
    question: "Que faire en cas de retard ou d'annulation ?",
    answer:
      "Vous pouvez annuler ou déplacer votre créneau jusqu'à une limite horaire indiquée lors de la réservation. Au-delà, le créneau peut être facturé.",
  },
  {
    question: "Mes effets personnels sont-ils en sécurité ?",
    answer:
      "Chaque pod est équipé d'un verrouillage temporaire et d'une surveillance de zone. Nous recommandons toutefois de garder vos objets de valeur avec vous.",
  },
  {
    question: "L'option immersive est-elle obligatoire ?",
    answer:
      "Non. L'option immersive est facultative. Vous pouvez profiter du pod en mode silence total sans surcoût.",
  },
];