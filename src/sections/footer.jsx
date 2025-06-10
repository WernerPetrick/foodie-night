import { useState } from "react";
import "../footer.css";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";

function Footer() {
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResultMessage("Thanks for subscribing!");
          e.target.reset();
        } else {
          setResultMessage("Oops, something went wrong. Try again.");
        }
      })
      .catch(() => {
        setResultMessage("Oops, something went wrong. Try again.");
      });
  };

  return (
    <footer>
      <div className="social-links">
        <p className="zain-bold display-3">Follow Me</p>
        <div>
          <img src={Instagram} alt="" className="social-icon" />
          <img src={Facebook} alt="" className="social-icon" />
        </div>
      </div>

      <div className="subscribe">
        <form onSubmit={handleSubmit} className="subscribe">
          <input
            type="hidden"
            name="access_key"
            value="f105a12f-a425-419f-b69f-a67518cff9be"
          />
          <input type="hidden" name="subject" value="New Subscription"></input>

          <input
            className="form_input"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />

          <button type="submit" className="btn btn-rsvp">
            Subscribe
          </button>
        </form>

        {resultMessage && <p className="result-message">{resultMessage}</p>}
      </div>
    </footer>
  );
}

export default Footer;
