import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  containerClassName = '',
  background = 'white',
  id
}: SectionProps) {
  const bgClasses = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section id={id} className={`section-padding ${bgClasses} ${className}`}>
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}