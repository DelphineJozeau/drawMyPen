/* Crée une fonction `drawMyPen(){:js}` qui retourne l'état de ton crayon en ASCII Art en fonction du temps passé en cours. Tu trouveras un exemple de crayons ci-dessous. Attention, petite subtilité : la gomme a deux étages en début d'année scolaire, mais se réduit à un seul étage à partir du mois de mars.*/

//j'ai fait un html pour pouvoir afficher le crayon en fonction du mois selectionné dans un input select plus tard

const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};


function drawMyPen(mois) {
    //afficher la mine du crayon
    mineDuCrayon();
    //afficher les (calendrierDuCrayon.mois) etages du crayon
    etagesDuCrayon(mois)
    //afficher la gomme : mars avril mai juin ou de 4 à 1 : petite gomme
    gommeDuCrayon(mois);
}

function mineDuCrayon() {
    //gestion de l'affichage des caractères spéciaux à trouver
    console.log("/\\");
    console.log("/__\\");
}

function etagesDuCrayon(month) {
    //récupérer le mois et sa valeur d'étage
    let etages = calendrierDuCrayon.month

    //pour septembre faire 10 étages. pour le mois choisit, faire son nombre d'étage
        for (let index = 1; index >= etages; index++) {
            console.log("|||")
        }
}

function gommeDuCrayon(month) {
    let etages = calendrierDuCrayon.month

    if (etages > 4) {
        console.log("|__|");
        console.log("|  |");
        console.log("|__|");
    }

    else {
        console.log("|__|");
        console.log("|__|");
    }
}