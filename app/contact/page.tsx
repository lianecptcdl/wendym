import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import OpeningHours from '@/components/contact/OpeningHours';
import ParkingInfo from '@/components/contact/ParkingInfo';
import Map from '@/components/contact/Map';
import Button from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Contact - Cabinet dentaire Dr MEZGUELDI',
  description: 'Contactez-nous pour prendre rendez-vous. Téléphone, horaires, accès et plan.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact
          </h1>
          <p className="text-xl text-white">Prise de rendez-vous uniquement par téléphone.</p> 
        
          <Button
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              size="lg"
              variant="outline2"
              className='mt-6'
            >
              <Phone size={20} className="mr-2" />
              {contactInfo.phone}
          </Button>
        </div>
      </Section>

      {/* Horaires */}
      <Section background="white">
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