import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import PedodontieContent from '@/components/pedodontie/PedodontieContent';
import FAQ from '@/components/pedodontie/FAQ';
import Button from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import PhotoGallery from '@/components/ui/PhotoGallery';

export const metadata: Metadata = {
  title: 'Pédodontie - Cabinet dentaire Dr MEZGUELDI',
  description: 'Soins dentaires spécialisés pour enfants. Pédodontie tous les mercredis des semaines impaires.',
};

const photos = [
  'pedodontie-1.jpg',
  'pedodontie-2.jpg',
  'pedodontie-3.jpg',
  'pedodontie-4.jpg'
];

export default function PedodontiePage() {
  return (
    <>
      {/* Hero */}
      <Section background="blue">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pédodontie
          </h1>
          <p className="text-xl text-white mb-4">
            La pédodontie est la discipline qui s&apos;occupe des soins dentaires des enfants, de la naissance à l&apos;adolescence.
          </p>

          
          <p className="text-white font-semibold mb-8">
            Tous les mercredis des semaines impaires
          </p>
          <Button 
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            size="lg"
            variant="outline2"
          >
            <Phone size={20} className="mr-2" />
            Prendre rendez-vous
          </Button>
        </div>
      </Section>

      {/* Contenu pédodontie */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <PedodontieContent />
        </div>
      </Section>

      <PhotoGallery images={photos} columns={4} />

      {/* FAQ */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>
          <FAQ />
        </div>
      </Section>
    </>
  );
}