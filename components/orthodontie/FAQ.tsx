'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4">
              {item.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="text-primary-600 shrink-0" size={20} />
            ) : (
              <ChevronDown className="text-gray-400 shrink-0" size={20} />
            )}
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}