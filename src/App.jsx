import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import Creations from './components/Creations.jsx'
import Experiences from './components/Experiences.jsx'
import Reservation from './components/Reservation.jsx'
import Footer from './components/Footer.jsx'

import ModalReservation from './components/composants_reutilisables/Modals/ModalReservation'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Philosophy/>
      <Creations/>
      <Experiences/>
      <Reservation/>
      <Footer/>
      <ModalReservation/>
    </>
  )
}

export default App