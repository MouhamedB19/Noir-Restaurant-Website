import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <>

      <header>
        <h1 class="title">NOIR RESTAURANT</h1>
        <ul>
          <li class="chosen"><a href="#">Menu</a></li>
          <li><a href="#">Expérience</a></li>
          <li><a href="#">Chef</a></li>
          <li><a href="#">Temoignages</a></li>
        </ul>
        <button class="book-table">Reserver une table</button>
      </header>

    </>
  )
}

function App() {

  return (
    <>
      <Header />
    </>
  )
}

export default App