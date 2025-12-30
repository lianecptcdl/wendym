'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { Clock, AlertCircle } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function OpeningHours() {
  // Fonction pour déterminer si c'est une semaine paire ou impaire
  const getWeekNumber = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const weekNumber = Math.ceil(diff / oneWeek);
    return weekNumber % 2 === 0 ? 'pair' : 'impair';
  };

  const currentWeek = getWeekNumber();
  const isEvenWeek = currentWeek === 'pair';

  const schedule = [
    {
      day: 'Lundi',
      hours: contactInfo.openingHours.monday.morning + ' / ' + contactInfo.openingHours.monday.afternoon,
      isOpen: true
    },
    {
      day: 'Mardi',
      hours: contactInfo.openingHours.tuesday.morning + ' / ' + contactInfo.openingHours.tuesday.afternoon,
      isOpen: true
    },
    {
      day: 'Mercredi',
      hours: contactInfo.openingHours.wednesday.morning + ' / ' + contactInfo.openingHours.wednesday.afternoon,
      isOpen: !isEvenWeek,
      note: contactInfo.openingHours.wednesday.note
    },
    {
      day: 'Jeudi',
      hours: contactInfo.openingHours.thursday.morning + ' / ' + contactInfo.openingHours.thursday.afternoon,
      isOpen: true
    },
    {
      day: 'Vendredi',
      hours: contactInfo.openingHours.friday.morning + ' / ' + contactInfo.openingHours.friday.afternoon,
      isOpen: isEvenWeek,
      note: contactInfo.openingHours.friday.note
    },
    {
      day: 'Samedi',
      hours: 'Fermé',
      isOpen: false
    },
    {
      day: 'Dimanche',
      hours: 'Fermé',
      isOpen: false
    }
  ];

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-primary-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-900">Horaires d&apos;ouverture</h2>
      </div>

      {/* Info semaine actuelle */}
      <div className="mb-6 p-4 bg-primary-50 rounded-lg flex items-start gap-3">
        <AlertCircle className="text-primary-600 shrink-0 mt-0.5" size={20} />
        <div className="text-sm">
          <p className="font-semibold text-primary-900 mb-1">
            Nous sommes en semaine {isEvenWeek ? 'paire' : 'impaire'}
          </p>
          <p className="text-primary-700">
            {isEvenWeek 
              ? 'Le cabinet est fermé le mercredi et ouvert le vendredi' 
              : 'Le cabinet est ouvert le mercredi et fermé le vendredi'}
          </p>
        </div>
      </div>

      {/* Horaires */}
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div 
            key={index}
            className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-0 ${
              !item.isOpen ? 'opacity-50' : ''
            }`}
          >
            <span className="font-medium text-gray-900">{item.day}</span>
            <div className="text-right">
              <span className={item.isOpen ? 'text-gray-600' : 'text-gray-500'}>
                {item.hours}
              </span>
              {item.note && (
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Note importante */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Important :</strong> Les horaires alternent selon les semaines. 
          Le mercredi est fermé les semaines paires et le vendredi est fermé les semaines impaires.
        </p>
      </div>
    </Card>
  );
}