import '../../styles/menuburger.css'

function MenuBurger()
{
    return(
        <>
            <div className="burger-container">
                <div className="burger-content">
                    <ul className="nav-list">
                        <li className="chosen"><a href="#">Accueil</a></li>
                        <li><a href="#" >Philosophie</a></li>
                        <li><a href="#">Créations</a></li>
                        <li><a href="#">Expériences</a></li>
                        <li><a href="#">Reservations</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MenuBurger;