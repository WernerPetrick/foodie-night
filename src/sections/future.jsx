import "../future.css"
import EventCard from "../components/eventcard";
import AsianFusion from "../assets/asian_fusion.avif"
import FarmToTable from "../assets/farm_to_table.jpg"
import StreetFood from "../assets/street_food.jpg"

function Future({ onRSVP }){
  return(
    <>
      <section className="future">
        <h2 className="zain-bold display-1 text-center">Upcoming Events</h2>
        <div className="future-events">
          <EventCard 
            image={AsianFusion} 
            title="Asian Fusion" 
            date="20 April 2025" 
            description="Modern takes on classic Asian dishes"
            onRSVP={() => onRSVP("Asian Fusion")}
          />
          <EventCard 
            image={FarmToTable} 
            title="Farm to Table" 
            date="18 May 2025" 
            description="Fresh, local ingredients in seasonal dishes"
            onRSVP={() => onRSVP("Farm to Table")}
          />
          <EventCard 
            image={StreetFood} 
            title="Street Food Fiesta" 
            date="22 June 2025" 
            description="Global street food favourites"
            onRSVP={() => onRSVP("Street Food Fiesta")}
          />
        </div>
      </section>
    </>
  )
}

export default Future;