import '../styles/philosophy.css'
import dishPhilosophy from '../assets/dish_philosophy.jpg'
import useReveal from './fonctions_utilitaires/useReveal'
import useLoaded from './fonctions_utilitaires/useLoaded'


function Philosophy() {
    const [elementGauche, visibleGauche] = useReveal();
    const [elementDroite, visibleDroite] = useReveal();

    const imageChargee = useLoaded(dishPhilosophy);
    return (
        <>
            <section className="philosophy">
                <div className="box-philosophy container">
                    <div className={`philosophy-content ${visibleGauche && imageChargee ? "animation-left": ""}`} ref={elementGauche}>
                        <h2 className="title-section main-title"> {/* Rappel: créer un composant réutilisable pour title-section*/}
                            <h2 className="numero">01.</h2>
                            Notre philosophie
                        </h2>
                        <h3>
                            L'essentiel est dans ce que l'on choisit
                        </h3>
                        <img src={dishPhilosophy} className={`img-philosophy substitute ${visibleDroite && imageChargee ? "animation-right": ""}`} ref={elementDroite}/>
                        <p>
                            Chez NOIR, nous imaginons une cuisine
                            contemporaine guidée par le produit,
                            la précision et la simplicité.
                        </p>
                    </div>

                    <img src={dishPhilosophy} alt="dish-philosophy" ref={elementDroite} className={`img-philosophy principal ${visibleDroite && imageChargee ? "animation-right": ""}`} />
                </div>
            </section>
            
        </>
    );
}

export default Philosophy