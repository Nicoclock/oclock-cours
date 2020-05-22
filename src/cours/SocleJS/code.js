export const turnLeft = `turnLeft();`;
export const turnRight = `turnRight();`;
export const moveForward = `moveForward();`;
export const surprise = `surprise();`;
export const makeBeautiful = `makeBeautiful();`;

export const commentaires = `//commentaire sur une ligne
var x = 0; //commentaire en fin de ligne
/*Commentaire sur
plusieurs lignes*/`;

export const firstName = `var firstName = "Nico";
console.log(firstName) // Nico;

var otherName;
console.log(otherName); //undefined`;

export const firstName2 = `firstName = "Nicolas";
console.log(firstName);`;

export const isNice = `var isNice = true;
console.log(isNice);

isNice = false;
console.log(isNice)`;

export const firstConcat = `console.log("Nico" + " " + "Charpin");

var prenom = "Nico";
var nom = "Charpin";
console.log(prenom + " " + nom);`;

export const plus = `"2" + "5"; //25
2 + 5; //7
"2" + 5; //25`;

export const addSub = `5 + 18; //23
25.3 + 24.7; //50
12 - 5; //7
17.3 - 4.8; //12.5`;

export const multDiv = `25 * 4; //100
12.5 * 4; //50
100 / 5; //20
25.5 / 2; //12.75`;

export const consoleLog = `console.log("Hello, Nico vous parle");
console.log(7 + 5);
var book = "Dune";
console.log(book);`;

export const consoleLog2 = `console.log("test", true, 12345, book);`;

export const book = `//ceci est une instruction
var title = "Harry Potter and the goblet of fire";
var author = 'J.K. Rowling';
var yearOfParution = 2000;
var price = 12.5;
var isRead = true;
console.log(title + " de " + author);`;

export const bookDesc = `var phrase = title + " de " + author + " - Année de sortie : " 
    + yearOfParution + " - Prix : " + price + " - Déjà lu : " + isRead;
console.log(phrase);`;

export const addition = `var number1 = 12.5;
var number2 = 375;

//addition
var addition = number1 + number2;
console.log("addition", addition);
`;

export const operations = `//soustraction
var subtraction = number2 - number1;
console.log("soustraction", subtraction);

//multiplication
var multiplication = number1 * number2;
console.log("multiplication", multiplication);

//division
var division = number1 / number2;
console.log("division", division);
`;

export const alertBox = `alert("Mon chouette message !");`;

export const promptBox = `//alert("Mon chouette message !");
var firstName = prompt("Quel est votre prenom ?");
console.log(firstName);`;

export const promptBoxes = `//exo : afficher Bonjour prenom nom, vous avez age ans
var lastName = prompt("Quel est votre nom ?");
var age = prompt("Quel est votre âge ?");
console.log("Bonjour "+firstName+" "+lastName+", vous avez "+age+" ans");`;

export const confirmBox = `//demander à l'utilisateur s'il veut jouer à un jeu en utilisant confirm
var result = confirm("Voulez-vous jouer à un jeu ?");
console.log("réponse", result);
if (result === true) {
    console.log("Bienvenue !");
}
else {
    console.log("Une prochaine fois alors ...");
}
`;

export const exo1 = `var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer Noire";`;

export const exo2Prompt = `var reponse1 = prompt(question1);`;

export const exo2Algo = `SI (réponse égale solution)
ALORS affiche "Gagné !"
SINON affiche Perdu ...`;

export const exo2Condition = `if (reponse1 === solution1) {
    alert("Gagné !");
}
else {
    alert("Perdu...");
}`;

export const exo3Reponse = `var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;
var reponse2 = prompt(question2);`;

export const parseIntTest = `parseInt("35"); //35
parseInt("35.5"); //35, parseInt renvoie un entier
parseInt("35px"); //35

var num = parseInt("35");
typeof num; //number

var str = "test";
typeof str; //string

parseInt("test"); //NaN, c'est quoi ce truc bizarre ?`;

export const NumberTest = `Number("35"); //35
Number("35.5"); //35.5, prend en compte les float

var num = Number("35.5");
typeof num; //number

Number("35px"); //NaN`;


export const exo3Number = `var reponse2Number = paserInt(reponse2, 10);
if (reponse2Number === solution2) {
    alert("Gagné !");
}
else {
    alert("Perdu...")
}`;

export const scoreDeclare = `var score = 0;`;

export const scoreIncrement = `{
    alert("Gagné !);
    score = score + 1;
    //score += 1;
    //score++;
}`;

export const scoreDisplay = `//SI score supérieur à 1 ALORS afficher avec s SINON afficher sans s
var message = "";
if (score > 1) {
    message = "Vous avez " + score + " bonnes réponses";
}
else {
    message = "Vous avez " + score + " bonne réponse";
}
alert(message);`;

export const checkReponseDeclare = `var checkReponse = function(reponse, solution) {
// check si solution est number en vérifiant son type
//SI solution est de type number ALORS on convertit reponse avec parseInt ou Number

//SI reponse égale la solution
//ALORS affiche "Gagné !", mise à jour du score
//SINON affiche "Perdu ..."

}`;

export const checkReponseCast = `if (typeof solution === "number) {
    reponse = parseInt(reponse, 10);
}`;

export const checkReponseCompare = `if (reponse === solution) {
    alert("Gagné !");
    score += 1;
} 
else {
    alert("Perdu...");
}`;

export const checkReponseCall = `var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer Noire";
var reponse1 = prompt(question1);
checkReponse(reponse1, solution1)

var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;
var reponse2 = prompt(question2);
checkReponse(reponse2, solution2)
`;

export const displayScore = `var displayScore = function() {
    var message = "";
    if (score > 1) {
        message = "Vous avez " + score + " bonnes réponses";
    }
    else {
        message = "Vous avez " + score + " bonne réponse";
    }
    alert(message);
}`;

export const carreV1 = `var carre = function(num) {
    var square = num * num;
    console.log(num + " au carré : " + square);
}
carre(12);`;

export const isNaN = `var test = "text";
isNaN(text);
var num = 12;
isNaN(num);`;

export const carreV2 = `var carre = function(numStr) {
    var num = Number(numStr);
    if (isNaN(num)) {
        console.log("Saisissez un nombre !");
    } 
    else {
        var square = num * num;
        console.log(num + " au carré : " + square);
    }
}
var numberString = prompt("Quel nombre voulez-vous mettre au carré ?");
carre(numberString);`;

export const carreV3 = `var carre = function(numStr) {
    var num = Number(numStr);
    if (isNaN(num)) {
        console.log("Saisissez un nombre !");
    } 
    else {
        var square = Math.pow(num, 2);
        console.log(num + " au carré : " + square);
    }
}
var numberString = prompt("Quel nombre voulez-vous mettre au carré ?");
carre(numberString);`;

export const randomMultiplyV1 = `var randomMultiply = function(num) {
    var randomNum = num * Math.random();
    console.log(randomNum);
}
randomMultiply(49);`;

export const randomMultiplyV2 = `var randomMultiply = function(num) {
    var randomNum = num * Math.random();
    var randomInt = Math.floor(randomNum);
    console.log(randomInt);
}
randomMultiply(49);`;

export const emptyTab = `var prenoms = [];
console.log(prenoms);`;

export const prenomsTab = `var prenoms = ["Philippe", "Simon", "Etienne"];`;

export const prenomsRead = `console.log(prenoms[1];`;

export const prenomsAdd = `prenoms[3] = "Nico";
console.log(prenoms);`;

export const prenomsEmptyVal = `var prenoms = ["Philippe", "Simon", "Etienne"];
prenoms[4] = "Nico";
console.log(prenoms);
console.log(prenoms[3]);`;

export const prenomsOverride = `var prenoms = ["Philippe", "Simon", "Etienne"];
prenoms[1] = "Nico";
console.log(prenoms);`;

export const prenomsLength = `console.log(prenoms.length);`;

export const prenomsAddLength = `prenoms[prenoms.length] = "Simon";
console.log(prenoms);`;

export const prenomsPush = `prenoms.push("Lucie");
console.log(prenoms);`;

export const tabWithVars = `var nom = "Nico";
var age = 42;
var tab = [nom, age]`;

export const stringTab = `var test = "du texte";
console.log(test[3]); //t
console.log(test.length); //8`;

export const fruits = `var fruits = ["pomme", "poire", "banane", "goyave"];

console.log("Je mange une " + fruits[2]);
console.log("Je mange une " + fruits[Math.floor(Math.random()*fruits.length)]);`;

export const whileStart = `//avec TANT QUE

//on initialise le tableau qui va contenir les résultats
var tab = [];`;

export const whileCounter = `//on initialise notre compteur
var compteur = 0;`;

export const whileFoireux = `//on lance la boucle
while(compteur < 10) {
    //on vérifie la valeur du compteur dans cette itération
    console.log("Valeur du compteur de la boucle while : ", compteur);

    //on stocke la valeur du compteur dans le tableau
    tab[compteur] = compteur;
}`;

export const whileOk = `//on lance la boucle
while(compteur < 10) {
    //on vérifie la valeur du compteur dans cette itération
    console.log("Valeur du compteur de la boucle while : ", compteur);
    //on stocke la valeur du compteur dans le tableau
    tab[compteur] = compteur;
    //on incrémente notre compteur
    compteur++
}`;

export const whileFull = `//avec TANT QUE

//on initialise le tableau qui va contenir les résultats
var tab = [];

//on initialise notre compteur
var compteur = 0;

//on lance la boucle
while(compteur < 10) {
    //on vérifie la valeur du compteur dans cette itération
    console.log("Valeur du compteur de la boucle while : ", compteur);
    //on stocke la valeur du compteur dans le tableau
    tab[compteur] = compteur;
    //on incrémente notre compteur
    compteur++
}
//on vérifie le nb d'éléments dans le tableau
console.log("Le tableau rempli par while contient " + tab.length + " éléments");`;

export const forFull = `//avec POUR

//on initialise un nouveau tableau de résultats
var tab2 = [];

//on lance la boucle 
for (var compteur2 = 0; compteur2 < 10; compteur2++) {
    //on vérifie la valeur du compteur dans cette itération
    console.log("Valeur du compteur de la boucle for : ", compteur2);

    //on stocke la valeur du compteur dans le tableau
    tab2[compteur2] = compteur2;
}
//on vérifie le nb d'éléments dans le tableau
console.log("Le tableau rempli par for contient " + tab2.length + " éléments");`;

export const randomNumber = `//on déclare un variable max
var MAX = 500;

//création du nombre aléatoire entre 0 et MAX
//déja la partie aléatoire
var random = Math.random();

//on l'applique à notre fourchette en multipliant random par la valeur max
var fork = MAX * random;

//on arrondit cette fourchette pour avoir un nombre entier
var randomGuess = Math.round(fork);

//version condensée
//var randomGuess = Math.round(Math.random()*500);`;

export const randomInput = `var userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));`;

export const randomWhile = `while(userGuess !== randomNumber) {
    userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));
}`;

export const randomNan = `//SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
if (isNaN(userGuess)) {
    console.log("Veuillez saisir un nombre entre 0 et "+MAX);
}`;

export const randomWhileFull = `while(userGuess !== randomNumber) {
    //SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
    if (isNaN(userGuess)) {
        console.log("Veuillez saisir un nombre entre 0 et "+MAX);
    }
    //SINON SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    else if (userGuess < randomNumber) {
        console.log("Le nombre à deviner est plus grand");
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        console.log("Le nombre à deviner est plus petit");
    }
    //récup saisie de l'utilisateur
    userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));
}`;

export const randomWin = `//message gagné
console.log("Clap clap, vous avez trouvé le nb "+randomNumber);`;

export const randomFull = `//on déclare un variable max
var MAX = 500;

//création du nombre aléatoire entre 0 et MAX
//déja la partie aléatoire
var random = Math.random();

//on l'applique à notre fourchette en multipliant random par la valeur max
var fork = MAX * random;

//on arrondit cette fourchette pour avoir un nombre entier
var randomNumber = Math.round(fork);

//version condensée
//var randomNumber = Math.round(Math.random()*500);

var userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));
var nbTries = 1;

while(userGuess !== randomNumber) {
    //SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
    if (isNaN(userGuess)) {
        console.log("Veuillez saisir un nombre entre 0 et "+MAX);
    }
    //SINON SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    else if (userGuess < randomNumber) {
        console.log("Le nombre à deviner est plus grand");
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        console.log("Le nombre à deviner est plus petit");
    }
    //récup nouvelle saisie de l'utilisateur
    userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));
    //on incrémente le nb d'essais
    nbTries++;
}
//message gagné
console.log("Clap clap, vous avez trouvé le nb "+randomNumber+" en "+nbTries+" coups !");`;

export const randomDoWhile = `//on déclare un variable max
var MAX = 500;

//création du nombre aléatoire entre 0 et MAX
//déja la partie aléatoire
var random = Math.random();

//on l'applique à notre fourchette en multipliant random par la valeur max
var fork = MAX * random;

//on arrondit cette fourchette pour avoir un nombre entier
var randomNumber = Math.round(fork);

//version condensée
//var randomNumber = Math.round(Math.random()*500);

var userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));;
var nbTries = 1;
do {
    //SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
    if (isNaN(userGuess)) {
        console.log("Veuillez saisir un nombre entre 0 et "+MAX);
    }
    //SINON SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    else if (userGuess < randomNumber) {
        console.log("Le nombre à deviner est plus grand");
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        console.log("Le nombre à deviner est plus petit");
    }
    //on incrémente le nb d'essais
    nbTries++;
    //récup nouvelle saisie de l'utilisateur
    userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));
} while(userGuess !== randomNumber)
//message gagné
console.log("Clap clap, vous avez trouvé le nb "+randomNumber+" en "+nbTries+" coups !");`;

export const getNumber = `var getNumber = function() {
    //on déclare la variable userGuess et on l'assigne avec le prompt
    var userGuess = Number(prompt("Devinez un nombre entre 0 et "+MAX+" :"));
    //SI userGuess n'est pas un nombre ALORS on retourne -1 
    if (isNaN(userGuess)) {
        return -1;
    }
    //SINON on retourne le nombre
    else {
        return userGuess;
    }
}`;

export const randomWithGetNumber = `var userGuess = getNumber();
var nbTries = 1;

while(userGuess !== randomNumber) {
    //SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    if (userGuess < randomNumber) {
        console.log("Le nombre à deviner est plus grand");
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        console.log("Le nombre à deviner est plus petit");
    }
    nbTries++;
    userGuess = getNumber();
}`;

export const checkNumbersDeclare = `var checkNumbers = function(guess, random) {
    ...
}`;

export const checkNumbers = `var checkNumbers = function(guess, random) {
    //SI userGuess n'est pas un nombre ALORS on retourne -1 
    if (guess < random) {
        console.log("Le nombre à deviner est plus grand");
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (guess > random) {
        console.log("Le nombre à deviner est plus petit");
    }
}`;

export const randomWhileDef = `while(userGuess !== randomNumber) {
    checkNumbers(userGuess, randomNumber);
    nbTries++;
    userGuess = getNumber();
}`;

export const france = `var europe = {
    france: {
        nom: "France",
        capitale: "Paris",
        superficie: 632734,
        population: 67.03,
        villesPrincipales: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
    },
    ...
}`;

export const allemagne = `var europe = {
    ...
    allemagne: {
        nom: "Allemagne",
        capitale: "Berlin",
        superficie: 357167,
        population: 83.02,
        villesPrincipales: ["Berlin", "Hambourg", "Munich", "Cologne", "Francfort"]
    },
    ...
}`;

export const italie = `var europe = {
    ...
    italie: {
        nom: "Italie",
        capitale: "Rome",
        superficie: 302073,
        population: 60.36,
        villesPrincipales: ["Rome", "Milan", "Naples", "Turin", "Palerme"]
    },
    ...
}`;

export const espagne = `var espagne = {
    ...
    espagne: {
        nom: "Madrid",
        capitale: "Berlin",
        superficie: 505991,
        population: 46.93,
        villesPrincipales: ["Madrid", "Barcelone", "Valence", "Séville", "Saragosse"]
    },
    ...
}`;

export const irlande = `var europe = {
    ...
    irlande: {
        nom: "Irlande",
        capitale: "Dublin",
        superficie: 69797,
        population: 4.90,
        villesPrincipales: ["Dublin", "Cork", "Galway", "Limerick"]
    }
}`;

export const logCountry = `var logCountry = function(country) {
    console.log("Nom du pays: " + country.nom + ", capitale : " + country.capitale + 
    ", superficie : " + country.superficie + ", population : " +  country.population +
    ", ville sprincipales : " + tabToString(country.villesPrincipales));
}`;

export const gameObject = `var game = {
    attemps: 0,
    searchNumber: undefined
};`;

export const gamePlay1 = `var play = function() {
    var randomPart = Math.random();
    var randomNum = max * randomPart;
    var randomNumRounded = Math.round(randomNum);
    /*version courte :
    var randomNumRounded = Math.round(max * Math.random());
    */
    game.searchedNumber = randomNumRounded;
    alert("Nouvelle partie");
}`;

export const gamePlay2 = `var play = function() {
    ...
    game.attemps++;
    var enteredNumber =  parseInt(prompt('Quel est le nombre à trouver ?'));
    ...
}`;

export const gamePlay3 = `var play = function() {
    ...
    while (enteredNumber !== game.searchedNumber) {
        if (enteredNumber < game.searchedNumber) {
            enteredNumber =  parseInt(prompt("C'est plus"));
        }
        else {
            enteredNumber =  parseInt(prompt("C'est moins"));
        }
        game.attemps++;
    }
    ...
}`;

export const gamePlay4 = `var play = function() {
    ...
    alert("Bravo ! C'était bien ' + game.searchedNumber + ' - Nombre d'essais : " + game.attemps);
    ...
}`;

export const gamePlay = `play();`;

export const random1 = `var generateRandomNumber = function(min, max) {
    var randomPart = Math.random();
    var randomNum = min + (max-min)*randomPart;
    var randomNumRounded = Math.round(randomNum);
    return randomNumRounded;
    /*version courte :
    return Math.round(min + (max-min)*Math.random());
    */
}`;

export const random2 = `var game = {
    min: 10,
    max: 20,
    attemps: 0,
    searchNumber: undefined
};`;

export const random3 = `var play = function() {
    // var randomPart = Math.random();
    // var randomNum = max * randomPart;
    // var randomNumRounded = Math.round(randomNum);
    // /*version courte :
    // var randomNumRounded = Math.round(max * Math.random());
    // */
    game.searchedNumber = generateRandomNumber(game.min, game.max);
   ...
}`;

export const random4 = `var game = {
    min: 10,
    max: 20,
    attemps: 0
};`;

export const gameFull = `var game = {
    min: 10,
    max: 20,
    attemps: 0,
    scores: []
};`;

export const scoresFill = `game.scores.push(game.attemps);`;

export const scoresDisplay = `game.scores.push(game.attemps);
console.log(game.scores);
play();`;

export const gameReplay = `    if (confirm("Rejouer ?")) {
    play();
}
else {
    console.log(game.scores);
}`;

export const scoresBetter = `...
else {
    for (var gameIndex=0; gameIndex<game.scores.length; gameIndex++) {
        alert("Partie " + (gameIndex+1) + " : " + game.scores[gameIndex]+ " essais");
    }
}`;

export const displaySores = `var displayScore = function() {
    for (var gameIndex=0; gameIndex<game.scores.length; gameIndex++) {
        alert("Partie " + (gameIndex+1) + " : " + game.scores[gameIndex]+ " essais");
    }
}

function play() {
    ...
    if (confirm("Rejouer ?")) {
        play();
    }
    else {
        displayScores();
    }
}`;

export const spaceship = `var spaceship = {
    name: "Millenium Falcon",
    driver: "Han Solo",
    lightspeed: function() {
        console.log("Entering hyperspace ...");
    }
};`;

export const lightspeed = `spaceship.lightspeed();`;



export const embedRandom = `var game {
    ...
    generateRandomNumber: function (min, max) {
        return Math.round(min + (max-min)*Math.random());
    },
    ...
}`;

export const embedDisplay = `var game {
    ...
    displayScores: function () {
        for (var gameIndex=0; gameIndex<game.scores.length; gameIndex++) {
            alert("Partie " + (gameIndex+1) + " : " + game.scores[gameIndex]+ " essais");
        }
    },
    ...
}

function play() {
    ...
    if (confirm("Rejouer ?")) {
        play();
    }
    else {
        game.displayScores();
    }
}`;

export const embedPlay = `var game {
    ...
    play: function() {
        game.searchedNumber = game.generateRandomNumber(game.min, game.max);
        alert("Nouvelle partie");
    
        game.attemps++;
        var enteredNumber =  parseInt(prompt('Quel est le nombre à trouver ?'));
    
        while (enteredNumber !== game.searchedNumber) {
            if (enteredNumber < game.searchedNumber) {
                enteredNumber =  parseInt(prompt("C'est plus"));
            }
            else {
                enteredNumber =  parseInt(prompt("C'est moins"));
            }
            game.attemps++;
        }
        alert("Bravo ! C'était bien ' + game.searchedNumber + ' - Nombre d'essais : " + game.attemps);
        game.scores.push(game.attemps);
    
        if (confirm("Rejouer ?")) {
            game.play();
        }
        else {
            game.displayScores();
        }
    }
}`;

export const scoresDiv = `<div id="scores">

</div>
<script src="../js/main.js"></script>`;

export const displayScoresStart = `displayScores: function() {
    var target = document.getElementById("scores");
    console.log(target);
    console.dir(target);
}`;

export const displayScoresCreate = `displayScores: function() {
    ...
    var title = document.createElement("h1");
    title.className = "scores-title";
    title.innerHTML = "Resultats de vos <strong>"
        +game.scores.length+" parties</strong>";
}`;

export const scoresTitle = `#scores {
    width: 500px;
    margin: 2em auto;
    font-family: sans-serif;
}

.scores-title {
    color: #44a1fb;
}`;

export const scoresAppend = `displayScores: function() {
    ...
    target.appendChild(title);
}`;

export const scoresTable = `displayScores: function() {
    ...
    var table = document.createElement("table");
}`;

export const scoresThead = `displayScores: function() {
    ...
    var tableHeader = document.createElement("thead");
    var headerContent = "<tr>";
    headerContent += "<th>Partie</th>";
    headerContent += "<th>Essais</th>";
    headerContent += "</tr>";
    tableHeader.innerHTML = headerContent;
    table.appendChild(tableHeader)
}`;

export const scoresTbody = `displayScores: function() {
    ...
    var tableBody = document.createElement("tbody");
}`;

export const scoresRows = `displayScores: function() {
    ...
    for (var gameIndex=0; gameIndex < game.scores.length; gameIndex++) {
        var tr = document.createElement("tr");
        
        var tdGame = document.createElement("td");
        tdGame.textContent = gameIndex + 1;
        tr.appendChild(tdGame);

        var tdAttemps = document.createElement("td");
        tdAttemps.textContent = game.scores[gameIndex];
        tr.appendChild(tdAttemps);

        tableBody.appendChild(tr);
    }
}`;

export const scoresAppendTab = `displayScores: function() {
    ...
    table.appendChild(tableBody);
    target.appendChild(table);
}`;

export const chronoFirst = `var chrono = {
    dixiemes: 0,
    secondes: 0,
    minutes: 0
}`;

export const chronoInit1 = `init: function() {
    var target = document.getElementById("chrono");
}`;

export const chronoInit2 = `init: function() {
    ...
    var minutes = document.createElement("div");
    minutes.id = "minutes";
    minutes.textContent = chrono.minutes;        
    target.appendChild(minutes);
}`;

export const chronoInit3 = `init: function() {
    ...
    var secondes = document.createElement("div");
    secondes.id = "secondes";
    secondes.textContent = chrono.secondes;        
    target.appendChild(secondes);

    var dixiemes = document.createElement("div");
    dixiemes.id = "dixiemes";
    dixiemes.textContent = chrono.dixiemes;        
    target.appendChild(dixiemes);
}`;

export const chronoDisplay = `display: function() {
    document.querySelector("#dixiemes").textContent = chrono.dixiemes;
    document.querySelector("#secondes").textContent = chrono.secondes;
    document.querySelector("#minutes").textContent = chrono.minutes;
}`;

export const chronoAddTime = `addTime: function() {
    chrono.dixiemes += 1;
    if (chrono.dixiemes === 10) {
        chrono.dixiemes = 0;
        chrono.secondes += 1;
    }
    if (chrono.secondes === 60) {
        chrono.secondes = 0;
        chrono.minutes += 1;
    }
    chrono.display();
}`;

export const chronoStart = `start: function() {
    chrono.addTime();
    setInterval(chrono.addTime, 100);
}`;

export const move = `var move = {

};`;

export const moveText = `var move = {
    text: document.querySelector(".text"),
    ...
}`;

export const moveInit = `init: function() {
    move.text.style.position = "absolute";
    move.text.style.top = "0%";
    move.text.style.left = "0%";
    move.text.style.width = "200px";
    move.text.style.fontSize = "1.5em";
    move.text.style.padding = "1em";
    move.text.style.textAlign = "center";
    move.text.style.backgroundColor = "#ae9ff3";
    move.text.style.transition = "all linear 0.1s";
}`;

export const moveDisplay = `display: function(top, left) {
    move.text.style.top = top+"%";
    move.text.style.left = left+"%";
    move.text.style.filter = "hue-rotate("+(top * 360 / 100)+"deg)";
}`;

export const moveChange = `change: function() {
    var top = parseInt(move.text.style.top, 10);
    top += 1;
    if (top === 100) {
        top = 0;
    }
    var left = parseInt(move.text.style.left, 10);
    left += 1;
    if (left === 100) {
        left = 0;
    }
    move.display(top, left);
}`;

export const moveStart = `start: function() {
    setInterval(move.change, 100);
}`;

export const diceStart = `var createDice = function() {
    var dice = document.createElement("div");
    dice.className = "dice";
    document.getElementById("player").appendChild(dice);
}

createDice();`;

export const diceRandom = `var getRandom = function(min, max) {
    var randomPart = Math.random();
    var randomNumber = min + randomPart*(max - min + 1);
    var randomInteger = Math.floor(randomNumber);
    return randomInteger;
    //version courte
    // return Math.floor(min + Math.random()*(max - min + 1))
}`;

export const dicePosition = `var createDice = function() {
    ...
    var diceValue = app.getRandom(1, 6);
    var offset = (diceValue - 1) * 100;
    dice.style.backgroundPosition = "-" + offset + "px 0";
...
}`;

export const diceNb = `var nbDices = Number(prompt("Nombre de dés : "));
while(isNaN(nbDices)) {
    nbDices = prompt("Veuillez saisir un nombre de dés : ");
}

for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
    createDice();
}`;

export const diceDealer = `<div id="app">
    <div class="board" id="player"></div>
    <div class="board" id="dealer"></div>
</div>`;

export const diceCreate = `var createDice = function(target) {
    var dice = document.createElement("div");
    dice.className = "dice";
    var diceValue = app.getRandom(1, 6);
    var offset = (diceValue - 1) * 100;
    dice.style.backgroundPosition = "-" + offset + "px 0";
    document.getElementById(target).appendChild(dice);
}`;

export const diceDistrib = `for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
    createDice("player");
    createDice("dealer");
}`;

export const diceHtml = `<div id="ui">
<button type="button" id="play-button">Jouer avec 6 dés</button>
<p class="precision">psst, appuyer sur une touche du clavier, ça marche aussi &#x1F600;</p>
</div>`;

export const diceCss = `#ui {
    background-color: #aa6324;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 5em;
  }
  
  #play-button {
    background-color: #ffbe56;
    padding: 5px 15px;
    border-radius: 2px;
    border: none;
  }
  
  .precision {
    font-style: italic;
    margin: 3px;
  }`;

export const diceListener = `var playButton = document.getElementById("play-button");

playButton.addEventListener("click", 
    //2ème argument : fonction pour lancer un nouveau jeu
        //effacer le jeu précédent
        //afficher un nouveau avec 6 dés
);`;

export const diceNewGame = `var newGame = function() {
    //effacer le jeu précédent
    //afficher un nouveau avec 6 dés
}

var playButton = document.getElementById("play-button");

playButton.addEventListener("click", newGame);`;

export const diceResetBoard = `var resetBoard = function() {
    document.getElementById("player").textContent = 
    document.getElementById("dealer").textContent = "";
}

var newGame = function() {
    //effacer le jeu précédent
    resetBoard();
    //afficher un nouveau avec 6 dés
}`;

export const dicePlay = `var play = function(nbDices) {
    for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
        createDice("player");
        createDice("dealer");
    }
}

var newGame = function() {
    //effacer le jeu précédent
    resetBoard();
    //afficher un nouveau avec 6 dés
    play(6);
}`;

export const diceKeyboard = `document.body.addEventListener("keyup", newGame);`;

export const diceApp = `var app = {};`;

export const diceMethods = `var app = {
    getRandom: function(min, max) {
        var randomPart = Math.random();
        var randomNumber = min + randomPart*(max - min + 1);
        var randomInteger = Math.floor(randomNumber);
        return randomInteger;
        //version courte
        // return Math.floor(min + Math.random()*(max - min + 1))
    },
    createDice: function(target) {
        var dice = document.createElement("div");
        dice.className = "dice";
        var diceValue = app.getRandom(1, 6);
        var offset = (diceValue - 1) * 100;
        dice.style.backgroundPosition = "-" + offset + "px 0";
        document.getElementById(target).appendChild(dice);
    },
    resetBoard: function() {
        document.getElementById("player").textContent = 
        document.getElementById("dealer").textContent = "";
    },
    play: function(nbDices) {
        for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
            app.createDice("player");
            app.createDice("dealer");
        }
    },
    newGame: function() {
        console.log("new game");
        //effacer le jeu précédent
        app.resetBoard();
        //afficher un nouveau avec 6 dés
        app.play(6);
    }
};`;

export const diceLaunch = `var app = {
    ...
    init: function() {
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", app.newGame);
        document.body.addEventListener("keyup", app.newGame);
    }
};

app.init();`;

export const diceNewCss = `#app {
    display: flex;
    flex-direction: column;
}
...
.board {
    position: relative;
    width:100%;
    min-height: 100vh;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
}
... (after dice)
#welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 1.6em;
}

#app.hidden, #welcome.hidden {
    display: none;
}

.btn {
  padding: 1em 2em;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  border-bottom: 4px solid #ad5304;
}

.btn:hover {
    margin-top: 1px;
    border-bottom-width: 3px;
}

#game {
    display: flex;
}`;

export const diceWelcome = `<div id="welcome">
    <button type="buton" class="btn" id="play">Jouer</button>
</div>
<div id="app" class="hidden">
...
</div>`;

export const diceNewStart = `init: function() {
    ...
    var welcomeButton = document.getElementById("play");
    welcomeButton.addEventListener("click", app.start);
},
start: function() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
}`;

export const diceForm = `<div class="form">
    <form id="game-form">
        <input type="range" id="dice-number-input" min="1" max="20" value="3" />
        <span id="dice-number"></span>
        <button class="btn">Valider le nombre de dés et lancer</button>
    </form>
</div>`;

export const diceFormCss = `.board {
    ...
    min-height: calc(100vh - 150px);
    ...
}
...
.form {
    height: 150px;
    background-color: #111;
}

#game-form {
display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
}

#dice-number {
    margin: .5em 0;
    color: #fff;
    font-weight: bold;
}`;

export const diceSlider = `init: function() {
    ...
    app.diceNumberInput = document.getElementById("dice-number-input");
    app.diceNumberInput.addEventListener("change", app.changeNumber);
    app.changeNumber();
},
changeNumber: function() {
    app.nbDices = app.diceNumberInput.value;
    var diceNumber = document.getElementById("dice-number");
    diceNumber.textContent = app.nbDices;

}`;

export const diceFormSubmit = `init: function() {
    ...
    var gameForm = document.getElementById("game-form");
    gameForm.addEventListener("submit", app.play);
}`;

export const diceNewPlay = `play: function(event) {
    console.log(event);
    event.preventDefault();
    app.resetBoard();
    for (var diceIndex=0; diceIndex<app.nbDices; diceIndex++) {
        app.createDice("player");
        app.createDice("dealer");
    }
}`;

export const diceNewKeyboard = `init: function() {
    ...
    document.body.addEventListener("keyup", function(event) {
        console.dir(event);
        if (event.code === "Space") {
            app.start();
        }
    });
}`;

export const diceNewCreateDice = `createDice: function(target) {
    var dice = document.createElement("div");
    dice.className = "dice";
    var diceValue = app.getRandom(1, 6);
    var offset = (diceValue - 1) * 100;
    dice.style.backgroundPosition = "-" + offset + "px 0";
    document.getElementById(target).appendChild(dice);
    return diceValue;
}`;

export const diceCreateAllDices = `createAllDices: function(target) {
    var score = 0;
    for (var diceIndex=0; diceIndex<app.nbDices; diceIndex++) {
        score += app.createDice(target);
    }
    return score;
}`;

export const dicePlayWithScores = `play: function(event) {
    event.preventDefault();
    app.resetBoard();
    var playerScore = app.createAllDices("player");
    var dealerScore = app.createAllDices("dealer");
    console.log("player score : ", playerScore);
    console.log("dealer score : ", dealerScore);
}`;

export const dicePlayWithScores2 = `play: function(event) {
    ...
    if (playerScore > dealerScore) {
        app.victory++;
    } else if (playerScore < dealerScore) {
        app.defeat++;
    }
    console.log("Victoires : ", app.victory);
    console.log("Défaites : ", app.defeat);
}`;

export const diceDisplayResult = `play: function(event) {
    ...
    app.displayResult("player", app.victory);
    app.displayResult("dealer", app.defeat);

},
displayResult: function(target, counter) {
    var result = document.createElement("div");
    result.className = "result";
    result.textContent = counter;
    document.getElementById(target).appendChild(result);
},`;

export const diceResultCss = `.result {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color:rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 3em;
    padding: 1em;
    text-align: center;
}`;

export const diceResultCssAnim = `@keyframes fade {
    0% {opacity: 0}
    100% {opacity: 1}
}

.result {
    ...
    animation: fade 0.4s ease 0s 1;
}`;

export const diceNewReset = `resetBoard: function() {
    var boards = document.querySelectorAll(".board");
    for (var boardIndex=0; boardIndex<boards.length; bordIndex++) {
        boards[boardIndex].innerHTML = "";
    }
}`;

export const diceDealerPlay = `play: function(event) {
    ...
    app.dealerPlay(playerScore);
},
dealerPlay: function(playerScore) {
    var dealerScore = app.createAllDices("dealer");
    if (playerScore > dealerScore) {
        app.victory++;
    } else if (playerScore < dealerScore) {
        app.defeat++;
    }
    app.displayResult("player", app.victory);
    app.displayResult("dealer", app.defeat);
}`;

export const diceTimeout = `play: function(event) {
    ...
    setTimeout(app.dealerPlay, 3000, playerScore);
}`;

export const diceIsPlaying = `var app = {
    ...
    isPlaying: false,
    ...
    play: function(event) {
        ...
        //équivalent à app.isPlaying === false
        if (!app.isPlaying) {
            app.isPlaying = true;
            ...
        }
    },
    dealerPlay: function(playerScore) {
        ...
        app.isPlaying = false;
    }
}`;

export const diceAnim = `@keyframes pop {
    0% {transform: scale(0);}
    75% {transform: scale(1.1);}
    100% {transform: scale(1);}
}

.dice {
    ...
    animation: pop .4s ease 0s 1;
}`;

export const diceCreateCounter = `play: function(event) {
    ...
    if (!app.isPlaying) {
        ...
        app.createCounter();
    }
}
...
createCounter: function() {
    app.counter = 3;
    app.counterElement = document.createElement("div");
    app.counterElement.className = "counter";
    app.counterElement.textContent = app.counter;
    document.getElementById("app").appendChild(app.counterElement);
    app.counterInterval = setInterval(game.countdown, 1000);
}`;

export const diceCountdown = `countdown: function() {
    app.counter--;
    app.counterElement.textContent = app.counter;
    if (app.counter === 0) {
        app.deleteCounter();
    }
}`;

export const diceDeleteCounter = `deleteCounter: function() {
    clearInterval(app.counterInterval);
    app.counterElement.remove();
}`;

export const diceCounterCss = `.counter {
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 75vh;
    text-shadow: 5px 5px 0 #000;
}`;