/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, MapPin, Package } from "lucide-react";
import { PRODUCT_CATEGORIES } from "../data";
import { ProductCategory } from "../types";

interface ProductsSectionProps {
  onRequestQuote: () => void;
}

export default function ProductsSection({ onRequestQuote }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  return (
    <section id="products" className="py-24 md:py-32 bg-light-grey relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
            OUR FRESH SELECTION
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight">
            Premium Wholesale Categories
          </h2>
          <p className="text-gray-600 font-sans text-base">
            We operate strict quality-assurance testing on all items. Click any category below to view our comprehensive commercial list, pack sizes, and origins.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className="premium-card group relative h-[380px] rounded-[20px] overflow-hidden border border-black/5 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-8 space-y-3 z-10">
                <div className="inline-flex items-center gap-1.5 bg-leaf/90 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 fill-white/10" />
                  Premium Grade
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-leaf transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-300 font-sans text-xs leading-relaxed line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 font-display text-xs font-bold text-leaf group-hover:text-white pt-2 transition-colors duration-300">
                  <span>Explore Produce List</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-leaf/50 rounded-[20px] transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Detailed Slide-over Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col z-10"
            >
              {/* Header Image Cover */}
              <div className="relative h-60 shrink-0">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-8 right-8 text-white space-y-2">
                  <span className="font-mono text-[10px] tracking-widest text-leaf uppercase font-bold">
                    PREMIUM WHOLESALE PRODUCE
                  </span>
                  <h3 className="font-display font-extrabold text-3xl">
                    {selectedCategory.name}
                  </h3>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-gray-800 text-sm">Typical Weekly Deliveries</h4>
                  <p className="text-gray-500 font-sans text-xs leading-relaxed">
                    Browse our available produce below. To get a custom quote, contact us directly at info@venomgroup.co.uk.
                  </p>
                </div>

                <div className="space-y-4">
                  {selectedCategory.popularItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-300"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h5 className="font-display font-extrabold text-base text-charcoal leading-none">
                            {item.name}
                          </h5>
                          {item.isSeasonal && (
                            <span className="bg-orange-50 text-orange-600 font-mono text-[8px] font-bold uppercase px-2 py-0.5 rounded">
                              Seasonal
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 font-sans text-xs leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-400 font-mono text-[10px]">
                          <span className="flex items-center gap-1">
                            <Package className="w-3.5 h-3.5 text-leaf" />
                            <strong className="text-gray-600">PACK SIZE:</strong> {item.typicalPackSize}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-leaf" />
                            <strong className="text-gray-600">ORIGIN:</strong> {item.origin}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="shrink-0 p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="font-display text-sm font-semibold text-gray-500 hover:text-charcoal py-3 px-5 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    onRequestQuote();
                  }}
                  className="flex items-center justify-center gap-2 font-display text-sm font-bold bg-forest text-white py-3 px-6 rounded-xl hover:bg-forest-hover shadow-md cursor-pointer"
                >
                  <span>Request A Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
