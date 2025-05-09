/* Crée une fonction `drawMyPen()` qui retourne l'état de ton crayon en ASCII Art en fonction du temps passé en cours. Tu trouveras un exemple de crayons ci-dessous. Attention, petite subtilité : la gomme a deux étages en début d'année scolaire, mais se réduit à un seul étage à partir du mois de mars.*/

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

//test récupération de valeur du mois OK
const etageGrandCrayon = calendrierDuCrayon.septembre;
console.log("test Numero Septembre : ",etageGrandCrayon)

//fonction principale qui dessine tout le crayon en fonction du mois
function drawMyPen(mois) {
    let result = "";
    result += mineDuCrayon();
    result += etagesDuCrayon(mois);
    result += gommeDuCrayon(mois);
    
    document.getElementById("dessineLeCrayon").textContent = result;
}


function mineDuCrayon() {
    //gestion de l'affichage des caractères spéciaux
    console.log(" /\\");
    console.log("/__\\");

    let resultMine = "";
}
//test affichage de la mine :
//mineDuCrayon();



function etagesDuCrayon(month) {
    //récupérer le mois et sa valeur d'étage
    let etages = calendrierDuCrayon[month];

    //pour septembre faire 10 étages. pour le mois choisit, faire son nombre d'étage
        for (let i = 0; i < etages; i++) {
            console.log("||||")
        }
}
//test etagesDuCrayon(mois)
//etagesDuCrayon("septembre")


function gommeDuCrayon(month) {
    let etages = calendrierDuCrayon[month];

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
//test affichage de la gomme OK
//gommeDuCrayon("septembre");

//execution du code
drawMyPen("novembre");
