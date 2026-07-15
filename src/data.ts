/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductCategory, IndustryItem, Testimonial } from "./types";

export const IMAGES = {
  // Hero Background
  heroBg: "https://images.unsplash.com/photo-1610348725531-843dff14a9da?q=80&w=1920&auto=format&fit=crop",
  
  // Floating produce graphics for hero background accents
  floatingStrawberry: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=300&auto=format&fit=crop",
  floatingLemon: "https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=300&auto=format&fit=crop",
  floatingLettuce: "https://images.unsplash.com/photo-1556781366-336f83538539?q=80&w=300&auto=format&fit=crop",

  // About Section
  aboutWarehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  aboutProduceBoxes: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1200&auto=format&fit=crop",

  // Product categories cover images
  categoryFruit: "https://images.unsplash.com/photo-1482508809494-03688cd42e7e?q=80&w=800&auto=format&fit=crop",
  categoryVeg: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800&auto=format&fit=crop",
  categorySalad: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
  categoryHerbs: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop",
  categoryExotics: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=800&auto=format&fit=crop",
  categoryPrepared: "https://images.unsplash.com/photo-1567137827022-fbe18eff7275?q=80&w=800&auto=format&fit=crop",

  // Delivery / Fleet Section
  deliveryFleet: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
  warehouseForklift: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop",

  // Industries
  industryRestaurants: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
  industryHotels: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
  industrySchools: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
  industryCareHomes: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
  industryRetail: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
  industryHospitality: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
  industryManufacturers: "https://images.unsplash.com/photo-1664298447595-f6288c126fe2?q=80&w=800&auto=format&fit=crop",
  industryWholesalers: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "fruit",
    name: "Fresh Fruit",
    description: "Hand-selected, perfectly ripe seasonal and staple fruits sourced from leading global growers.",
    image: IMAGES.categoryFruit,
    popularItems: [
      { id: "fr-1", name: "Premium Strawberries", typicalPackSize: "10 x 400g Punnet", origin: "Kent, UK / Spain", description: "Sweet, juicy, and graded for consistency in size and colour. Perfect for hotels and dessert parlours." },
      { id: "fr-2", name: "Valencia Oranges", typicalPackSize: "15kg Box (80-100 count)", origin: "Spain / South Africa", description: "Juicy, high-yield oranges ideal for fresh juice extraction or catering segments." },
      { id: "fr-3", name: "Gala Apples", typicalPackSize: "12kg Crates (approx. 70 count)", origin: "Kent, UK / France", description: "Crisp and sweet with consistent colouration, a staple for school catering and retail." },
      { id: "fr-4", name: "Seedless Green Grapes", typicalPackSize: "10 x 500g Punnets", origin: "Chile / South Africa", description: "Plump, sweet, and firm texture seedless grapes selected for exceptional shelf life." },
      { id: "fr-5", name: "Premium Cavendish Bananas", typicalPackSize: "13.5kg Box", origin: "Costa Rica / Ecuador", description: "Available in custom ripeness stages from bright green to perfect yellow." },
      { id: "fr-6", name: "Primofiore Lemons", typicalPackSize: "10kg Box", origin: "Sicily, Italy", description: "Unwaxed, aromatic lemons with high juice content, essential for premium bar and kitchen service." },
      { id: "fr-7", name: "Seedless Persian Limes", typicalPackSize: "4kg Box", origin: "Mexico / Brazil", description: "Deep green, extremely juicy limes chosen for excellent skin quality and intense flavor." }
    ]
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    description: "An extensive selection of fresh, crisp root, green, and vine vegetables delivered daily.",
    image: IMAGES.categoryVeg,
    popularItems: [
      { id: "vg-1", name: "Tenderstem Broccoli", typicalPackSize: "20 x 200g Bundles", origin: "Lincolnshire, UK / Kenya", description: "Sweet, tender stems, hand-harvested and immediately cooled to maintain maximum snap." },
      { id: "vg-2", name: "Chantenay Carrots", typicalPackSize: "10kg Bag", origin: "Nottinghamshire, UK", description: "Sweet, crunchy baby carrots with smooth skin, ideal for premium commercial roasting." },
      { id: "vg-3", name: "Mixed Bell Peppers (R/Y/G)", typicalPackSize: "5kg Box", origin: "Netherlands / Spain", description: "Thick-walled, sweet peppers graded perfectly for uniform sizing and premium texture." },
      { id: "vg-4", name: "Beefsteak Tomatoes", typicalPackSize: "6kg Box", origin: "Isle of Wight, UK / Spain", description: "Meaty, rich tomatoes with balanced acidity, ideal for high-end burgers, slicing, and sauces." },
      { id: "vg-5", name: "Iceberg Lettuce", typicalPackSize: "12 Heads per Box", origin: "Cambridgeshire, UK / Spain", description: "Compact, crunchy, and clean heads. Vacuum-cooled directly at harvest to preserve freshness." },
      { id: "vg-6", name: "English Cucumbers", typicalPackSize: "12 Pieces", origin: "Hertfordshire, UK", description: "Firm, straight, and glossy cucumbers sourced from trusted British glasshouses." },
      { id: "vg-7", name: "Red & White Spanish Onions", typicalPackSize: "20kg Bag", origin: "Spain / UK", description: "Large caliber onions with excellent skin cover, ideal for high-volume prep kitchens." },
      { id: "vg-8", name: "Maris Piper Potatoes", typicalPackSize: "25kg Paper Sack", origin: "Cambridgeshire, UK", description: "The definitive choice for roasting and chips, dried-brushed and graded for professional kitchens." }
    ]
  },
  {
    id: "salads",
    name: "Salad Leaves",
    description: "Crisp, vibrant, and multi-washed salad greens sourced from leading British and Mediterranean growers.",
    image: IMAGES.categorySalad,
    popularItems: [
      { id: "sl-1", name: "Mixed Baby Salad Leaves", typicalPackSize: "1kg Bag (Washed & Ready)", origin: "UK / Italy", description: "An elegant blend of chard, tatsoi, mizuna, and red mustard greens. Sized for perfect plating." },
      { id: "sl-2", name: "Wild Italian Rocket", typicalPackSize: "1kg Bag (Triple-Washed)", origin: "Italy / UK", description: "Aromatic, peppery, and dark green leaves that add distinct bite and elegance to any dish." },
      { id: "sl-3", name: "Baby Spinach Leaves", typicalPackSize: "1.5kg Bag", origin: "Lincolnshire, UK / Spain", description: "Tender, young spinach leaves, triple-washed and dried with modern centrifugal systems." },
      { id: "sl-4", name: "Fresh Watercress", typicalPackSize: "10 x 85g Bunches", origin: "Hampshire, UK", description: "Pungent and crisp, grown in natural mineral-rich spring water beds for supreme quality." },
      { id: "sl-5", name: "Red Radicchio Heads", typicalPackSize: "3kg Box", origin: "Veneto, Italy", description: "Bitter, beautiful wine-red leaves with crisp white ribs, adding high visual contrast to salads." }
    ]
  },
  {
    id: "herbs",
    name: "Fresh Herbs",
    description: "Highly aromatic, fresh-cut herbs delivered in specialized breathable packaging to preserve essential oils.",
    image: IMAGES.categoryHerbs,
    popularItems: [
      { id: "hb-1", name: "Fresh Mint", typicalPackSize: "1kg Bag / 10 Bunches", origin: "UK / Israel", description: "Fragrant, large leaf mint, essential for premium bars, mojitos, Middle-Eastern cuisine, and sauces." },
      { id: "hb-2", name: "Sweet Genovese Basil", typicalPackSize: "500g Bag", origin: "UK / Italy", description: "Delicate, sweet, and highly aromatic. Transported under strict temperature control to prevent blackening." },
      { id: "hb-3", name: "Coriander (Cilantro)", typicalPackSize: "1kg Bag", origin: "UK / Spain / Morocco", description: "Strong roots, bright green leaves, and intense citrusy scent. Graded for minimized stalk content." },
      { id: "hb-4", name: "English Thyme", typicalPackSize: "500g Bunch", origin: "UK / Kenya", description: "Woody, aromatic sprigs packed with high essential oil levels, perfect for slow roasting and broths." },
      { id: "hb-5", name: "Rosemary", typicalPackSize: "500g Bunch", origin: "UK / Spain", description: "Resinous and pine-scented sprigs selected for consistent stalk strength and rich color." }
    ]
  },
  {
    id: "exotics",
    name: "Exotic Produce",
    description: "Specialist tropical fruits, roots, and rare ingredients sourced directly from global farming partners.",
    image: IMAGES.categoryExotics,
    popularItems: [
      { id: "ex-1", name: "Hass Avocados (Ready to Eat)", typicalPackSize: "Tray of 16-18 count", origin: "Peru / South Africa", description: "Perfectly pre-ripened Hass avocados with buttery flesh and rich nutty flavour." },
      { id: "ex-2", name: "Kent Mangoes", typicalPackSize: "4kg Box (9-12 count)", origin: "Brazil / India", description: "Fiberless, incredibly sweet, and juicy mangoes selected for premium culinary applications." },
      { id: "ex-3", name: "Yellow Ginger Root", typicalPackSize: "5kg Box", origin: "China / Brazil", description: "Plump, clean, and low-fibred rhizomes that offer hot, spicy, and zesty aroma." },
      { id: "ex-4", name: "Thai Lemongrass", typicalPackSize: "1kg Bundle", origin: "Thailand", description: "Extremely fragrant stalks, crucial for authentic Asian cuisine and high-end cocktail mixology." },
      { id: "ex-5", name: "Premium Dragon Fruit (Pitaya)", typicalPackSize: "3kg Box", origin: "Vietnam", description: "Stunning vibrant exterior with speckled magenta or white pulp, adding luxury appeal to dishes." }
    ]
  },
  {
    id: "prepared",
    name: "Prepared Produce",
    description: "Saves hours of kitchen prep. Sliced, diced, and peeled in our state-of-the-art BRCGS accredited facility.",
    image: IMAGES.categoryPrepared,
    popularItems: [
      { id: "pr-1", name: "Peeled & Hand-Batoned Carrots", typicalPackSize: "5kg Bag (Vacuum Packed)", origin: "UK Prep Facility", description: "Uniformly batoned carrots, prepped in clean-room conditions to guarantee a 5-day shelf life." },
      { id: "pr-2", name: "Sliced Red & White Onions", typicalPackSize: "5kg Bag (Vacuum Packed)", origin: "UK Prep Facility", description: "Evenly sliced onions, preserving crispness and flavor. Zero tears, zero waste." },
      { id: "pr-3", name: "Diced Maris Piper Potatoes (20mm)", typicalPackSize: "10kg Bag (In Water)", origin: "UK Prep Facility", description: "Kept in treated water to prevent oxidation. Perfect for rapid catering and roasting." },
      { id: "pr-4", name: "Premium Stir-Fry Vegetable Mix", typicalPackSize: "2.5kg Bag", origin: "UK Prep Facility", description: "A colorful, chef-designed blend of peppers, cabbage, carrots, red onion, and bean sprouts." },
      { id: "pr-5", name: "Seasonal Fresh Fruit Platters", typicalPackSize: "4 x 1kg Trays", origin: "UK Prep Facility", description: "Beautiful cubes of melon, pineapple, grapes, and berries, ready for breakfast buffets." }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "restaurants",
    name: "Restaurants & Fine Dining",
    tagline: "Inspiring culinary excellence with micro-graded fresh produce.",
    description: "For Michelin-starred establishments, boutique bistros, and high-volume dining groups, we supply impeccably graded fruits, vegetables, and rare exotics. We understand that plate presentation begins in the field, which is why our quality control is absolute.",
    image: IMAGES.industryRestaurants,
    requirements: ["Uniform sizing & color grading", "Morning deliveries (before service)", "Specialist micro-herbs & exotic ranges", "Direct access to procurement desk"]
  },
  {
    id: "hotels",
    name: "Hotels & Luxury Lodging",
    tagline: "Reliable high-volume supply chains for 5-star hospitality.",
    description: "From morning breakfast buffets and room service to banqueting halls and fine dining, hotels require a partner capable of absolute scale. Venom Group manages complex delivery schedules across multiple receipt bays seamlessly.",
    image: IMAGES.industryHotels,
    requirements: ["7-day delivery coverage", "Consolidated invoicing", "High-volume prep-produce capacities", "Dedicated account managers"]
  },
  {
    id: "schools",
    name: "Schools & Universities",
    tagline: "Nourishing the next generation with healthy, traceable produce.",
    description: "We are proud partners to educational caterers across the UK, delivering vitamin-rich, fresh, and budget-friendly produce. All our farm partners are fully vetted, ensuring strict traceability and adherence to food safety standards.",
    image: IMAGES.industrySchools,
    requirements: ["School-hours delivery compliance", "BRCGS accredited supply chain", "Excellent value staple items", "Nutritional profiling & traceability"]
  },
  {
    id: "care-homes",
    name: "Care Homes & Healthcare",
    tagline: "Providing reliable, dietary-focused produce with absolute care.",
    description: "Healthcare facilities trust Venom Group for exceptionally fresh produce prepped in ultra-hygienic environments. We offer extensive prepared ranges (peeled, diced) to save valuable catering prep time.",
    image: IMAGES.industryCareHomes,
    requirements: ["HACCP and BRCGS food safety", "Peeled and diced items to reduce kitchen hazard", "Soft and nutritious food selection guidance", "Consistent delivery times"]
  },
  {
    id: "retail",
    name: "Retailers & Supermarkets",
    tagline: "Stocking your shelves with fresh produce that sells itself.",
    description: "Independent farm shops, luxury grocers, and national supermarket chains choose Venom Group to secure premium visual appeal and consistent shelf life. Our direct farm links bypass middle agents, extending freshness.",
    image: IMAGES.industryRetail,
    requirements: ["Pre-packed and loose retail formats", "Longest possible shelf-life guarantees", "Barcoded pallet and crate labelling", "Scalable peak seasonal volumes"]
  },
  {
    id: "hospitality",
    name: "Hospitality & Event Venues",
    tagline: "Agile, high-capacity catering logistics for events.",
    description: "Banquets, corporate events, and wedding venues require precise logistics. We deliver high-volume orders exactly when needed, keeping your event running smoothly with pristine, fresh produce.",
    image: IMAGES.industryHospitality,
    requirements: ["Flexible dispatch windows", "Bulk prepared vegetable crates", "Weekend and evening support", "Consistent quality at absolute scale"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Marcus Sterling",
    role: "Executive Head Chef",
    company: "The Luminary Restaurant Group",
    quote: "Finding a wholesale supplier who understands that size grading and moisture control are critical is rare. Venom Group has completely changed our prep efficiency. Their wild rocket and tenderstem broccoli arrive looking like they were plucked an hour ago.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "t-2",
    name: "Sarah Jenkins",
    role: "Procurement Director",
    company: "Apex Luxury Hotels & Resorts",
    quote: "With 12 hospitality venues across London and the South East, consistency is our highest hurdle. Venom Group delivers pristine, temperature-controlled produce to every single bay before 6:00 AM. Their account managers are extremely proactive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "t-3",
    name: "David Croft",
    role: "Group Catering Manager",
    company: "Beacon Academy Trust",
    quote: "Feeding over 8,000 pupils daily requires absolute trust in food safety and traceability. Venom Group's BRCGS accreditation gives us full peace of mind. Their competitive pricing on pre-prepared carrots and potatoes has saved our budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "t-4",
    name: "Elena Rostova",
    role: "Founder & Director",
    company: "Greenwave Organic Retailers",
    quote: "We market ourselves on quality, which means our shelves must look spectacular. Venom Group's berries and citrus are beautiful, sweet, and hold up exceptionally well. Our customers have noticed a dramatic increase in shelf-life.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
  }
];

export const STATS = [
  { id: "st-1", value: 20, suffix: "+", label: "Years Experience" },
  { id: "st-2", value: 500, suffix: "+", label: "Business Customers" },
  { id: "st-3", value: 98, suffix: "%", label: "On-Time Deliveries" },
  { id: "st-4", value: 5, suffix: "M+", label: "Boxes Delivered" }
];

export const TRUSTED_INDUSTRIES = [
  "Restaurants",
  "Hotels",
  "Schools",
  "Care Homes",
  "Caterers",
  "Retailers",
  "Wholesalers",
  "Event Venues"
];
