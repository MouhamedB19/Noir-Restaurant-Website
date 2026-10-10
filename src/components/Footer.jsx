import '../styles/footer.css'

function Footer()
{
    const adresse = import.meta.env.VITE_RESTAURANT_ADRESSE;
    const phone = import.meta.env.VITE_RESTAURANT_PHONE;
    const mail = import.meta.env.VITE_RESTAURANT_MAIL;
    const jours_horaires = import.meta.env.VITE_RESTAURANT_JOURS_HORAIRES;
    const heures_horaires = import.meta.env.VITE_RESTAURANT_HEURES_HORAIRES;

    return(
        <>
            <footer>
                <div className="infos-part">
                    <div className="noir-infos">
                        <h3 className="titre-part">Noir</h3>
                        <span>Restaurant gastronomique</span>
                        <span>Paris</span>
                    </div>
                    <div className="nav-part">
                        <h3 className="titre-part">Navigation</h3>
                        <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">Créations</a></li>
                            <li><a href="#">Expériences</a></li>
                            <li><a href="#">Réservation</a></li>
                        </ul>
                    </div>
                    <div className="contact-horaires-part">
                        <div className="contact">
                            <h3 className="titre-part">Contact</h3>
                            <div className="infos">
                                <span>{phone}</span>
                                <span>{mail}</span>
                                <span>{adresse}</span> 
                            </div>
                            
                        </div>
                        <div className="horaires">
                            <h3 className="titre-part">Horaires</h3>
                            <div className="infos">
                                <span>{jours_horaires}</span>
                                <span>{heures_horaires}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="social-part">
                    <a href="#" class="instagram">Instagram</a>
                    <a href="#" class="mentions-legales">Mentions légales</a>
                    <span>© 2026 NOIR</span>
                </div>
            </footer>
        </>
    );
}

export default Footer