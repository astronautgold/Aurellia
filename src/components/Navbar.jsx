import React, { useState } from "react";

/**
 * Navbar Component
 * ----------------
 * Displays the top navigation bar with:
 * - Brand logo ("AURELIA")
 * - Navigation links (Home, Services, Collection, Contact)
 * - "Book a consultation" button
 * - Mobile hamburger menu for small screens
 */
const Navbar = ({ onBookConsultation }) => {
  // State to track if the mobile navigation menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to toggle mobile menu open/closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo">
          AURELIA
        </a>

        {/* Navigation links & CTA button */}
        <div className="navbar-right">
          <nav className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
            <a href="#home" onClick={handleNavLinkClick}>
              Home
            </a>
            <span className="nav-dot">·</span>
            <a href="#services" onClick={handleNavLinkClick}>
              Services
            </a>
            <span className="nav-dot">·</span>
            <a href="#collection" onClick={handleNavLinkClick}>
              Collection
            </a>
            <span className="nav-dot">·</span>
            <a href="#contact" onClick={handleNavLinkClick}>
              Contact
            </a>

            {/* Mobile-only CTA inside menu */}
            <button
              type="button"
              className="btn btn-primary btn-mobile-cta"
              onClick={() => {
                handleNavLinkClick();
                if (onBookConsultation) onBookConsultation();
              }}
            >
              Book a consultation
            </button>
          </nav>

          {/* Desktop "Book a consultation" CTA Button */}
          <button
            type="button"
            className="btn btn-primary navbar-cta"
            onClick={onBookConsultation}
          >
            Book a consultation
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
