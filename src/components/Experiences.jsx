import Signature from "../assets/dinning_signature.jpg"
import Chef from "../assets/chef_serving.jpg"
import Private from "../assets/private_dinning.jpg"

import "../styles/experiences.css"

import BricExperiences from "./composants_reutilisables/BricExperiences"

import useReveal from "./fonctions_utilitaires/useReveal"
import TitreSection from "./composants_reutilisables/TitreSection"

function Experiences()
{
    const [element, visible] = useReveal();
    const experiences = [
        {
            titre: "Dîner signature",
            description: "Une expérience gastronomique où chaque détail trouve sa place.",
            image: Signature,
            taille: "normal"
        },
        {
            titre: "À la table du chef",
            description: "Découvrez les gestes, les produits et la passion qui donnent vie à chaque assiette.",
            image: Chef,
            taille: "normal"
        },
        {
            titre: "Dîner privé",
            description: "Une parenthèse privilégiée pour vos évènements les plus importants.",
            image: Private,
            taille: "big"
        }
    ];
    
    const listeExperiences = [];
    for(let i = 0; i < experiences.length; i++) {
        listeExperiences.push(
            <BricExperiences
                key={i}
                titre={experiences[i].titre}
                description={experiences[i].description}
                image={experiences[i].image}
                taille={experiences[i].taille}
            />
        );
    }
    return (
        <>  
            <section className="experiences">
                <div className="box-experiences container">
                    <div className={`box-title-experiences ${visible ? "animation-bottom" : ""}`} ref={element}>
                        <TitreSection titre="Expériences" numero={3} sousTitre="Des moments pensés comme des créations. Parce qu'un dîner ne se résume pas à ce qui se trouve dans l'assiette." />
                    </div>
                    <div className="content-experiences">
                        {listeExperiences}
                    </div>
                </div> 
            </section>
            
        </>
    );
}

export default Experiences