import '../styles/philosophy.css'
import dishPhilosophy from '../assets/dish_philosophy.jpg'
import useReveal from './fonctions_utilitaires/useReveal'
import useLoaded from './fonctions_utilitaires/useLoaded'

import TitreSection from './composants_reutilisables/TitreSection'

function Philosophy() {
    const [elementGauche, visibleGauche] = useReveal();
    const [elementDroite, visibleDroite] = useReveal();

    const imageChargee = useLoaded(dishPhilosophy);
    return (
        <>
            <section className="philosophy">
                <div className="box-philosophy container">
                    <div className={`philosophy-content ${visibleGauche && imageChargee ? "animation-left": ""}`} ref={elementGauche}>
                        <TitreSection titre="Notre philosophie" numero={1}/>
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