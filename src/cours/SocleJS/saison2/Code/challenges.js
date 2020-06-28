export const first = {
    etapes: [
        {
            code:
`var question1 = 'Quelle mer borde la ville de Sébastopol ?';
var solution1 = 'la mer Noire';`
        },
        {
            code:
`var reponse1 = prompt(question1);`
        },
        {
            code:
`SI (réponse égale solution)
ALORS affiche 'Gagné !'
SINON affiche Perdu ...`
        },
        {
            code:
`if (reponse1 === solution1) {
    alert('Gagné !');
}
else {
    alert('Perdu...');
}`
        },
        {
            code:
`var question2 = 'Quel est l\\'âge du capitaine ?';
var solution2 = 63;
var reponse2 = prompt(question2);`
        },
        {
            code:
`var reponse2Number = parseInt(reponse2, 10);
if (reponse2Number === solution2) {
    alert('Gagné !');
}
else {
    alert('Perdu...')
}`
        },
        {
            code:
`var score = 0;`
        },
        {
            code:
`{
    alert('Gagné !);
    score = score + 1;
    //score += 1;
    //score++;
}`
        },
        {
            code:
`//SI score supérieur à 1 ALORS afficher avec s SINON afficher sans s
var message = '';
if (score > 1) {
    message = 'Vous avez ' + score + ' bonnes réponses';
}
else {
    message = 'Vous avez ' + score + ' bonne réponse';
}
alert(message);`
        },
        {
            code:
`var checkReponse = function(reponse, solution) {
    // check si solution est number en vérifiant son type
    //SI solution est de type number ALORS on convertit reponse avec parseInt ou Number
    
    //SI reponse égale la solution
    //ALORS affiche 'Gagné !', mise à jour du score
    //SINON affiche 'Perdu ...'
    
}`
        },
        {
            code:
`if (typeof solution === 'number') {
    reponse = parseInt(reponse, 10);
}`
        },
        {
            code:
`if (reponse === solution) {
    alert('Gagné !');
    score += 1;
} 
else {
    alert('Perdu...');
}`
        },
        {
            code:
`var question1 = 'Quelle mer borde la ville de Sébastopol ?';
var solution1 = 'la mer Noire';
var reponse1 = prompt(question1);
checkReponse(reponse1, solution1)

var question2 = 'Quel est l\\'âge du capitaine ?';
var solution2 = 63;
var reponse2 = prompt(question2);
checkReponse(reponse2, solution2)`
        },
        {
            code:
`var displayScore = function() {
    var message = '';
    if (score > 1) {
        message = 'Vous avez ' + score + ' bonnes réponses';
    }
    else {
        message = 'Vous avez ' + score + ' bonne réponse';
    }
    alert(message);
}`
        }
    ]
};

export const fourchette = {
    etapes: [
        {
            code:
`//on déclare un variable max
var MAX = 500;

//création du nombre aléatoire entre 0 et MAX
//déja la partie aléatoire
var random = Math.random();

//on l'applique à notre fourchette en multipliant random par la valeur max
var fork = MAX * random;

//on arrondit cette fourchette pour avoir un nombre entier
var randomGuess = Math.round(fork);

//version condensée
//var randomGuess = Math.round(Math.random()*500);`
        },
        {
            code:
`var userGuess = parseInt(prompt('Devinez un nombre entre 0 et '+MAX+' :'));`
        },
        {
            code:
`while(userGuess !== randomNumber) {
    userGuess = parseInt(prompt('Devinez un nombre entre 0 et '+MAX+' :'));
}`
        },
        {
            code:
`//SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
if (isNaN(userGuess)) {
    userGuess = parseInt(prompt('Veuillez saisir un NOMBRE entre 0 et '+MAX));
}`
        },
        {
            code:
`while(userGuess !== randomNumber) {
    //SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
    if (isNaN(userGuess)) {
        userGuess = parseInt(prompt('Veuillez saisir un NOMBRE entre 0 et '+MAX));
    }
    //SINON SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    else if (userGuess < randomNumber) {
        userGuess = parseInt(prompt('Le nombre à deviner est plus grand'));
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        userGuess = parseInt(prompt('Le nombre à deviner est plus petit'));
    }
}`
        },
        {
            code:
`//message gagné
console.log('Clap clap, vous avez trouvé le nb '+randomNumber);`
        },
        {
            code:
`//on déclare un variable max
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

var userGuess = parseInt(prompt('Devinez un nombre entre 0 et '+MAX+' :'));
var nbTries = 1;

while(userGuess !== randomNumber) {
    //SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
    if (isNaN(userGuess)) {
        userGuess = parseInt(prompt('Veuillez saisir un NOMBRE entre 0 et '+MAX));
    }
    //SINON SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    else if (userGuess < randomNumber) {
        userGuess = parseInt(prompt('Le nombre à deviner est plus grand'));
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        userGuess = parseInt(prompt('Le nombre à deviner est plus petit'));
    }
    //on incrémente le nb d'essais
    nbTries++;
}
//message gagné
console.log('Clap clap, vous avez trouvé le nb '+randomNumber+' en '+nbTries+' coups !');`
        },
        {
            code:
`//on déclare un variable max
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

var userGuess = parseInt(prompt('Devinez un nombre entre 0 et '+MAX+' :'));;
var nbTries = 0;
do {
    //SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur
    if (isNaN(userGuess)) {
        userGuess = parseInt(prompt('Veuillez saisir un NOMBRE entre 0 et '+MAX));
    }
    //SINON SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    else if (userGuess < randomNumber) {
        userGuess = parseInt(prompt('Le nombre à deviner est plus grand'));
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        userGuess = parseInt(prompt('Le nombre à deviner est plus petit'));
    }
    //on incrémente le nb d'essais
    nbTries++;
} while(userGuess !== randomNumber)
//message gagné
console.log('Clap clap, vous avez trouvé le nb '+randomNumber+' en '+nbTries+' coups !');`
        },
        {
            code:
`var getNumber = function(message) {
    //on déclare la variable guess et on lui assigne la valeur du prompt convertie en number
    var guess = parseInt(prompt(message));
    //TANT QUE guess n'est pas un nombre on redemande 
    while (isNaN(guess)) {
        guess = parseInt(prompt('Veuillez saisir un NOMBRE entre 0 et '+MAX));
    }
    return guess;
}`
        },
        {
            code:
`var userGuess = getNumber('Saisissez un nombre entre 0 et ' + MAX);
var nbTries = 1;

while(userGuess !== randomNumber) {
    //SI random est plus grand que guess ALORS on affiche Le nombre à deviner est plus grand
    if (userGuess < randomNumber) {
        userGuess = getNumber('Le nombre à deviner est plus grand');
    }
    //SINON SI random est plus petit que guess ALORS on affiche Le nombre à deviner est plus petit
    else if (userGuess > randomNumber) {
        userGuess = getNumber('Le nombre à deviner est plus petit');
    }
    nbTries++;
}`
        }
    ]
}

export const fourchetteObject = {
    etapes: [
        {
            code:
`var game = {
    attemps: 0,
    searchNumber: undefined
};`
        },
        {
            code:
`var play = function() {
    var randomPart = Math.random();
    var randomNum = max * randomPart;
    var randomNumRounded = Math.round(randomNum);
    /*version courte :
    var randomNumRounded = Math.round(max * Math.random());
    */
    game.searchedNumber = randomNumRounded;
    alert('Nouvelle partie');
}`
        },
        {
            code:
`var play = function() {
    ...
    game.attemps++;
    var enteredNumber =  parseInt(prompt('Quel est le nombre à trouver ?'));
    ...
}`
        },
        {
            code:
`var play = function() {
    ...
    while (enteredNumber !== game.searchedNumber) {
        if (enteredNumber < game.searchedNumber) {
            enteredNumber =  parseInt(prompt('C\\'est plus'));
        }
        else {
            enteredNumber =  parseInt(prompt('C\\'est moins'));
        }
        game.attemps++;
    }
    ...
}`
        },
        {
            code:
`var play = function() {
    ...
    alert('Bravo ! C'était bien ' + game.searchedNumber + ' - Nombre d'essais : ' + game.attemps);
    ...
}`
        },
        {
            code:
`play();`
        },
        {
            code:
`var generateRandomNumber = function(min, max) {
    var randomPart = Math.random();
    var randomNum = min + (max-min)*randomPart;
    var randomNumRounded = Math.round(randomNum);
    return randomNumRounded;
    /*version courte :
    return Math.round(min + (max-min)*Math.random());
    */
}`
        },
        {
            code:
`var game = {
    min: 10,
    max: 20,
    attemps: 0,
    searchNumber: undefined
};`
        },
        {
            code:
`var play = function() {
    // var randomPart = Math.random();
    // var randomNum = max * randomPart;
    // var randomNumRounded = Math.round(randomNum);
    // /*version courte :
    // var randomNumRounded = Math.round(max * Math.random());
    // */
    game.searchedNumber = generateRandomparseInt(game.min, game.max);
   ...
}`
        },
        {
            code:
`var game = {
    min: 10,
    max: 20,
    attemps: 0
};`
        },
        {
            code:
`var game = {
    min: 10,
    max: 20,
    attemps: 0,
    scores: []
};`
        },
        {
            code:
`game.scores.push(game.attemps);`
        },
        {
            code:
`game.scores.push(game.attemps);
console.log(game.scores);
play();`
        },
        {
            code:
`if (confirm('Rejouer ?')) {
    play();
}
else {
    console.log(game.scores);
}`
        },
        {
            code:
`...
else {
    for (var gameIndex=0; gameIndex<game.scores.length; gameIndex++) {
        alert('Partie ' + (gameIndex+1) + ' : ' + game.scores[gameIndex]+ ' essais');
    }
}`
        },
        {
            code:
`var displayScore = function() {
    for (var gameIndex=0; gameIndex<game.scores.length; gameIndex++) {
        alert('Partie ' + (gameIndex+1) + ' : ' + game.scores[gameIndex]+ ' essais');
    }
}

function play() {
    ...
    if (confirm('Rejouer ?')) {
        play();
    }
    else {
        displayScores();
    }
}`
        },
        {
            code:
`var game {
    ...
    generateRandomNumber: function (min, max) {
        return Math.round(min + (max-min)*Math.random());
    },
    ...
}`
        },
        {
            code:
`var game {
    ...
    displayScores: function () {
        for (var gameIndex=0; gameIndex<game.scores.length; gameIndex++) {
            alert('Partie ' + (gameIndex+1) + ' : ' + game.scores[gameIndex]+ ' essais');
        }
    },
    ...
}

function play() {
    ...
    if (confirm('Rejouer ?')) {
        play();
    }
    else {
        game.displayScores();
    }
}`
        },
        {
            code:
`var game {
    ...
    play: function() {
        game.searchedNumber = game.generateRandomparseInt(game.min, game.max);
        alert('Nouvelle partie');
    
        game.attemps++;
        var enteredNumber =  parseInt(prompt('Quel est le nombre à trouver ?'));
    
        while (enteredNumber !== game.searchedNumber) {
            if (enteredNumber < game.searchedNumber) {
                enteredNumber =  parseInt(prompt('C\\'est plus'));
            }
            else {
                enteredNumber =  parseInt(prompt('C\\'est moins'));
            }
            game.attemps++;
        }
        alert('Bravo ! C'était bien ' + game.searchedNumber + ' - Nombre d'essais : ' + game.attemps);
        game.scores.push(game.attemps);
    
        if (confirm('Rejouer ?')) {
            game.play();
        }
        else {
            game.displayScores();
        }
    }
}`
        },
        {
            language: 'HTML',
            code:
`<div id='scores'>

</div>
<script src='../js/main.js'></script>`
        },
        {
            code:
`displayScores: function() {
    var target = document.getElementById('scores');
}`
        },
        {
            code:
`displayScores: function() {
    ...
    var title = document.createElement('h1');
    //pour les class CSS
    title.className = 'scores-title';
    //ajout de contenu avec des balises
    title.innerHTML = 'Resultats de vos <strong>'+game.scores.length+' parties</strong>';
}`
        },
        {
            language: 'CSS',
            code:
`#scores {
    width: 500px;
    margin: 2em auto;
    font-family: sans-serif;
}

.scores-title {
    color: #44a1fb;
}`
        },
        {
            code:
`displayScores: function() {
    ...
    target.appendChild(title);
}`
        },
        {
            code:
`displayScores: function() {
    ...
    var table = document.createElement('table');
}`
        },
        {
            code:
`displayScores: function() {
    ...
    var tableHeader = document.createElement('thead');
    //1ère façon d'ajouter des élément : une chaine concaténée et la propriété .innerHTML
    var headerContent = '<tr>';
    headerContent += '<th>Partie</th>';
    headerContent += '<th>Essais</th>';
    headerContent += '</tr>';
    tableHeader.innerHTML = headerContent;
    table.appendChild(tableHeader)
}`
        },
        {
            code:
`displayScores: function() {
    ...
    var tableBody = document.createElement('tbody');
}`
        },
        {
            code:
`displayScores: function() {
    ...
    for (var gameIndex=0; gameIndex < game.scores.length; gameIndex++) {
        var tr = document.createElement('tr');
        
        var tdGame = document.createElement('td');
        tdGame.textContent = gameIndex + 1;
        tr.appendChild(tdGame);

        var tdAttemps = document.createElement('td');
        tdAttemps.textContent = game.scores[gameIndex];
        tr.appendChild(tdAttemps);

        tableBody.appendChild(tr);
    }
}`
        },
        {
            code:
`displayScores: function() {
    ...
    table.appendChild(tableBody);
    target.appendChild(table);
}`
        }
    ]
}

export const diceRoller = {
    etapes: [
        {
            code:
`var createDice = function() {
    var dice = document.createElement('div');
    dice.className = 'dice';
    document.getElementById('player').appendChild(dice);
}

createDice();`
        },
        {
            code:
`var getRandom = function(min, max) {
    var randomPart = Math.random();
    var randomNumber = min + randomPart*(max - min + 1);
    var randomInteger = Math.floor(randomNumber);
    return randomInteger;
    //version courte
    // return Math.floor(min + Math.random()*(max - min + 1))
}`
        },
        {
            code:
`var createDice = function() {
    ...
    var diceValue = app.getRandom(1, 6);
    var offset = (diceValue - 1) * 100;
    dice.style.backgroundPosition = '-' + offset + 'px 0';
...
}`
        },
        {
            code:
`var nbDices = Number(prompt('Nombre de dés : '));
while(isNaN(nbDices)) {
    nbDices = prompt('Veuillez saisir un nombre de dés : ');
}

for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
    createDice();
}`
        },
        {
            language: 'HTML',
            code:
`<div id='app'>
<div class='board' id='player'></div>
<div class='board' id='dealer'></div>
</div>`
        },
        {
            code:
`var createDice = function(target) {
    var dice = document.createElement('div');
    dice.className = 'dice';
    var diceValue = app.getRandom(1, 6);
    var offset = (diceValue - 1) * 100;
    dice.style.backgroundPosition = '-' + offset + 'px 0';
    document.getElementById(target).appendChild(dice);
}`
        },
        {
            code:
`for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
    createDice('player');
    createDice('dealer');
}`
        },
        {
            code:
`<div id='ui'>
<button type='button' id='play-button'>Jouer avec 6 dés</button>
<p class='precision'>psst, appuyer sur une touche du clavier, ça marche aussi &#x1F600;</p>
</div>`
        },
        {
            language: 'CSS',
            code:
`#ui {
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
}`
        },
        {
            code:
`var playButton = document.getElementById('play-button');

playButton.addEventListener('click', 
    //2ème argument : fonction pour lancer un nouveau jeu
        //effacer le jeu précédent
        //afficher un nouveau avec 6 dés
);`
        },
        {
            code:
`var newGame = function() {
    //effacer le jeu précédent
    //afficher un nouveau avec 6 dés
}

var playButton = document.getElementById('play-button');

playButton.addEventListener('click', newGame);`
        },
        {
            code:
`var resetBoard = function() {
    document.getElementById('player').textContent = '';
    document.getElementById('dealer').textContent = '';
}

var newGame = function() {
    //effacer le jeu précédent
    resetBoard();
    //afficher un nouveau avec 6 dés
}`
        },
        {
            code:
`var play = function(nbDices) {
    for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
        createDice('player');
        createDice('dealer');
    }
}

var newGame = function() {
    //effacer le jeu précédent
    resetBoard();
    //afficher un nouveau avec 6 dés
    play(6);
}`
        },
        {
            code:
`document.body.addEventListener('keyup', newGame);`
        },
        {
            code:
`var app = {};`
        },
        {
            code:
`var app = {
    getRandom: function(min, max) {
        var randomPart = Math.random();
        var randomNumber = min + randomPart*(max - min + 1);
        var randomInteger = Math.floor(randomNumber);
        return randomInteger;
        //version courte
        // return Math.floor(min + Math.random()*(max - min + 1))
    },
    createDice: function(target) {
        var dice = document.createElement('div');
        dice.className = 'dice';
        var diceValue = app.getRandom(1, 6);
        var offset = (diceValue - 1) * 100;
        dice.style.backgroundPosition = '-' + offset + 'px 0';
        document.getElementById(target).appendChild(dice);
    },
    resetBoard: function() {
        document.getElementById('player').textContent = '';
        document.getElementById('dealer').textContent = '';
    },
    play: function(nbDices) {
        for (var diceIndex=0; diceIndex<nbDices; diceIndex++) {
            app.createDice('player');
            app.createDice('dealer');
        }
    },
    newGame: function() {
        console.log('new game');
        //effacer le jeu précédent
        app.resetBoard();
        //afficher un nouveau avec 6 dés
        app.play(6);
    }
};`
        },
        {
            code:
`var app = {
    ...
    init: function() {
        var playButton = document.getElementById('play-button');
        playButton.addEventListener('click', app.newGame);
        document.body.addEventListener('keyup', app.newGame);
    }
};

app.init();`
        },
        {
            code:
`<div id="welcome">
    <button type="buton" class="btn" id="play">Jouer</button>
</div>
<div id="app" class="hidden">
    <div class="form">
        <form id="game-form">
            <input type="range" id="dice-number-input" min="1" max="20" value="3" />
            <span id="dice-number"></span>
            <button class="btn">Valider le nombre de dés et lancer</button>
        </form>
    </div>
    <div id="game">
        <div class="board" id="player"></div>
        <div class="board" id="dealer"></div>
    </div>
</div>`
        },
        {
            language: 'CSS',
            code:
`#app {
    display: flex;
    flex-direction: column;
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
}`
        },
        {
            code:
`init: function() {
    //var playButton = document.getElementById('play-button');
    //playButton.addEventListener('click', app.newGame);
    document.body.addEventListener('keyup', app.newGame);
    var welcomeButton = document.getElementById('play');
    welcomeButton.addEventListener('click', app.start);
},
start: function() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
}`
        },
        {
            language: 'HTML',
            code:
`<div class='form'>
    <form id='game-form'>
        <input type='range' id='dice-number-input' min='1' max='20' value='3' />
        <span id='dice-number'></span>
        <button class='btn'>Valider le nombre de dés et lancer</button>
    </form>
</div>`
        },
        {
            language: 'CSS',
            code:
`.form {
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
}`
        },
        {
            code:
`init: function() {
    ...
    app.diceNumberInput = document.getElementById('dice-number-input');
    app.diceNumberInput.addEventListener('change', app.changeNumber);
    app.changeNumber();
},
changeNumber: function() {
    app.nbDices = app.diceNumberInput.value;
    var diceNumber = document.getElementById('dice-number');
    diceNumber.textContent = app.nbDices;

}`
        },
        {
            code:
`init: function() {
    ...
    var gameForm = document.getElementById('game-form');
    gameForm.addEventListener('submit', app.play);
}`
        },
        {
            code:
`play: function(event) {
    console.log(event);
    event.preventDefault();
    app.resetBoard();
    for (var diceIndex=0; diceIndex<app.nbDices; diceIndex++) {
        app.createDice('player');
        app.createDice('dealer');
    }
}`
        },
        {
            code:
`init: function() {
    ...
    document.body.addEventListener('keyup', function(event) {
        console.dir(event);
        if (event.code === 'Space') {
            app.start();
        }
    });
}`
        },
        {
            code:
`createDice: function(target) {
    var dice = document.createElement('div');
    dice.className = 'dice';
    var diceValue = app.getRandom(1, 6);
    var offset = (diceValue - 1) * 100;
    dice.style.backgroundPosition = '-' + offset + 'px 0';
    document.getElementById(target).appendChild(dice);
    return diceValue;
}`
        },
        {
            code:
`createAllDices: function(target) {
    var score = 0;
    for (var diceIndex=0; diceIndex<app.nbDices; diceIndex++) {
        score += app.createDice(target);
    }
    return score;
}`
        },
        {
            code:
`play: function(event) {
    event.preventDefault();
    app.resetBoard();
    var playerScore = app.createAllDices('player');
    var dealerScore = app.createAllDices('dealer');
    console.log('player score : ', playerScore);
    console.log('dealer score : ', dealerScore);
}`
        },
        {
            code:
`play: function(event) {
    ...
    if (playerScore > dealerScore) {
        app.victory++;
    } else if (playerScore < dealerScore) {
        app.defeat++;
    }
    console.log('Victoires : ', app.victory);
    console.log('Défaites : ', app.defeat);
}`
        },
        {
            code:
`play: function(event) {
    ...
    app.displayResult('player', app.victory);
    app.displayResult('dealer', app.defeat);

},
displayResult: function(target, counter) {
    var result = document.createElement('div');
    result.className = 'result';
    result.textContent = counter;
    document.getElementById(target).appendChild(result);
},`
        },
        {
            language: 'CSS',
            code:
`.result {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color:rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 3em;
    padding: 1em;
    text-align: center;
}`
        },
        {
            language: 'CSS',
            code:
`@keyframes fade {
    0% {opacity: 0}
    100% {opacity: 1}
}

.result {
    ...
    animation: fade 0.4s ease 0s 1;
}`
        },
        {
            code:
`resetBoard: function() {
    var boards = document.querySelectorAll('.board');
    for (var boardIndex=0; boardIndex<boards.length; bordIndex++) {
        boards[boardIndex].innerHTML = '';
    }
}`
        },
        {
            code:
`play: function(event) {
    ...
    app.dealerPlay(playerScore);
},
dealerPlay: function(playerScore) {
    var dealerScore = app.createAllDices('dealer');
    if (playerScore > dealerScore) {
        app.victory++;
    } else if (playerScore < dealerScore) {
        app.defeat++;
    }
    app.displayResult('player', app.victory);
    app.displayResult('dealer', app.defeat);
}`
        },
        {
            code:
`play: function(event) {
    ...
    setTimeout(app.dealerPlay, 3000, playerScore);
}`
        },
        {
            code:
`var app = {
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
}`
        },
        {
            code:
`@keyframes pop {
    0% {transform: scale(0);}
    75% {transform: scale(1.1);}
    100% {transform: scale(1);}
}

.dice {
    ...
    animation: pop .4s ease 0s 1;
}`
        },
        {
            code:
`play: function(event) {
    ...
    if (!app.isPlaying) {
        ...
        app.createCounter();
    }
}
...
createCounter: function() {
    app.counter = 3;
    app.counterElement = document.createElement('div');
    app.counterElement.className = 'counter';
    app.counterElement.textContent = app.counter;
    document.getElementById('app').appendChild(app.counterElement);
    app.counterInterval = setInterval(game.countdown, 1000);
}`
        },
        {
            code:
`countdown: function() {
    app.counter--;
    app.counterElement.textContent = app.counter;
    if (app.counter === 0) {
        app.deleteCounter();
    }
}`
        },
        {
            code:
`deleteCounter: function() {
    clearInterval(app.counterInterval);
    app.counterElement.remove();
}`
        },
        {
            language: 'CSS',
            code:
`.counter {
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
}`
        }
    ]
}



export const invaders = {
    etapes: [ 
{
language: "CSS",
code: 
`body {
    font-family: sans-serif;
}

#invader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(45deg, #3c40c6 0%, #6d57cf 100%);
}`
},
{
code: 
`var gridSize = 8;
var pixelSize = 25;

var drawingArea = document.querySelector('#invader');`,
},
{
code:
`var drawBoard = function() {
    for (var lineIndex=0; lineIndex<gridSize; lineIndex++) {
        var line = document.createElement('div');
        for (var columnIndex=0; columnIndex<gridSize; columnIndex++) {
            var pixel = document.createElement('div');
            line.appendChild(pixel);
        }
        drawingArea.appendChild(line);
    }
};

drawBoard();`
},
{
language: "CSS",
code: 
`.line {
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
}

.pixel {
    background-color: #838e9a;
    border: 2px solid #d4dae1;
    cursor: pointer;
}`
},
{
code:
`var setLineStyle = function(line) {
    line.className = 'line';
    line.style.width = (gridSize * pixelSize) + 'px';
};

var setPixelStyle = function(pixel) {
    pixel.className = 'pixel';
    pixel.style.width = pixelSize + 'px';
    pixel.style.height = pixelSize + 'px';
};

var drawBoard = function() {
    for (var lineIndex=0; lineIndex<gridSize; lineIndex++) {
        var line = document.createElement('div');
        setLineStyle(line);
        for (var columnIndex=0; columnIndex<gridSize; columnIndex++) {
            var pixel = document.createElement('div');
            setPixelStyle(pixel);
            line.appendChild(pixel);
        }
        drawingArea.appendChild(line);
    }
};`
},
{
language: "CSS",
code:
`.pixel--plain {
    background-color: #d2dae2;
    border-color: #808e9b;
}

.pixel--empty {
    background-color: #485460;
    border-color: #1e272e;
}`
},
{
code:
`var handlePixelClick = function(event) {
    var pixel = event.target;
    console.log(pixel);
};

var drawBoard = function() {
    ...
            setPixelStyle(pixel);
            pixel.addEventListener('click', handlePixelClick);
            line.appendChild(pixel);
    ...
};`
},

{
code:
`var handlePixelClick = function(event) {
    var pixel = event.target;
    if (pixel.classList.contains('pixel--plain')) {
        pixel.classList.remove('pixel--plain');
        pixel.classList.add('pixel--empty');
    } else {
        pixel.classList.remove('pixel--empty');
        pixel.classList.add('pixel--plain');
    }
};

var drawBoard = function() {
    ...
            setPixelStyle(pixel);
            pixel.addEventListener('click', handlePixelClick);
            line.appendChild(pixel);
    ...
};`
},
{
    code:
`var form = document.querySelector('.configuration');`
},
{
    code:
`var fillForm = function() {
    var input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Taille de la grille';
    input.value = gridSize;
    form.appendChild(input);

    var button = document.createElement('button');
    button.textContent = 'Valider';
    form.appendChild(button);
};
...
fillForm();`
},
{
    language: "CSS",
    code:
`.configuration {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272bad;
}

.configuration input {
    padding: 1em;
    border: 0;
    font-size: 1.2em;
    width: 10em;
    margin-right: 2px;
    border-radius: .5em 0 0 .5em;
}

.configuration button {
    padding: 1em;
    border: 0;
    font-size: 1.2em;
    color: #fff;
    background-color: #9957e4;
    border-radius: 0 .5em .5em 0;
}`
},
{
    language: "CSS",
    code:
`#invader {
    ...
    min-height: calc(100vh - 150px);
    ...
}`
},
{
    code:
`var handleSubmit = function(event) {
    event.preventDefault();
    console.log(event);
};`
},
{
    code:
`var fillForm = function() {
    ...
    form.addEventListener('submit', handleSubmit);
};`
},
{
    code:
`var clearBoard = function() {
    drawingArea.innerHTML = '';
};`
},
{
    code:
`var handleSubmit = function(event) {
    event.preventDefault();
    console.log(event);
    var gridInput = event.target.children[0];
    var gridValue = parseInt(gridInput.value, 10);
    gridSize = gridValue;
    clearBoard();
    drawBoard();
};`
},
{
    code:
`var app = {
    gridSize: 8,
    pixelSize: 25
};`
},
{
    code:
`var app {
    ...
    init: function() {
        app.drawingArea = document.querySelector('#invader');
        app.form = document.querySelector('.configuration');
    }
};

app.init();`
},
{
    code:
`setLineStyle: function(line) {
    line.className = 'line';
    line.style.width = (app.gridSize * app.pixelSize) + 'px';
},

setPixelStyle: function(pixel) {
    pixel.className = 'pixel';
    pixel.style.width = app.pixelSize + 'px';
    pixel.style.height = app.pixelSize + 'px';
}`
},
{
    code:
`handlePixelClick: function(event) {
    var pixel = event.target;
    if (pixel.classList.contains('pixel--plain')) {
        pixel.classList.remove('pixel--plain');
        pixel.classList.add('pixel--empty');
    } else {
        pixel.classList.remove('pixel--empty');
        pixel.classList.add('pixel--plain');
    }
}`
},
{
    code:
`drawBoard: function() {
    for (var lineIndex=0; lineIndex<app.gridSize; lineIndex++) {
        var line = document.createElement('div');
        app.setLineStyle(line);
        for (var columnIndex=0; columnIndex<app.gridSize; columnIndex++) {
            var pixel = document.createElement('div');
            app.setPixelStyle(pixel);
            pixel.addEventListener('click', app.handlePixelClick);
            line.appendChild(pixel);
        }
        app.drawingArea.appendChild(line);
    }
},

clearBoard: function() {
    app.drawingArea.innerHTML = '';
}`
},
{
    code:
`handleSubmit: function(event) {
    event.preventDefault();
    console.log(event);
    var gridInput = event.target.children[0];
    var gridValue = parseInt(gridInput.value, 10);
    app.gridSize = gridValue;
    app.clearBoard();
    app.drawBoard();
},

fillForm: function() {
    var input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Taille de la grille';
    input.value = app.gridSize;
    app.form.appendChild(input);

    var button = document.createElement('button');
    button.textContent = 'Valider';
    app.form.appendChild(button);

    app.form.addEventListener('submit', app.handleSubmit);
}`
},
{
    code:
`init: function() {
    app.drawingArea = document.querySelector('#invader');
    app.form = document.querySelector('.configuration');
    app.drawBoard();
    app.fillForm();
}`
},
{
    code:
`fillForm: function() {
    app.generateInput('Taille de la grille', app.gridSize);
    app.generateInput('Taille des pixel', app.pixelSize);
    ...
},

generateInput: function(placeholder, value) {
    var input = document.createElement('input');
    input.type = 'number';
    input.placeholder = placeholder;
    input.value = value;
    app.form.appendChild(input);
}`
},
{
    language: "CSS",
    code:
`.configuration input {
    padding: 1em;
    border: 0;
    font-size: 1.2em;
    width: 10em;
    margin-right: 2px;
}

.configuration input:first-child {
    border-radius: .5em 0 0 .5em;
}`
},
{
    code:
`handleSubmit: function(event) {
    ...
    app.gridSize = gridValue;

    var pixelInput = event.target.children[1];
    var pixelValue = parseInt(pixelInput.value, 10);
    app.pixelSize = pixelValue;

    app.clearBoard();
    ...
}`
},
{
    code:
`var app {
    ...
    pixelSize: 25,
    style: [
        'plain',
        'empty',
        'light',
        'highlight'
    ],

    init: function() {
    ...
}`
},
{
    language: "CSS",
    code:
`.pixel--light {
    background-color: #ffc048;
    border-color: #ffa801;
}

.pixel--highlight {
    background-color: #0be881;
    border-color: #05c46b;
}`
},
{
    code:
`init: function() {
    ...
    app.addPalette();
},
...
addPalette: function() {
    app.palette = document.createElement('div');
    app.palette.className = 'palette';
    document.body.appendChild(app.palette);
}`
},
{
    language: "CSS",
    code:
`.palette {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5em;
}`
},
{
    code:
`addPalette: function() {
    app.palette = document.createElement('div');
    app.palette.className = 'palette';
    app.style.forEach(function(element) {
        console.log(element);
    });
    document.body.appendChild(app.palette);
}`
},
{
    code:
`addPalette: function() {
    ...
    app.style.forEach(app.addStyle);
    ...
},

addStyle: function(style) {
    var color = document.createElement('a');
    color.textContent = style;
    app.palette.appendChild(color);
}`
},
{
    code:
`addStyle: function(style) {
    var color = document.createElement('a');
    color.dataset.name = style;
    app.palette.appendChild(color);
}`
},
{
    code:
`addStyle: function(style) {
    var color = document.createElement('a');
    color.className = 'palette__color palette__color--'+style;
    color.dataset.name = style;
    app.palette.appendChild(color);
}`
},
{
    language: "CSS",
    code:
`.palette__color {
    margin: .5em;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
}

.pixel--plain, .palette__color--plain {
    background-color: #d2dae2;
    border-color: #808e9b;
}

.pixel--empty, .palette__color--empty {
    background-color: #485460;
    border-color: #1e272e;
}

.pixel--light, .palette__color--light {
    background-color: #ffc048;
    border-color: #ffa801;
}

.pixel--highlight, .palette__color--highlight {
    background-color: #0be881;
    border-color: #05c46b;
}`
},
{
    code:
`var app = {
    ...
    chosenStyle: 'plain',
    ...
 }`
},
{
    code:
`.palette__color {
    ...
    transition: transform 0.3s ease;
}

.palette__color:hover {
    transform: scale(1.1);
}

.palette__color--active, .palette__color--active:hover {
    transform: scale(1.4);
}`
},
{
    code:
`handleColorClick: function(event) {
    var oldColorElement = document.querySelector('.palette__color--active');
    oldColorElement.classList.remove('palette__color--active');

    var newColorElement = event.target;
    newColorElement.classList.add('palette__color--active');

    var newColor = newColorElement.dataset.name;
    app.chosenStyle = newColor;
}`
},
{
    code:
`addStyle: function(style) {
    ...
    if (style === app.chosenColor) {
        color.classList.add('palette__color--active');
    color.addEventListener('click', app.handleColorClick);
    ...
}`
},
{
    code:
`handlePixelClick: function(event) {
    var pixel = event.target;
    app.style.forEach(function(style) {
        pixel.classList.remove('pixel--'+style);
    });
    pixel.classList.add('pixel--'+app.chosenStyle);
}`
},
{
    code:
`addStyle: function(style) {
    ...
    if (style === app.chosenColor) {
        color.classList.add('palette__color--active');
    }
    ...
}`
}


    ] 
};

export const rpg = {
    etapes: [
        {
            language: "HTML",
            code: 
`<body>
    <div id="board">

    </div>
    ...
</body>`
        },
        {
            code:
`init: () => {
    console.log('init !');
}`
        },
        {
            code: 
`player: {
    x: 0,
    y: 0,
    direction: 'right'
},
targetCell: {
    x: 5,
    y: 3
},
`
        },
        {
            code: 
`drawBoard: () => {
    const target = document.getElementById('board');
    //on ajoute les 4 lignes de class row
    for (let currentLine=0; currentLine<4; currentLine++) {
        let line = document.createElement('div');
        line.className = 'row';
        /*
            création des colonnes
        */
        //on ajoute la nouvelle line à la div#board
        target.appendChild(line);
    }
  },`
        },
        {
            code:
`drawBoard: () => {
    const target = document.getElementById('board');
    //on ajoute les 4 lignes de class row
    for (let currentLine=0; currentLine<4; currentLine++) {
        let line = document.createElement('div');
        line.className = 'row';
        //dans chaque ligne, on veut ajouter 6 div de class cell
        for (let currentCol=0; currentCol<6; currentCol++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            //on ajoute la nouvelle cell à la div.row courante
            line.appendChild(cell);
        }
        //on ajoute la nouvelle line à la div#board
        target.appendChild(line);
    }
  },`
        },
        {
            language: "CSS",
            code: 
`#board {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    margin: auto; 
}

.cell {
    width: 70px;
    height: 70px;
    border: 1px solid black;
}`
        },
        {
            code: 
`drawBoard: () => {
    ...
    for (let currentLine=0; currentLine<4; currentLine++) {
        ...
        for (let currentCol=0; currentCol<6; currentCol++) {
            ...
            //SI coordonnées courantes sont égales aux coordonnées de targetCell
            //ALORS on ajoute la class targetCell
            if (currentCol === app.targetCell.x && currentLine === app.targetCell.y) {
                cell.classList.add('targetCell');
            }

            //SI coordonnées courantes sont égales aux coordonnées du joueur
            //ALORS on ajoute la div.player dans la cell
            if (currentCol === app.player.x && currentLine === app.player.y) {
                let player = document.createElement('div');
                player.className = 'player';
                cell.appendChild(player);
            }
            ...
        }
        ...
    }
  },`
        },
        {
            language: "CSS",
            code: 
`.targetCell {
    background-color: green;
}`
        },
        {
            code: 
`clearBoard: () => {
    //on récupère la target
    const board = document.getElementById('board');
    //version propre
    //TANT QUE board contient des éléments, on efface l'élément courant
    while(board.firstChild) {
        board.firstChild.remove();
    }
    //version moins propre mais efficace !
    //board.innerHTML = '';
},`
        },
        {
            code: 
`redrawBoard: function() {
    //on efface la grille
    app.clearBoard();
    //on la redessine
    app.drawBoard();
},`
        },
        {
            code: 
`turnLeft: () => {
    //on étudie la direction actuelle du player
    switch(app.player.direction) {
        //si direction right, un turnLeft donne une direction up
        case 'right':
            app.player.direction = 'up';
            break;
        //si direction up, un turnLeft donne une direction left
        case 'up':
            app.player.direction = 'left';
            break;
        //si direction left, un turnLeft donne une direction down
        case 'left':
            app.player.direction = 'down';
            break;
        //si direction down, un turnLeft donne une direction right
        case 'down':
            app.player.direction = 'right';
            break;
        default: break;
    }
},
turnRight: () => {
    //on étudie la direction actuelle du player
    switch(app.player.direction) {
        //si direction right, un turnRight donne une direction down
        case 'right':
            app.player.direction = 'down';
            break;
        //si direction up, un turnRight donne une direction left
        case 'down':
            app.player.direction = 'left';
            break;
        //si direction left, un turnRight donne une direction up
        case 'left':
            app.player.direction = 'up';
            break;
        //si direction down, un turnRight donne une direction right
        case 'up':
            app.player.direction = 'right';
            break;
        default: break;
    }
},`
        },
        {
            code: 
`drawBoard: () => {
    ...
    for (let currentLine=0; currentLine<4; currentLine++) {
        ...
        for (let currentCol=0; currentCol<6; currentCol++) {
            ...
            //SI coordonnées courantes sont égales aux coordonnées du joueur
            //ALORS on ajoute la div.player dans la cell
            if (currentCol === app.player.x && currentLine === app.player.y) {
                let player = document.createElement('div');
                player.className = 'player player--'+app.player.direction;
                cell.appendChild(player);
            }
            ...
        }
        ...
    }
    },`
                    },
        {
            code: 
`/* .player--right est facultatif, pas de rotation */
.player--right {
  transform: rotate(0deg);
}

.player--down {
  transform: rotate(90deg);
}

.player--left {
  transform: rotate(180deg);
}

.player--up {
  transform: rotate(-90deg);
}`
        },
        {
            code: 
`moveForward: () => {
    switch(app.player.direction) {
        case 'right':
            if (app.player.x < 5) {
                app.player.x += 1;
                console.log(\`Player à la position (\${app.player.x}, \${app.player.y})\`);
            }
            else {
                console.log('Player au bord du vide, mouvement impossible')            
            }
            break;
        case 'down':
            if (app.player.y < 3) {
                app.player.y += 1;
                console.log(\`Player à la position (\${app.player.x}, \${app.player.y})\`);
            }
            else {
                console.log('Player au bord du vide, mouvement impossible')            
            }
            break;
        case 'left':
            if (app.player.x > 0) {
                app.player.x -= 1;
                console.log(\`Player à la position (\${app.player.x}, \${app.player.y})\`);
            }
            else {
                console.log('Player au bord du vide, mouvement impossible')            
            }
            break;
        case 'up':
            if (app.player.y > 0) {
                app.player.y -= 1;
                console.log(\`Player à la position (\${app.player.x}, \${app.player.y})\`);
            }
            else {
                console.log('Player au bord du vide, mouvement impossible')            
            }
            break;
        default: break;
        
    }
},`
        },
        {
            code: 
`listenKeyboardEvents: () => {
    //ajout du listener sur document
    //callback en arrow function
    document.addEventListener('keyup', (event) => {
        switch(event.keyCode) {
            case 37: //flèche gauche
                app.turnLeft();
                break;
            case 38: //flèche haut
                app.moveForward();
                break;
            case 39: //flèche droite
                app.turnRight();
                break;
            default: break;
        }
    });
},
init: () => {
  console.log('init !');
  app.drawBoard();
  app.listenKeyboardEvents();
}`
        },
        {
            code: 
`//si gameOver est à true, on sort de la fonction
if (app.gameOver) { //équivalent à if (app.gameOver === true)
    return;
}`
        },
        {
            code: 
`isGameOver: () => {
    //on checke si les coordonnées du player sont égales à celles de la targetCell
    if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
        gameOver = true;
        alert('Victoire !');
    }
},`
        },
        {
            code: 
`isGameOver: () => {
    //on checke si les coordonnées du player sont égales à celles de la targetCell
    if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
        app.gameOver = true;
        alert(\`Victoire en \${app.nbMoves} coups !\`);
    }
},`
        },
        {
            language: "CSS",
            code: 
`/* version sprite */

.beautiful .player {
  width: 100%;
  height: 100%;
  background-image: url('../img/sprite.png');
  background-repeat: no-repeat;
  background-size: auto 280px;
  border: none;
  margin: auto;
  transform: none;
  transition: none;
}

.beautiful .player--up {
  background-position-y: -210px;
}

.beautiful .player--left {
  background-position-y: -70px;
}

.beautiful .player--right {
  background-position-y: -140px;
}

.beautiful .player--down {
  background-position-y: 0px;
}`
        }
    ]
};

export const simon = {
    etapes: [
        {
            code:
`const app = {...
};

document.addEventListener('DOMContentLoaded', app.init);`
        },
        {
            code:
`showMessage: function (message) {
    document.getElementById('message').innerHTML = message;
    document.getElementById('go').style.display = 'none';

}`
        },
        {
            code:

`hideMessage: () => {
    document.getElementById('message').style.display = 'none';
    document.getElementById('go').style.display = 'block';

}`
        },
        {
            code:
`app.showMessage('test');
app.hideMessage();
app.showMessage('test');`
        },
        {
            code:
`showMessage: function (message) {
    document.getElementById('message').innerHTML = message;
    document.getElementById('message').style.display = 'block';
    document.getElementById('go').style.display = 'none';
}`            
        },
        {
            code:
`endGame: () => {
    alert(\`Partie terminée, votre score : \${app.sequence.length}\`);
    app.hideMessage();
    app.sequence = [];
}`
        },
        {
            code:
`// this var will contain the sequence said by Simon
sequence: [],
indice: 0,`
        },
        {
            code:
`drawCells: function () {
    const playground = document.getElementById('playground');
    for (const color of app.colors) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = color;
        cell.style.backgroundColor = color;
        cell.addEventListener('click', app.playerSays);
        playground.appendChild(cell);
    }
},`
        },
        {
            code:
`playerSays: (event) => {
    app.bumpCell(event.target.id);
    if (event.target.id === app.sequence[app.indice]) {
        if (app.indice === app.sequence.length - 1) {
            app.nextMove();
        }
        else {
            app.indice++;
        }
    }
    else {
        app.endGame();
    }

}`
        },
        {
            code:
`nextMove: () => {
    app.sequence.push(app.colors[Math.floor(Math.random()*4)]);
    app.indice = 0;
    setTimeout(() => {
        app.simonSays(app.sequence);
    }, 500);
}`
        },
        {
            code:
`simonSays: function (sequence) {
    app.showMessage('Mémorisez la séquence');
    if (sequence && sequence.length) {
        // after 500ms, bump the first cell
        setTimeout(app.bumpCell, 500, sequence[0]);
        // plays the rest of the sequence after a longer pause
        setTimeout(app.simonSays, 850, sequence.slice(1));
    } else {
        app.showMessage('Reproduisez la séquence');
    }
}`
        },
        {
            code:
`simonSays: function (sequence) {
    app.showMessage('Mémorisez la séquence');
    if (sequence && sequence.length) {
        // after 500ms, bump the first cell
        setTimeout(app.bumpCell, 500, sequence[0]);
        // plays the rest of the sequence after a longer pause
        setTimeout(app.simonSays, 850, sequence.slice(1));
    } else {
        app.showMessage('Reproduisez la séquence');
        app.timeoutRef = setTimeout(app.endGame, 5000);
    }
},
playerSays: (event) => {
    clearTimeout(app.timeoutRef);
    app.bumpCell(event.target.id);
    if (event.target.id === app.sequence[app.indice]) {
        if (app.indice === app.sequence.length - 1) {
            app.nextMove();
        }
        else {
            app.timeoutRef = setTimeout(app.endGame, 5000);
            app.indice++;
        }
    }
    else {
        app.endGame();
    }
}`
        },
        {
            code:
`sequence: [],
indice: 0,
simonOn: false,`
        },
        {
            code:
`simonSays: function (sequence) {
    app.showMessage('Mémorisez la séquence');
    app.simonOn = true;
    if (sequence && sequence.length) {
        // after 500ms, bump the first cell
        setTimeout(app.bumpCell, 500, sequence[0]);
        // plays the rest of the sequence after a longer pause
        setTimeout(app.simonSays, 850, sequence.slice(1));
    } else {
        app.showMessage('Reproduisez la séquence');
        app.timeoutRef = setTimeout(app.endGame, 5000);
        app.simonOn = false;
    }
}`
        },
        {
            code:
`playerSays: (event) => {
    if (app.simonOn)
        return;
    clearTimeout(app.timeoutRef);
    app.bumpCell(event.target.id);
    if (event.target.id === app.sequence[app.indice]) {
        if (app.indice === app.sequence.length - 1) {
            app.nextMove();
        }
        else {
            app.timeoutRef = setTimeout(app.endGame, 5000);
            app.indice++;
        }
    }
    else {
        app.endGame();
    }

}`
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
        {
            code:
``
        },
    ]
}