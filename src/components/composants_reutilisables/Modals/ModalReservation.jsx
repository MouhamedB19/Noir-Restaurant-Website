import Input from '../Input'
import BoutonDore from '../BoutonDore'
import '../../../styles/modalreservation.css'
function ModalReservation()
{
    return(
        <>
            <div className="back-modal">
                <div className="box-modal">
                    <div className="icon-part">
                        <button className="close-btn">
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
                                <path
                                    d="M5 5L19 19M19 5L5 19"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <h3>Confirmer votre réservation</h3>
                    <form action="POST" className="form-modal">
                        <Input label={"Nom"} nameInput={"nom_reservation"} typeInput={"text"}/>
                        <Input label={"Prenom"} nameInput={"prenom_reservation"} typeInput={"text"}/>
                        <Input label={"Adresse mail"} nameInput={"mail_reservation"} typeInput={"email"}/>
                        <BoutonDore texte={"Confirmer la réservation"}/>

                    </form>
                </div>
            </div>
            
        </>
    );
}

export default ModalReservation;