/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Sparkles, Building, CalendarClock } from "lucide-react";
import { IMAGES } from "../data";

interface AboutSectionProps {
  onLearnMore: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  const points = [
    { title: "Premium Quality Produce", desc: "Rigorous intake controls checking sizing, visual perfection, temperature, and moisture levels." },
    { title: "Daily Deliveries", desc: "Our temperature-regulated fleet operates 365 days a year, delivering across the nation before dawn." },
    { title: "Reliable Supply Chains", desc: "Direct farmer relationships and global trade linkages eliminate shortages and bridge peak seasonal demands." },
    { title: "Competitive Wholesale Pricing", desc: "Transparent high-volume pricing grids customized for schools, dining groups, and distributors." },
    { title: "Dedicated Account Managers", desc: "Direct, personal phone line to coordinators who understand your business menus and ordering cadences." },
    { title: "Fresh Sourced From Sourced Growers", desc: "We support ethical farm growers and BRCGS certified processing centers to guarantee traceability." }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-light-grey overflow-hidden border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Large premium imagery with decorative overlay */}
          <div className="lg:col-span-6 relative flex flex-col justify-center mb-8 sm:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[20px] overflow-hidden aspect-[4/3] md:aspect-[16/11] shadow-xl border border-black/5"
            >
              <img
                src={IMAGES.aboutWarehouse}
                alt="Modern refrigeration produce wholesale warehouse"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Absolute Floating Card: Delivery Stat */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:flex absolute -bottom-6 right-4 bg-white/95 backdrop-blur-md p-5 rounded-[20px] shadow-lg border border-black/5 items-center gap-4 max-w-[260px]"
            >
              <div className="p-3 bg-forest/10 rounded-xl text-forest">
                <CalendarClock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-charcoal text-base">Next-Day Delivery</h4>
                <p className="text-gray-500 font-sans text-xs mt-0.5">Reliable logistics overnight across mainland UK.</p>
              </div>
            </motion.div>

            {/* Absolute Floating Badge: BRCGS accredited */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:flex absolute -top-4 left-4 bg-forest text-white py-2 px-4 rounded-xl shadow-lg items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-leaf fill-leaf/10" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">BRCGS Double-A Rated</span>
            </motion.div>
          </div>

          {/* Right Side: Copy and Structured Value List wrapped in a beautiful white Bento block */}
          <div className="lg:col-span-6 premium-card p-8 md:p-12 bg-white flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
                  WHO WE ARE
                </span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal tracking-tight">
                  Your Trusted Wholesale Produce Partner
                </h2>
                <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed font-light">
                  Since inception, Venom Group has bridged the gap between finest growers and premium culinary operators. We operate a highly synchronized supply chain, cooling produce down to target ranges within minutes of harvest, and ensuring it arrives at your kitchen bay hours later.
                </p>
              </div>

              {/* Bullet Point List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-leaf shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-sm text-charcoal leading-tight">
                        {point.title}
                      </h4>
                      <p className="text-gray-500 font-sans text-xs leading-relaxed font-light">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-6 border-t border-gray-100 mt-6">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-forest hover:text-forest-hover transition-colors group cursor-pointer"
              >
                <span>Discover our Delivery Coverage</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
