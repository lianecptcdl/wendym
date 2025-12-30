import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import ServicesList from '@/components/soins/ServicesList';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Phone, Info } from 'lucide-react';
import { pricingNote } from '@/data/services';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Nos soins - Cabinet dentaire Dr MEZGUELDI',
  description: 'Découvrez tous nos soins dentaires : urgences, soins généraux, pédodontie, esthétique, implantologie et plus.',
};

export default function SoinsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos soins dentaires
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Une gamme complète de soins pour toute la famille, 
            avec des technologies de pointe et une approche personnalisée
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

      {/* Liste des services */}
      <Section>
        <ServicesList />
      </Section>

      {/* Information tarifs */}
      <Section background="gray">
        <Card className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Info className="text-primary-600 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Informations tarifaires</h3>
              <p className="text-gray-600">{pricingNote}</p>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}