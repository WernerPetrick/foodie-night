import "../typography.css"
import "../navbar.css"

function Navbar(){
  return (
    <>
      <nav>
        <div>
          <h1 className="zain-extrabold display-1">Foodie Night</h1>
          <p className="zain-regular">A new flavour every month</p>
        </div>
        <div>
          <button className="btn btn-rsvp">RSVP Now</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;