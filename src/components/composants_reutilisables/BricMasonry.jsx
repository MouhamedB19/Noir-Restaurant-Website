import useReveal from "../fonctions_utilitaires/useReveal";
import useLoaded from "../fonctions_utilitaires/useLoaded";
import {InfosOverlay,InfosBric} from "./InfosOverlay";


function BricMasonry({source, titre, description, description_courte})
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
                <InfosBric titre={titre} description={description_courte} />
            </div>
        </>
    );
}

export default BricMasonry;