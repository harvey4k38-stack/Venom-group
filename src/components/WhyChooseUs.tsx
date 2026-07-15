/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sprout, Truck, BadgePercent, ShieldAlert, Globe, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Farm Fresh Produce",
      desc: "Sourced directly from BRCGS-vetted British and European growers. Sliced and shipped within hours of harvest to ensure peak freshness."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Reliable Daily Deliveries",
      desc: "Our refrigerated fleet runs 365 days a year. We guarantee delivery into your kitchens before morning food-prep cycles begin."
    },
    {
      icon: <BadgePercent className="w-8 h-8" />,
      title: "Competitive Wholesale Prices",
      desc: "Our direct farm linkages bypass intermediate brokers, returning major volume discounts and locked contract prices."
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Quality Assured",
      desc: "Triple-inspected produce. Each lot is tracked from root to delivery with strict temperature telemetry and safety compliance."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Nationwide Distribution",
      desc: "Operating highly efficient logistics hubs linking key regional hubs to deliver fresh vegetables to any mainland UK location."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Dedicated Customer Support",
      desc: "No call centers. Speak directly to our experienced coordinators who can accommodate late-night modifications up to 11:00 PM."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-light-grey relative overflow-hidden border-t border-gray-200/50">
      {/* Dynamic green background decoration line */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-96 bg-forest/5 rounded-l-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-48 h-96 bg-leaf/5 rounded-r-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
            THE VENOM DIFFERENCE
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight">
            Why Culinary Leaders Partner With Us
          </h2>
          <p className="text-gray-600 font-sans text-base">
            We are more than a delivery service. We are a direct extension of your food-prep team, optimizing your supply chain with cold-chain mastery.
          </p>
        </div>

        {/* Grid of values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="premium-card group p-8 bg-white hover:-translate-y-1.5 hover:shadow-lg hover:border-leaf/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon Container with glowing background */}
                <div className="w-16 h-16 rounded-2xl bg-forest/5 text-forest flex items-center justify-center transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-md shadow-transparent group-hover:shadow-forest/15">
                  {val.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg md:text-xl text-charcoal group-hover:text-forest transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </div>

              {/* Bottom accent line decorative element */}
              <div className="w-12 h-1 bg-gray-200 group-hover:bg-leaf group-hover:w-20 transition-all duration-300 rounded-full mt-6" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
