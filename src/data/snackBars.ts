export type SnackBarTier = {
  people: number;
  price: number;
};

export type SnackBar = {
  slug: string;
  name: string;
  description: string;
  tiers: SnackBarTier[];
  highlights?: string[];
};

export const SNACK_BARS: SnackBar[] = [
  {
    slug: 'esquites',
    name: 'Esquites',
    description:
      'Vaso tradicional con elote tierno, chiles al gusto y toppings gourmet para todos los perfiles de picante.',
    tiers: [
      { people: 20, price: 2000 },
      { people: 30, price: 2500 },
      { people: 40, price: 3000 },
      { people: 50, price: 3500 },
    ],
    highlights: ['Incluye montaje', 'Servicio de staff', 'Toppings ilimitados'],
  },
  {
    slug: 'marquesitas',
    name: 'Marquesitas',
    description:
      'Queso de bola, combinaciones dulces y crocantes que se preparan al momento para tus invitados.',
    tiers: [
      { people: 20, price: 2200 },
      { people: 30, price: 3000 },
      { people: 40, price: 3800 },
      { people: 50, price: 4500 },
    ],
    highlights: ['Plancha y conos incluidos', 'Sabores personalizados', 'Chef en sitio'],
  },
  {
    slug: 'vasos-locos',
    name: 'Vasos locos',
    description:
      'Pepinos, jícamas, gomitas, papitas, cacahuates, fruta y salsas para armar el vaso más antojadizo.',
    tiers: [
      { people: 20, price: 2100 },
      { people: 30, price: 2800 },
      { people: 40, price: 3400 },
      { people: 50, price: 4000 },
    ],
    highlights: ['Salsas a elegir', 'Dulces y enchilados', 'Servicio de armado en vivo'],
  },
  {
    slug: 'paletas-congeladas',
    name: 'Paletas congeladas',
    description:
      'Paletas artesanales con sabores frutales y cremosos, hielera decorada y servicio de reparto.',
    tiers: [
      { people: 20, price: 1800 },
      { people: 30, price: 2400 },
      { people: 40, price: 3000 },
      { people: 50, price: 3600 },
    ],
    highlights: ['Paletas frutales y cremosas', 'Hielera decorada', 'Reparto asistido'],
  },
  {
    slug: 'pastel-individual',
    name: 'Pastel individual (Cake bar)',
    description:
      'Pastelitos individuales con toppings y salsas dulces, perfectos para consentir a cada invitado.',
    tiers: [
      { people: 20, price: 2600 },
      { people: 30, price: 3300 },
      { people: 40, price: 4200 },
      { people: 50, price: 5000 },
    ],
    highlights: ['Sabores a elegir', 'Decoración de mesa', 'Montaje incluido'],
  },
];
