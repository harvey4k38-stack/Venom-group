/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
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
import OriginsSection from "./components/OriginsSection";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import DrinksPage from "./drinks/DrinksPage";

const getPage = () => (window.location.hash === "#/drinks" ? "drinks" : "home");

export default function App() {
  const [page, setPage] = useState<"home" | "drinks">(getPage);

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Navigate to a home-page section, switching back from the Drinks page if needed.
  const goToSection = (id: string) => {
    if (page === "home") {
      scrollToSection(id);
      return;
    }
    window.location.hash = "";
    setPage("home");
    setTimeout(() => scrollToSection(id), 50);
  };

  const goToDrinks = () => {
    window.location.hash = "#/drinks";
    setPage("drinks");
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="relative min-h-screen bg-white text-charcoal select-text">
      <Header
        page={page}
        onNavigate={goToSection}
        onGoToDrinks={goToDrinks}
        onRequestQuote={() => scrollToSection("contact")}
      />
      {page === "drinks" ? (
        <>
          <DrinksPage onRequestQuote={() => scrollToSection("contact")} />
          <EnquiryForm />
        </>
      ) : (
        <>
          <Hero
            onRequestQuote={() => scrollToSection("contact")}
            onViewProducts={() => scrollToSection("products")}
          />
          <TrustedBy />
          <AboutSection onLearnMore={() => scrollToSection("delivery")} />
          <ProductsSection onRequestQuote={() => scrollToSection("contact")} />
          <WhyChooseUs />
          <OriginsSection />
          <IndustriesSection />
          <DeliverySection />
          <Testimonials />
          <CtaSection onRequestQuote={() => scrollToSection("contact")} />
          <EnquiryForm />
        </>
      )}
      <Footer />
    </div>
  );
}
