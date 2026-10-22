import React from "react";
import ServiceCard from "./ServiceCard";

/**
 * Services Component
 * ------------------
 * Renders the "Services" section with online visual imagery.
 */
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Custom Furniture",
      image:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "3D Walkthroughs",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
