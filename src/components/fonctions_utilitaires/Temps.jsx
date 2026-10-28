function DateAujourdhui()
{
    const today = new Date().toISOString().split("T")[0];
    return today;
}

function AnneeActuelle() {
    return new Date().getFullYear();
}

function MoisActuel() {
    return new Date().getMonth() + 1;
}

function JourActuel() {
    return new Date().getDate();
}

export default {DateAujourdhui,AnneeActuelle,MoisActuel,JourActuel}

