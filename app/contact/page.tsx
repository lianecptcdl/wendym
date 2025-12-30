import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import ContactInfo from '@/components/contact/ContactInfo';
import OpeningHours from '@/components/contact/OpeningHours';
import ParkingInfo from '@/components/contact/ParkingInfo';
import Map from '@/components/contact/Map';

export const metadata: Metadata = {
  title: 'Contact - Cabinet dentaire Dr MEZGUELDI',
  description: 'Contactez-nous pour prendre rendez-vous. Téléphone, horaires, accès et plan.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600">
            Prenez rendez-vous ou trouvez toutes les informations pour nous contacter
          </p>
        </div>
      </Section>

      {/* Informations de contact */}
      <Section>
        <ContactInfo />
      </Section>

      {/* Horaires */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <OpeningHours />
        </div>
      </Section>

      {/* Accès et carte */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <ParkingInfo />
          <Map />
        </div>
      </Section>
    </>
  );
}