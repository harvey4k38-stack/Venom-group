/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-charcoal select-text">
      <Header onRequestQuote={() => scrollToSection("contact")} />
      <Hero
        onRequestQuote={() => scrollToSection("contact")}
        onViewProducts={() => scrollToSection("products")}
      />
      <TrustedBy />
      <AboutSection onLearnMore={() => scrollToSection("delivery")} />
      <ProductsSection onRequestQuote={() => scrollToSection("contact")} />
      <WhyChooseUs />
      <IndustriesSection />
      <DeliverySection />
      <Testimonials />
      <CtaSection onRequestQuote={() => scrollToSection("contact")} />
      <EnquiryForm />
      <Footer />
    </div>
  );
}
