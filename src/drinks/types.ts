export type ProductCategory = 
  | 'carbonated' 
  | 'energy' 
  | 'water' 
  | 'juices' 
  | 'sports' 
  | 'mixers';

export type UnitType = 'case' | 'layer' | 'pallet';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  packFormat: string; // e.g. "24 x 330ml Cans"
  containerType: 'Can' | 'PET Bottle' | 'Glass Bottle' | 'Tetra Pak' | 'Pouch';
  casesPerLayer: number;
  layersPerPallet: number;
  casesPerPallet: number;
  weightPerCaseKg: number;
  description: string;
  isPopular?: boolean;
  isNew?: boolean;
  dietary?: string; // e.g. "Sugar Free", "Zero Calories", "Vegan"
  sku: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  unit: UnitType;
}

export interface BulkQuoteFormData {
  businessName: string;
  contactName: string;
  jobTitle?: string;
  email: string;
  phone: string;
  businessType: string;
  deliveryPostcode: string;
  deliveryAddress: string;
  preferredDeliveryDate: string;
  hasForklift: boolean;
  tailLiftRequired: boolean;
  additionalNotes: string;
  consentGDPR: boolean;
}
