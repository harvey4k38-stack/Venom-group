/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    // Auto-advance testimonials every 8 seconds
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <section className="py-24 md:py-32 bg-light-grey relative overflow-hidden border-t border-gray-200/50">
      
      {/* Decorative backdrop elements */}
      <div className="absolute top-10 left-10 w-32 h-32 text-gray-200 pointer-events-none hidden md:block">
        <Quote className="w-full h-full rotate-180 opacity-40" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
            CLIENT SATISFACTION
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight">
            Endorsed By Head Chefs & Caterers
          </h2>
        </div>

        {/* Testimonial Core Box wrapped as a premium bento card */}
        <div className="premium-card relative bg-white rounded-[20px] p-8 md:p-16 border border-black/5 shadow-sm min-h-[380px] flex flex-col justify-between">
          
          {/* Animated slider layout */}
          <div className="relative overflow-hidden flex-1 flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6 w-full"
              >
                {/* 5-star indicator */}
                <div className="flex items-center gap-1 text-orange-500">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#F9A825]" />
                  ))}
                  <span className="ml-2 font-mono text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-leaf" />
                    Verified Partnership Review
                  </span>
                </div>

                {/* Big Quote */}
                <blockquote className="font-display font-medium text-lg md:text-2xl text-charcoal leading-relaxed tracking-tight">
                  "{active.quote}"
                </blockquote>

                {/* Chef Bio Details */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-white shadow-md shadow-gray-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm md:text-base text-charcoal leading-none">
                      {active.name}
                    </h4>
                    <p className="text-gray-500 font-sans text-xs mt-1">
                      {active.role} &mdash; <strong className="text-forest">{active.company}</strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Buttons inside layout */}
          <div className="flex items-center justify-between mt-8 border-t border-gray-200/50 pt-6">
            
            {/* Dots navigator */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > index ? 1 : -1);
                    setIndex(dotIdx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === index ? "w-8 bg-forest" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white border border-gray-100 hover:bg-light-grey text-charcoal hover:text-forest transition-colors shadow-sm cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white border border-gray-100 hover:bg-light-grey text-charcoal hover:text-forest transition-colors shadow-sm cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
