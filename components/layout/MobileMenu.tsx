'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-6 space-y-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="block text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
          >
            {item.name}
          </Link>
        ))}
        
        <div className="pt-4 border-t border-gray-200">
          <a
            href="tel:0478401488"
            className="flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors w-full"
          >
            <Phone size={18} />
            <span className="font-medium">04 78 40 14 88</span>
          </a>
        </div>
      </div>
    </div>
  );
}