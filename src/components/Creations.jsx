import patisserie from '../assets/patisserie_creation.png'
import precision from '../assets/precision_creation.png'
import sauce from '../assets/sauce_creation.png';
import cooked from '../assets/cooked_dish.png'
import finished from '../assets/finished_dish.png'

import BricMasonry from './composants_reutilisables/BricMasonry';

import '../styles/creations.css'



function Creations()
{   
    const listeInfos = [
        { titre: "1. Patisserie", description: "Découvrez nos créations sucrées, alliant saveurs et esthétique.", description_courte: "Découvrez nos créations sucrées",source: patisserie },
        { titre: "2. Précision", description: "Chaque plat est préparé avec une attention méticuleuse aux détails.", description_courte: "Précision dans la préparation", source: precision },
        { titre: "3. Sauce", description: "Nos sauces maison ajoutent une touche unique à chaque création.", description_courte: "Sauces maison", source: sauce },
        { titre: "4. Cuisson", description: "Des plats cuisinés à la perfection pour ravir vos papilles.", description_courte: "Cuisson parfaite", source: cooked },
        { titre: "5. Finition", description: "La présentation finale de nos plats est un art en soi.", description_courte: "Présentation artistique", source: finished }
    ];
    const listesComposants = [];
    for(let i = 0; i < listeInfos.length; i++) {
        listesComposants.push(
            <BricMasonry
                key={i}
                source={listeInfos[i].source}
                titre={listeInfos[i].titre}
                description={listeInfos[i].description}
                description_courte={listeInfos[i].description_courte}
            />
        );
    }
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

                            {listesComposants}
                        </div>
                    </div>
                </div>
            </section>  
        </>
    );
}

export default Creations