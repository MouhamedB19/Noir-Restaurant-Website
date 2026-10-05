import '../styles/hero.css'
import Decouvrir from './composants_reutilisables/Decouvrir'
function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="box-hero">
                    <h1 className="title-hero">NOIR</h1>
                    <h2 class="sub-title-hero">L'art de la cuisine contemporaine.</h2>
                    <span className="text-hero">Une expérience gastronomique pensée dans les moindres détails.</span>
                    <Decouvrir label="Découvrir notre carte" lien="#menu"/>
                </div>
            </section>
        </>
    )
}

export default Hero