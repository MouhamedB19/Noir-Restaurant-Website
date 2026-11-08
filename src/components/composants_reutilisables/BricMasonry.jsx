import useReveal from "../fonctions_utilitaires/useReveal";
import useLoaded from "../fonctions_utilitaires/useLoaded";

function BricMasonry({source})
{
    const [elementConcerne,visible] = useReveal();
    const loaded = useLoaded(source);
    return(
        <>
            <div className={`creation-item ${visible && loaded ? 'animation-bottom': ''}`}  ref={elementConcerne}>
                <div className="overlay"></div>
                <img src={source} alt="" />
            </div>
        </>
    );
}

export default BricMasonry;