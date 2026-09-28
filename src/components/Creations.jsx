import patisserie from '../assets/patisserie_creation.png'
import precision from '../assets/precision_creation.png'
import sauce from '../assets/sauce_creation.png';

function Creations()
{
    return(
        <>
        <div className="box-creations">
            <h2>Les créations du chef</h2>
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
            </div>
        </>
    );
}

export default Creations