/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, Send, Check, ShieldAlert, X } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 2000);
  };

  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "Home", href: "#home" },
    { label: "Products Catalog", href: "#products" },
    { label: "Industries Served", href: "#industries" },
    { label: "About Our Values", href: "#about" },
    { label: "Delivery Network", href: "#delivery" },
    { label: "Get a Quote", href: "#contact" }
  ];

  const productLinks = [
    { label: "Fresh Fruit", href: "#products" },
    { label: "Fresh Vegetables", href: "#products" },
    { label: "Salads & Leaves", href: "#products" },
    { label: "Fresh Herbs", href: "#products" },
    { label: "Exotic Produce", href: "#products" },
    { label: "Prepared Produce", href: "#products" }
  ];

  const industryLinks = [
    { label: "Restaurants & Dining", href: "#industries" },
    { label: "Hotels & Lodgings", href: "#industries" },
    { label: "Schools & Academies", href: "#industries" },
    { label: "Care Homes & Care", href: "#industries" },
    { label: "Retailers & Shops", href: "#industries" },
    { label: "Hospitality & Arenas", href: "#industries" }
  ];

  return (
    <footer className="bg-charcoal text-gray-400 font-sans pt-20 pb-10 border-t border-white/10 relative" style={{ paddingBottom: `max(2.5rem, calc(2.5rem + env(safe-area-inset-bottom)))` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Four-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand details & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-forest rounded-lg">
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-white fill-none stroke-white" strokeWidth="10" strokeLinecap="round">
                  <path d="M20,25 C25,25 35,65 45,75 C52,82 60,82 68,72 C76,62 80,35 80,35" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-white tracking-tight text-lg">
                VENOM<span className="text-leaf">GROUP</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Premium B2B wholesale fruit and vegetable partner. Supplying Michelin-starred dining, regional hospitality hubs, and academies across mainland UK with certified cold-chain logistics daily.
            </p>

            {/* Newsletter form */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                Subscribe to Crop Trading Reports
              </h4>
              <p className="text-xs text-gray-500">
                Weekly seasonal availability alerts, wholesale market indexes and pricing lists.
              </p>
              
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form
                    key="sub-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="relative flex items-center"
                  >
                    <input
                      type="email"
                      required
                      placeholder="procurement@yourcompany.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-forest transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 p-2 rounded-lg bg-forest text-white hover:bg-forest-hover transition-colors cursor-pointer"
                      aria-label="Submit Newsletter email"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="sub-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-forest/20 border border-forest/30 rounded-xl flex items-center gap-2.5 text-white font-mono text-xs"
                  >
                    <Check className="w-4 h-4 text-leaf animate-pulse" />
                    <span>Subscribed! Check your inbox soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Column 2: Products Links (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-leaf transition-colors leading-relaxed font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries Links (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Industries
            </h4>
            <ul className="space-y-3 text-sm">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-leaf transition-colors leading-relaxed font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Compliance Links (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Corporate Contacts
            </h4>
            <div className="space-y-3 text-sm leading-relaxed font-light text-gray-400">
              <p>
                <strong>Trading Desk:</strong> +44 (0) 208 000 1234
              </p>
              <p>
                <strong>Main Email:</strong> info@venomgroup.co.uk
              </p>
              <p>
                <strong>London Depot:</strong> Terminal 4, New Covent Garden Market, London, CR4 4HR
              </p>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-forest transition-all" aria-label="Venom Group Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-forest transition-all" aria-label="Venom Group Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-forest transition-all" aria-label="Venom Group Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-forest transition-all" aria-label="Venom Group LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal actions bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-4 text-xs font-light">
          <p>
            Copyright &copy; {currentYear} Venom Group. All rights reserved. Sourced & packaged in London, United Kingdom.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Terms & Conditions
            </button>
            <span className="text-gray-600 font-mono">EST: 2006</span>
          </div>
        </div>

      </div>

      {/* Interactive Overlays for Privacy Policy and Terms and Conditions */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white text-charcoal max-w-lg w-full rounded-3xl p-8 shadow-2xl z-10 max-h-[80vh] overflow-y-auto space-y-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h3 className="font-display font-extrabold text-xl">
                  {activeModal === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-1.5 rounded-full hover:bg-light-grey text-gray-400 hover:text-charcoal cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text content details */}
              <div className="space-y-4 font-sans text-xs text-gray-600 leading-relaxed">
                {activeModal === "privacy" ? (
                  <>
                    <p><strong>Effective Date: July 15, 2026</strong></p>
                    <p>At Venom Group, we take B2B information security seriously. This privacy policy explains how we collect and process organizational and personal contact information supplied on our portal.</p>
                    <p><strong>1. Data Collection:</strong> We only log details provided voluntarily in our Enquiry Form, including names, company designations, telephone lines, and delivery cities, to construct contract pricing specs.</p>
                    <p><strong>2. Third Parties:</strong> Your commercial specifications are strictly private. We never share, trade, or distribute client data with third-party networks without express written approval.</p>
                    <p><strong>3. Storage and Cookies:</strong> Session configurations and product quote selections are processed on client-side state engines securely to guarantee speed.</p>
                  </>
                ) : (
                  <>
                    <p><strong>Effective Date: July 15, 2026</strong></p>
                    <p>Welcome to Venom Group wholesale services. By browsing this portal or submitting contract pricing requests, you are bound by our trading conditions:</p>
                    <p><strong>1. Wholesale Accounts Only:</strong> We operate strictly on a business-to-business (B2B) framework. Private consumer orders are not accepted. The minimum trading order size is £150 per delivery.</p>
                    <p><strong>2. Order Cutoff and Dispatch:</strong> Deliveries are strictly subject to an 11:00 PM nightly cutoff for next-morning dispatch. Delivery times are estimated but governed by high SLAs.</p>
                    <p><strong>3. Temperature Logging:</strong> Produce is transferred under active cold chain regulations. Freshness discrepancies must be reported to our procurement coordinators within 4 hours of receipt.</p>
                  </>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="w-full bg-forest text-white font-display font-bold py-3 px-6 rounded-xl hover:bg-forest-hover transition-colors shadow-sm cursor-pointer"
              >
                Accept & Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
