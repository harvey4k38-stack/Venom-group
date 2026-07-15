/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TRUSTED_INDUSTRIES } from "../data";
import { Building2, UtensilsCrossed, GraduationCap, HeartPulse, Store, Wine, Warehouse, Milestone } from "lucide-react";

export default function TrustedBy() {
  // Map icons to the industries for a beautiful visual touch
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Restaurants":
        return <UtensilsCrossed className="w-5 h-5" />;
      case "Hotels":
        return <Building2 className="w-5 h-5" />;
      case "Schools":
        return <GraduationCap className="w-5 h-5" />;
      case "Care Homes":
        return <HeartPulse className="w-5 h-5" />;
      case "Caterers":
        return <Milestone className="w-5 h-5" />;
      case "Retailers":
        return <Store className="w-5 h-5" />;
      case "Wholesalers":
        return <Warehouse className="w-5 h-5" />;
      case "Event Venues":
        return <Wine className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  // Double the array for infinite-scrolling illusion
  const scrollItems = [...TRUSTED_INDUSTRIES, ...TRUSTED_INDUSTRIES, ...TRUSTED_INDUSTRIES];

  return (
    <div className="bg-light-grey py-10 border-y border-gray-200/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="font-display font-semibold text-xs tracking-widest text-gray-500 uppercase">
          TRUSTED WHOLESALE SUPPLIER FOR
        </h3>
        <p className="text-gray-400 font-sans text-xs">
          Powering UK food service & wholesale chains daily
        </p>
      </div>

      {/* Infinite scrolling animation track */}
      <div className="relative flex w-full overflow-hidden">
        {/* Left & Right fade shields for seamless visual look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-light-grey to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-light-grey to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{
            x: [0, -1920 / 2] // Loop exactly half of the duplicated list
          }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity
          }}
          className="flex gap-6 shrink-0 whitespace-nowrap py-2"
        >
          {scrollItems.map((industry, index) => (
            <div
              key={`${industry}-${index}`}
              className="flex items-center gap-3 bg-white border border-gray-200/60 rounded-2xl py-3 px-6 shadow-sm hover:shadow-md hover:border-leaf/40 hover:text-forest transition-all duration-300 group cursor-default"
            >
              <div className="text-leaf group-hover:text-forest transition-colors duration-300">
                {getIndustryIcon(industry)}
              </div>
              <span className="font-display font-bold text-sm text-charcoal group-hover:text-forest transition-colors duration-300">
                {industry}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
