/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Sparkles, HelpCircle } from "lucide-react";
import { IMAGES } from "../data";

interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  points: string[];
}

export default function IndustriesSection() {
  const industries: IndustryItem[] = [
    {
      id: "restaurants",
      name: "Restaurants & Fine Dining",
      tagline: "Inspiring culinary excellence with micro-graded fresh produce.",
      description: "For Michelin-starred establishments, boutique bistros, and high-volume dining groups, we supply impeccably graded fruits, vegetables, and rare exotics. We understand that plate presentation begins in the field, which is why our quality control is absolute.",
      image: IMAGES.industryRestaurants,
      points: ["Uniform sizing & color grading", "Morning deliveries before service", "Specialist micro-herbs & exotic ranges", "Direct access to procurement desk"]
    },
    {
      id: "hotels",
      name: "Hotels & Luxury Lodging",
      tagline: "Reliable high-volume supply chains for 5-star hospitality.",
      description: "From morning breakfast buffets and room service to banqueting halls and fine dining, hotels require a partner capable of absolute scale. Venom Group manages complex delivery schedules across multiple receipt bays seamlessly.",
      image: IMAGES.industryHotels,
      points: ["7-day delivery coverage", "Consolidated monthly invoicing", "High-volume prep-produce capacities", "Dedicated account managers"]
    },
    {
      id: "schools",
      name: "Schools & Universities",
      tagline: "Nourishing the next generation with healthy, traceable produce.",
      description: "We are proud partners to educational caterers across the UK, delivering vitamin-rich, fresh, and budget-friendly produce. All our farm partners are fully vetted, ensuring strict traceability and adherence to school nutritional guidelines.",
      image: IMAGES.industrySchools,
      points: ["School-hours delivery compliance", "BRCGS accredited supply chain", "Excellent value staple items", "Nutritional profiling & traceability"]
    },
    {
      id: "care-homes",
      name: "Care Homes & Healthcare",
      tagline: "Providing reliable, dietary-focused produce with absolute care.",
      description: "Healthcare facilities trust Venom Group for exceptionally fresh produce prepped in ultra-hygienic environments. We offer extensive prepared ranges (peeled, diced) to save valuable kitchen preparation time.",
      image: IMAGES.industryCareHomes,
      points: ["HACCP and BRCGS food safety", "Peeled and diced items to reduce kitchen hazard", "Soft and nutritious food selection", "Consistent, quiet delivery slots"]
    },
    {
      id: "retail",
      name: "Retail & Supermarkets",
      tagline: "Stocking your shelves with fresh produce that sells itself.",
      description: "Independent farm shops, luxury grocers, and national supermarket chains choose Venom Group to secure premium visual appeal and consistent shelf life. Our direct farm links bypass middle agents, extending shelf life.",
      image: IMAGES.industryRetail,
      points: ["Pre-packed and loose retail formats", "Longest possible shelf-life guarantees", "Barcoded pallet and crate labelling", "Scalable peak seasonal volumes"]
    },
    {
      id: "hospitality",
      name: "Hospitality & Event Venues",
      tagline: "Agile, high-capacity catering logistics for venues.",
      description: "Banquets, corporate events, and wedding venues require precise logistics. We deliver high-volume orders exactly when needed, keeping your event running smoothly with pristine, fresh produce.",
      image: IMAGES.industryHospitality,
      points: ["Flexible dispatch windows", "Bulk prepared vegetable crates", "Weekend and evening support", "Consistent quality at absolute scale"]
    },
    {
      id: "manufacturers",
      name: "Food Manufacturers & Processors",
      tagline: "High-volume raw ingredient contracts with strict specification sheets.",
      description: "Providing food factories, ready-meal prep lines, and soup manufacturers with bulk volumes of root, green, and salad items, graded and prepared exactly to custom micron specifications.",
      image: IMAGES.industryManufacturers,
      points: ["Bulk pallet and container shipping", "Microbiological test certificate logs", "Continuous price-lock contracts", "Just-In-Time delivery schedules"]
    },
    {
      id: "wholesalers",
      name: "Wholesalers & Distributors",
      tagline: "Securing supply continuity at terminal market pricing.",
      description: "For secondary regional wholesale distributors and catering merchants, Venom Group provides straight-from-import pallet drops of oranges, bananas, potatoes, and salad crops.",
      image: IMAGES.industryWholesalers,
      points: ["Full-container and mixed-pallet loads", "Custom import clearance support", "Live market trading and desk bookings", "Favourable wholesale credit options"]
    }
  ];

  return (
    <section id="industries" className="py-24 md:py-32 bg-light-grey relative border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
            INDUSTRIES WE SUPPLY
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight">
            Tailored Solutions For Every Sector
          </h2>
          <p className="text-gray-600 font-sans text-base">
            No two food operations are identical. That's why we customize our grading, packing formats, delivery times, and account coordination specifically for your industry.
          </p>
        </div>

        {/* Alternating Sections List */}
        <div className="space-y-16 md:space-y-36">
          {industries.map((ind, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={ind.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Image Column (Alternates side) */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[20px] overflow-hidden aspect-[4/3] md:aspect-[16/11] shadow-lg group border border-black/5"
                  >
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  </motion.div>

                  {/* Aesthetic index number overlay */}
                  <div className={`hidden sm:block absolute -top-6 ${isEven ? "-left-4" : "-right-4"} bg-white text-gray-300 font-display font-black text-6xl px-4 py-1 rounded-[20px] select-none leading-none z-10 border border-black/5 shadow-sm`}>
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-leaf font-mono text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 fill-leaf/10" />
                      Sector Optimized
                    </div>
                    
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-charcoal tracking-tight">
                      {ind.name}
                    </h3>
                    
                    <p className="text-base text-forest italic serif font-normal">
                      "{ind.tagline}"
                    </p>
                  </div>

                  <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed font-light">
                    {ind.description}
                  </p>

                  {/* Points Box wrapped inside a white Bento card */}
                  <div className="bg-white rounded-[20px] p-6 border border-black/5 shadow-sm space-y-4">
                    <h4 className="font-display font-bold text-xs uppercase text-gray-400 tracking-wider">
                      Core Service Requirements Met
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center shrink-0 text-forest mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-sans text-xs font-light text-gray-700 leading-tight">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini-CTA */}
                  <div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-forest hover:text-leaf transition-colors cursor-pointer"
                    >
                      <span>Inquire for {ind.name} Accounts</span>
                      <Check className="w-3 h-3 text-leaf" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
