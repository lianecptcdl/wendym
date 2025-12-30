import React from 'react';
import Card from '@/components/ui/Card';
import { Car, Navigation, MapPin } from 'lucide-react';

export default function ParkingInfo() {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Accès et parking</h2>
      
      <div className="space-y-6">
        {/* À pied */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <Navigation className="text-primary-600" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">À pied</h3>
            <p className="text-gray-600 text-sm">
              {/* À compléter avec les vraies informations */}
              Informations d&apos;accès à pied à venir
            </p>
          </div>
        </div>

        {/* En voiture */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <Car className="text-primary-600" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">En voiture</h3>
            <p className="text-gray-600 text-sm">
              {/* À compléter avec les vraies informations */}
              Informations de stationnement à venir
            </p>
          </div>
        </div>

        {/* Adresse */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <MapPin className="text-primary-600" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Adresse exacte</h3>
            <p className="text-gray-600 text-sm">
              {/* À compléter avec l'adresse complète */}
              Adresse complète à venir<br />
              Figeac, Occitanie
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}