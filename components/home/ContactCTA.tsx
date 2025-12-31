import Section from '@/components/ui/Section';
import { Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function ContactCTA() {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-linear-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-black">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-20">
              Prendre rendez-vous
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="mx-auto mb-3" size={32} />
              <p className="font-medium texte-lg mb-1">Téléphone</p>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-lg font-medium text-teal-950 hover:text-black transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="text-center">
              <MapPin className="mx-auto mb-3" size={32} />
              <p className="font-medium mb-1">Localisation</p>
              <p className="text-lg font-medium text-teal-950 hover:text-black">{contactInfo.address.city}</p>
            </div>

            <div className="text-center">
              <Clock className="mx-auto mb-3" size={32} />
              <p className="font-medium mb-1">Horaires</p>
              <p className="text-lg font-medium text-teal-950 hover:text-black">
                Voir nos horaires détaillés
              </p>
            </div>

          </div>

        </div>
      </div>
    </Section>
  );
}