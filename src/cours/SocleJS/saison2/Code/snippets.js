export const day7 = {
classList: [
{
code:
`//on référence l'éléménet qu'on veut cibler
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
console.log('timeout supprimé, pas d\'exécution');
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
console.log('reste de l\'object', restObject);`
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








































































