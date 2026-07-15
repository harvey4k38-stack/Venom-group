/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Globe, Leaf, Thermometer, ShieldCheck } from "lucide-react";

const origins = [
  {
    id: "01",
    country: "Costa Rica",
    flag: "🇨🇷",
    region: "Central America",
    produce: ["Pineapple", "Banana", "Tropical"],
    description: "Sun-drenched volcanic soils produce world-class pineapples with unmatched sweetness and consistent sizing year-round.",
    image: "https://images.unsplash.com/photo-1596273312116-9e98a28c9f8b?q=80&w=1200&auto=format&fit=crop",
    accent: "from-emerald-900/90"
  },
  {
    id: "02",
    country: "Ecuador",
    flag: "🇪🇨",
    region: "South America",
    produce: ["Banana", "Mango", "Dragon Fruit"],
    description: "The equatorial climate creates ideal conditions for premium Cavendish bananas with exceptional ripeness control.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop",
    accent: "from-yellow-900/90"
  },
  {
    id: "03",
    country: "South Africa",
    flag: "🇿🇦",
    region: "Southern Africa",
    produce: ["Citrus", "Stone Fruit", "Grapes"],
    description: "The Cape's Mediterranean climate nurtures premium citrus and stone fruit with extraordinary colour, juice yield, and shelf life.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop",
    accent: "from-orange-900/90"
  },
  {
    id: "04",
    country: "Ghana",
    flag: "🇬🇭",
    region: "West Africa",
    produce: ["Pineapple", "Papaya", "Tropical"],
    description: "Ghana's fertile equatorial belt delivers ultra-sweet MD2 pineapples and vibrant papayas direct from ethical farm cooperatives.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop",
    accent: "from-amber-900/90"
  },
  {
    id: "05",
    country: "Brazil",
    flag: "🇧🇷",
    region: "South America",
    produce: ["Melon", "Mango", "Lime"],
    description: "Brazil's vast agricultural heartland produces the finest honeydew and cantaloupe melons alongside aromatic Kent mangoes.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1200&auto=format&fit=crop",
    accent: "from-lime-900/90"
  },
  {
    id: "06",
    country: "Spain",
    flag: "🇪🇸",
    region: "Southern Europe",
    produce: ["Citrus", "Berries", "Vegetables"],
    description: "Andalucía and Valencia deliver the finest Primofiore lemons, navel oranges, and premium berry varieties with class-leading appearance.",
    image: "https://images.unsplash.com/photo-1598887142487-3c854d51eabb?q=80&w=1200&auto=format&fit=crop",
    accent: "from-red-900/90"
  },
  {
    id: "07",
    country: "Holland",
    flag: "🇳🇱",
    region: "Northern Europe",
    produce: ["Peppers", "Tomatoes", "Salad"],
    description: "Dutch precision greenhouse technology produces year-round bell peppers, vine tomatoes, and salad crops to exacting commercial specifications.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    accent: "from-orange-900/90"
  },
  {
    id: "08",
    country: "Morocco",
    flag: "🇲🇦",
    region: "North Africa",
    produce: ["Citrus", "Tomatoes", "Berries"],
    description: "Atlas Mountain foothills and coastal plains yield exceptional clementines, early-season tomatoes, and premium strawberries.",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1200&auto=format&fit=crop",
    accent: "from-red-900/90"
  }
];

const stats = [
  { value: "8", label: "Source Countries", icon: <Globe className="w-5 h-5" /> },
  { value: "365", label: "Days Active", icon: <Leaf className="w-5 h-5" /> },
  { value: "2–4°C", label: "Cold Chain Temp", icon: <Thermometer className="w-5 h-5" /> },
  { value: "BRCGS", label: "All Partners Certified", icon: <ShieldCheck className="w-5 h-5" /> }
];

export default function OriginsSection() {
  return (
    <section id="origins" className="bg-charcoal overflow-hidden">

      {/* Hero Header */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-forest/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-leaf/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 py-1.5 px-5 rounded-full"
            >
              <Globe className="w-4 h-4 text-leaf" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                Global Sourcing Network
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight"
            >
              Sourced From The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf via-[#81C784] to-white">
                World's Finest
              </span>{" "}
              Growing Regions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
            >
              Every item in our range is traceable to a specific farm partner across 8 carefully selected countries — chosen for climate, soil quality, and BRCGS compliance.
            </motion.p>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center space-y-2 backdrop-blur-sm"
              >
                <div className="text-leaf flex justify-center">{stat.icon}</div>
                <div className="font-display font-black text-2xl text-white">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Country Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {origins.map((origin, index) => (
            <motion.div
              key={origin.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="group relative h-[420px] rounded-[20px] overflow-hidden cursor-default"
            >
              {/* Background Image */}
              <img
                src={origin.image}
                alt={origin.country}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
              <div className={`absolute inset-0 bg-gradient-to-t ${origin.accent} to-transparent opacity-30`} />

              {/* Number - top left */}
              <div className="absolute top-5 left-5 font-display font-black text-white/20 text-5xl leading-none select-none">
                {origin.id}
              </div>

              {/* Flag pill - top right */}
              <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-sm">
                {origin.flag}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                {/* Region label */}
                <span className="font-mono text-[9px] uppercase tracking-widest text-leaf font-bold">
                  {origin.region}
                </span>

                {/* Country name */}
                <h3 className="font-display font-extrabold text-2xl text-white leading-tight">
                  {origin.country}
                </h3>

                {/* Description - visible on hover */}
                <p className="text-gray-300 font-sans text-xs leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 line-clamp-3">
                  {origin.description}
                </p>

                {/* Produce badges */}
                <div className="flex flex-wrap gap-2">
                  {origin.produce.map((item) => (
                    <span
                      key={item}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-leaf/40 rounded-[20px] transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest/30 flex items-center justify-center text-leaf shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm">Every Origin Partner is BRCGS Certified</h4>
              <p className="text-gray-500 font-sans text-xs mt-0.5">All sourcing farms undergo strict annual audits covering food safety, traceability, and ethical labour standards.</p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-display text-sm font-bold bg-forest text-white py-3 px-6 rounded-xl hover:bg-forest-hover transition-colors shadow-lg shadow-forest/20 cursor-pointer"
            >
              Enquire About Sourcing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
