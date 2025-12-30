import React from 'react';
import Card from '@/components/ui/Card';
import { Phone, MapPin, Building } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <Phone className="text-primary-600 mb-4" size={32} />
        <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
        <a 
          href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          {contactInfo.phone}
        </a>
        <p className="text-sm text-gray-600 mt-2">
          Prise de rendez-vous uniquement par téléphone
        </p>
      </Card>

      <Card>
        <MapPin className="text-primary-600 mb-4" size={32} />
        <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
        <p className="text-gray-600">
          {contactInfo.address.city}<br />
          {contactInfo.address.department}, {contactInfo.address.region}
        </p>
      </Card>

      <Card>
        <Building className="text-primary-600 mb-4" size={32} />
        <h3 className="font-bold text-gray-900 mb-2">Cabinet</h3>
        <p className="text-gray-600 text-sm">
          {contactInfo.name}<br />
          {contactInfo.legalStatus}<br />
          SIRET : {contactInfo.siret}
        </p>
      </Card>
    </div>
  );
}