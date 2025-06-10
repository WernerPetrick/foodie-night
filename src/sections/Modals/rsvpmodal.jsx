import { useState } from "react";
import "../RSVPModal.css";

function RSVPModal({ isOpen, onClose, eventTitle = "Foodie Night Event" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
  });
  const [resultMessage, setResultMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submitData = new FormData();
    submitData.append("access_key", "f105a12f-a425-419f-b69f-a67518cff9be");
    submitData.append("subject", `RSVP for ${eventTitle}`);
    submitData.append("event", eventTitle); 
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("guests", formData.guests);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submitData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResultMessage("RSVP confirmed! We'll see you there!");
          setFormData({ name: "", email: "", phone: "", guests: "1" });
          setTimeout(() => {
            onClose();
            setResultMessage("");
          }, 2000);
        } else {
          setResultMessage("Oops, something went wrong. Try again.");
        }
      })
      .catch(() => {
        setResultMessage("Oops, something went wrong. Try again.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>RSVP for {eventTitle}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>

          <button type="submit" className="btn btn-rsvp modal-submit">
            Confirm RSVP
          </button>
        </form>

        {resultMessage && <p className="modal-result-message">{resultMessage}</p>}
      </div>
    </div>
  );
}

export default RSVPModal;