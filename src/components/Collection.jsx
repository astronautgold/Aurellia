import React from "react";
import ProductCard from "./ProductCard";

/**
 * Collection Component
 * --------------------
 * Displays the "Featured collection" section with 6 products,
 * complete with online photos, titles, and prices.
 */
const Collection = ({ onSelectProduct }) => {
  const products = [
    {
      id: 1,
      name: "Oak lounge chair",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
      description:
        "Handcrafted solid white oak with natural textured cushion upholstery.",
    },
    {
      id: 2,
      name: "Walnut coffee table",
      price: "₹18,500",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
      description:
        "Curved organic edges with smooth hand-rubbed oil finish.",
    },
    {
      id: 3,
      name: "Brass floor lamp",
      price: "₹9,750",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      description:
        "Spun brass shade with matte antique finish and fabric cord.",
    },
    {
      id: 4,
      name: "Linen sofa",
      price: "₹62,000",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      description:
        "Deep-seated luxury sofa upholstered in Belgian washed natural linen.",
    },
    {
      id: 5,
      name: "Teak bookshelf",
      price: "₹34,200",
      image:
        "https://images.unsplash.com/photo-1594652634010-275456c808d0?auto=format&fit=crop&w=800&q=80",
      description:
        "Minimalist open shelving built from sustainably harvested teak wood.",
    },
    {
      id: 6,
      name: "Cane bedside table",
      price: "₹7,900",
      image:
        "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=800&q=80",
      description:
        "Woven natural rattan drawer front with warm ash wood frame.",
    },
  ];

  return (
    <section id="collection" className="collection-section">
      <div className="collection-container">
        <h2 className="section-title">Featured collection</h2>

        <div className="collection-grid">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
