import useReveal from "../fonctions_utilitaires/useReveal";
import useLoaded from "../fonctions_utilitaires/useLoaded";
import InfosOverlay from "./InfosOverlay";

function BricMasonry({source, titre, description})
{
    const [elementConcerne,visible] = useReveal();
    const loaded = useLoaded(source);
    return(
        <>
            <div className={`creation-item ${visible && loaded ? 'animation-bottom': ''}`}  ref={elementConcerne}>
                <div className="overlay">
                    <InfosOverlay titre={titre} description={description} />
                </div>
                <img src={source} alt="" />
            </div>
        </>
    );
}

export default BricMasonry;