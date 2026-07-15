/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Leaf, ShieldCheck, ChevronDown } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onRequestQuote: () => void;
  onViewProducts: () => void;
}

export default function Hero({ onRequestQuote, onViewProducts }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Absolute background image with dark cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Fresh organic wholesale fruits and vegetables inside warehouse"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered high-end overlay for readability and premium mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
        {/* Subtle radial green ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-forest/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Floating Produce Graphics - Interactive Micro-physics feel */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-[12%] top-[20%] w-24 h-24 hidden lg:block z-10 pointer-events-none"
      >
        <img
          src={IMAGES.floatingStrawberry}
          alt="Fresh strawberry droplet"
          className="w-full h-full object-contain rounded-2xl shadow-2xl shadow-black/40 rotate-[15deg] border border-white/10"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-[8%] bottom-[25%] w-28 h-28 hidden lg:block z-10 pointer-events-none"
      >
        <img
          src={IMAGES.floatingLemon}
          alt="Fresh organic lemon splash"
          className="w-full h-full object-contain rounded-2xl shadow-2xl shadow-black/40 rotate-[-12deg] border border-white/10"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 text-left space-y-8">
            {/* Top Micro-badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 py-1.5 px-4 rounded-full"
            >
              <Leaf className="w-4 h-4 text-leaf fill-leaf/20" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                UK Nationwide B2B Wholesale Supplier
              </span>
            </motion.div>

            {/* Main Typographic Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95]"
              >
                Fresh Produce.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf via-[#81C784] to-white">
                  Delivered With Quality.
                </span>
              </motion.h1>
            </div>

            {/* Premium Supporting Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 font-sans text-lg md:text-xl leading-relaxed max-w-2xl font-light"
            >
              Venom Group supplies premium wholesale fruit and vegetables to restaurants, hotels, schools, retailers and food service businesses across the UK.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-gray-400 font-mono text-xs pt-2"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-leaf" />
                <span>BRCGS ACCREDITED</span>
              </div>
              <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-leaf" />
                <span>FULLY COLD-CHAIN MONITORED</span>
              </div>
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={onRequestQuote}
                className="flex items-center justify-center gap-2 font-display text-base font-bold bg-forest text-white py-4 px-8 rounded-full shadow-lg shadow-forest/20 hover:bg-forest-hover hover:shadow-forest/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Request A Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onViewProducts}
                className="flex items-center justify-center gap-2 font-display text-base font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20 py-4 px-8 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                <span>View Products</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side Info Slate (Aesthetic B2B Credibility Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:flex flex-col gap-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Glossy shine */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            
            <h3 className="font-display font-bold text-xl text-white">Daily Dispatch Active</h3>
            <p className="text-gray-400 text-sm font-sans">
              Our refrigerated logistics fleet distributes 100% chilled British and continental produce to major UK cities overnight.
            </p>
            
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs font-mono">NEXT-DAY CUTOFF</span>
                <span className="text-leaf text-xs font-bold font-mono">11:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs font-mono">MINIMUM ORDER</span>
                <span className="text-white text-xs font-bold font-mono">£150 Weekly</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs font-mono">COVERAGE AREA</span>
                <span className="text-white text-xs font-bold font-mono">Nationwide UK</span>
              </div>
            </div>

            <div className="bg-forest/20 border border-forest/30 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-leaf mt-1.5 animate-pulse" />
              <div>
                <h4 className="text-white text-xs font-bold font-display">Active Deliveries Today</h4>
                <p className="text-gray-400 text-[11px] font-sans mt-0.5">Fleet dispatched under 2°C temperature logging.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/50">Discover More</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-leaf cursor-pointer" onClick={onViewProducts} />
        </motion.div>
      </div>
    </section>
  );
}
