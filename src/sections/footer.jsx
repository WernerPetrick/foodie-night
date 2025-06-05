import "../footer.css"
import Instagram from "../assets/instagram.png"
import Facebook from "../assets/facebook.png"

function Footer(){
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
        <input className="form_input" type="email" />
        <button type="button" className="btn btn-rsvp">Subscribe</button>
      </div>
    </footer>
  )
}

export default Footer;