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