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
            enteredNumber =  parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber =  parseInt(prompt('C\'est moins'));
        }
        game.attemps++;
    }
    ...
}`;

export const gamePlay4 = `var play = function() {
    ...
    alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attemps);
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