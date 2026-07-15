/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Printer, RefreshCw } from "lucide-react";
import { EnquiryFormState } from "../types";

interface EnquiryFormProps {
  selectedProducts: string[];
  onClearSelectedProducts: () => void;
}

export default function EnquiryForm({ selectedProducts, onClearSelectedProducts }: EnquiryFormProps) {
  const [form, setForm] = useState<EnquiryFormState>({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    businessType: "",
    productsRequired: [],
    estimatedWeeklyOrder: "",
    deliveryLocation: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  // Sync selected products from the catalog into the form's state
  useEffect(() => {
    if (selectedProducts.length > 0) {
      setForm((prev) => ({
        ...prev,
        productsRequired: Array.from(new Set([...prev.productsRequired, ...selectedProducts]))
      }));
    }
  }, [selectedProducts]);

  const businessTypes = [
    "Restaurant / Fine Dining",
    "Hotel / Resort",
    "School / College / University",
    "Care Home / Healthcare",
    "Retailer / Farm Shop / Supermarket",
    "Caterer / Hospitality Events",
    "Food Manufacturer / Processor",
    "Wholesaler / Regional Distributor",
    "Other Food Service"
  ];

  const orderEstimates = [
    "Under £250 Weekly",
    "£250 - £1,000 Weekly",
    "£1,000 - £3,000 Weekly",
    "£3,000 - £10,000 Weekly",
    "Over £10,000 Weekly"
  ];

  const standardProductCategories = [
    "Fresh Fruit",
    "Fresh Vegetables",
    "Salad Leaves",
    "Fresh Herbs",
    "Exotic Produce",
    "Prepared Produce"
  ];

  const handleCheckboxChange = (category: string) => {
    setForm((prev) => {
      const isChecked = prev.productsRequired.includes(category);
      const updated = isChecked
        ? prev.productsRequired.filter((item) => item !== category)
        : [...prev.productsRequired, category];
      return { ...prev, productsRequired: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.companyName || !form.email || !form.phoneNumber || !form.businessType || !form.estimatedWeeklyOrder || !form.deliveryLocation) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed');
      const generatedRef = `VEN-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setRefNumber(generatedRef);
      setIsSuccess(true);
    } catch {
      alert('Something went wrong. Please email us directly at info@venomgroup.co.uk');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      businessType: "",
      productsRequired: [],
      estimatedWeeklyOrder: "",
      deliveryLocation: "",
      message: ""
    });
    onClearSelectedProducts();
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-light-grey relative scroll-mt-20 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-leaf">
            GET A CUSTOM QUOTE
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal tracking-tight">
            Wholesale Enquiries & Quotes
          </h2>
          <p className="text-gray-600 font-sans text-base">
            No long-term commitments or setup fees. Supply your business details below to receive a customized pricing contract from our sales desk within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Container */}
          <div className="lg:col-span-7 premium-card bg-white rounded-[20px] p-8 md:p-12 border border-black/5 shadow-sm relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="enquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <h3 className="font-display font-extrabold text-2xl text-charcoal border-b border-gray-200/60 pb-4">
                    Submit Your Specification
                  </h3>

                  {/* Primary Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="companyName" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        required
                        placeholder="Premier Fine Foods Ltd"
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phoneNumber" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        placeholder="+44 7700 900077"
                        value={form.phoneNumber}
                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                      />
                    </div>
                  </div>

                  {/* B2B Specs Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="businessType" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        required
                        value={form.businessType}
                        onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all cursor-pointer"
                      >
                        <option value="">Select Sector...</option>
                        {businessTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="estimatedWeeklyOrder" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                        Estimated Weekly Order <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="estimatedWeeklyOrder"
                        required
                        value={form.estimatedWeeklyOrder}
                        onChange={(e) => setForm({ ...form, estimatedWeeklyOrder: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all cursor-pointer"
                      >
                        <option value="">Select volume estimation...</option>
                        {orderEstimates.map((est) => (
                          <option key={est} value={est}>
                            {est}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Delivery Location input */}
                  <div className="space-y-1.5">
                    <label htmlFor="deliveryLocation" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                      Delivery Location / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="deliveryLocation"
                      type="text"
                      required
                      placeholder="e.g. Central London, Leeds, Birmingham, Bristol"
                      value={form.deliveryLocation}
                      onChange={(e) => setForm({ ...form, deliveryLocation: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                    />
                  </div>

                  {/* Checkboxes: Products Required */}
                  <div className="space-y-3">
                    <label className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider flex items-center justify-between">
                      <span>Products Required</span>
                      {selectedProducts.length > 0 && (
                        <span className="text-leaf text-[10px] lowercase normal-case">
                          ({selectedProducts.length} added from catalog)
                        </span>
                      )}
                    </label>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {standardProductCategories.map((cat) => {
                        const isPreselected = form.productsRequired.includes(cat) || selectedProducts.some(p => p.toLowerCase().includes(cat.toLowerCase().replace("fresh ", "").replace("salad leaves", "salads")));
                        const isChecked = form.productsRequired.includes(cat);
                        return (
                          <label
                            key={cat}
                            className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                              isChecked || isPreselected
                                ? "bg-forest/5 border-forest/30 text-forest font-semibold"
                                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked || isPreselected}
                              onChange={() => handleCheckboxChange(cat)}
                              className="accent-forest cursor-pointer"
                            />
                            <span className="font-sans text-xs">{cat}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message/Notes */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="font-display text-xs font-bold uppercase text-gray-500 tracking-wider">
                      Additional Requirements / Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="List any specific fruit/vegetable items, delivery schedules, or custom specifications required..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 font-sans text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all resize-none"
                    />
                  </div>

                  {/* Terms check details */}
                  <div className="flex items-start gap-2 pt-2 text-[11px] text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                    <span>By submitting, you agree to Venom Group terms of service. Sourced data remains strictly confidential in B2B accounts.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-forest text-white font-display font-bold py-4 px-8 rounded-xl hover:bg-forest-hover transition-colors shadow-lg shadow-forest/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Processing Specification...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Request My Quote</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Premium Submission Receipt Success state */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 relative z-10 text-center py-8"
                >
                  <div className="w-20 h-20 bg-forest/10 text-forest rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold text-leaf uppercase tracking-widest">
                      ENQUIRY CONFIRMED
                    </span>
                    <h3 className="font-display font-extrabold text-3xl text-charcoal">
                      Thank You, {form.fullName}!
                    </h3>
                    <p className="text-gray-500 font-sans text-sm max-w-md mx-auto">
                      Your wholesale specifications have been logged securely. A procurement representative for <strong>{form.companyName}</strong> has been allocated and will contact you shortly.
                    </p>
                  </div>

                  {/* Modern Print-out Receipt Panel */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 text-left max-w-md mx-auto space-y-4 shadow-sm font-mono text-xs text-gray-600">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <strong className="text-charcoal font-display">Reference ID:</strong>
                      <span className="text-forest font-bold">{refNumber}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>BUSINESS SECTOR:</span>
                        <span className="text-charcoal font-semibold">{form.businessType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ESTIMATED BUDGET:</span>
                        <span className="text-charcoal font-semibold">{form.estimatedWeeklyOrder}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DELIVERY AREA:</span>
                        <span className="text-charcoal font-semibold">{form.deliveryLocation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>EST. RESPONSE:</span>
                        <span className="text-leaf font-bold">Within 2 Hours</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-3 text-[10px] text-gray-400 text-center">
                      SLA response logs strictly bound to {form.email}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                    <button
                      onClick={() => window.print()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display text-xs font-bold text-gray-500 hover:text-charcoal py-3 px-5 border border-gray-300 rounded-xl bg-white transition-colors cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Summary</span>
                    </button>
                    
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display text-xs font-bold bg-forest text-white hover:bg-forest-hover py-3 px-6 rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>New Enquiry</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing accents in form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-full pointer-events-none filter blur-xl" />
          </div>

          {/* Right Column: Contact Details & Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Bento Card */}
            <div className="premium-card bg-white p-8 rounded-[20px] border border-black/5 shadow-sm space-y-6">
              <h3 className="font-display font-extrabold text-2xl text-charcoal border-b border-gray-100 pb-4">
                Procurement Desk
              </h3>
              
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">
                      EMAIL ADDRESS
                    </h4>
                    <p className="font-display font-extrabold text-base text-charcoal">
                      <a href="mailto:info@venomgroup.co.uk" className="hover:text-forest transition-colors">
                        info@venomgroup.co.uk
                      </a>
                    </p>
                    <p className="text-gray-500 font-sans text-xs">Send spreadsheet lists or RFPs directly.</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">
                      OFFICE HEADQUARTERS
                    </h4>
                    <p className="font-sans text-xs text-charcoal font-semibold leading-relaxed">
                      Venom House, Terminal 4 Wholesale Logistics Hub, New Covent Garden Market, London, CR4 4HR
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400">
                      TRADING HOURS
                    </h4>
                    <div className="font-sans text-xs text-gray-600 space-y-1">
                      <p><strong>Mon &ndash; Fri:</strong> 6:00 AM &ndash; 11:00 PM</p>
                      <p><strong>Sat &ndash; Sun:</strong> 7:00 AM &ndash; 8:00 PM</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Stylized Google Map Iframe mock */}
            <div className="premium-card rounded-[20px] overflow-hidden border border-black/5 shadow-sm relative h-[250px] bg-gray-50">
              {/* Google Maps embedded frame for New Covent Garden Market area, London */}
              <iframe
                title="Venom Group Head Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5126868661607!2d-0.12933458423078498!3d51.4854580796306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604fc8fc2e1d7%3A0xe5a3c26027878d2b!2sNew%20Covent%20Garden%20Market!5e0!3m2!1sen!2suk!4v1689345678901!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-charcoal text-white font-mono text-[9px] font-bold py-1 px-3 rounded-full flex items-center gap-1.5 shadow backdrop-blur-sm bg-charcoal/90">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
                HEAD OFFICE & DISPATCH HUB
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
