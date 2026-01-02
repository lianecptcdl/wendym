import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import OrthodontieContent from '@/components/orthodontie/OrthodontieContent';
import FAQ from '@/components/orthodontie/FAQ';
import Button from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Pédodontie - Cabinet dentaire Dr MEZGUELDI',
  description: 'Soins dentaires spécialisés pour enfants. Pédodontie tous les mercredis des semaines impaires.',
};

export default function OrthedontiePage() {
  return (
    <>
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pédodontie
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Soins dentaires spécialisés pour les enfants
          </p>
          <p className="text-primary-600 font-semibold mb-8">
            Tous les mercredis des semaines impaires
          </p>
          <Button 
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            size="lg"
          >
            <Phone size={20} className="mr-2" />
            Prendre rendez-vous
          </Button>
        </div>
      </Section>

      {/* Contenu pédodontie */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <OrthodontieContent />
        </div>
      </Section>

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