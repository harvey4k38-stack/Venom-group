/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  selectedCount: number;
  onRequestQuote: () => void;
}

export default function Header({ selectedCount, onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for indicator line
      const sections = ["home", "products", "industries", "about", "delivery", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "industries", label: "Industries" },
    { id: "about", label: "About" },
    { id: "delivery", label: "Delivery" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-light-grey"
            : "bg-transparent py-6"
        }`}
        style={{ paddingTop: `max(${isScrolled ? "1rem" : "1.5rem"}, calc(${isScrolled ? "1rem" : "1.5rem"} + env(safe-area-inset-top)))` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-forest rounded-xl shadow-lg shadow-forest/20 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              {/* Geometric Snake / stylized V SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-7 h-7 text-white fill-none stroke-white"
                strokeWidth="8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* A stylized V forming a snake scales wave */}
                <path d="M20,25 C25,25 35,65 45,75 C52,82 60,82 68,72 C76,62 80,35 80,35" />
                {/* Elegant snake head detail */}
                <circle cx="80" cy="31" r="5" className="fill-white stroke-none" />
                {/* Leaf accent representing freshness */}
                <path d="M25,25 C35,15 45,20 45,20" stroke="#43A047" strokeWidth="6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-extrabold tracking-tight text-xl leading-none transition-colors duration-300 ${isScrolled ? "text-charcoal" : "text-white"}`}>
                VENOM<span className="text-leaf">GROUP</span>
              </span>
              <span className="font-mono text-[8px] tracking-[0.25em] text-gray-400 uppercase leading-none mt-1">
                Wholesale Produce
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-sans text-sm font-medium transition-colors duration-300 py-1.5 px-1 cursor-pointer ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-forest font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-600 hover:text-forest"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${
                      isScrolled ? "bg-forest" : "bg-leaf"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button & Menu Icon */}
          <div className="flex items-center gap-4">
            <button
              onClick={onRequestQuote}
              className={`relative hidden sm:flex items-center gap-2 font-display text-sm font-semibold tracking-wide py-2.5 px-6 rounded-full transition-all duration-300 overflow-hidden cursor-pointer shadow-md group ${
                isScrolled
                  ? "bg-forest text-white hover:bg-forest-hover shadow-forest/10 hover:shadow-forest/20"
                  : "bg-white text-forest hover:bg-light-grey"
              }`}
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Dynamic Basket Counter Badge */}
              {selectedCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-[10px] font-bold text-white ring-2 ring-white animate-bounce">
                  {selectedCount}
                </span>
              )}
            </button>

            {/* Mobile Quote Icon (Only visible on tiny screens when counter > 0) */}
            {selectedCount > 0 && (
              <button
                onClick={onRequestQuote}
                className="relative flex sm:hidden p-2 rounded-full bg-leaf text-white cursor-pointer shadow"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-forest text-[8px] font-bold text-white">
                  {selectedCount}
                </span>
              </button>
            )}

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg lg:hidden transition-colors cursor-pointer ${
                isScrolled
                  ? "text-charcoal hover:bg-light-grey"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-8 flex flex-col justify-between"
              style={{ paddingTop: `max(2rem, calc(2rem + env(safe-area-inset-top)))`, paddingBottom: `max(1.5rem, calc(1.5rem + env(safe-area-inset-bottom)))` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-8">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between border-b border-light-grey pb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-forest rounded-lg">
                      <svg viewBox="0 0 100 100" className="w-5 h-5 text-white fill-none stroke-white" strokeWidth="10" strokeLinecap="round">
                        <path d="M20,25 C25,25 35,65 45,75 C52,82 60,82 68,72 C76,62 80,35 80,35" />
                      </svg>
                    </div>
                    <span className="font-display font-extrabold text-charcoal tracking-tight">
                      VENOM<span className="text-leaf">GROUP</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-light-grey cursor-pointer text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-5">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.id)}
                      className="text-left font-display text-lg font-semibold text-charcoal hover:text-forest py-2 border-b border-light-grey/50 cursor-pointer"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer Call to Action */}
              <div className="space-y-4 border-t border-light-grey pt-6">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 font-display font-bold bg-forest text-white py-3.5 px-6 rounded-xl hover:bg-forest-hover shadow-lg shadow-forest/10 cursor-pointer"
                >
                  <span>Request A Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center font-mono text-[10px] text-gray-400">
                  ESTABLISHED UK WHOLESALE SUPPLIER
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
