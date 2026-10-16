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
        <button className='btn-burger'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          >
            <path d="M3 6H21" />
            <path d="M3 12H21" />
            <path d="M3 18H21" />
          </svg>
        </button>
      </header>

    </>
  )
}

export default Header;