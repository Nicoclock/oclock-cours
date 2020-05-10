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


