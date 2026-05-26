/** Rutas locales en /public/brands/ — una por marca */
export const BRAND_SLUGS: Record<string, string> = {
  Samsung: 'samsung',
  LG: 'lg',
  Whirlpool: 'whirlpool',
  Panasonic: 'panasonic',
  Philips: 'philips',
  Braun: 'braun',
  Hisense: 'hisense',
  GE: 'generalelectric',
  Daewoo: 'daewoo',
  Oster: 'oster',
  'Black+Decker': 'black-decker',
  'Hamilton Beach': 'hamilton-beach',
  KitchenAid: 'kitchenaid',
  Mabe: 'mabe',
  Indurama: 'indurama',
  Midea: 'midea',
  Recco: 'recco',
  Imaco: 'imaco',
}

export function getBrandLogoUrl(brand: string): string {
  const slug = BRAND_SLUGS[brand]
  return slug ? `/brands/${slug}.svg` : ''
}

export function getBrandColor(brand: string): string {
  const colors: Record<string, string> = {
    Samsung: '#1428A0',
    LG: '#A50034',
    Whirlpool: '#005696',
    Panasonic: '#0059A9',
    Philips: '#0E5FD8',
    Braun: '#000000',
    Hisense: '#009A44',
    GE: '#005EB8',
    Daewoo: '#003DA5',
    Oster: '#C8102E',
    'Black+Decker': '#FF6600',
    'Hamilton Beach': '#C8102E',
    KitchenAid: '#C41230',
    Mabe: '#003087',
    Indurama: '#E30613',
    Midea: '#0099DA',
    Recco: '#E30613',
    Imaco: '#005EB8',
  }
  return colors[brand] ?? '#0d1b3e'
}
