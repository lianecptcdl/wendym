export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Comment prendre rendez-vous ?",
    answer: "Les rendez-vous se prennent uniquement par téléphone au 04 78 40 14 88."
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Le cabinet est ouvert le lundi de 10h30 à 13h et de 14h à 18h30. Les mardis et jeudis de 9h à 13h et de 14h à 19h. Les mercredis (semaines impaires) et vendredis (semaines paires) de 9h à 13h et de 14h à 19h. Attention : le mercredi est fermé les semaines paires et le vendredi est fermé les semaines impaires."
  },
  {
    question: "Acceptez-vous les urgences ?",
    answer: "Oui, des créneaux d'urgence sont réservés dans les 24h pour les patients du cabinet. Contactez-nous au 04 78 40 14 88 pour les fractures dentaires, abcès, douleurs aiguës ou prothèses décollées."
  },
  {
    question: "Pratiquez-vous des soins pour enfants ?",
    answer: "Oui, le cabinet propose des soins pédodontiques spécialisés. Une journée est spécialement dédiée aux enfants (les mercredis des semaines impaires)."
  },
  {
    question: "Êtes-vous conventionné ?",
    answer: "Oui, le cabinet pratique les tarifs conventionnés. Certains soins spécifiques (prothétiques, parodontaux, pédodontiques) peuvent nécessiter un dépassement d'honoraires."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Le cabinet est équipé des dernières technologies : cone beam, empreintes numériques, aides optiques, et dispose d'une chaîne de stérilisation complète avec du matériel dernière génération."
  },
  {
    question: "Proposez-vous des soins sous sédation ?",
    answer: "Oui, le cabinet propose des soins sous sédation consciente avec le MEOPA. Cela permet de se sentir plus détendu tout en conservant la communication. Les effets se dissipent après quelques minutes."
  },
  {
    question: "Où se garer ?",
    answer: "Des informations détaillées sur le stationnement et l'accès au cabinet sont disponibles sur notre page contact."
  }
];