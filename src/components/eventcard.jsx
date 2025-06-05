import "../eventcard.css"

function EventCard({image, date, title, description, quote, isPast = false}){
  return (
    <>
      <div className={`event-card ${isPast ? 'event-card-past' : ''}`}>
        {image && <img src={image} alt={title} className="event-image" />}
        <div className="card-content">
          <h3 className="event-title">{title}</h3>
          <p className="event-date">{date}</p>
          <p className="event-description">{description}</p>
          {quote && <blockquote className="event-quote in-light-italic">"{quote}"</blockquote>}
          {!isPast && <button type="button" className="btn event-button">RSVP Now</button>}
        </div>
      </div>
    </>
  )
}

export default EventCard;