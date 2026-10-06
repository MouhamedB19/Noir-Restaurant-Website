import Signature from "../assets/dinning_signature.jpg"
import Chef from "../assets/chef_serving.jpg"
import Private from "../assets/private_dinning.jpg"
import "../styles/experiences.css"
import Decouvrir from "./composants_reutilisables/Decouvrir"

function Experiences()
{
    return (
        <>
            <div className="box-experiences">
                <div className="box-title-experiences">
                    <h2 className="title-section">
                        <h2 className="numero">03.</h2>
                        Expériences
                    </h2>
                    <span>
                        Des moments pensés comme des créations. Parce qu'un dîner ne se résume pas à ce qui se trouve dans l'assiette.
                    </span>
                </div>
                <div className="content-experiences">
                    <div className="card-experiences little">
                        <div className="overlay">
                            <div className="label-section">
                                <h3 className="label">Dîner signature</h3>
                                <span>Une expérience gastronomique où chaque détail trouve sa place.</span>
                                <Decouvrir label="Découvrir" lien="#"/>
                            </div>
                        </div>
                        <img src={Signature} alt="" />
                    </div>
                    <div className="card-experiences big">
                        <div className="overlay">
                            <div className="label-section">
                                <h3 className="label">À la table du chef</h3>
                                <span>Découvrez les gestes, les produits et la passion qui donnent vie à chaque assiette.</span>
                                <Decouvrir label="Découvrir" lien="#"/>
                            </div>
                        </div>
                        <img src={Chef} alt="" />
                    </div>
                    <div className="card-experiences medium">
                        <div className="overlay">
                            <div className="label-section">
                                <h3 className="label">Dîner privé</h3>
                                <span>Une parenthèse privilégiée pour vos évènements les plus importants.</span>
                                <Decouvrir label="Découvrir" lien="#"/>
                            </div>
                        </div>
                        <img src={Private} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experiences