function Decouvrir({label, lien}){
    return(
        <>
            <a href={lien} className="btn-hero">
                {label}
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
        </>
    );
}

export default Decouvrir