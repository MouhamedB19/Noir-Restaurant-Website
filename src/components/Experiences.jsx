import Signature from "../assets/dinning_signature.jpg"
import Chef from "../assets/chef_serving.jpg"
import Private from "../assets/private_dinning.jpg"
import "../styles/experiences.css"
function Experiences()
{
    return (
        <>
            <div className="box-experiences">
                <div className="card-experiences little">
                    <div className="overlay overlay_label">
                        <div className="label-section">
                            <h3 className="label">Dîner signature</h3>
                        </div>
                    </div>
                    <img src={Signature} alt="" />
                </div>
                <div className="card-experiences big">
                    <div className="overlay">
                        <div className="label-section">
                            <span className="label">À la table du chef</span>
                        </div>
                    </div>
                    <img src={Chef} alt="" />
                </div>
                <div className="card-experiences big">
                    <div className="overlay">
                        <div className="label-section">
                            <span className="label">Dîner privé</span>
                        </div>
                    </div>
                    <img src={Private} alt=""/>
                </div>

            </div>
        </>
    );
}

export default Experiences