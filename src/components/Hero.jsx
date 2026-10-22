import React from "react";

/**
 * Hero Component
 * --------------
 * Displays the main headline, description, action buttons,
 * and an aesthetic online living room image.
 */
const Hero = ({ onBookConsultation }) => {
  const handleScrollToCollection = (e) => {
    e.preventDefault();
    const section = document.getElementById("collection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Heading and Call-to-actions */}
        <div className="hero-content">
          <h1 className="hero-title">Live in rooms that feel like you</h1>

          <p className="hero-subtitle">
            Bespoke interiors and handcrafted furniture for modern homes.
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onBookConsultation}
            >
              Book a consultation
            </button>

            <a
              href="#collection"
              className="btn btn-outline"
              onClick={handleScrollToCollection}
            >
              Explore collection
            </a>
          </div>
        </div>

        {/* Right Column: Aesthetic Living Room Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-box">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="Warm modern living room interior"
              className="hero-image"
              loading="eager"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
