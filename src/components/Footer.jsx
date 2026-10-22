import React from "react";

/**
 * Footer Component
 * ----------------
 * Bottom section of the page featuring:
 * - Left side: Quick links ("Services · Collection · Contact")
 * - Right side: Studio contact email ("hello@aurelia.example")
 */
const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Left Side Links */}
        <div className="footer-links">
          <a href="#services">Services</a>
          <span className="footer-dot">·</span>
          <a href="#collection">Collection</a>
          <span className="footer-dot">·</span>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Side Email Contact */}
        <div className="footer-contact">
          <a href="mailto:hello@aurelia.example" className="footer-email">
            hello@aurelia.example
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
