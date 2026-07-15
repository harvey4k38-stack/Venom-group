/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

interface CtaSectionProps {
  onRequestQuote: () => void;
}

export default function CtaSection({ onRequestQuote }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-light-grey overflow-hidden border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="premium-card relative bg-gradient-to-br from-forest to-[#0d3d11] rounded-[20px] p-8 md:p-20 shadow-md border border-black/5 overflow-hidden text-center"
        >
          {/* Decorative mesh glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/20 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-hover/30 rounded-full filter blur-[100px] pointer-events-none" />

          {/* Core Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-mono text-[10px] font-bold uppercase tracking-widest border border-white/5">
              <Sparkles className="w-3.5 h-3.5 text-leaf" />
              Succeed With Venom Group
            </div>
            
            <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Ready To Partner With Venom Group?
            </h2>
            
            <p className="text-gray-200 font-sans text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Open a commercial wholesale account today and experience why UK restaurants, hotels, and schools trust us for daily freshness and supply reliability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Request quote */}
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 font-display text-base font-bold bg-white text-forest py-4 px-8 rounded-full hover:bg-light-grey shadow-lg shadow-black/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Request A Quote</span>
                <ArrowRight className="w-5 h-5 text-leaf transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

            <p className="text-gray-300 font-mono text-[10px] tracking-widest uppercase pt-2">
              Next-day delivery orders cutoff is 11:00 PM nightly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
