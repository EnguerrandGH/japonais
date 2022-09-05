let translateInput = document.querySelector("input");
let translateButton = document.querySelector("#translateButton");
let currentWord = document.querySelector("#currentWord");
let solutionButton = document.querySelector('#solutionButton');
let solutions = document.querySelector('#solutions');
let inputBox = document.querySelector("#inputBox");
let progress = document.querySelector("#progress"); 

let vocularFirstGroup = [["abiru","Se baigner"],["ageru","donner"],["akeru","ouvrir"],["atsumeru","rassembler","collecter"],["awateru","paniquer","s'agiter"],["butsukeru","frapper contre qqch"],["dekakeru","sortir de chez soi","aller se balader"],["dekiru","être capable","réussir"],["deru","sortir"],["eru","obtenir"],["fueru","augmenter","accroitre"],["fureru","toucher","frôler"],["fuseru","baisser sa tête"],
                        ["hajimeru","commencer"],["hanareru","se séparer (de)","quitter"],["hareru","faire beau temps"],["hazureru","se detacher","se décoller","différer"],["heru","diminuer","se réduire"],["hikiukeru" ,"prendre charge", "s'occuper (de)" ],["hiromeru" ,"élargir", "rendre populaire" ],["hodokeru" ,"détacher", "dénouer" ],["homeru" ,"louanger", "glorifier" ],["horeru" ,"tomber amoureux" ],["iitsukeru" ,"ordonner", "commander" ],
                        ["ijimeru" ,"malmener", "brutaliser" ],["ikiru" ,"vivre"],["ireru" ,"mettre", "introduire", "faire entrer" ],["iru" ,"être (emplacement)"],["kaeru" ,"changer", "modifier" ],["kajiru" ,"ronger", "grignoter" ],["kakaeru" ,"tenir dans ses bras", "porter sur ses épaules" ],["kakeru" ,"accrocher", "telephoner", "s'assoir, parier"],["kamaeru" ,"se tenir prêt", "prendre un pause" ],["kangaeru" ,"réfléchir" ],["kanjiru" ,"sentir", "ressentir" ],["kareru" ,"flétrir", "se dessécher" ],
                        ["kariru" ,"emprunter", "louer" ],["kasaneru" ,"entasser", "répéter"],["katameru" ,"durcir", "endurcir" ],["katazukeru" ,"achever (une tache)" ,"ranger", "mettre de l'ordre" ],["kazoeru", "compter", "nombrer" ],["kieru" ,"disparaitre", "s'éteindre" ],["kikaeru" ,"se changer (vêtement)" ],["kikoeru" ,"être audible", "arriver à entendre" ],["kimeru" ,"décider" ],["kinjiru" ,"interdire", "prohiber" ],["kireru" ,"se couper" ,"expirer" ,"s'énerver" ],["kiru" ,"s'habiller" ],["kizutsukeru" , "blesser", "faire du mal"],
                        ["koboreru", "se renverser", "déborder" ],["koeru" ,"excéder", "dépasser"],["kogeru" ,"être brulé", "se carboniser" ],["kotaeru" ,"répondre" ],["kowareru" ,"se casser", "se détruire" ],["kuraberu" ,"comparer" ],["kureru" ,"faire nuit", "se coucher (le soleil)" ],["kurushimeru" ,"infliger", "torturer", "faire souffrir" ],["kuwadateru" ,"planifier" ],["kuwaeru" ,"ajouter", "inclure" ],["kuzureru" ,"s'effondrer", "s'écrouler" ],["machigaeru" ,"se tromper" ],["mageru" ,"tordre" ],["makeru" ,"perdre" ],["mazeru" ,"mélanger", "mixer" ],
                        ["mieru" ,"être visible", "pouvoir voir" ],["miru" ,"voir", "regarder", "observer" ],["miseru" ,"montrer", "démontrer", "manifester" ],["mitomeru" ,"admettre", "reconnaitre" ],["mitsukeru" ,"trouver" ],["mokeru" ,"faire du profit", "gagner de l'argent" ],["moreru" ,"fuir/s'échapper (liquide ou information)" ],["moteru" ,"être séduisant", "plaire" ],["motomeru" ,"demander", "réclamer" ,"chercher" ,"se procurer", "acheter" ],["mukaeru" ,"accueillir", "recevoir", "aller chercher (qqun)" ],["nagameru" ,"regarder" ],["nagareru" ,"couler", "affluer" ],
                        ["nageru" ,"jeter", "lancer" ],["nagusameru" ,"consoler", "réconforter" ],["namakeru" ,"être paresseux", "être fainéant" ],["nameru" ,"lecher" ],["naraberu" ,"aligner", "arranger un à coté de l'autre" ],["nareru" ,"s'habituer" ],["neru" ,"dormir", "aller au lit"],["nigeru" ,"s'enfuir", "s'échapper" ],["niru" ,"ressembler" ],["norikaeru" ,"transiter" ],["noseru" ,"poser au dessus (de)", "mettre a bord" ],["nureru" ,"se mouiller" ],["oboeru", "apprendre par coeur", "mémoriser" ],["ochiru" ,"tomber", "chutter" ,"échouer", "rater" ],["okiru" ,"se réveiller" ],["okureru" ,"être en retard" ],["oreru" ,"se casser", "se rompre" ],["oriru" ,"descendre" ],["osaeru" ,"retenir", "maintenir" ],["oshieru" ,"enseigner", "instruire" ],["osoreru" ,"craindre", "avoir peur" ],["sadameru", "decider", "établir" ],["sageru" ,"abaisser", "réduire", "diminuer" ,"accrocher", "suspendre", "pendre" ],["sakeru" ,"éviter", "esquiver" ],["sasaeru" ,"soutenir", "encourager", "supporter" ],["shimeru" ,"fermer" ],["shinjiru" ,"croire", "faire confiance" ],["shiraberu" ,"rechercher", "enquêter","examiner", "analyser"  ],["shiraseru" ,"prévenir", "notifier" ],["sodateru" ,"éduquer", "dresser" ,"faire pousser", "cultiver"],["sugiru" ,"passer", "dépasser", "excéder" ],["sugureru" ,"exceller" ],["suteru" ,"jeter" ],["taberu" ,"manger" ],["tameru", "économiser", "épargner", "sauvegarder" ,],["taoreru" ,"tomber", "s'écrouler", "s'effondrer" ],["tariru" ,"suffire" ],["tasukeru" ,"aider", "sauver" ],["tateru" ,"construire", "bâtir" ],["tokeru" ,"fondre", "se dissoudre" ],["tomeru" ,"arrêter", "empêcher" ],["toreru" ,"se détacher", "se décoller", "s'enlever" ],["torikaeru" ,"échanger" ],["tsuzukeru" ,"continuer" ],["ueru" ,"planter", "semer" ],["umareru" ,"naître" ],["wakareru" , "quitter", "se séparer (de)","se diviser", "se répartir"  ],["wakeru" ,"diviser", "dispacher", "répartir" ],["wasureru" ,"oublier" ],["yabureru" ,"se déchierer" ,"être battu", "perdre" ],["yakeru" ,"brûler" ],["yameru" ,"arrêter", "abandonner (qqch)", "resigner" ],["yaseru" ,"perdre du poids", "devenir mince" ],["tsukareru","se fatiguer"]];

let vocularFirstGroupCopy = vocularFirstGroup;
let solutionsString = "";
let randomNumber = 0;
let randomNumer2 = 0;
let listOfWords = [];
let wordSelected = "";
let wordsFounds = 0;
let vocLength = vocularFirstGroup.length;

function progressRefresh () {
    progress.innerHTML = `${wordsFounds}/${vocLength}`;
    wordsFounds++;
}
progressRefresh ();

function nextVocularFirstGroup () {


    if (vocularFirstGroupCopy.length != 0) {

        randomNumber =  Math.floor(Math.random() * vocularFirstGroup.length);
        randomNumer2 = Math.floor(Math.random() * vocularFirstGroup[randomNumber].length);

        currentWord.innerHTML = `${vocularFirstGroup[randomNumber][randomNumer2]}`;

        listOfWords = vocularFirstGroup[randomNumber];
        wordSelected = vocularFirstGroup[randomNumber][randomNumer2];

        vocularFirstGroupCopy.splice(randomNumber, 1);
    }
    else {
        currentWord.innerHTML = `fini`;

    }

}


nextVocularFirstGroup();

function compareWordAndList (word, list) {
    let index = 0;

    while (index < list.length)
    {   
        if ( word.localeCompare(list[index], 'fr', { sensitivity: 'base' }) === 0 )
            return true;
        index++;
    }
    return false;
}

function sameVocularFirstGroup(userInput) {

    if (compareWordAndList(userInput, listOfWords))
    {
        inputBox.style.backgroundColor = '#617a2f';
        setTimeout(changeInputBoxColor,200);
        solutions.innerHTML = ``;
        progressRefresh();
        return true;
    }
    else {
        inputBox.style.backgroundColor = 'rgb(181, 52, 52)';
        setTimeout(changeInputBoxColor,200);
        return false;
    }
}


function changeInputBoxColor() {
    inputBox.style.backgroundColor = '#272522';
}

translateButton.addEventListener("click", () => {

    if (sameVocularFirstGroup (translateInput.value)){
        nextVocularFirstGroup();
    }
    translateInput.value = '';

});

document.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        if (sameVocularFirstGroup (translateInput.value)){

            nextVocularFirstGroup();
    
        }
        translateInput.value = '';
    }
});

solutionButton.addEventListener("click", () => {
    solutions.innerHTML = "";
    solutionsString = "";
    for (let index = 0 ; index < listOfWords.length ; index++)
    {
        (index === 0 ? solutionsString += `<strong>${listOfWords[index]}</strong>` : solutionsString += `, ${listOfWords[index]}`);
    }
    solutions.innerHTML = `${solutionsString}`;
    inputBox.focus();
});

