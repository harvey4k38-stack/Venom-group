/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Truck, ShieldCheck, CalendarRange, Navigation, ClipboardCheck, Sparkles } from "lucide-react";
import { STATS } from "../data";

// Animated counter sub-component
function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (active) setCount(Math.floor(value));
      }
    });
    return () => {
      active = false;
      controls.stop();
    };
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function DeliverySection() {
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);

  const hubs = [
    { name: "London", cx: "58%", cy: "76%", active: true, info: "Head Office & Main Distribution Hub. Serving London & Home Counties." },
    { name: "Birmingham", cx: "49%", cy: "67%", active: true, info: "Midlands Depot. Linking South and North routes daily." },
    { name: "Manchester", cx: "46%", cy: "58%", active: true, info: "North West Hub. Providing overnight dispatch to Wales and Peak District." },
    { name: "Leeds", cx: "52%", cy: "55%", active: true, info: "North East Depot. Delivering fresh crops from Yorkshire farms." },
    { name: "Bristol", cx: "41%", cy: "74%", active: true, info: "South West Hub. Direct connections to Devon & Cornwall." },
    { name: "Edinburgh", cx: "39%", cy: "36%", active: true, info: "Scotland Distribution. Serving Scottish cities daily." },
  ];

  const deliverySpecs = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Refrigerated Fleet",
      desc: "Our vehicles are fully temperature-monitored, logging real-time thermal records from loading dock to delivery bay."
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Next-Day Delivery",
      desc: "Place your orders up to 11:00 PM for premium next-morning arrival, keeping your inventory tight and fresh."
    },
    {
      icon: <CalendarRange className="w-6 h-6" />,
      title: "Flexible Schedules",
      desc: "We coordinate with hotel and dining operators, establishing quiet pre-dawn delivery windows that bypass peak traffic."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Reliable Logistics",
      desc: "Highly optimized routing algorithms ensure our dispatch coordinators maintain a flawless on-time SLA."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Freshness Guaranteed",
      desc: "We monitor moisture and airflow levels meticulously, delivering produce that lasts days longer on the shelves."
    }
  ];

  return (
    <section id="delivery" className="py-24 md:py-32 bg-light-grey relative overflow-hidden">
      
      {/* Dynamic backdrop accent */}
      <div className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] rounded-full bg-forest/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Split grid for Map and specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Delivery details & specs */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
                LOGISTICS & SUPPLY CHAIN
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight">
                Nationwide Cold-Chain Delivery Network
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                Venom Group operates a highly synchronized distribution framework across mainland UK. With six strategic transport hubs, we collect daily crops from national farmers and transfer them overnight inside strictly temperature-regulated reefers (consistently logged at 2°C to 4°C).
              </p>
            </div>

            {/* Logistics Specs Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {deliverySpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card p-5 rounded-[20px] bg-white border border-black/5 shadow-sm flex gap-4 hover:-translate-y-1 hover:shadow-md hover:border-leaf/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center shrink-0">
                    {spec.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-charcoal leading-snug">
                      {spec.title}
                    </h4>
                    <p className="text-gray-500 font-sans text-xs leading-relaxed font-light">
                      {spec.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Styled UK Map */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="premium-card relative w-full max-w-[420px] aspect-[4/5] bg-white border border-black/5 rounded-[20px] p-8 shadow-sm flex flex-col justify-between overflow-hidden">
              
              {/* Glossy top overlay */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />

              {/* Header on map box */}
              <div className="relative z-10 space-y-1">
                <span className="font-mono text-[9px] font-bold text-leaf uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-leaf animate-ping" />
                  Live Logistics Grid
                </span>
                <h3 className="font-display font-bold text-base text-charcoal">UK Distribution Hubs</h3>
              </div>

              {/* Vector SVG Map of Great Britain */}
              <div className="w-full h-[320px] relative my-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 120"
                  className="w-full h-full max-h-[300px] text-gray-200"
                  style={{ transform: "scale(1.1)" }}
                >
                  {/* Highly abstract stylized Great Britain outline */}
                  <path
                    d="M 40 10 
                       C 42 12, 38 18, 35 22 
                       C 32 26, 30 32, 33 36 
                       C 36 40, 45 42, 48 45
                       C 51 48, 55 52, 54 58
                       C 53 64, 46 68, 44 72
                       C 42 76, 40 82, 43 85
                       C 46 88, 55 86, 60 84
                       C 65 82, 63 76, 65 72
                       C 67 68, 62 64, 61 58
                       C 60 52, 65 48, 64 42
                       C 63 36, 52 32, 50 28
                       C 48 24, 44 14, 40 10 Z"
                    fill="#F0F4F1"
                    stroke="#E0E8E1"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Glowing routes animation lines */}
                  {hoveredHub && (
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      d={`M 58 76 L ${hubs.find(h => h.name === hoveredHub)?.cx} ${hubs.find(h => h.name === hoveredHub)?.cy}`}
                      stroke="#43A047"
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                      fill="none"
                    />
                  )}

                  {/* Pulsing rings and nodes */}
                  {hubs.map((hub) => (
                    <g
                      key={hub.name}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredHub(hub.name)}
                      onMouseLeave={() => setHoveredHub(null)}
                    >
                      {/* Pulse Circle */}
                      <circle cx={hub.cx} cy={hub.cy} r="3" fill="#43A047" className="animate-ping" style={{ transformOrigin: `${hub.cx} ${hub.cy}` }} />
                      
                      {/* Core Dot */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={hoveredHub === hub.name ? "2.5" : "1.8"}
                        fill={hoveredHub === hub.name ? "#1B5E20" : "#43A047"}
                        stroke="#FFFFFF"
                        strokeWidth="0.8"
                        transition="all 0.2s"
                      />

                      {/* Text Label */}
                      <text
                        x={parseFloat(hub.cx) + 3 + "%"}
                        y={parseFloat(hub.cy) + 1 + "%"}
                        fill="#222222"
                        fontSize="3.8"
                        fontFamily="var(--font-display)"
                        fontWeight={hoveredHub === hub.name ? "bold" : "normal"}
                      >
                        {hub.name}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Info tool-tip absolute inside map container */}
                <div className="absolute bottom-2 left-2 right-2 bg-charcoal/95 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10 text-white flex items-center gap-3 z-10 transition-all duration-300 min-h-[60px]">
                  <Navigation className="w-5 h-5 text-leaf shrink-0 animate-pulse" />
                  <div className="space-y-0.5">
                    <p className="font-display font-extrabold text-[11px] uppercase tracking-wider text-leaf">
                      {hoveredHub ? `${hoveredHub} Depot` : "Mainland Coverage"}
                    </p>
                    <p className="text-gray-300 font-sans text-[10px] leading-snug">
                      {hoveredHub
                        ? hubs.find((h) => h.name === hoveredHub)?.info
                        : "Hover over city markers on the map to inspect regional transport depots."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="border-t border-gray-100 pt-3 relative z-10">
                <p className="text-center font-mono text-[9px] text-gray-400">
                  REFRIGERATED OVERNIGHT SERVICE NATIONWIDE
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Panels (Animated Counters) */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-t border-gray-200/80 pt-16">
          {STATS.map((st) => (
            <motion.div
              key={st.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="premium-card text-center space-y-2 bg-white p-6 rounded-[20px] border border-black/5 shadow-sm"
            >
              <h3 className="font-display font-black text-4xl md:text-5xl text-forest tracking-tight">
                <Counter value={st.value} suffix={st.suffix} />
              </h3>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-wider font-semibold">
                {st.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
