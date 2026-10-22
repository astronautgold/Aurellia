import React from "react";

/**
 * ServiceCard Component
 * --------------------
 * Renders an individual service card with a thumbnail image and title.
 *
 * Props:
 * - title: string (e.g. "Interior Design")
 * - image: string (URL of the thumbnail image)
 */
const ServiceCard = ({ title, image }) => {
  return (
    <div className="service-card">
      {image && (
        <div className="service-card-thumb">
          <img src={image} alt={title} className="service-thumb-img" />
        </div>
      )}
      <h3 className="service-card-title">{title}</h3>
    </div>
  );
};

export default ServiceCard;
