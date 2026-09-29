import patisserie from '../assets/patisserie_creation.png'
import precision from '../assets/precision_creation.png'
import sauce from '../assets/sauce_creation.png';
import cooked from '../assets/cooked_dish.png'
import finished from '../assets/finished_dish.png'

import '../styles/creations.css'

function Creations()
{
    return(
        <>
            <div className="container">
                <div className="box-creations">
                    <h2 className="title-section">Les créations du chef</h2>
                </div>
                <div className="grid-creations">
                    <div className="creation-item">
                        <img src={patisserie} alt="patisserie" />
                    </div>
                    <div className="creation-item">
                        <img src={precision} alt="precision" />
                    </div>
                    <div className="creation-item">
                        <img src={sauce} alt="sauce" />
                    </div>
                    <div className="creation-item">
                        <img src={cooked} alt="cooked" />
                    </div>
                    <div className="creation-item">
                        <img src={finished} alt="finished" />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Creations