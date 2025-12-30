import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover ? 'transition-shadow hover:shadow-xl' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}