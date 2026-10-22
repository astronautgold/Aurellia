import React from "react";

/**
 * ProductCard Component
 * --------------------
 * Renders an individual product in the Featured Collection.
 *
 * Props:
 * - product: { id, name, price, image, description }
 * - onSelect: optional function called when clicked
 */
const ProductCard = ({ product, onSelect }) => {
  return (
    <div
      className="product-card"
      onClick={() => onSelect && onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onSelect) onSelect(product);
      }}
    >
      {/* Product Image Box */}
      <div className="product-image-box">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        ) : (
          <span className="product-placeholder-label">{product.name}</span>
        )}
      </div>

      {/* Product Details (Name and Price) */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
