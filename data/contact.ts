export const contactInfo = {
  name: "SELARL DU DR MEZGUELDI",
  legalStatus: "SELARL",
  siret: "882 014 913 00017",
  phone: "04 78 40 14 88",
  address: {
    street: "", // À compléter
    city: "Figeac",
    postalCode: "", // À compléter
    department: "Lot",
    region: "Occitanie"
  },
  email: "", // À compléter si nécessaire
  
  // Horaires spéciaux
  openingHours: {
    monday: {
      morning: "10h30 - 13h00",
      afternoon: "14h00 - 18h30",
      isOpen: true
    },
    tuesday: {
      morning: "09h00 - 13h00",
      afternoon: "14h00 - 19h00",
      isOpen: true
    },
    wednesday: {
      morning: "09h00 - 13h00",
      afternoon: "14h00 - 19h00",
      isOpen: "odd", // Ouvert les semaines impaires uniquement
      note: "Fermé les semaines paires"
    },
    thursday: {
      morning: "09h00 - 13h00",
      afternoon: "14h00 - 19h00",
      isOpen: true
    },
    friday: {
      morning: "09h00 - 13h00",
      afternoon: "14h00 - 19h00",
      isOpen: "even", // Ouvert les semaines paires uniquement
      note: "Fermé les semaines impaires"
    },
    saturday: {
      isOpen: false
    },
    sunday: {
      isOpen: false
    }
  },
  
  parking: {
    // À compléter avec les informations d'accès et parking
    info: "Informations de stationnement à venir"
  },
  
  googleMapsLink: "" // À compléter
};