import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Collection from "./components/Collection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import ProductModal from "./components/ProductModal";
import "./App.css";

/**
 * App Component
 * -------------
 * The root component of the Aurelia website.
 * Assembles all sections in order:
 * 1. Navbar
 * 2. Hero Section
 * 3. Services Section
 * 4. Featured Collection Section
 * 5. Testimonial Banner
 * 6. Footer
 *
 * Also manages interactive modal states for beginner-friendly UX.
 */
function App() {
  // State for Consultation Booking Modal
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // State for viewing details of a clicked product
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app-layout">
      {/* Framed Website Container matching the provided design */}
      <div className="website-frame">
        {/* Navigation Bar */}
        <Navbar onBookConsultation={() => setIsConsultationOpen(true)} />

        {/* Hero Section */}
        <Hero onBookConsultation={() => setIsConsultationOpen(true)} />

        {/* Services Section */}
        <Services />

        {/* Featured Collection Section */}
        <Collection onSelectProduct={(item) => setSelectedProduct(item)} />

        {/* Testimonial Banner */}
        <Testimonial />

        {/* Footer */}
        <Footer />
      </div>

      {/* Consultation Booking Modal Popup */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Product Quick-View Modal Popup */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={() => {
          setSelectedProduct(null);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}

export default App;
