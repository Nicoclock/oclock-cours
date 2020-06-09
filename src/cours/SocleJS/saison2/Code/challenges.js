
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
};