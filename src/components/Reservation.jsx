import ReservationImage from '../assets/reservation_image.png'
import '../styles/reservation.css'
import BoutonDore from './composants_reutilisables/BoutonDore'
import Temps from './fonctions_utilitaires/Temps.jsx'


function Reservation()
{
    return(
        <>
            <section className="reservations">
                <div className="image-part">
                    <img src={ReservationImage} alt=""/>
                </div>
                <div className="reservation-part">
                    <div className="box-introduction">
                        <h2 className="title-section main-title">
                            <h2 className="numero">04.</h2>
                            Réservations
                        </h2>
                        <span>Votre table vous attend. </span>
                        <span>
                            Une expérience pensée dans les moindres détails, à découvrir le temps d'un dîner.
                        </span>
                    </div>
                    <div className="box-reservation">
                        <h3>Réserver une table</h3>
                        <form className="form-reservation">
                            <div className="infos-input">
                                <div className="input-item">
                                    <label htmlFor="date">Date</label> <br/> 
                                    <input type="date" name="date" className="champ-reservation" value={Temps.DateAujourdhui()}/>
                                </div>
                                <div className="input-item">
                                    <label htmlFor="convives">Convives</label><br/>
                                    <input type="number" name="convives" className="champ-reservation" min="1" max="20" value="2" />  
                                </div>
                                <div className="input-item">
                                    <label htmlFor="heure">Heure</label><br/>
                                    <input type="time" name="heure" className="champ-reservation" value={"20:00"}/>
                                </div>
                                <div className="input-item">                  
                                    <label htmlFor="occasion">Occasion</label> <br />
                                    <select name="occasions" className="champ-reservation">
                                        <option value="">Choisir</option>
                                        <option value="anniversaire">Anniversaire</option>
                                        <option value="mariage">Mariage</option>
                                        <option value="reunion">Réunion</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>
                            </div>
                            <BoutonDore texte="Réserver"/>
                        </form>
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default Reservation
