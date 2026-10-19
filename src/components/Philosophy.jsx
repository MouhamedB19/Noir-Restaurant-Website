import '../styles/philosophy.css'
import dishPhilosophy from '../assets/dish_philosophy.jpg'

function Philosophy() {
    return (
        <>
            <section className="philosophy">
                <div className="box-philosophy container">
                    <div className="philosophy-content">
                        <h2 className="title-section main-title"> {/* Rappel: créer un composant réutilisable pour title-section*/}
                            <h2 className="numero">01.</h2>
                            Notre philosophie
                        </h2>
                        <h3>
                            L'essentiel est dans ce que l'on choisit
                        </h3>
                        <img src={dishPhilosophy} alt="" className="img-philosophy substitute"/>
                        <p>
                            Chez NOIR, nous imaginons une cuisine
                            contemporaine guidée par le produit,
                            la précision et la simplicité.
                        </p>
                    </div>

                    <img src={dishPhilosophy} alt="dish-philosophy" className="img-philosophy principal" />
                </div>
            </section>
            
        </>
    );
}

export default Philosophy