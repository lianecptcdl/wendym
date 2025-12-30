import { Phone, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import { contactInfo } from '@/data/contact';

export default function Hero() {
  return (
    <div className="relative bg-linear-to-br from-primary-50 to-white">
      <div className="container-custom py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cabinet dentaire du
            <span className="block text-primary-600 mt-2">Dr MEZGUELDI</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Situé à Figeac, notre cabinet vous offre une médecine bucco-dentaire dans un environnement moderne et chaleureux. Notre approche globale permet de vous proposer une thérapeutique personnelle et adaptée à votre problématique orale, autour de traitements alliant esthétique du sourire, implantologie et chirurgie osseuse, parodontologie, endodontie ou dentisterie pédiatrique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              variant="outline"
              size="lg"
            >
              <Phone size={20} className="mr-2" />
              Prendre rendez-vous
            </Button>
            
            <Button 
              href="/soins"
              variant="outline"
              size="lg"
            >
              Découvrir nos soins
            </Button>
          </div>

          {/* Info urgences */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary-600">
            <p className="text-sm font-medium text-gray-900 mb-1">
              Urgences dentaires
            </p>
            <p className="text-sm text-gray-600">
              Créneaux disponibles dans les 24h pour les patients du cabinet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}