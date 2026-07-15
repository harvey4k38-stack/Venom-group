/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductItem {
  id: string;
  name: string;
  typicalPackSize: string;
  origin: string;
  description: string;
  isSeasonal?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  popularItems: ProductItem[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  requirements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

export interface EnquiryFormState {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  businessType: string;
  productsRequired: string[];
  estimatedWeeklyOrder: string;
  deliveryLocation: string;
  message: string;
}
