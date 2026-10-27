import React from 'react';
import { BRAND_LOGOS } from './brandLogos';

// Brand colours for brands without a freely licensed logo file. The name is set in
// plain type so we identify the brand without reproducing its artwork.
const BRAND_COLOURS: Record<string, string> = {
  Monster: '#111113',
  Lucozade: '#E4002B',
  Tango: '#F26722',
  Ribena: '#5B2A86',
  Rubicon: '#0077C8',
  Robinsons: '#E87722',
  'Dr Pepper': '#7A1F2B',
  'Irn-Bru': '#0060A9',
  Barr: '#1F3A93',
  Relentless: '#111113',
  Boost: '#C8102E',
  'Highland Spring': '#00558C',
  Buxton: '#003DA5',
  Smartwater: '#0085CA',
  Perrier: '#00843D',
  Oasis: '#E4007C',
  J2O: '#F18A00',
  Britvic: '#D6001C',
};

interface BrandMarkProps {
  brand: string;
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ brand, className = 'h-14 w-36' }) => {
  const logo = BRAND_LOGOS[brand];
  if (logo) {
    return <img src={logo.src} alt={`${brand} logo`} className={`${className} object-contain`} draggable={false} />;
  }
  return (
    <span
      className={`${className} flex items-center justify-center text-center font-display font-black uppercase tracking-tight leading-none text-2xl`}
      style={{ color: BRAND_COLOURS[brand] || '#111113' }}
    >
      {brand}
    </span>
  );
};
