import '../styles/philosophy.css'
import dishPhilosophy from '../assets/dish_philosophy.jpg'

function Philosophy() {
    return (
        <>
            <div className="box-philosophy">
                <div className="left-box">
                    <h2 className="title-section">
                        <h2 className="numero">01.</h2>
                        Notre philosophie
                    </h2>
                    <h3>
                        L'essentiel est dans ce que l'on choisit
                    </h3>
                    <p>
                        Chez NOIR, nous imaginons une cuisine
                        contemporaine guidée par le produit,
                        la précision et la simplicité.
                    </p>
                </div>
                
                <img src={dishPhilosophy} alt="dish-philosophy" className="img-philosophy" />
            </div>
        </>
    );
}

export default Philosophy