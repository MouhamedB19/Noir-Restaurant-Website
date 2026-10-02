import Signature from "../assets/dinning_signature.jpg"
import Chef from "../assets/chef_serving.jpg"
import Private from "../assets/private_dinning.jpg"
import "../styles/experiences.css"
function Experiences()
{
    return (
        <>
            <div className="box-experiences">
                <div className="card-experiences">
                    <img src={Signature} alt="" />
                </div>
                <div className="card-experiences big">
                    <img src={Chef} alt="" />
                </div>
                <div className="card-experiences big">
                    <img src={Private} alt=""/>
                </div>

            </div>
        </>
    );
}

export default Experiences