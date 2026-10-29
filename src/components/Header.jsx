import '../styles/header.css'
import MenuBurger from './composants_reutilisables/MenuBurger.jsx'
import {useState} from 'react'

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  return (
    <>

      <header className="container">
        
        <h1 class="title">
          NOIR RESTAURANT
          <h3>CUISINE CONTEMPORAINE</h3>
        </h1>
        <ul className="list-parts">
          <li class="chosen"><a href="#">Accueil</a></li>
          <li><a href="#">Philosophie</a></li>
          <li><a href="#">Créations</a></li>
          <li><a href="#">Expériences</a></li>
          <li><a href="#">Reservations</a></li>
        </ul>
        <button className='btn-burger' onClick={()=> setMenuOuvert(menuOuvert => !menuOuvert)}>
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
      <MenuBurger menu={menuOuvert}/>
    </>
  )
}

export default Header;