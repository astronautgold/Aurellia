import React, { useState, useEffect } from "react";

/**
 * Initial empty form values
 */
const initialFormData = {
  name: "",
  email: "",
  phone: "",
  service: "Interior Design",
  message: "",
};

/**
 * ConsultationModal Component
 * ----------------------------
 * A clean, scrollable popup modal that allows users
 * to book an interior design consultation.
 *
 * Opened from both the Navbar and Hero buttons.
 * - Locks background body scrolling when open so the modal scrolls smoothly.
 * - Automatically resets all form fields to empty whenever opened.
 */
const ConsultationModal = ({ isOpen, onClose }) => {
  // Form state holding the input values
  const [formData, setFormData] = useState(initialFormData);

  // State to track if the form was successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background page from scrolling when modal is open,
  // and reset the form every time it opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormData(initialFormData);
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Helper function to reset form and close modal
  const handleClose = () => {
    document.body.style.overflow = "unset";
    setFormData(initialFormData);
    setIsSubmitted(false);
    if (onClose) onClose();
  };

  // If modal is not open, do not render anything
  if (!isOpen) return null;

  // Handle typing inside input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Clear form inputs so the data disappears for next time
    setFormData(initialFormData);

    // Close the modal after showing "Thank You" message
    setTimeout(() => {
      setIsSubmitted(false);
      handleClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      {/* Modal Dialog Container - Scrollable on all screens */}
      <div
        className="modal-container consultation-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar with Back Button and Close Button */}
        <div className="modal-header-bar">
          <button
            type="button"
            className="modal-back-btn-top"
            onClick={handleClose}
            aria-label="Go back"
          >
            ← Back
          </button>
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {isSubmitted ? (
          <div className="modal-success">
            <h3 className="modal-title">Thank You!</h3>
            <p className="modal-description">
              We received your consultation request. Our team will reach out to
              you shortly.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClose}
              style={{ marginTop: "16px" }}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <>
            <div className="modal-title-wrapper">
              <h3 className="modal-title">Book a Consultation</h3>
              <p className="modal-description">
                Let's create a space tailored to your lifestyle.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Priyah Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Interior Design">Interior Design</option>
                  <option value="Custom Furniture">Custom Furniture</option>
                  <option value="3D Walkthroughs">3D Walkthroughs</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Brief Project Note (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about your home, timeline, or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Form Action Buttons: Back + Submit */}
              <div className="modal-form-actions">
                <button
                  type="button"
                  className="btn btn-outline modal-action-back-btn"
                  onClick={handleClose}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="btn btn-primary modal-action-submit-btn"
                >
                  Confirm Consultation
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
