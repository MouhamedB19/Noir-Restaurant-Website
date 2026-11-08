import '../styles/hero.css'
import Decouvrir from './composants_reutilisables/Decouvrir'
import heroImage from '../assets/hero_image.jpg'
import useLoaded from './fonctions_utilitaires/useLoaded.js'

function Hero() {
    const imageChargee = useLoaded(heroImage);
    return (
        <>
            <section className="hero-section">
                <div className={`box-hero container ${imageChargee ? 'animation-bottom': ''}`}>
                    <h1 className={`title-hero ${imageChargee ? 'animation-bottom': ''}`}>NOIR</h1>
                    <h2 className={`sub-title-hero ${imageChargee ? 'animation-bottom': ''}`}>L'art de la cuisine contemporaine.</h2>
                    <span className={`text-hero ${imageChargee ? 'animation-bottom': ''}`}>Une expérience gastronomique pensée dans les moindres détails.</span>
                    <Decouvrir label="Découvrir notre carte" lien="#menu"/>
                </div>
            </section>
        </>
    )
}

export default Hero