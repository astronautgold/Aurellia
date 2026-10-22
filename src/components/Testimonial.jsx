import React from "react";

/**
 * Testimonial Component
 * ---------------------
 * A full-width dark forest green section featuring:
 * - Client quote in elegant italic serif font
 * - Client name and location (Chennai)
 */
const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <blockquote className="testimonial-quote">
          “Short client quote about the studio goes here”
        </blockquote>
        <p className="testimonial-author">Client name, Chennai</p>
      </div>
    </section>
  );
};

export default Testimonial;
