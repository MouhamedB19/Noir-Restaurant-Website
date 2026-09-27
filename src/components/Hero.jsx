import '../styles/hero.css'

function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="box-hero">
                    <h1 className="title-hero">NOIR</h1>
                    <h2 class="sub-title-hero">L'art de la cuisine contemporaine.</h2>
                    <span className="text-hero">Une expérience gastronomique pensée dans les moindres détails.</span>
                    <a href="#menu" className="btn-hero">
                        Découvrir notre carte
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 12H19M19 12L13 6M19 12L13 18"
                                stroke="#F2EEE7"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero