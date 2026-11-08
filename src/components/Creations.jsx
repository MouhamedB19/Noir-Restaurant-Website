import patisserie from '../assets/patisserie_creation.png'
import precision from '../assets/precision_creation.png'
import sauce from '../assets/sauce_creation.png';
import cooked from '../assets/cooked_dish.png'
import finished from '../assets/finished_dish.png'

import BricMasonry from './composants_reutilisables/BricMasonry';

import '../styles/creations.css'



function Creations()
{   

    return(
        <>
            <section class="creations">
                <div className="box-container container">
                    <div className="creations-content">
                        <div className="box-title">
                            <h2 className="title-section main-title">
                                <h2 className="numero">02.</h2>
                                Les créations du chef
                            </h2>
                        </div>
                        <div className="grid-creations">

                            <BricMasonry source={patisserie} />
                            <BricMasonry source={precision}/>
                            <BricMasonry source={sauce}/>
                            <BricMasonry source={cooked}/>
                            <BricMasonry source={finished}/>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    );
}

export default Creations