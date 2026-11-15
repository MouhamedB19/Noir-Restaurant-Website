import useReveal from "../fonctions_utilitaires/useReveal";
import useLoaded from "../fonctions_utilitaires/useLoaded";
import Decouvrir from "./Decouvrir"

function BricExperiences({titre, description, image, taille}) {
    const [elementConcerne,visible] = useReveal();
    const loaded = useLoaded(image);
    return(
        <>
            <div className={`card-experiences ${taille} ${visible && loaded ? 'animation-bottom': ''}`}  ref={elementConcerne}>
                <div className="overlay">
                    <div className="label-section">
                        <h3 className="label">{titre}</h3>
                        <span>{description}</span>
                        <Decouvrir label="Découvrir" lien="#"/>
                    </div>
                </div>
                <img src={image} alt="" />
            </div>
        </>
    );
}

export default BricExperiences;