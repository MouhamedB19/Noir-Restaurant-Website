function InfosOverlay({titre, description})
{
    return(
        <div className="infos-overlay">
            <h3 className="infos-overlay-titre">{titre}</h3>
            <p className="infos-overlay-description">{description}</p>
        </div>

    );
}

function InfosBric({titre, description})
{
    return(
        <div className="infos-bric">
            <h3 className="infos-overlay-titre bric-text">{titre}</h3>
            <p className="infos-overlay-description bric-description">{description}</p>
        </div>

    );
}

export {InfosOverlay, InfosBric};