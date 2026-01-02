export const contactInfo = {
  name: "SELARL DU DR MEZGUELDI",
  legalStatus: "SELARL",
  siret: "882 014 913 00017",
  phone: "04 78 40 14 88",
  address: {
    street: "54 Rue de la République", 
    city: "Genas",
    postalCode: "69740",
    region: "Auvergne-Rhône-Alpes"
  },
  email: "",
  
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
    info: "Parking Regis à 500m - gratuit"
  },
  bus: {
    info: "Arrêt Danton République à 80m"
  },
  
  // Lien Google Maps simplifié
  googleMapsLink: "https://maps.google.com/?q=54+Rue+de+la+République,+69740+Genas"
};