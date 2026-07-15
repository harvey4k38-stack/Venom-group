/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import IndustriesSection from "./components/IndustriesSection";
import DeliverySection from "./components/DeliverySection";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleToggleProduct = (productName: string) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productName)) {
        return prev.filter((name) => name !== productName);
      } else {
        return [...prev, productName];
      }
    });
  };

  const handleClearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  const scrollToSection = (id: string) => {
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
    <div className="relative min-h-screen bg-white text-charcoal select-text">
      {/* Dynamic Header */}
      <Header
        selectedCount={selectedProducts.length}
        onRequestQuote={() => scrollToSection("contact")}
      />

      {/* Hero Entrance Block */}
      <Hero
        onRequestQuote={() => scrollToSection("contact")}
        onViewProducts={() => scrollToSection("products")}
      />

      {/* Trusted By Grid Scrolling logos */}
      <TrustedBy />

      {/* About Section - Split Layout */}
      <AboutSection onLearnMore={() => scrollToSection("delivery")} />

      {/* Product Categories Catalog with Details modal and basket addition */}
      <ProductsSection
        selectedProducts={selectedProducts}
        onToggleProduct={handleToggleProduct}
        onRequestQuote={() => scrollToSection("contact")}
      />

      {/* Why Choose Us value proposition grid */}
      <WhyChooseUs />

      {/* Alternating Industries Section */}
      <IndustriesSection />

      {/* Delivery Network, SVG UK Map with hotspots and statistics counters */}
      <DeliverySection />

      {/* Chef Testimonials Carousel */}
      <Testimonials />

      {/* Deep Green CTA Banner */}
      <CtaSection onRequestQuote={() => scrollToSection("contact")} />

      {/* Main Enquiry Form with Map */}
      <EnquiryForm
        selectedProducts={selectedProducts}
        onClearSelectedProducts={handleClearSelectedProducts}
      />

      {/* Full structured 4-column Footer */}
      <Footer />
    </div>
  );
}

