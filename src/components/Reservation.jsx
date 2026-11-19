import ReservationImage from '../assets/reservation_image.png'

import BoutonDore from './composants_reutilisables/BoutonDore'
import Temps from './fonctions_utilitaires/Temps.jsx'

import useReveal from './fonctions_utilitaires/useReveal.js'
import useLoaded from './fonctions_utilitaires/useLoaded.js'
import TitreSection from './composants_reutilisables/TitreSection'


import '../styles/reservation.css'
function Reservation()
{
    const [imageRef, imageVisible] = useReveal();
    const imageChargee = useLoaded(ReservationImage);
    const [formRef, formVisible] = useReveal();

    return(
        <>
            <section className="reservations">
                <div className={`image-part ${imageVisible && imageChargee ? "animation-left" : ""}`} ref={imageRef}>
                    <img src={ReservationImage} alt=""/>
                </div>
                <div className={`reservation-part ${formVisible ? "animation-right" : ""}`} ref={formRef}>
                    <div className="box-introduction">
                        <TitreSection titre="Réservations" numero={4} sousTitre="Votre table vous attend. Une expérience pensée dans les moindres détails, à découvrir le temps d'un dîner." />
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
