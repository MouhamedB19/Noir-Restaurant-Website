function TitreSection({titre, numero, sousTitre})
{
    return(
        <>
            <div className="content-title">
                <h2 className="title-section main-title animation-bottom">
                    <h2 className="numero">{numero < 10 ? "0":""}{numero}.</h2>
                    {titre}
                </h2>
                {sousTitre && (
                    <span>
                        {sousTitre}
                    </span>
                )} 
            </div>
            
        </>
    );
}

export default TitreSection;