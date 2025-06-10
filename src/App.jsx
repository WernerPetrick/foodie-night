import { useState } from 'react'
import './App.css'
import Featured from './sections/featured'
import Footer from './sections/footer'
import Future from './sections/future'
import Navbar from './sections/navbar'
import Past from './sections/past'
import RSVPModal from './sections/Modals/rsvpmodal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const openModal = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent("");
  };

  return (
    <>
      <Navbar/>
      <Featured onRSVP={() => openModal("Mediterranean Mezze")} />
      <Future onRSVP={openModal} />
      <Past/>
      <Footer/>
      <RSVPModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        eventTitle={selectedEvent}
      />
    </>
  )
}

export default App
