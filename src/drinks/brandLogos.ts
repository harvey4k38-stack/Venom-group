// Brand wordmarks sourced from Wikimedia Commons. Each file is marked Public Domain
// (below the threshold of originality) or CC0 for copyright purposes, but remains a
// registered trade mark of its owner. Brands without a freely licensed logo fall back
// to a plain-text name.
export interface BrandLogo {
  src: string;
  sourceUrl: string;
  licence: 'Public domain' | 'CC0';
}

export const BRAND_LOGOS: Record<string, BrandLogo> = {
  'Coca-Cola': { src: '/images/drinks/logos/coca-cola.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coca-Cola_logo.svg', licence: 'Public domain' },
  Pepsi: { src: '/images/drinks/logos/pepsi.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pepsi_2023.svg', licence: 'Public domain' },
  'Red Bull': { src: '/images/drinks/logos/red-bull.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_of_Red_bull.svg', licence: 'Public domain' },
  Fanta: { src: '/images/drinks/logos/fanta.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fanta_2023.svg', licence: 'Public domain' },
  Sprite: { src: '/images/drinks/logos/sprite.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sprite_2022.svg', licence: 'Public domain' },
  Evian: { src: '/images/drinks/logos/evian.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Evian_logo.svg', licence: 'Public domain' },
  Volvic: { src: '/images/drinks/logos/volvic.png', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Volvic_brand_logo.png', licence: 'Public domain' },
  Schweppes: { src: '/images/drinks/logos/schweppes.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Schweppes_wordmark.svg', licence: 'Public domain' },
  Powerade: { src: '/images/drinks/logos/powerade.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Powerade-logo-2019.svg', licence: 'Public domain' },
  Gatorade: { src: '/images/drinks/logos/gatorade.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gatorade_logo.svg', licence: 'Public domain' },
  '7UP': { src: '/images/drinks/logos/7up.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:7Up_logo_(2024).svg', licence: 'CC0' },
  Vimto: { src: '/images/drinks/logos/vimto.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vimto_logo.svg', licence: 'Public domain' },
  'Mountain Dew': { src: '/images/drinks/logos/mountain-dew.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mountain_Dew_2025_logo.svg', licence: 'Public domain' },
  'San Pellegrino': { src: '/images/drinks/logos/san-pellegrino.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sanpelegrino.svg', licence: 'Public domain' },
  Rockstar: { src: '/images/drinks/logos/rockstar.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rockstar_energy_drink_logo.svg', licence: 'Public domain' },
  'Capri-Sun': { src: '/images/drinks/logos/capri-sun.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Capri-sun-logo.svg', licence: 'Public domain' },
  Lipton: { src: '/images/drinks/logos/lipton.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lipton_logo_(2014-2026).svg', licence: 'Public domain' },
  Prime: { src: '/images/drinks/logos/prime.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_Prime_Hydration.svg', licence: 'Public domain' },
  'Fever-Tree': { src: '/images/drinks/logos/fever-tree.svg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fever-Tree_wordmark.svg', licence: 'Public domain' },
};
