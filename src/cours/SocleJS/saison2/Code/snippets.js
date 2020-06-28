export const day1 = {
    syntaxe: [
        {
            code:
`moveFoward();`
        },
        {
            code:
`turnLeft();`
        },
        {
            code:
`turnRight();`
        },
        {
            code:
`surprise();`
        },
        {
            code:
`makeBeautiful();`
        },
        {
            code:
`//je suis un commentaire sur une seule ligne

var x = 0; //je suis un commentaire en fin de ligne

/*
Je suis un commentaire
sur plusieurs lignes
*/`
        },
        {
            code:
`var firstName = 'Nico';
console.log(firstName) // Nico;

var otherName;
console.log(otherName); //undefined`
        },
        {
            code:
`firstName = 'Nicolas';
console.log(firstName);`
        },
        {
            code:
`var number = 23;
var floatNumber = 156.47;`
        },
        {
            code:
`var isNice = true;
console.log(isNice);

isNice = false;
console.log(isNice);`
        },
        {
            code:
`console.log('Nico' + ' ' + 'Charpin');

var prenom = 'Nico';
var nom = 'Charpin';
console.log(prenom + ' ' + nom);`
        },
        {
            code:
`'2' + '5'; //25
2 + 5; //7
'2' + 5; //25`
        },
        {
            code:
`5 + 18; //23
25.3 + 24.7; //50
12 - 5; //7
17.3 - 4.8; //12.5`
        },
        {
            code:
`25 * 4; //100
12.5 * 4; //50
100 / 5; //20
25.5 / 2; //12.75`
        },
        {
            code:
`console.log('Hello, Nico vous parle');
console.log(7 + 5);
var book = 'Dune';
console.log(book);`
        },
        {
            code:
`console.log('test', true, 12345, book);`
        },
        {
            code:
`var title = 'Harry Potter and the goblet of fire'; //ceci est une instruction
var author = 'J.K. Rowling';
var yearOfParution = 2000;
var price = 12.5;
var hasBeenRead = true;
console.log(title + ' de ' + author);`
        },
        {
            code:
`var phrase = title + ' de ' + author + ' - Année de sortie : ' 
+ yearOfParution + ' - Prix : ' + price + ' - Déjà lu : ' + hasBeenRead;
console.log(phrase);`
        },
        {
            code:
`var number1 = 12.5;
var number2 = 375;

//addition
var addition = number1 + number2;
console.log('addition', addition);`
        },
        {
            code:
`//soustraction
var subtraction = number2 - number1;
console.log('soustraction', subtraction);

//multiplication
var multiplication = number1 * number2;
console.log('multiplication', multiplication);

//division
var division = number1 / number2;
console.log('division', division);`
        },
        {
            code:
`alert('Mon chouette message !');`
        },
        {
            code:
`//alert('Mon chouette message !');
var firstName = prompt('Quel est votre prenom ?');
console.log(firstName);`
        },
        {
            code:
`//exo : afficher Bonjour prenom nom, vous avez xxx ans
var lastName = prompt('Quel est votre nom ?');
var age = prompt('Quel est votre âge ?');
console.log('Bonjour '+firstName+' '+lastName+', vous avez '+age+' ans');`
        },
        {
            code:
`//demander à l'utilisateur s'il veut jouer à un jeu en utilisant confirm
var result = confirm('Voulez-vous jouer à un jeu ?');
console.log('réponse', result);
if (result === true) {
    console.log('Bienvenue !');
}
else {
    console.log('Une prochaine fois alors ...');
}`
        },
        {
            code:
`var test = '12345';`
        },
        {
            code:
`var test = 12345;`
        },
        {
            code:
`var hasWon;`
        },
        {
            code:
`var test =  prompt('Que voulez-vous tester ?');`
        },
        {
            code:
`var test = confirm('Voulez-vous vous inscrire ?');`
        },
        {
            code:
`99 < 25 || '12' === 12`
        },
        {
            code:
`25 >= 23 && 15 <= 18`
        },
        {
            code:
`12 !== 12 || 23 <= 23`
        },
        {
            code:
`25 > 25 && 10 <= 10`
        },
        {
            code:
`15 > 18 || 15 < 23`
        },
        {
            code:
`30 === 30 && 10 <= 10`
        },
        {
            code:
`var test = confirm('Vous êtes sûr(e) ?');
if test === true {
    console.log('Il ou elle est sûr(e)');
}`
        },
        {
            code:
`var test = confirm('Vous êtes sûr(e) ?');
if (test === false)
    console.log('Il ou elle n'est pas sûr(e)');
    console.log('Faudra pour tant qu'il ou elle se décide');
else {
    console.log('Ah bah ça va alors ...);
}`
        },
        {
            code:
`var test = prompt('Vous êtes sûr(e) ?');
if (test === true) {
    console.log('Il ou elle est sûr(e)');
}`
        }
    ]
}

export const day2 = {
    numbers: [
        {
            code:
`parseInt('35'); //35
parseInt('35.5'); //35, parseInt renvoie un entier
parseInt('35px'); //35

var num = parseInt('35');
typeof num; //number

var str = 'test';
typeof str; //string

parseInt('test'); //NaN, c'est quoi ce truc bizarre ?`
        },
        {
            code:
`Number('35'); //35
Number('35.5'); //35.5, prend en compte les float

var num = Number('35.5');
typeof num; //number

Number('35px'); //NaN`
        }
    ],
    maths: [
        {
            code:
`var carre = function(num) {
    var square = num * num;
    console.log(num + ' au carré : ' + square);
}
carre(12);`
        },
        {
            code:
`var test = 'text';
isNaN(text);
var num = 12;
isNaN(num);`
        },
        {
            code:
`var carre = function(numStr) {
    var num = Number(numStr);
    if (isNaN(num)) {
        console.log('Saisissez un nombre !');
    } 
    else {
        var square = num * num;
        console.log(num + ' au carré : ' + square);
    }
}
var numberString = prompt('Quel nombre voulez-vous mettre au carré ?');
carre(numberString);`
        },
        {
            code:
`var carre = function(numStr) {
    var num = Number(numStr);
    if (isNaN(num)) {
        console.log('Saisissez un nombre !');
    } 
    else {
        var square = Math.pow(num, 2);
        console.log(num + ' au carré : ' + square);
    }
}
var numberString = prompt('Quel nombre voulez-vous mettre au carré ?');
carre(numberString);`
        },
        {
            code:
`var randomMultiply = function(num) {
    var randomNum = num * Math.random();
    console.log(randomNum);
}
randomMultiply(49);`
        },
        {
            code:
`var randomMultiply = function(num) {
    var randomNum = num * Math.random();
    var randomInt = Math.floor(randomNum);
    console.log(randomInt);
}
randomMultiply(49);`
        }
    ],
    array: [
        {
            code:
`var prenoms = [];
console.log(prenoms);`
        },
        {
            code:
`var prenoms = ['Alexis', 'Simon', 'Etienne'];`
        },
        {
            code:
`console.log(prenoms[1];`
        },
        {
            code:
`prenoms[3] = 'Nico';
console.log(prenoms);`
        },
        {
            code:
`var prenoms = ['Alexis', 'Simon', 'Etienne'];
prenoms[4] = 'Nico';
console.log(prenoms);
console.log(prenoms[3]);`
        },
        {
            code:
`var prenoms = ['Alexis', 'Simon', 'Etienne'];
prenoms[1] = 'Nico';
console.log(prenoms);`
        },
        {
            code:
`console.log(prenoms.length);`
        },
        {
            code:
`prenoms[prenoms.length] = 'Simon';
console.log(prenoms);`
        },
        {
            code:
`prenoms.push('Lucie');
console.log(prenoms);`
        },
        {
            code:
`var nom = 'Nico';
var age = 42;
var tab = [nom, age]`
        },
        {
            code:
`var test = 'du texte';
console.log(test[3]); //t
console.log(test.length); //8`
        },
        {
            code:
`var fruits = ['pomme', 'poire', 'banane', 'goyave'];

console.log('Je mange une ' + fruits[2]);
console.log('Je mange une ' + fruits[Math.floor(Math.random()*fruits.length)]);`
        }
    ],
    loops: [
        {
            code:
`//avec TANT QUE

//on initialise le tableau qui va contenir les résultats
var tab = [];`
        },
        {
            code:
`//on initialise notre compteur
var compteur = 0;`
        },
        {
            code:
`//on lance la boucle
while(compteur < 10) {
    //on vérifie la valeur du compteur dans cette itération
    console.log('Valeur du compteur de la boucle while : ', compteur);

    //on stocke la valeur du compteur dans le tableau
    tab[compteur] = compteur;
}`
        },
        {
            code:
`//on lance la boucle
while(compteur < 10) {
    //on vérifie la valeur du compteur dans cette itération
    console.log('Valeur du compteur de la boucle while : ', compteur);
    //on stocke la valeur du compteur dans le tableau
    tab[compteur] = compteur;
    //on incrémente notre compteur
    compteur++;
}`
        },
        {
            code:
`//avec TANT QUE

//on initialise le tableau qui va contenir les résultats
var tab = [];

//on initialise notre compteur
var compteur = 0;

//on lance la boucle
while(compteur < 10) {
    //on vérifie la valeur du compteur dans cette itération
    console.log('Valeur du compteur de la boucle while : ', compteur);
    //on stocke la valeur du compteur dans le tableau
    tab[compteur] = compteur;
    //on incrémente notre compteur
    compteur++
}
//on vérifie le nb d'éléments dans le tableau
console.log('Le tableau rempli par while contient ' + tab.length + ' éléments');`
        },
        {
            code:
`//avec POUR

//on initialise un nouveau tableau de résultats
var tab2 = [];

//on lance la boucle 
for (var compteur2 = 0; compteur2 < 10; compteur2++) {
    //on vérifie la valeur du compteur dans cette itération
    console.log('Valeur du compteur de la boucle for : ', compteur2);

    //on stocke la valeur du compteur dans le tableau
    tab2[compteur2] = compteur2;
}
//on vérifie le nb d'éléments dans le tableau
console.log('Le tableau rempli par for contient ' + tab2.length + ' éléments');`
        }
    ]
}

export const day3 = {
    fonctions: [
        {
            code:
`function greetings() {
    return "bonjour";
}`
        },
        {
            code:
`function greetings() {
    var str = "bonjour";
    return str;
    console.log(str);
}
greetings();`
        }
    ],
    europe: [
        {
            code:
`var europe = {
    france: {
        nom: 'France',
        capitale: 'Paris',
        superficie: 632734,
        population: 67.03,
        villesPrincipales: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice']
    },
    ...
}`
        },
        {
            code:
`var europe = {
    ...
    allemagne: {
        nom: 'Allemagne',
        capitale: 'Berlin',
        superficie: 357167,
        population: 83.02,
        villesPrincipales: ['Berlin', 'Hambourg', 'Munich', 'Cologne', 'Francfort']
    },
    ...
}`
        },
        {
            code:
`var europe = {
    ...
    italie: {
        nom: 'Italie',
        capitale: 'Rome',
        superficie: 302073,
        population: 60.36,
        villesPrincipales: ['Rome', 'Milan', 'Naples', 'Turin', 'Palerme']
    },
    ...
}`
        },
        {
            code:
`var espagne = {
    ...
    espagne: {
        nom: 'Madrid',
        capitale: 'Berlin',
        superficie: 505991,
        population: 46.93,
        villesPrincipales: ['Madrid', 'Barcelone', 'Valence', 'Séville', 'Saragosse']
    },
    ...
}`
        },
        {
            code:
`var europe = {
    ...
    irlande: {
        nom: 'Irlande',
        capitale: 'Dublin',
        superficie: 69797,
        population: 4.90,
        villesPrincipales: ['Dublin', 'Cork', 'Galway', 'Limerick']
    }
}`
        },
        {
            code:
`var logCountry = function(country) {
    console.log('Nom du pays: ' + country.nom + ', capitale : ' + country.capitale + 
    ', superficie : ' + country.superficie + ', population : ' +  country.population +
    ', ville sprincipales : ' + tabToString(country.villesPrincipales));
}`
        }        
    ],
    hogwards: [
        {
            code:
`var hogwards = {
    headMaster: 'Albus Dumbledore',
    gryffindor: {
        headOfHouse: 'Minerva McGonagal',
        students: ['Harry Potter', 'Hermione Granger', 'Ronald Weasley'],
        nbPoints: 523
    },
    ravenclaw: {
        headOfHouse: 'Filius Flitwick',
        students: ['Cho Chang', 'Luna Lovegood', 'Penelope Clearwater'],
        nbPoints: 495
    },
    hufflepuff: {
        headOfHouse: 'Pomona Sprout',
        students: ['Ernie McMillan', 'Cedric Digory', 'Hannah Abbott'],
        nbPoints: 419
    },
    slytherin: {
        headOfHouse: 'Severus Snape',
        students: ['Draco Malefoy', 'Vincent Crabbe', 'Gregory Goyle'],
        nbPoints: 385
    }
}`
        }
    ]
}

export const day4 = {
    spaceship: [
        {
            code:
`var spaceship = {
    name: 'Millenium Falcon',
    driver: 'Han Solo',
    lightspeed: function() {
        console.log('Entering hyperspace ...');
    }
};`
        },
        {
            code:
`spaceship.lightspeed();`
        }
    ],
    dom: [
        {
            code:
`//création d'un élément header
var header = document.createElement('header');

//ajout de l'élément à la balise body
document.body.appendChild(header);

//ajout d'un élément main au body
var main = document.createElement('main');
document.body.appendChild(main);`
        },
        {
            code:
`//création d'un nouvel élément
var h1 = document.createElement('h1');

//on lui met du texte
h1.textContent = 'Bienvenue sur mon site !';

//on l'ajoute au DOM dans la balise header
header.appendChild(h1);`
        },
        {
            code:
`console.log(h1);
console.dir(h1);`
        },
        {
            code:
`//ajout d'un peu de style
h1.style.color = 'blue';
h1.style.textAlign = 'center';`
        },
        {
            code:
`//on récupère l'élément cible dans une variable en utilisant son id
var container = document.getElementById('container');

//on crée un nouveau paragraphe
var p = document.createElement('p');
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam sit unde eaque! Eaque, assumenda? Fugit, saepe! Ad, delectus veritatis.';

//on ajoute ce paragraphe à la div container
container.appendChild(p);`
        },
        {
            code:
`//on cible la div title
var title = document.getElementById('title');

//on lui met du texte
title.textContent = 'Rô la belle div !';

//on lui met du style
title.style.color = 'green';
title.style.textAlign = 'center';`
        }
    ],
    chrono: [
        {
            language: 'HTML',
            code:
`<h1>My beautiful Chrono !</h1>
<div id="chrono">

</div>`
        },
        {
            code:
`var chrono = {
    dixiemes: 0,
    secondes: 0,
    minutes: 0
}`
        },
        {
            code:
`init: function() {
    var target = document.getElementById('chrono');
}`
        },
        {
            code:
`init: function() {
    ...
    var minutes = document.createElement('div');
    minutes.id = 'minutes';
    minutes.textContent = chrono.minutes;        
    target.appendChild(minutes);
}`
        },
        {
            code:
`init: function() {
    ...
    var secondes = document.createElement('div');
    secondes.id = 'secondes';
    secondes.textContent = chrono.secondes;        
    target.appendChild(secondes);

    var dixiemes = document.createElement('div');
    dixiemes.id = 'dixiemes';
    dixiemes.textContent = chrono.dixiemes;        
    target.appendChild(dixiemes);
}`
        },
        {
            code:
`display: function() {
    document.querySelector('#dixiemes').textContent = chrono.dixiemes;
    document.querySelector('#secondes').textContent = chrono.secondes;
    document.querySelector('#minutes').textContent = chrono.minutes;
}`
        },
        {
            code:
`addTime: function() {
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
}`
        },
        {
            code:
`start: function() {
    chrono.addTime();
    setInterval(chrono.addTime, 100);
}`
        },
        {
            language: 'CSS',
            code:
`h1 {
    text-align: center;
}

#chrono {
    width: 400px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

#minutes, #secondes, #dixiemes {
    width: 75px;
    height: 30px;
    border: 1px solid black;
    text-align: center;
    font-size: 24px;
}`
        }
    ],
    moveText: [
        {
            code:
`var move = {

};`
        },
        {
            code:
`var move = {
    text: document.querySelector('.text'),
    ...
}`
        },
        {
            code:
`init: function() {
    move.text.style.position = 'absolute';
    move.text.style.top = '0%';
    move.text.style.left = '0%';
    move.text.style.width = '200px';
    move.text.style.fontSize = '1.5em';
    move.text.style.padding = '1em';
    move.text.style.textAlign = 'center';
    move.text.style.backgroundColor = '#ae9ff3';
    move.text.style.transition = 'all linear 0.1s';
}

...

move.init();`
        },
        {
            code:
`display: function(top, left) {
    move.text.style.top = top+'%';
    move.text.style.left = left+'%';
    move.text.style.filter = 'hue-rotate('+(top * 360 / 100)+'deg)';
}`
        },
        {
            code:
`change: function() {
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
}`
        },
        {
            code:
`start: function() {
    setInterval(move.change, 100);
}`
        }
    ]
}

export const day5 = {
    event: [
        {
            language: 'HTML',
            code:
`<body>
    <input type="text" id="test" />
    <div>
        <button>Bouton 1</button>
        <button>Bouton 2</button>
        <button>Bouton 3</button>
    </div>
    <script src="../js/event.js"></script> 
</body>`
        },
        {
            code:
`//on cible l'input dans la page
var input = document.getElementById('test');`
        },
        {
            code:
`//on lui associe un EventListener
//nom de l'event : keyup
//callback : fonction anonyme qui affiche la value du champ
input.addEventListener('keyup', function(event) {
    console.log('Texte dans le champ : ', event.target.value);
});`
        },
        {
            code:
`//on crée la fonction callback pour les boutons
var toExecuteOnClick = function(event) {
    console.log("bouton cliqué");
    console.dir(event);
    console.log('Le bouton ' + event.target.textContent + ' a été cliqué');
}`
        },
        {
            code:
`//on cible tous les éléments button de la page
var buttons = document.getElementsByTagName('button');
//avec une boucle, on associe un EventListener à chaque bouton
//Au click, on appelle la fonction callback
for (var button of buttons) {
    button.addEventListener('click', toExecuteOnClick);
}`
        },
        {
            code:
`var callback = function(event) {
	console.log('Bouton cliqué');
};

var button = document.getElementById('button');

button.addEventListener('onClick', callback);`
        },
        {
            code:
`var callback = function(event) {
	console.log('Bouton cliqué');
};

var button = document.getElementById('button');

button.addEventListener('click', callback());`
        }
    ]
}


export const day7 = {
    eslint: [
        {
            language: 'JSON',
            code:
`{
    "env": {
        "browser": true,
        "es6": true       
    },
    ...
}`
        },
        {
            language: 'JSON',
            code:
`{
    ...
    "extends": "eslint:recommended",
    ...
}`
        },
        {
            language: 'JSON',
            code:
`{
    ...
    "rules": {
        "indent": ["error", 4],
        "quotes": ["error", "single"],
        "semi": ["warn", "always"]
    }
}`
        },
        {
            code:
`/* eslint-disable indent */
// eslint-disable-next-line indent`
        }
    ],
classList: [
{
code:
`//on référence l'élément qu'on veut cibler
var target = document.getElementById('test');`
},
{
code:
`//1 seule class avec className
target.className = "bold";`,
},
{
code:
`//plusieurs class avec className
target.className = "bold italic";`,
},
{
code:
`//on reset les classes
target.className = ""`
},
{
code:
`//texte en gras
//pour ajouter une classe : classList.add
target.classList.add('bold');`
},
{
code:
`//on peut l'ajouter 2 fois, pas de doublon dans l'attribut class
target.classList.add('bold');`
},
{
code:
`//ajout de 2 nouvelles classes, en italic et en bleu
target.classList.add('italic', 'blue');`
},
{
code:
`//finalement, en italic c'est trop, on le retire avec classList.remove
target.classList.remove('italic');`
},
{
code:
`//je me trompe de nom de class, pas d'erreur, ce code ne fait rien
target.classList.remove('italix');`
},
{
code:
`//le client change d'avis, il VEUT de l'italic
//pour changer on utilise toggle
target.classList.toggle('italic');`
},
{
code:
`//les devs insistent pour retirer cette classe
//on peut réutiliser toggle pour repasser à l'état initial
target.classList.toggle('italic');`
},
{
code:
`//on peut vérifier la présence d'une class avec classList.contains
//SI la class active est présente ALORS on passe la font-size à 30px et le texte en rouge
if (target.classList.contains('active')) {
    target.style.fontSize = '30px';
    target.style.color = 'red';
}`
},
{
code:
`//pour tester classList.contains, on ajoute une class fictive (sans propiétés CSS) qui va nous servir d'indicateur
target.classList.add('active');`
},
{
code:
`//on peut vérifier la présence d'une class avec classList.contains
//SI la class active est présente ALORS on passe la font-size à 30px
if (target.classList.contains('active')) {
    target.style.fontSize = '30px';
}`
}],
querySelector: [
    {
        code:
`//on veut récupérer la balise form
var form = document.querySelector('form');
console.dir(form);`
    },
    {
        code:
`//on veut récupérer l'input password
//plusieurs façons de faire

//- avec la variable form
console.log('depuis form', form[1]);
console.log('depuis form', form.children[1]);`
    },
    {
        code:
`//- avec un nouveau sélecteur
var password = document.querySelector('input[name="password"]');
console.log('avec un sélecteur', password);`
    },
    {
        code:
`//on veut sélectionner le p.test__p de la 2ème div
var lorem = document.querySelector('.test2 .test__p');
console.log(lorem.textContent);`
    },
],
forEach: [
    {
        code:
`//on veut afficher toutes les valeurs du tableau suivant
var tab = ['pomme', 'poire', 'ananas', 'banane', 'goyave'];`
    },
    {
        code:
`//on peut utiliser for ...
console.log('on affiche les éléments avec for');
for (var index=0; index<tab.length; index++) {
    console.log(tab[index]);
}`
    },
    {
        code:
`//séparateur ...
console.log("--------------");`
    },
    {
        code:
`// ... ou la méthode forEach des tableaux
console.log('on affiche les éléments avec forEach');
//POUR chaque élément du tableau pris dans l'ordre, on exécute le code du callback
//ce callback reçoit un paramètre fourni par JS qui est la valeur de l'élément à un index donné
tab.forEach(function(element) {
    console.log(element);
});
`
    }
],
dataset: [
    {
        code:
`//on cible la div target
var target = document.getElementById('test');`
    },
    {
        code:
`//attribut officiel, ça marche
console.log(target.id)`
    },
    {
        code:
`//attribut non officiel, ça marche pas
console.log(target.blah);`
    },
    {
        code:
`//pour ajouter un attribut non officiel à un élément, on peut utiliser data-xxx
//en js, ces attributs exotiques sont stockés dans la propriété dataset
target.dataset.blah2 = 'blah2';
console.log(target.dataset.blah2);`
    }
]};
export const day8 = {
let: [
{
        code:
`//bizarrerie de var
//la portée de la vatriable n'est pas celle qu'on pense ...

console.log('tests avec var');

var color = "blue";
console.log('avant if :', color);

if (true) {
    //JS ne va pas déclarer une nouvelle variable mais considérer que c'est la même !
    var color = "red";
    console.log('dans le if :', color);
}
//la variable en dehors des accolades a été modifiée
console.log('après if :', color);


console.log('-------------');`
    },
    {
        code:
`//avec let, plus de problème

console.log('tests avec let');
let color2 = "blue";
console.log('avant if :', color2);

if (true) {
    //cette fois, JS considère qu'il s'agit d'une nouvelle variable
    //sa portée (son scope) est limitée par les accolades
    let color2 = 'red';
    console.log('dans le if :', color2);
}

//la var définié en dehors du if n'a pas été modifiée
console.log('après if :', color2);


console.log('-------------');`
    },
    {
        code:
`//var va être rattaché à l'object window
//let va être rattaché au bloc dans lequel elle est définie
var test1 = 'test1';
let test2 = 'test2';    

console.log(window.test1);
console.log(window.test2);`
    },
    {
        code:
`//on peut redéclarer une variable avec var
var test1 = 'nouvelle valeur';`
    },
    {
        code:
`//pas possible avec let, JS nous signale une erreur
let test2 = 'nouvelle valeur';

console.log('-------------');`
    },
    {
        code:
`console.log('Test dans une boule');
//le problème ici : la boucle va plus vite que l'appel à la fonction
//i est considéré comme une variable globale
//il prend la valeur 10 avant la fin du délai
//la fonction va afficher 10 fois 'Valeur de i : 10'
for (var i=0; i<10; i++) {
    //on introduit un timeout, un délai de 1 seconde avant l'exécution de la fonction
    setTimeout(function() {
        console.log('Valeur de i avec var :', i);
    }, 1000)
}`
    },
    {
        code:
`//let règle ce problème et donne le comportement attendu
//i n'est défini qu'à l'intérieur des accolades
//il 'garde' la bonne valeur de i, même avec un délai avant l'exécution
for (let i=0; i<10; i++) {
    //on introduit un timeout, un délai de 1 seconde avant l'exécution de la fonction
    setTimeout(function() {
        console.log('Valeur de i avec let :', i);
    }, 1000)
}`
    },
    {
        code:
`for (let i=0; i<10; i++) {
    let x = i*2;
}
console.log(x);`
    },
    {
        code:
`let x = 10;
for (let i=0; i<10; i++) {
    let x = 10*i;
    console.log(x);
}`
    }
],
const: [
    {
        code:
`var PIvar = 3.14116
const PIconst = 3.14116

//avec var on peut réassigner une valeur
PIvar = 3.14159265359;

//impossible avec const, on ne peut pas ré-assigner une valeur avec =
PIconst = 3.14159265359;`
    },
    {
        code:
`//avec var, on peut déclarer et assigner plus tard
var x;

//impossible avec const, doit avoir une valeur dès la déclaration
const y;`
    },
    {
        code:
`//cas des tableaux et des objects
//Bien différencier 'modifier la référence' (interdit) et modifier le contenu (permis)
const tab = [];
tab[0] = 'une valeur';
tab.push('une autre valeur');

console.log(tab);

const obj = {};
obj.prop = 'test';
obj.otherProp = 'retest';

console.log(obj);`
    },
    {
        code:
`//const a également une portée de bloc
// si définie entre accolade, pas accessible dans le reste du programme
for (let i=0; i<10; i++) {
    const x = i;
}
//va afficher undefined
console.log(x);`
    },
    {
        code:
`const x = 10;
for (let i=0; i<10; i++) {
    x += i;
}`
    },
    {
        code:
`const tab = [];
for (let i=0; i<10; i++) {
    tab[i] = i;
}`
    }
],
arrow: [
    {
        code:
`//version classique
function display_classique() {
    console.log('test');
}

//version anonyme
const display_anonyme = function() {
    console.log('test');
}

//version ES6
const display_arrow = () => {
    console.log('test');
}

//si une seule instruction, on peut condenser
//un peu extrême, toujours privilégier la lisibilité
const display_arrow_v2 = () => console.log('test');`
    },
    {
        code:
`//paramètres et return

//version classique
function carre(num) {
    return num * num;
}

//avec arrow function
const carre_arrow = (num) => (num * num);

//avec arrow function, Xtrem version
const carre_arrow_xtrem = num => num*num;`
    },
    {
        code:
``
    }
],
switch: [
    {
        code:
`const value = prompt('Saisissez 1 ou 2');

//avec if ... else if ... else ...

if (value === '1') {
    //traitement
}
else if (value === '2') {
    //traitement
}
else {
    //si erreur de saisie, cas non couvert
}`
    },
    {
        code:
`//avec switch

switch(value) {
    case '1': 
        //traitement
        break;
    case '2': 
        //traitement
        break;
    default:
        //si erreur de saisie, cas non couvert
}`
    }
]};

export const day9 = {
    timeout: [
        {
            code:
`//je crée ma fonction à exécuter au bout de x millisecondes
const delayedFunction = () => {
    console.log('Fonction lancée à :', new Date());
}`
        },
        {
            code:
`//je lance le timeout, le délai, avec en 1er argument, le nom de la fonction à exécuter, 
//en 2ème argument, le délai en millisecondes
console.log('Lancement du timeout : ', new Date());
setTimeout(delayedFunction, 3000);`
        },
        {
            code:
`//cas avec var et let

console.log('Test dans une boule');
//le problème ici : la boucle va plus vite que la fonction
//i est considéré comme une variable globale rattachée à window
//il prend la valeur 10 avant la fin du délai
//la fonction va afficher 10 fois 'Valeur de i : 10'
for (var i=0; i<10; i++) {
    //on introduit un timeout, un délai de 1 seconde avant l'exécution de la fonction
    setTimeout(() => {
        console.log('Valeur de i avec var :', i);
    }, 1000)
}`
        },
        {
            code:
`//let règle ce problème et donne le comportement attendu
//i n'est défini qu'à l'intérieur des accolades
//il 'stocke' la bonne valeur de i dans l'instruction console.log
//on obtient bien 10 logs différents même avec un délai avant l'exécution
for (let i=0; i<10; i++) {
    setTimeout(() => {
        console.log('Valeur de i avec let :', i);
    }, 1000)
}`
        },
        {
            code:
`//on peut souhaiter stopper un timeout
//on récupère sa ref dans une variable
console.log('lancement du timeout');
let timeoutRef = setTimeout(delayedFunction, 3000);
console.log('timeout supprimé, pas d\\'exécution');
clearTimeout(timeoutRef);`
        }
    ],
    interval: [
        {
            code:
`//je crée ma fonction à exécuter toutes les x millisecondes
const toRepeat = () => {
    console.log('Fonction lancée à :', new Date());
}`
        },
        {
            code:
`//je lance le setInterval
setInterval(toRepeat, 3000);`
        },
        {
            code:
`//je souhaite pouvoir stopper l'exécution
//je stocke la référence de setInterval dans une variable
let intervalRef = setInterval(toRepeat, 3000);`
        },
        {
            code:
`//j'utilise setTimeout pour stopper l'exécution au bout de 10 secondes
setTimeout(() => {
    console.log('Appel à clearInterval, exécution stoppée');
    clearInterval(intervalRef);
}, 10000);`
        }
    ],
    spread: [
        {
            code:
`//partons d'un tableau de base
const profs = ['McGonagal', 'Chourave', 'Flitwick'];`
        },
        {
            code:
`//on peut le copier (nouvelle référence) avec le spread
const profsCopie = [...profs];
console.log('Copie de profs', profsCopie);`
        },
        {
            code:
`//pas même référence
console.log('les tableaux sont égaux', profs === profsCopie);`
        },
        {
            code:
`//on peut concaténer 2 tableaux
const students = ['Harry', 'Hermione', 'Ron'];

const persos = [...profs, ...students];
console.log('tableau persos', persos);`
        },
        {
            code:
`//on peut extraire certains éléments
const [prof1, prof2, prof3, ...restTab] = persos;
console.log('prof1', prof1);
console.log('prof2', prof2);
console.log('prof3', prof3);
console.log('reste du tableau', restTab);`
        },
        {
            code:
`//utile pour passer d'un tab à une liste de paramètres
console.log(persos);
console.log(...persos); //equivalent à console.log(persos[0], persos[1], ...)`
        },
        {
            code:
`//fonctionne aussi avec les objects
const shape = {
    type: "rectangle",
    dimensions: {
        x: 10,
        y: 20
    }
}`
        },
        {
            code:
`//copie d'un object
const shapeCopie = {...shape};
console.log('copie', shapeCopie);`
        },
        {
            code:
`//pas même référence
console.log('les objects sont égaux', shape === shapeCopie);`
        },
        {
            code:
`//extraction de certains champs
const {type, ...restObject} = shape;
console.log('type', type);
console.log('reste de l\\'object', restObject);`
        },
        {
            code:
`//on peut concaténer des objects
const css = {
    color: 'blue',
    border: '1px solid black'
}

const fullShape = {...shape, ...css};
console.log('forme complète', fullShape);`
        }
    ]
}








































































