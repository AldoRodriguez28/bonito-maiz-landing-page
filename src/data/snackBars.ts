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
  flavors?: string[];
  extras?: string[];
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
    flavors: ['Clásico', 'Con queso', 'Con crema', 'Con chile del que pica', 'Con chile del que no pica'],
    extras: ['Totopos', 'Chicharrón', 'Lima y chile en polvo', 'Mantequilla extra'],
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
    flavors: ['Nutella', 'Cajeta', 'Fresa', 'Plátano', 'Lechera'],
    extras: ['Queso de bola extra', 'Trocitos de nuez', 'Galleta', 'Chispas de chocolate'],
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
    flavors: ['Pepino', 'Jícama', 'Sandía', 'Piña', 'Mango'],
    extras: ['Gomitas enchiladas', 'Cacahuates', 'Salsas al gusto', 'Chamoy', 'Limón'],
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
    flavors: ['Limón', 'Mango', 'Fresa', 'Coco', 'Chocolate'],
    extras: ['Chamoy', 'Chilito en polvo', 'Granola', 'Cacahuate', 'Topping de chocolate'],
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
    flavors: ['Vainilla', 'Chocolate', 'Red velvet', 'Zanahoria'],
    extras: ['Chispas de chocolate', 'Frutos rojos', 'Ganache', 'Crema batida', 'Caramelo salado'],
  },
];
