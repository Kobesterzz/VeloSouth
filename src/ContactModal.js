import React from "react";
import "./css/App.css";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    
  
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData``
      )});
  
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending email.");
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          
          <div className="form-group">
            <label htmlFor="email">Email us at: Velosouthcyclingclub@gmail.com</label>
            
          </div>
          
          
        </form>
      </div>
    </div>
  );

};

export default ContactModal;