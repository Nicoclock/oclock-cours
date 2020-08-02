export const day1 = {
    context: [
        {
            code:
`console.log(window);
console.log(this);`
        },
        {
            code:
`console.log(global);
console.log(this);`
        }
    ],
    repl: [
        {
            code:
`node --version`
        },
        {
            code:
`const firstName = 'Nico';
const lastName = 'Charpin';
console.log(\`\${firname} \${lastName}\`);`
        },
        {
            code:
`const tab = ['pomme', 'poire', 'banane', 'ananas', 'goyave'];
tab.push('mangue');
console.log(tab);`
        },
        {
            code:
`.editor
const spaceship = {
    name: 'Millennium Falcon',
    driver: 'Han Solo',
    codriver: 'Chewbacca'
};
console.log(spaceship.driver);
Ctrl+D`
        },
        {
            code:
`.editor
const presentation = (firstName, lastName) => {
    console.log(\`Hello \${firstName} \${lastName}\`);
};
presentation('Nico', 'Charpin');
Ctrl+D`
        }
    ],
    node: [
        {
            code:
`const firstName = 'Harry';
const lastName = 'Potter';
const house = 'Griffindor';

const student = {
    firstName,
    lastName,
    house
};

console.table(student);`
        },
        {
            code:
`for (const prop of student) {
    console.log(\`\${prop} : \${student[prop]}\`);
}`
        },
        {
            code:
`const fruits = ['pomme', 'poire', 'banane', 'ananas', 'goyave'];
for (const index in fruits) {
    console.log(fuits[index]);
}

for (const fruit of fruits) {
    console.log(fruit);
}`
        },
        {
            code:
`const os = require('os');
console.log(os);`
        },
        {
            code:
`const memUsage = os.freemem() / os.totalmem();
console.log(\`\${Math.round(memUsage * 100)} % de mémoire libre\`);`
        },
        {
            code:
`const memUsage = os.freemem() / os.totalmem();
const percent = Math.round(memUsage * 100);
if (percent < 4) {
    console.error(\`\${percent} % de mémoire libre\`);
}
else if (percent < 15) {
    console.warn(\`\${percent} % de mémoire libre\`);
}
else {
    console.log(\`\${percent} % de mémoire libre\`);
}`
        },
        {
            code:
`const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime - hours*3600) / 60);
const seconds = Math.floor(uptime - hours*3600 - minutes*60);
console.log(\`Machine allumée depuis \${hours}h \${minutes}m \${seconds}s\`);`
        },
        {
            code:
`const uptime = os.uptime();
const seconds = uptime % 60;
const minutes = (uptime - seconds)/60 % 60;
const hours = (uptime - seconds - 60*minutes)/3600;
console.log(\`Machine allumée depuis \${hours}h \${minutes}m \${seconds}s\`);`
        }
    ],
    readline: [
        {
            code:
`const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // ce que l'utilisateur tape dans la console
    output: process.stdout // ce que l'utilisateur lit dans la console
});`
        },
        {
            code:
`rl.question('Pseudo Github ? ', 
    (pseudo) => console.log(\`Profil : https://github.com/\${pseudo}/\`));`
        },
        {
            code:
`const readline = require('readline');
const os = require('os');

const psy = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// principe : il nous accueille, écoute pendant 20 secondes puis nous fait un recap de la session
//avant d'annoncer le tarif ...

//accueil
console.log('Bienvenue ! Asseyez-vous confortablement et parlez-moi de vous');

//tableau pour stocker les réponses
const answers = [];`
        },
        {
            code:
`psy.on('line', (answer) => {
    answers.push(answer);
    console.log('Hmm, intéressant... continuez, je vous prie...');
// l'événement close : https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_event_close
}).on('close', () => {
    console.log('Merci de votre confiance, ça fera 85€');
});`
        },
        {
            code:
`setTimeout(() => {
    console.log(\`\${os.EOL}La session est terminée ! Si je résume, vous m'avez confié les informations suivantes\`);
    console.log(answers.join(os.EOL));
    psy.close();
}, 20000);`
        },
        {
            code:
`const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('./message.txt'),
    // pas besoin de sortie (de toute façon, le contenu du fichier est illisible), on va utiliser console.log pour l'affichage
    output: null
});

rl.on("line", line => console.log(rot13(line)));`
        }
    ]
};

export const day2 = {
    server: [
        {
            code:
`const http = require('http');`
        },
        {
            code:
`const server = http.createServer((request, response) => {
    //comportement de notre serveur ici
}):`
        },
        {
            code:
`const server = http.createServer((request, response) => {
    //on ignore la requête pour l'instant
    //on répond Bonjour à toutes les requêtes

    //on écrit le texte à envoyer
    response.write('Bonjour !');

    //et on l'envoie
    response.end();
});`
        },
        {
            code:
`//on va écouter ce qui se passe sur le port 3000
server.listen(3000);`
        },
        {
            code:
`const os = require('os');

let counter = 0;

const server = http.createServer((req, res) => {

    counter++;

    response.write('Déjà ' + counter + ' visiteur(s) sur ce serveur !');
    if (counter < 10) {
        response.write(os.EOL+'c\\'est le lancement ...');
    } else if (counter < 20) {
        response.write(os.EOL+'ça monte !');
    } else {
        response.write(os.EOL+'Rôôô, on fait le buzz !');
    }
    response.end();
});`
        },
        {
            code:
`...
const server = http.createServer((req, res) => {
    response.setHeader('Content-Type', 'text/plain;charset=utf8');
    ...
});`
        },
        {
            code:
`console.log(request.url);`
        },
        {
            code:
`const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain;charset=utf8');
    if (request.url === "/") {
        counter++;

        response.write('Déjà ' + counter + ' visiteur(s) sur ce serveur !');
        if (counter < 10) {
            response.write(os.EOL+'c\\'est le lancement ...');
        } else if (counter < 20) {
            response.write(os.EOL+'ça monte !');
        } else {
            response.write(os.EOL+'Rôôô, on fait le buzz !');
        }
        response.end();
    } else {
        response.end();
    }
});`
        },
        {
            code:
`const bonjours = ['Bonjour', 'Hello', 'Guten Tag', 'Buenos días'];

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html;charset=utf8');
    if (request.url === "/") {
        const bonjour = bonjours[Math.floor(Math.random()*bonjours.length)];
        response.write(\`<h1>\${bonjour}</h1>\`);
        response.end();
    } else {
        response.end();
    }
});`
        }
    ],
    routes: [
        {
            code:
`const http = require('http');

const server = http.createServer((request, response) => {

});

server.listen(3000);`
        },
        {
            code:
`const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        return response.end();
    }
    console.log(request.url);
    response.end();
});`
        },
        {
            code:
`const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        return response.end();
    }
    response.setHeader('Content-Type', 'text/plain;charset=utf8');
    console.log(request.url);
    switch(request.url) {
        
    }
    response.end();
});`
        },
        {
            code:
`const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        return response.end();
    }
    response.setHeader('Content-Type', 'text/plain;charset=utf8');
    console.log(request.url);
    switch(request.url) {
        case '/':
            response.write('Malpoli, tu pourrais dire bonjour !');
            break;
        case '/bonjour':
            response.write('Salut, ça fait plaisir de te voir !');
            break;
        case '/dis-ton-nom':
            response.write('Moi c\\'est Node, et toi ?');
            break;
        default: 
            response.write('Je comprends pas ce que tu veux ...');

    }
    response.end();
});`
        },
        {
            code:
`const bonjours = {
    fr: 'Bonjour', 
    en: 'Hello', 
    de: 'Guten Tag', 
    es: 'Buenos días'
}

const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        return response.end();
    }
    response.setHeader('Content-Type', 'text/plain;charset=utf8');
    const lang = request.url.substring(1);

    //version classique
    /*
    const bonjour = bonjours[lang];
    if (bonjour) {
        response.write(bonjour);
    } else {
        response.statusCode = 404;
        response.write('Langue non reconnue');
    }
    */

    //on peut inspecter les propriétés d'un object avec .hasOwnProperty
    if (bonjours.hasOwnProperty(lang)) {
        response.write(bonjours[lang]);
    } else {
        response.statusCode = 404;
        response.write('Langue non reconnue');
    }

    response.end();
});`
        },
        {
            code:
` else {
    response.statusCode = 404;
    response.write('Langue non reconnue');
}`
        },
        {
            code:
`const lang = request.headers['accept-language'].substring(0, 2);`
        }
    ]
};

export const day3 = {
    module: [
        {
            code:
`//myModule.js
//export d'un nombre
module.exports = 23;

//myFile.js
console.log(require('./myModule'));`
        },
        {
            code:
`//myFile.js
const myImport = require('./myModule.js');
console.log(myImport);`
        },
        {
            code:
`//myModule.js
//export d'une string
module.exports = "une chaine de caractère";`
        },
        {
            code:
`//myModule.js
//export d'un boolean
module.exports = false;`
        },
        {
            code:
`//myModule.js
//export d'un tableau
module.exports = ['test', 23, true, 'une autre chaine'];`
        },
        {
            code:
`//myModule.js
//export d'un object
module.exports = {
    prop1: 'une chaine',
    prop2: () => {
        console.log('je suis la fonction stockée dans prop2');
    }
};

//myFile.js
const myImport = require('./myModule');
console.log(myImport);
myImport.prop2();`
        },
        {
            code:
`//myModule.js
//export d'un object
const myObject = {
    prop1: 'une chaine',
    prop2: () => {
        console.log('je suis la fonction stockée dans prop2');
    }
};

module.exports = myObject;`
        },
        {
            code:
`//myFile.js
const {prop2} = require('./myModule');
prop2();`
        },
        {
            code:
`//myFile.js
const [firstElement, secondElement] = require('./myModule');
console.log('1er élément', firstElement);
console.log('2ème élément', secondElement);`
        },
        {
            code:
`module.exports = Math.PI * 2;`
        },
        {
            code:
`const myObject = {
    display: () => {
        console.log('My super affichage !');
    }
}

module.exports = myObject;`
        },
        {
            code:
`display();`
        }
    ]
};

export const day4 = {
    express: [
        {
            code:
`//on récupère le module dans une variable
const express = require('express');

//c'est une fonction qui est retournée, on l'appelle pour créer notre serveur
const app = express();

//on écoute le port 3000 pour capter les requêtes
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});`
        },
        {
            code:
`app.get('/', (request, response) => {
    response.send('<h1>Bonjour !</h1>');
});`
        },
        {
            code:
`app.get('/categories', (request, response) => {
    const list = \`
    <ul>
        <li>Javascript</li>
        <li>NodeJS</li>
    </ul>
    \`;
    response.send(list);
});`
        },
        {
            code:
`//modules/texts.js
module.exports = {
    javascript: 'JS est un langage web parmi les plus populaires chez les développeurs',
    nodejs: 'NodeJS permet d\\'utiliser JavaScript en dehors d\\'un navigateur'
};`
        },
        {
            code:
`//app.js
//on ajoute notre module texts
const texts = require('./modules/texts');
...
app.get('/categories/javascript', (request, response) => {
    response.send(\`<div>\${texts.javascript}</div>\`);
});

app.get('/categories/nodejs', (request, response) => {
    response.send(\`<div>\${texts.nodejs}</div>\`);
});
`
        },
        {
            code:
`//app.js
app.get('/categories', (request, response) => {
    const list = \`
    <ul>
        <li><a href="/categories/javascript">Javascript</a></li>
        <li><a href="/categories/nodejs">NodeJS</a></li>
    </ul>
    \`;
    response.send(list);
});`
        },
        {
            code:
`//modules/categories.js
const express = require('express');
const router = express.Router();`
        },
        {
            code:
`//modules/categories.js
const texts = require('./texts');

router.get('/', (request, response) => {
    const list = \`
    <ul>
        <li><a href="/categories/javascript">Javascript</a></li>
        <li><a href="/categories/nodejs">NodeJS</a></li>
    </ul>
    \`;
    response.send(list);
});

router.get('/javascript', (request, response) => {
    response.send(\`<div>\${texts.javascript}</div>\`);
});

router.get('/nodejs', (request, response) => {
    response.send(\`<div>\${texts.nodejs}</div>\`);
});

module.exports = router;`
        },
        {
            code:
`//on ajoute notre module de routing
const router = require('./modules/routes');
...
app.use('/categories', router);`
        },
        {
            code:
`//modules/categories.js
router.get('/:test', (request, response) => {
    console.log(request.params);
    response.send('');
});

// router.get('/javascript', (request, response) => {
//     response.send(\`<div>\${texts.javascript}</div>\`);
// });

// router.get('/nodejs', (request, response) => {
//     response.send(\`<div>\${texts.nodejs}</div>\`);
// });`
        },
        {
            code:
`//modules/categories.js
router.get('/:categorieName', (request, response) => {
    console.log(request.params);
    const name = request.params.categorieName;
    const text = texts[name] || "Catégorie inconnue";
    response.send(\`<div>\${text}</div>\`);
});`
        },
        {
            language: 'html',
            code:
`<body>
    <h1>Bonjour !</h1>
    <a href="/categories">Afficher les catégories</a>
</body>`
        },
        {
            code:
`//Node nous fournit une variable qui pointe sur la racine du projet
console.log('chemin vers la racine du projet', __dirname);`
        },
        {
            code:
`app.get('/', (request, response) => {
    response.sendFile(__dirname+'/views/index.html');
});`
        }
    ],
    fourchette: [
        {
            code:
`const boundaries = {
    min: 1,
    max: 100
}

const setProposition = (min, max) => (Math.floor((min+max) / 2));

//start
let minBoundary = boundaries.min;
let maxBoundary = boundaries.max;

let proposition = setProposition(minBoundary, maxBoundary);

//plus
//mise à jour de la borne min
minBoundary = proposition;
//calcul nouvelle proposition
proposition = setProposition(minBoundary, maxBoundary);

//moins
//mise à jour de la borne max
maxBoundary = proposition;
//calcul nouvelle proposition
proposition = setProposition(minBoundary, maxBoundary);

//bravo
minBoundary = boundaries.min;
maxBoundary = boundaries.max;
proposition = setProposition(minBoundary, maxBoundary);`
        },
        {
            code:
`let minBoundary;
let maxBoundary;
let proposition;

const fourchette = {
    getProposition: () => proposition,
    getMin: () => minBoundary,
    getMax: () => maxBoundary,
    plus: () => {
        //mise à jour de la borne min
        minBoundary = proposition;
        //calcul nouvelle proposition
        proposition = setProposition(minBoundary, maxBoundary);
    },
    moins: () => {
        //mise à jour de la borne max
        maxBoundary = proposition;
        //calcul nouvelle proposition
        proposition = setProposition(minBoundary, maxBoundary);
    },
    start: () => {
        minBoundary = boundaries.min;
        maxBoundary = boundaries.max;
        proposition = setProposition(minBoundary, maxBoundary);
    }
};

module.exports = fourchette;`
        },
        {
            code:
`const game = require('./modules/fourchette');
game.start();`
        },
        {
            code:
`case 'plus':
game.plus();
//Mise à jour message avec les nouvelles bornes et la nouvelle proposition
response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
break;`
        },
        {
            code:
`case 'moins':
game.moins();
//Mise à jour message avec les nouvelles bornes et la nouvelle proposition
response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
break;`
        },
        {
            code:
`case 'bravo':
game.start();
response.write('<p>Super, je suis trop fort !!</p>');
break;`
        },
        {
            code:
`response.write(\`<p>Je dois trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
response.write(\`<p>OK, disons \${game.getProposition()}</p>\`);`
        },
        {
            code:
`const gameButtons = \`
<p>
    <a href="/plus">Plus</a>
    <a href="/moins">Moins</a>
    <a href="/bravo">Bravo</a>
</p>
\`;

const winButton = \`
<p>
    <a href="/">Rejouer</a>
</p>
\`;`
        },
        {
            code:
`switch(route) {
    case 'plus':
        game.plus();
        //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
        response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
        response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
        response.write(gameButtons);
        break;
    case 'moins':
        game.moins();
        //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
        response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
        response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
        response.write(gameButtons);
        break;
    case 'bravo':
        game.start();
        response.write('<p>Super, je suis trop fort !!</p>');
        response.write(winButton);
        break;
    default:
        response.write(\`<p>Je dois trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
        response.write(\`<p>OK, disons \${game.getProposition()}</p>\`);
        response.write(gameButtons);
        break;
}
response.write('</body></html>');`
        },
        {
            code:
`const express = require('express');
const app = express();
...
app.get('/', (request, response) => {
    response.write(\`<!DOCTYPE html>
    <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jeu de la fourchette over HTTP</title>
        </head>
        <body>
    \`);
    response.write(\`<p>Je dois trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p>OK, disons \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write('</body></html>');
    response.end();
});

app.listen(3001, () => {
    console.log('Server started');
});`
        },
        {
            code:
`const htmlHeader = \`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jeu de la fourchette over HTTP</title>
    </head>
    <body>
\`;

const htmlFooter = '</body></html>';


app.get('/', (request, response) => {
    response.write(htmlHeader);
    response.write(\`<p>Je dois trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p>OK, disons \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});`
        },
        {
            code:
`app.get('/plus', (request, response) => {
    response.write(htmlHeader);
    game.plus();
    //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
    response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});

app.get('/moins', (request, response) => {
    response.write(htmlHeader);
    game.moins();
    //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
    response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});

app.get('/bravo', (request, response) => {
    response.write(htmlHeader);
    game.start();
    response.write('<p>Super, je suis trop fort !!</p>');
    response.write(winButton);
    response.write(htmlFooter);
    response.end();
});`
        },
        {
            code:
`const express = require('express');
const router = express.Router();

const game = require('./fourchette');
game.start();

const gameButtons = \`
<p>
    <a href="/plus">Plus</a>
    <a href="/moins">Moins</a>
    <a href="/bravo">Bravo</a>
</p>
\`;

const winButton = \`
<p>
    <a href="/">Rejouer</a>
</p>
\`;

const htmlHeader = \`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jeu de la fourchette over HTTP</title>
    </head>
    <body>
\`;

const htmlFooter = '</body></html>';


router.get('/', (request, response) => {
    response.write(htmlHeader);
    response.write(\`<p>Je dois trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p>OK, disons \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});

router.get('/plus', (request, response) => {
    response.write(htmlHeader);
    game.plus();
    //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
    response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});

router.get('/moins', (request, response) => {
    response.write(htmlHeader);
    game.moins();
    //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
    response.write(\`<p>Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p>Hum... Peut-être \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});

router.get('/bravo', (request, response) => {
    response.write(htmlHeader);
    game.start();
    response.write('<p>Super, je suis trop fort !!</p>');
    response.write(winButton);
    response.write(htmlFooter);
    response.end();
});

module.exports = router;`
        },
        {
            code:
`const routes = require('./modules/routes');

app.use(routes);`
        },
        {
            language: 'CSS',
            code:
`.debug {
    background-color: #ccc;
}
body {
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
}
body > p {
    border-radius: 1em;
    background-color: #444;
    padding: .75em;
    color: white;
}
.debug, .question {
    align-self: flex-start;
    border-bottom-left-radius: 0;
}
.answer {
    align-self: flex-end;
    border-bottom-right-radius: 0;
    background-color: #00b15a;
}

.question {
    background-color: #fd9520;
}

a {
    color: white;
}

.answer > a:after {
    content: '\\2605';
    width: 3em;
    text-align: center;
    display: inline-block;
}

a:last-child:after {
    display: none;
}`
        },
        {
            code:
`const htmlHeader = \`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jeu de la fourchette over HTTP</title>
        <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
\`;
...
router.get('/style.css', (request, response) => {
    response.sendFile('assets/style.css', {root: __dirname+'/../'});
});`
        },
        {
            code:
`const gameButtons = \`
<p class="answer">
    <a id="answer-plus" href="/plus">Plus</a>
    <a id="answer-moins" href="/moins">Moins</a>
    <a id="answer-bravo" href="/bravo">Bravo</a>
</p>
\`;

const winButton = \`
<p class="answer">
    <a href="/">Rejouer</a>
</p>
\`;
...
router.get('/moins', (request, response) => {
    response.write(htmlHeader);
    game.moins();
    //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
    response.write(\`<p class="debug">Je dois donc trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p class="question">Hum... Peut-être \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});

router.get('/bravo', (request, response) => {
    response.write(htmlHeader);
    game.start();
    response.write('<p class="question">Super, je suis trop fort !!</p>');
    response.write(winButton);
    response.write(htmlFooter);
    response.end();
});`
        },
        {
            code:
`const winButton = \`
<p class="answer">
    <a href="/new">Rejouer</a>
</p>
\`;
...
router.get('/new', (request, response) => {
    response.write(htmlHeader);
    response.write(\`<p class="debug">Je dois trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    response.write(\`<p class="question">OK, disons \${game.getProposition()}</p>\`);
    response.write(gameButtons);
    response.write(htmlFooter);
    response.end();
});`
        },
        {
            language: 'HTML',
            code:
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ettehcruof</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <p class="question">Hello ! Je suis un programme qui te permet de jouer au célèbre jeu de la fourchette</p>
        <p class="question">Tu vas probablement me dire "Bof, j'en ai déjà codé un en S2"</p>
        <p class="answer">Bof, j'en ai déjà codé un en S2</p>
        <p class="question">Oui mais moi, je te permets de changer de rôle ! C'est toi qui choisis le nombre et moi qui devine</p>
        <p class="answer">
            <a href="/new">Génial, jouons alors !</a>
        </p>
    </body>
</html>`
        },
        {
            code:
`router.get('/', (request, response) => {
    response.sendFile('assets/home.html', {root: __dirname+'/../'});
});`
        },
        {
            code:
`var app = {
    init: function() {
        var firstToAppear;
        document.querySelectorAll('body > p').forEach(function (elm, idx) {
            if (idx == 1) {
                firstToAppear = elm;
            }
            if (idx > 0) {
                elm.classList.add('hidden');
            }
        });
        setTimeout(app.showMessage, 1100, firstToAppear);
    },
    showMessage: function(elm) {
        elm.classList.add('visible');
        var next = elm.nextElementSibling;
        if (next.localName != "script") {
            setTimeout(app.showMessage, 1100, next);
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);`
        },
        {
            code:
`/* pour animer avec JS */
.hidden {
    opacity: 0;
}

.visible {
    opacity: 1;
    transition: opacity .8s;
}`
        },
        {
            language: 'HTML',
            code:
`<script src="/messages.js"></script>`
        },
        {
            code:
`router.get('/messages.js', (request, response) => {
    response.sendFile('assets/messages.js', {root: __dirname+'/../'});
});`
        }
    ]
};

export const day5 = {
    static: [
        {
            code:
`app.use(express.static('./assets'));`
        },
        {
            language: 'HTML',
            code:
`<link rel="stylesheet" href="/reset.css">
<link rel="stylesheet" href="/style.css">`
        },
        {
            code:
`<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/style.css">`
        },
        {
            code:
`document.querySelector('img').style.animation = 'turn 5s linear infinite';`
        },
        {
            language: 'HTML',
            code:
`<div class="container">
    <img src="/oclock.png" class="image" />
    <script src='/js/script.js'></script>
</div>`
        },
        {
            code:
`app.use(express.static('./public/assets/css'));`
        },
        {
            code:
`app.use(express.static('./public'));`
        },
        {
            code:
`//server.js
app.use(express.static('./assets'));

//modules/routes.js
/*router.get('/messages.js', (request, response) => {
    response.sendFile('assets/messages.js', {root: __dirname+'/../'});
});

router.get('/style.css', (request, response) => {
    response.sendFile('assets/style.css', {root: __dirname+'/../'});
});*/`
        }
    ],
    ejs: [
        {
            code:
`const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server started');
});`
        },
        {
            code:
`app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');
});`
        },
        {
            code:
`app.get('/', (request, response) => {
    response.render('index', {test: 'My beautiful string'});
});`
        },
        {
            language: 'XML',
            code:
`<h2><%= test %></h2>`
        },
        {
            code:
`app.get('/', (request, response) => {
    response.render('index', {test: 'My beautiful string', retest: 250.23});
});`
        },
        {
            language: 'XML',
            code:
`<h2><%= test %></h2>
<h2><%= retest %></h2>`
        },
        {
            language: 'XML',
            code:
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header', {title: 'My beautiful site'}) %>
<h1>Hello there !</h1>
<h2><%= test %></h2>
<h2><%= retest %></h2>
<%- include('partials/footer') %>`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header', {title: 'My beautiful page'}) %>
<h1>Rôô la belle page !</h1>
<%- include('partials/footer') %>`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header', {title: 'My beautiful site'}) %>
<h1>Hello there !</h1>
<h2><%= test %></h2>
<h2><%= retest %></h2>
<a href='/page'>Lien vers la page</a>
<%- include('partials/footer') %>`
        },
        {
            code:
`app.get('/page', (request, response) => {
    response.render('page');
});`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header', {title: 'My beautiful description'}) %>
<p><%= nom %></p>
<p><%= prenom %></p>
<%- include('partials/footer') %>`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header', {title: 'My beautiful description'}) %>
<% if (showNom) { %>
    <p><%= nom %></p>
<% } else { %>
    <p>Nom inconnu</p>
<% } %>
<p><%= prenom %></p>
<%- include('partials/footer') %>`
        },
        {
            code:
`app.get('/description', (request, response) => {
    response.render('./description', {nom: 'Charpin', prenom: 'Nico', showNom: true});
});`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header', {title: 'My beautiful site'}) %>
<h1>Hello there !</h1>
<h2><%= test %></h2>
<h2><%= retest %></h2>
<a href='/page'>Lien vers la page</a>
<a href='/description'>Lien vers la description</a>
<%- include('partials/footer') %>`
        },
        {
            code:
`app.get('/description', (request, response) => {
    response.render('./description', {nom: 'Charpin', prenom: 'Nico', showNom: false});
});`
        },
        {
            code:
`app.get('/description', (request, response) => {
    app.locals.passions = ['Code', 'Séries TV', 'Animation', 'Musique'];
    response.render('./description', {nom: 'Charpin', prenom: 'Nico', showNom: false});
});`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header', {title: 'My beautiful description'}) %>
<% if (showNom) { %>
    <p><%= nom %></p>
<% } else { %>
    <p>Nom inconnu</p>
<% } %>
<p><%= prenom %></p>
<ul>
    <% for (const passion of passions) { %>
        <li><%= passion %></li>
    <% } %>
</ul>
<%- include('partials/footer') %>`
        },
        {
            code:
`app.set('views', './views');
app.set('view engine', 'ejs');`
        },
        {
            code:
`router.get('/', (request, response) => {
//    response.sendFile('assets/home.html', {root: __dirname+'/../'});
    response.render('home');
});`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header') %>

<%- include('partials/footer') %>`
        },
        {
            code:
`router.get('/new', (request, response) => {
    // response.write(htmlHeader);
    // response.write(\`<p class="debug">Je dois trouver un nombre entre \${game.getMin()} et \${game.getMax()} ...</p>\`);
    // response.write(\`<p class="question">OK, disons \${game.getProposition()}</p>\`);
    // response.write(gameButtons);
    // response.write(htmlFooter);
    // response.end();
    response.render('game', {action: 'new', game});
});`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header') %>

<% if (action === 'new') { %>
    <p class="debug">Je dois trouver un nombre entre <%= game.getMin() %> et <%= game.getMax() %> ...</p>
    <p class="question">OK, disons <%= game.getProposition() %></p>
<% } %>

<% if (action === 'bravo') { %>
    <%- include('partials/winButtons') %>
<% } else { %>
    <%- include('partials/gameButtons') %>
<% } %>

<%- include('partials/footer') %>`
        },
        {
            code:
`router.get('/plus', (request, response) => {
    game.plus();
    response.render('game', {action: 'plus', game});
});

router.get('/moins', (request, response) => {
    game.moins();
    response.render('game', {action: 'moins', game});

});

router.get('/bravo', (request, response) => {
    game.start();
    response.render('game', {action: 'bravo', game});
});`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header') %>

<% if (action === 'new') { %>
    <p class="debug">Je dois trouver un nombre entre <%= game.getMin() %> et <%= game.getMax() %> ...</p>
    <p class="question">OK, disons <%= game.getProposition() %></p>
<% } else if (action === 'plus' || action === 'moins') {%>
    <p class="debug">Je dois donc trouver un nombre entre <%= game.getMin() %> et <%= game.getMax() %> ...</p>
    <p class="question">Hum... Peut-être <%= game.getProposition() %></p>
<% } else { %>
    <p class="question">Super, je suis trop fort !!</p>
<% } %>


<% if (action === 'bravo') { %>
    <%- include('partials/winButton') %>
<% } else { %>
    <%- include('partials/gameButtons') %>
<% } %>

<%- include('partials/footer') %>`
        }
    ]
};

export const day7 = {
    reference: [
        {
            code:
`var modifyStr = function(toModify) {
    toModify += " retest";
    console.log('in function : ', toModify);
}

//on déclare une string
let str = 'test';
console.log('before modifyStr : ', str);

//on tente de la modifier avec la fonction
//dans la fonction, le résultat est correct
modifyStr(str);

//après la fonction, la variable originale n'a pas été modifiée
console.log('after modifyStr : ', str);

console.log('------------');`
        },
        {
            code:
`var modifyNum = function(toModify) {
    toModify += 1;
    console.log('in function : ', toModify);
}

//on déclare un number
let num = 123;
console.log('before modifyNum : ', num);

//on tente de la modifier avec la fonction
//dans la fonction, le résultat est correct
modifyNum(num);

//après la fonction, la variable originale n'a pas été modifiée
console.log('after modifyNum : ', num);

console.log('------------');`
        },
        {
            code:
`var modifyBool = function(toModify) {
    toModify = !toModify;
    console.log('in function : ', toModify);
}


//on déclare un boolean
let bool = false;
console.log('before modifyBool : ', bool);

//on tente de la modifier avec la fonction
//dans la fonction, le résultat est correct
modifyBool(bool);

//après la fonction, la variable originale n'a pas été modifiée
console.log('after modifyBool : ', bool);

console.log('------------');`
        },
        {
            code:
`var modifyArray = function(toModify) {
    toModify.push('nouvelle valeur');
    console.log('in function : ', toModify);
}

//on déclare un tableau vide
let tab = [];
console.log('before modifyArray : ', tab);

//on tente de la modifier avec la fonction
//dans la fonction, le résultat est correct
modifyArray(tab);

//après la fonction, la variable originale a été modifiée
console.log('after modifyArray : ', tab);

console.log('------------');`
        },
        {
            code:
`var modifyObject = function(toModify) {
    toModify.newProp = 'nouvelle valeur';
    console.log('in function : ', toModify);
}

//on déclare un object vide
let obj = {};
console.log('before modifyArray : ', obj);

//on tente de la modifier avec la fonction
//dans la fonction, le résultat est correct
modifyObject(obj);

//après la fonction, la variable originale a été modifiée
console.log('after modifyObject : ', obj);

console.log('------------');`
        },
        {
            code:
`const addToString = (str) => str += '_test';

let myString = 'essai';

addToString(myString);

console.log(myString);`
        },
        {
            code:
`const addToTab = (tab) => tab.push('nouvelle valeur');

let myTab = [];

addToTab(myTab);

console.log(myTab);`
        }
    ],
    tablify: [
        {
            code:
`//app.js
// ici, une fois que tout fonctionnera, il ne restera qu'à donner l'ordre d'enchaînement des middlewares
app.chain(tablify.startTable);`
        },
        {
            code:
`//tablify.js
startTable: (input, output, next) => {
    output.push('<table>');
    next();
},`
        },
        {
            code:
`//app.js
app.chain(tablify.endTable);`
        },
        {
            code:
`//tablify.js
//on ajoute la balise de fin de tableau à l'output
endTable: (input, output, next) => {
    output.push('</table>');
    next();
}`
        },
        {
            code:
`//app.js
// ici, une fois que tout fonctionnera, il ne restera qu'à donner l'ordre d'enchaînement des middlewares
app.chain(tablify.startTable);
app.chain(tablify.addTBody);
app.chain(tablify.endTable);`
        },
        {
            code:
`//tablify.js
//on ajout le tbody à l'output
addTBody: (input, output, next) => {
    //ajouter la balise de début de tbody à l'output

    //POUR chaque élément du tableau input

        //ajouter la balise de début de tr

        //POUR chaque propriété de l'élément du tableau

            //ajouter une td contenant la VALEUR de la propriété
        
        //ajouter la balise de fin de tr

    //ajouter la balise de fin de tbody à l'output

    //rendre la main au moteur de middlewares
},`
        },
        {
            code:
`//tablify.js
//on ajout le tbody à l'output
addTBody: (input, output, next) => {
    //ajouter la balise de début de tbody à l'output
    output.push('<tbody>');

    //POUR chaque élément du tableau input
    for (const element of input) {

        //ajouter la balise de début de tr
        output.push('<tr>');

        //POUR chaque propriété de l'élément du tableau
        for (const prop in element) {

            //ajouter une td contenant la VALEUR de la propriété
            output.push(\`<td>\${element[prop]}</td>\`);
        }
        
        //ajouter la balise de fin de tr
        output.push('</tr>');
    }
    //ajouter la balise de fin de tbody à l'output
    output.push('</tbody>');

    //rendre la main au moteur de middlewares
    next();
},`
        },
        {
            code:
`//tablify.js
// exo en autonomie 1 (avant ou après fait le body, au choix)
// créer un middleware générant le <thead> à partir des clés du premier élément du tableau
// ne pas oublier :
// - l'appel à la fonction d'enchaînement :-P
// - que tableau.push() peut prendre plusieurs arguments pour ajouter plusieurs éléments d'un seul coup

//on ajoute le thead à l'output
addTHead: (input, output, next) => {
    //ajouter la balise de début de thead à l'output
    //ajouter la balise de début de tr à l'output
    output.push('<thead>', '<tr>');

    //on récupère le 1er élément comme référence
    const ref = input[0];
    //POUR chaque propriété du 1er object du tableau de l'input
    for (const prop in ref) {
        //créer une balise th contenant le NOM de la propriété
        output.push(\`<th>\${prop}</th>\`);
    }
    //ajouter la balise de fin de tr à l'output
    //ajouter la balise de fin de thead à l'output
    output.push('</tr>', '</thead>');

    //rendre la main au moteur de middlewares
    next();
},`
                    },
        {
            code:
`//app.js
app.chain(tablify.startTable);
app.chain(tablify.addTHead);
app.chain(tablify.addTBody);
app.chain(tablify.endTable);`
        },
        {
            code:
`//tablify.js
addTFoot : (input, output, next) => {
    //on ajoute la balise de début de tfoot
    //on ajoute la balise de début de tr
    //on ajoute une balise th contenant Totaux
    output.push('<tfoot>', '<tr>', '<th>Totaux</th>');
    
    //on récupère le 1er élément comme référence
    const ref = input[0];

    //on utilise un flag, un boolean pour ignorer le 1er champ
    let isFirstKey = true;

    //POUR chaque propriété de la référence
    for (const prop in ref) {
        //SI la propriété est la première, on passe à l'itération suivante
        if (isFirstKey) {
            isFirstKey = false;
            continue;
        }            

        //SI la valeur de la propriété n'est pas un nombre
        if (isNaN(ref[prop])) {
            //ALORS on ajoute une th contenant '-' à l'output
            output.push('<th>-</th>')
        }
        //SINON
        else {
            //on initialise un total à 0
            let total = 0;

            //POUR chaque élément du tableau
            for (const element of input) {
                //on ajoute la valeur de la propriété
                total += element[prop];
            }
            //on ajoute une th contenant le total calculé
            output.push(\`<th>\${total}</th>\`);
        }
    }
    //on ajoute la balise de fin de tr
    //on ajoute la balise de fin de tfoot
    output.push('</tr>', '</tfoot>');

    //on rend la main au moteur de middlewares
    next();
}`
        },
        {
            code:
`//app.js
app.chain(tablify.startTable);
app.chain(tablify.addTHead);
app.chain(tablify.addTBody);
app.chain(tablify.addTFoot);
app.chain(tablify.endTable);`
        }
    ]
};

export const day8 = {
    post: [
        {
            language: 'XML',
            code:
`<%- include('partials/header') %>

<form action="/login" method="POST">
    <div>
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" name="username" id="username">
    </div>
    <div>
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password">
    </div>
    <input type="submit" value="Valider">
</form>

<%- include('partials/footer') %>`
        },
        {
            language: 'CSS',
            code:
`form {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 300px;
    min-height: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  form div {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  form input {
    text-align: center;
    padding: 5px;
  }
  
  form input[type="submit"] {
    width: 50%;
    margin: 0px auto;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 3px black;
}`
        },
        {
            code:
`//route pour la méthode GET, va faire un rendu de la vue login
app.get('/login', (request, response) => {
    response.render('login');
});`
        },
        {
            code:
`//route pour la méthode POST, va vérifier les données envoyées
//Si l'utilisateur est connu, redirection vers la route /
//Sinon, ajout d'une erreur au formulaire login
app.post('/login', (request, response) => {
    //les infos du formulaire en POST se retrouvent dans la propriété body de la requête
    console.log(request.body);

    response.send('');

    //check utilisateur

    //si connu, on redirige vers /
    //sinon, en renvoie le formulaire login avec un message d'erreur
});`
        },
        {
            code:
`//on importe users.json
const users = require('./users.json');`
        },
        {
            code:
`//route pour la méthode POST, va vérifier les données envoyées
//Si l'utilisateur est connu, redirection vers la route /
//Sinon, ajout d'une erreur au formulaire login
app.post('/login', (request, response) => {
    //les infos du formulaire en POST se retrouvent dans la propriété body de la requête
    console.log(request.body);

    //check utilisateur
    const user = users.find(user => user.userName === request.body.username && user.password === request.body.password);
    if (user) {
        //si connu, on redirige vers /
        response.redirect('/');
    } else {
        //sinon, en renvoie le formulaire login avec un message d'erreur
        response.render('login', {error: 'Utilisateur inconnu ...'});
    }
});`
        },
        {
            code:
`//on déclare une variable globale 
let currentUser;

//on ajoute un middleware qui va rendre cette variable disponible dans toutes les vues
app.use((request, response, next) => {
    app.locals.user = currentUser;
    next();
});`
        },
        {
            code:
`//route pour la méthode POST, va vérifier les données envoyées
//Si l'utilisateur est connu, redirection vers la route /
//Sinon, ajout d'une erreur au formulaire login
app.post('/login', (request, response) => {
    //les infos du formulaire en POST se retrouvent dans la propriété body de la requête
    console.log(request.body);

    //check utilisateur
    const user = users.find(user => user.userName === request.body.username && user.password === request.body.password);
    if (user) {
        currentUser = user;
        //si connu, on redirige vers /
        response.redirect('/');
    } else {
        //sinon, en renvoie le formulaire login avec un message d'erreur
        response.render('login', {error: 'Utilisateur inconnu ...'});
    }
});`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header') %>

<form action="/login" method="POST">
    <div>
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" name="username" id="username">
    </div>
    <div>
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password">
    </div>
    <input type="submit" value="Valider">
</form>

<% if (locals.error) { %>
    <div class="error"><%= error %></div>
<% } %>

<%- include('partials/footer') %>`
        },
        {
            language: 'CSS',
            code:
`.error {
    font-size: 20px;
    text-align: center;
    color: red;
}`
        },
        {
            language: 'XML',
            code:
`<body>
<header>
    <h1>
        <a href="/">GameHub</a>
    </h1>
    <% if (user) {%> 
        <h2 class="userTitle">Bienvenue <%= user.realName %> </h2>
    <% } %> 
    <nav>
        <ul>
            <% for (const game of locals.json) { %>
                <li>
                    <a href="/game/<%= game.name %>"><%=game.title %></a>
                </li>
            <% } %>
        </ul>
    </nav>
</header>`
        },
        {
            language: 'CSS',
            code:
`.userTitle {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
}`
        },
        {
            code:
`//route pour la méthode POST, va vérifier les données envoyées
//Si l'utilisateur est connu, redirection vers la route /
//Sinon, ajout d'une erreur au formulaire login
app.post('/login', (request, response) => {
    //les infos du formulaire en POST se retrouvent dans la propriété body de la requête
    console.log(request.body);

    //check utilisateur
    const user = users.find(user => user.userName === request.body.username && bcrypt.compareSync(request.body.password, user.password));
    if (user) {
        currentUser = user;
        //si connu, on redirige vers /
        response.redirect('/');
    } else {
        //sinon, en renvoie le formulaire login avec un message d'erreur
        response.render('login', {error: 'Utilisateur inconnu ...'});
    }
});`
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
