/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PRODUCTS } from "./products";
import { BRAND_LOGOS } from "./brandLogos";

interface BrandsStripProps {
  onBrandClick: (brandName: string) => void;
}

// Only show logos for brands that actually appear in the catalogue.
const CAROUSEL_BRANDS = Object.keys(BRAND_LOGOS).filter((brand) => PRODUCTS.some((p) => p.brand === brand));

export default function BrandsStrip({ onBrandClick }: BrandsStripProps) {
  return (
    <section className="py-14 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-center font-mono text-xs font-bold uppercase tracking-widest text-leaf mb-8">
          Brands We Sell
        </h2>

        <div className="relative overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-brand-marquee group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
                {CAROUSEL_BRANDS.map((brand) => (
                  <li key={brand} className="px-8 sm:px-10">
                    <button
                      type="button"
                      onClick={() => onBrandClick(brand)}
                      tabIndex={copy === 1 ? -1 : 0}
                      className="block cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                      title={`View ${brand} products`}
                    >
                      <img
                        src={BRAND_LOGOS[brand].src}
                        alt={copy === 1 ? "" : `${brand} logo`}
                        className="h-12 w-32 object-contain"
                        draggable={false}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
