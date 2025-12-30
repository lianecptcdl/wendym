import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function ContactCTA() {
  return (
    <Section background="gray">
      <div className="max-w-4xl mx-auto">
        <div className="bg-linear-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-black">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prendre rendez-vous
            </h2>
            <p className="text-lg text-primary-100">
              Contactez-nous par téléphone pour planifier votre visite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="mx-auto mb-3" size={32} />
              <p className="font-medium mb-1">Téléphone</p>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-primary-100 hover:text-white transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="text-center">
              <MapPin className="mx-auto mb-3" size={32} />
              <p className="font-medium mb-1">Localisation</p>
              <p className="text-primary-100">{contactInfo.address.city}</p>
            </div>

            <div className="text-center">
              <Clock className="mx-auto mb-3" size={32} />
              <p className="font-medium mb-1">Horaires</p>
              <p className="text-primary-100 text-sm">
                Voir nos horaires détaillés
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Plus d&apos;informations
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}