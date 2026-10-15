import '../styles/header.css'
import BoutonDore from './composants_reutilisables/BoutonDore'
function Header() {
  return (
    <>

      <header>
        <h1 class="title">
          NOIR RESTAURANT
          <h3>CUISINE CONTEMPORAINE</h3>
        </h1>
        <ul>
          <li class="chosen"><a href="#">Accueil</a></li>
          <li><a href="#">Philosophie</a></li>
          <li><a href="#">Créations</a></li>
          <li><a href="#">Expériences</a></li>
          <li><a href="#">Reservations</a></li>
        </ul>
        
      </header>

    </>
  )
}

export default Header;