import React, { useEffect } from "react";

/**
 * ProductModal Component
 * ----------------------
 * Displays detail card when a product from the collection is clicked.
 *
 * Props:
 * - product: selected product object or null
 * - onClose: function to close the modal
 * - onInquire: function to trigger inquiry / consultation
 */
const ProductModal = ({ product, onClose, onInquire }) => {
  // Lock body scroll while modal is visible
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  const handleClose = () => {
    document.body.style.overflow = "unset";
    if (onClose) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className="modal-container product-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Product image preview */}
        <div className="product-modal-image-box">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="product-modal-img"
            />
          ) : (
            <span className="product-modal-tag">{product.name}</span>
          )}
        </div>

        <div className="product-modal-body">
          <h3 className="modal-title">{product.name}</h3>
          <p className="product-modal-price">{product.price}</p>
          <p className="product-modal-desc">
            {product.description ||
              "Crafted with precision using sustainable materials and timeless design principles."}
          </p>

          <div className="product-modal-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleClose();
                if (onInquire) onInquire();
              }}
            >
              Inquire About This Piece
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleClose}
            >
              Back to Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
