import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0" />
                <div>
                  <p>{contactInfo.address.city}</p>
                  <p>{contactInfo.address.department}, {contactInfo.address.region}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horaires</h3>
            <div className="flex items-start gap-2">
              <Clock size={18} className="mt-1 shrink-0" />
              <div className="text-sm space-y-1">
                <p>Lundi : 10h30-13h / 14h-18h30</p>
                <p>Mar-Jeu : 9h-13h / 14h-19h</p>
                <p className="text-xs text-gray-400">
                  (Horaires variables mer/ven selon semaine)
                </p>
              </div>
            </div>
          </div>

          {/* Liens légaux */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Informations légales</h3>
            <div className="space-y-2">
              <Link 
                href="/mentions-legales" 
                className="block hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
            </div>
            <div className="mt-4 text-sm">
              <p>SIRET : {contactInfo.siret}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} {contactInfo.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}