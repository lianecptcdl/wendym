export interface Service {
  id: string;
  title: string;
  description: string;
  details?: string[];
  icon?: string;
}

export const services: Service[] = [
  {
    id: "urgences",
    title: "Urgences dentaires",
    description: "Créneaux disponibles dans les 24h, réservés aux patients du cabinet",
    details: [
      "Fractures dentaires",
      "Abcès dentaires",
      "Douleurs aiguës",
      "Prothèses décollées"
    ]
  },
  {
    id: "soins-dentaires",
    title: "Soins dentaires",
    description: "Le patient est au centre de l'attention. Un plan de traitement personnalisé est proposé, en fonction des besoins.",
    details: [
      "Utilisation des dernières technologies : cone beam, empreintes numériques, aides optiques",
      "L'asepsie est l'une des priorités, avec une chaîne de stérilisation complète et du matériel dernière génération"
    ]
  },
  {
    id: "pedodontie",
    title: "Soins pédodontiques",
    description: "Soins dentaires spécialisés pour les enfants (tous les mercredis des semaines impaires)",
    details: [
      "Prévention : bilan bucco-dentaire, application de vernis fluorés, scellements de sillons, révélateurs de plaque, éducation à l'hygiène",
      "Soins : composites, pulpotomies",
      "Prothèse : mainteneurs d'espace, inlay, onlay, coiffe pédodontique"
    ]
  },
  {
    id: "esthetique",
    title: "Soins esthétiques",
    description: "Des solutions esthétiques pour sublimer votre sourire",
    details: [
      "Facettes",
      "Traitement des usures",
      "Éclaircissement",
      "Composites esthétiques stratifiés",
      "Bridge cantilever"
    ]
  },
  {
    id: "parodontologie",
    title: "Parodontologie",
    description: "Traitement des tissus de soutien de la dent (gencive et os)",
    details: [
      "Surfaçage",
      "Maintenance régulière",
      "Éducation à des techniques d'hygiène propres à vos besoins"
    ]
  },
  {
    id: "implantologie",
    title: "Implantologie",
    description: "Remplacement d'une racine naturelle par une racine artificielle en titane",
    details: [
      "Solution thérapeutique classique et fiable dans le temps",
      "Remplacement d'une ou plusieurs dents absentes"
    ]
  },
  {
    id: "prothese",
    title: "Prothèse",
    description: "Prothésistes français de la région",
    details: [
      "Couronnes",
      "Facettes",
      "Inlay, onlay, overlay"
    ]
  },
  {
    id: "sedation",
    title: "Soins sous sédation consciente",
    description: "Utilisation du MEOPA pour plus de confort",
    details: [
      "Permet de se sentir plus détendu tout en conservant la communication avec le praticien",
      "Les effets se dissipent totalement après quelques minutes",
      "Reprise d'une activité normale immédiatement après"
    ]
  }
];

export const pricingNote = "Le cabinet pratique les tarifs conventionnels. Certains soins prothétiques, parodontaux et pédodontiques spécifiques peuvent être soumis à un dépassement d'honoraires.";