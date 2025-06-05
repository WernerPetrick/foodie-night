import "../past.css"
import EventCard from "../components/eventcard";
import ItalianFood from "../assets/italian_food.avif"
import IndianFood from "../assets/indian_food.jpg"
import WinterFood from "../assets/winter_food.avif"
import SeaFood from "../assets/sea_food.jpg"


function Past(){
  return (
    <>
      <section className="past">
        <h2 className="zain-bold display-1 text-center">Past Themes</h2>
        <div className="past-events">
          <EventCard image={ItalianFood} title="Italian Classics" date="10 February 2025" quote="The handmade pasta was absolutely divine!" isPast={true}/>
          <EventCard image={IndianFood}title="Spice Route" date="20 January 2025" quote="An explosion of flavors from India and beyond" isPast={true}/>
          <EventCard image={WinterFood}title="Winter Comfort" date="15 December 2024" quote="Perfect warming dishes for the season" isPast={true}/>
          <EventCard image={SeaFood} title="Seafood Spectacular" date="18 November 2024" quote="Fresh catches prepared to perfection" isPast={true}/>
        </div>
      </section>
    </>
  )
}

export default Past;