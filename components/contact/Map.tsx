import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function Map() {
  // Placeholder pour Google Maps
  // Vous devrez ajouter le vrai lien Google Maps dans contact.ts
  
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Nous localiser</h2>
      
      {/* Placeholder pour la carte */}
      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
        <p className="text-gray-500">
          Carte Google Maps à intégrer
        </p>
      </div>
      
      {contactInfo.googleMapsLink && (
        <Button 
          href={contactInfo.googleMapsLink}
          variant="outline"
          className="w-full"
        >
          <ExternalLink size={18} className="mr-2" />
          Ouvrir dans Google Maps
        </Button>
      )}
      
      {/* Instructions pour ajouter la carte */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-gray-600">
        <p className="font-medium mb-2">Pour ajouter la carte Google Maps :</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Allez sur Google Maps</li>
          <li>Trouvez votre adresse</li>
          <li>Cliquez sur &quot;Partager&quot; puis &quot;Intégrer une carte&quot;</li>
          <li>Copiez le code iframe</li>
          <li>Remplacez le placeholder dans ce composant</li>
        </ol>
      </div>
    </Card>
  );
}