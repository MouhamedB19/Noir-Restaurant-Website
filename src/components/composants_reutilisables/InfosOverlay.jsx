function InfosOverlay({titre, description})
{
    return(
        <div className="infos-overlay">
            <h3 className="infos-overlay-titre">{titre}</h3>
            <p className="infos-overlay-description">{description}</p>
        </div>

    );
}

export default InfosOverlay;