import "../featured.css"

function Featured(){
  return(
    <>
      <section className="featured">
        <h2 className="zain-bold">Next Up: Mediterranean Mezze</h2>
        <p className="description">Experience the vibrant flavors of the Mediterranean with authentic mezze, fresh seafood, and traditional desserts.</p>
        <p className="date zain-bold">June 15, 2025</p>
        <button className="btn btn-rsvp">Reserve Your Spot</button>
      </section>
    </>
  )
}

export default Featured;