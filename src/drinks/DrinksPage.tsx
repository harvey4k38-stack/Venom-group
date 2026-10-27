/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { Search, Package, ArrowRight, RefreshCw } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "./products";
import { BRANDS } from "./brands";
import { ProductVisual } from "./ProductVisual";

interface DrinksPageProps {
  onRequestQuote: () => void;
}

export default function DrinksPage({ onRequestQuote }: DrinksPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [containerFilter, setContainerFilter] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesBrand = selectedBrand === "all" || p.brand === selectedBrand;
      const matchesContainer = containerFilter === "all" || p.containerType === containerFilter;
      const matchesSearch =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.packFormat.toLowerCase().includes(q);
      return matchesCategory && matchesBrand && matchesContainer && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, containerFilter, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setContainerFilter("all");
    setSearchQuery("");
  };

  const hasFilters =
    selectedCategory !== "all" || selectedBrand !== "all" || containerFilter !== "all" || searchQuery !== "";

  return (
    <section id="drinks" className="pt-32 pb-24 bg-light-grey min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-gray-200">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
              Wholesale Case &amp; Pallet Lots
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight mt-2">
              Drinks
            </h1>
            <p className="text-sm text-gray-600 mt-3 max-w-2xl leading-relaxed">
              Browse genuine UK-market beverage stock. Choose your products and request commercial pricing for cases,
              layers or full pallets from our wholesale desk.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide py-3 px-6 rounded-full bg-forest text-white hover:bg-forest-hover shadow-md cursor-pointer group shrink-0"
          >
            <span>Request A Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Filters */}
        <div className="mt-8 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand, flavour, pack format or SKU (e.g. 'Coca-Cola', '330ml')..."
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-leaf focus:bg-white transition-all text-gray-800 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="drinks-format" className="text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                Format:
              </label>
              <select
                id="drinks-format"
                value={containerFilter}
                onChange={(e) => setContainerFilter(e.target.value)}
                className="w-full py-2.5 px-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-leaf text-gray-800"
              >
                <option value="all">All Pack Formats</option>
                <option value="Can">Cans (330ml / 500ml)</option>
                <option value="PET Bottle">PET Plastic Bottles</option>
                <option value="Glass Bottle">Glass Bottles (Mixers)</option>
                <option value="Tetra Pak">Tetra Pak Cartons</option>
                <option value="Pouch">Pouches</option>
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2 shrink-0">Category:</span>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 whitespace-nowrap px-3 py-2.5 sm:py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === "all" ? "bg-charcoal text-white" : "bg-gray-100 text-gray-600 hover:text-charcoal"
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 whitespace-nowrap px-3 py-2.5 sm:py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat.id ? "bg-forest text-white" : "bg-gray-100 text-gray-600 hover:text-charcoal"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-nowrap sm:flex-wrap items-center gap-1.5 text-xs overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
            <span className="font-bold uppercase tracking-wider text-gray-500 mr-2 text-[11px] shrink-0">Brand:</span>
            <button
              onClick={() => setSelectedBrand("all")}
              className={`shrink-0 whitespace-nowrap px-3 py-2.5 sm:px-2.5 sm:py-1 rounded-md transition-colors cursor-pointer font-bold ${
                selectedBrand === "all" ? "bg-charcoal text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              All Brands
            </button>
            {BRANDS.filter((b) => PRODUCTS.some((p) => p.brand === b.name)).map((b) => (
              <button
                key={b.name}
                onClick={() => setSelectedBrand(b.name)}
                className={`shrink-0 whitespace-nowrap px-3 py-2.5 sm:px-2.5 sm:py-1 rounded-md transition-colors cursor-pointer ${
                  selectedBrand === b.name ? "bg-forest text-white font-bold" : "text-gray-600 hover:bg-gray-100 font-medium"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            Showing <strong className="text-charcoal font-mono">{filteredProducts.length}</strong> wholesale products
          </p>
          {hasFilters && (
            <button
              onClick={resetFilters}
              className="text-forest font-bold flex items-center gap-1 hover:underline cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="mt-8 bg-white rounded-2xl p-12 text-center border border-gray-200 max-w-lg mx-auto space-y-4">
            <Package className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-display font-bold text-lg text-charcoal">No matching products found</h3>
            <p className="text-xs text-gray-500">Try adjusting your search or clearing the active filters.</p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-forest text-white text-xs font-bold uppercase rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 sm:h-52 w-full mb-4 flex items-center justify-center">
                    <ProductVisual product={product} large />
                    {product.dietary && (
                      <div className="absolute top-0 left-0 bg-forest text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        {product.dietary}
                      </div>
                    )}
                    {product.isNew && (
                      <div className="absolute top-0 right-0 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        New
                      </div>
                    )}
                  </div>

                  <p className="font-display font-bold text-[11px] text-leaf uppercase tracking-wider">{product.brand}</p>
                  <h3 className="font-display font-bold text-base text-charcoal leading-snug mt-0.5">{product.name}</h3>

                  <dl className="mt-3 space-y-1 text-[13px] text-gray-600">
                    <div className="flex justify-between gap-3">
                      <dt>SKU</dt>
                      <dd className="font-mono text-charcoal">{product.sku}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Pack</dt>
                      <dd className="text-charcoal text-right">{product.packFormat}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Layer Qty</dt>
                      <dd className="text-charcoal">{product.casesPerLayer} cases</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Pallet Qty</dt>
                      <dd className="text-charcoal">{product.casesPerPallet} cases</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-forest rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display font-bold text-xl">Looking for a Drink Brand Not Listed Here?</h3>
            <p className="text-xs sm:text-sm text-white/70">
              Our procurement desk sources manufacturer-direct consignments across the UK and Europe. Contact us with
              your required SKU and pallet volumes.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 bg-white text-forest hover:bg-light-grey font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            Request A Quote
          </button>
        </div>
      </div>
    </section>
  );
}
