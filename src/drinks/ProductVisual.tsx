import React from 'react';
import { Product } from './types';
import { PRODUCT_IMAGES } from './productImages';
import { BrandMark } from './BrandMark';

// Packshot when we have one, otherwise the brand logo/name tile.
export const ProductVisual: React.FC<{ product: Product; large?: boolean }> = ({ product, large = false }) => {
  const src = PRODUCT_IMAGES[product.id];
  if (src) {
    return (
      <img
        src={src}
        alt={`${product.name} – ${product.packFormat}`}
        loading="lazy"
        className={large ? 'h-full w-full object-contain' : 'h-28 w-28 object-contain mb-2 drop-shadow-md'}
        draggable={false}
      />
    );
  }
  return <BrandMark brand={product.brand} className={large ? 'h-24 w-48' : 'h-14 w-36 mb-3'} />;
};
