export const ettehcruof = {
    etapes: [
        {
            code:
`const readline = require('readline);`
        },
        {
            code:
`const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });`
        },
        {
            code:
`rl.question('Votre âge ?', (answer) => {
    console.log('Réponse', answer);
});`
        },
        {
            code:
`
const os = require('os);
...
rl.question('Votre âge ?' + os.EOL, (answer) => {
    console.log('Réponse', answer);
});`
        },
        {
            code:
`//on isole la génération de la proposition dans une fonction
//si on veut modifier la façon de calculer, on n'aura à le faire que dans cette fonction
const setProposition = (min, max) => (Math.floor((min+max) / 2));

let minBoundary = 1;
let maxBoundary = 100;

let proposition = setProposition(minBoundary, maxBoundary);

let question = \`Je propose \${proposition}\`;

rl.question(question+os.EOL, (answer) => {
    console.log('Réponse', answer);
});`
        },
        {
            code:
`let question = \`Je propose \${proposition}
Si c'est plus, tapez +
Si c'est moins, tapez -
Si c'est le bon nombre, tapez =\`;

rl.question(question+os.EOL, (answer) => {
    console.log('Réponse', answer);
    switch(answer) {
        case '-':
            maxBoundary = proposition;
            break;
        case '+':
            minBoundary = proposition;
            break;
        case '=':
            console.log('yes, j\\'ai trouvé !!');
            rl.close();
            process.exit(0);
        default: break;
    }
});`
        },
        {
            code:
`rl.question(question+os.EOL, (answer) => {
    console.log('Réponse', answer);
    switch(answer) {
        case '-':
            maxBoundary = proposition;
            break;
        case '+':
            minBoundary = proposition;
            break;
        case '=':
            console.log('yes, j\\'ai trouvé !!');
            rl.close();
            process.exit(0);
        default: break;
    }
    proposition = setProposition(minBoundary, maxBoundary);
    console.log('Nouvelle proposition', proposition);
});`
        },
        {
            code:
`const setQuestion = (text, proposition) => {
    return \`\${os.EOL+text} \${proposition}
Si c'est plus, tapez +
Si c'est moins, tapez -
Si c'est le bon nombre, tapez =\`;
};

const ask = (question) => {
    rl.question(question+os.EOL, (answer) => {
        switch(answer) {
            case '-':
                maxBoundary = proposition;
                break;
            case '+':
                minBoundary = proposition;
                break;
            case '=':
                console.log('yes, j\\'ai trouvé !!');
                rl.close();
                process.exit(0);
            default: break;
        }
        proposition = setProposition(minBoundary, maxBoundary);
        ask(setQuestion('Alors c\\'est peut-être', proposition));
    });
}

let minBoundary = 1;
let maxBoundary = 100;

//notre mode de calcul ne permet pas d'inclure le nombre 100;
//Pour corriger ça, on ajoute 1 au maxBoundary
maxBoundary++;

let proposition = setProposition(minBoundary, maxBoundary);

ask(setQuestion('Je propose', proposition));`
        },
        {
            code:
`let minBoundary;
let maxBoundary;
let proposition;

rl.question('Indiquez le nombre minimum :'+os.EOL, answer => {
    minBoundary = parseInt(answer);
    rl.question('Indiquez le nombre maximum :'+os.EOL, answer => {
        maxBoundary = parseInt(answer);
        //notre mode de calcul ne permet pas d'inclure le nombre 100;
        //Pour corriger ça, on ajoute 1 au maxBoundary
        maxBoundary++;

        proposition = setProposition(minBoundary, maxBoundary);

        ask(setQuestion('Je propose', proposition));
    });
});`
        },
        {
            code:
`const setMinBoundary = (text) => {
    rl.question(text+os.EOL, answer => {
        minBoundary = parseInt(answer);
        if (isNaN(minBoundary)) {
            //la limite min est incorrecte, on repose la question
            setMinBoundary('J\\'ai dit le NOMBRE minimum :')
        } else {
            //la limite min est ok, on passe à la max
            setMaxBoundary('Indiquez le nombre maximum :');
        }
    });
};

const setMaxBoundary = (text) => {
    rl.question(text+os.EOL, answer => {
        maxBoundary = parseInt(answer);
        if (isNaN(maxBoundary)) {
            //la limite max est incorrecte, on repose la question
            setMaxBoundary('J\\'ai dit le NOMBRE maximum :')
        } else {
            //la limite max est ok, on peut poser la question
            //notre mode de calcul ne permet pas d'inclure le nombre 100;
            //Pour corriger ça, on ajoute 1 au maxBoundary
            maxBoundary++;

            proposition = setProposition(minBoundary, maxBoundary);

            ask(setQuestion('Je propose', proposition));
        }
    });
};

let minBoundary;
let maxBoundary;
let proposition;

setMinBoundary('Indiquez le nombre minimum :');`
        },
        {
            code:
`const ask = (question) => {
    rl.question(question+os.EOL, (answer) => {
        switch(answer) {
            case '-':
                maxBoundary = proposition;
                break;
            case '+':
                minBoundary = proposition;
                break;
            case '=':
                console.log('yes, j\\'ai trouvé !!');
                rl.close();
                process.exit(0);
            default: 
                ask(setQuestion('J\\'ai pas compris ...J\\'ai proposé', proposition));
                break;
        }
        proposition = setProposition(minBoundary, maxBoundary);
        ask(setQuestion('Alors c\\'est peut-être', proposition));
    });
}`
        },
        {
            code:
`const setMaxBoundary = (text) => {
    rl.question(text+os.EOL, answer => {
        maxBoundary = parseInt(answer);
        if (isNaN(maxBoundary)) {
            //la limite max est incorrecte, on repose la question
            setMaxBoundary('J\\'ai dit le NOMBRE maximum :')
        } else {
            //maxBoundary est un nombre, on vérifie qu'il est supérieur à minBoundary
            if (minBoundary < maxBoundary) {
                //la limite max est ok, elle est supérieur à la la limite min, on peut poser la question
                //notre mode de calcul ne permet pas d'inclure le nombre 100;
                //Pour corriger ça, on ajoute 1 au maxBoundary
                maxBoundary++;

                proposition = setProposition(minBoundary, maxBoundary);

                ask(setQuestion('Je propose', proposition));

            } else {
                console.log('ATTENTION : Le minimum doit être inférieur au maximum ! On recommence ...');
                setMinBoundary('Indiquez le nombre minimum :');
            }

        }
    });
};`
        },
        {
            code:
`const launchGame = () => {
    //notre mode de calcul ne permet pas d'inclure le nombre 100;
    //Pour corriger ça, on ajoute 1 au maxBoundary
    maxBoundary++;
    proposition = setProposition(minBoundary, maxBoundary);
    ask(setQuestion('Je propose', proposition));
};

...

let nbTries = 0;
const messages = [
    'ATTENTION : Le minimum doit être inférieur au maximum ! On recommence ...',
    'Vous le faites exprès ou quoi ?? Le minimum doit être inférieur au maximum ! On recommence ...',
    'La barbe maintenant ! J\\'inverse les 2 nombres ...'
];`
        },
        {
            code:
`const setMaxBoundary = (text) => {
    rl.question(text+os.EOL, answer => {
        maxBoundary = parseInt(answer);
        if (isNaN(maxBoundary)) {
            //la limite max est incorrecte, on repose la question
            setMaxBoundary('J\\'ai dit le NOMBRE maximum :')
        } else {
            //maxBoundary est un nombre, on vérifie qu'il est supérieur à minBoundary
            if (minBoundary < maxBoundary) {
                //la limite max est ok, elle est supérieur à la la limite min, on peut poser la question
                launchGame();
            } else {
                if (nbTries < 2) {
                    console.log(messages[nbTries]);
                    nbTries++;
                    setMinBoundary('Indiquez le nombre minimum :');
                } else {
                    console.log(messages[nbTries]);
                    //le joueur insiste ... on inverse les 2 limites
                    const tmp = minBoundary;
                    minBoundary = maxBoundary;
                    maxBoundary = tmp;
                    launchGame();
                }
            }

        }
    });
};`
        }
    ]
};

export const http = {
    steps: [
        {
            code:
`const http = require('http');

const server = http.createServer((request, response) => {

});

server.listen(3000);`
        },
        {
            code:
`let minBoundary = 1;
let maxBoundary = 100;

const setProposition = (min, max) => (Math.floor((min+max) / 2));

let proposition = setProposition(minBoundary, maxBoundary);

const server = http.createServer((request, response) => {
    //on zappe la requête sur favicon de façon plus propre
    if (request.url === '/favicon.ico') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'image/x-icon');
        //version courte
        //res.writeHead(200, {'Content-Type': 'image/x-icon'});
        return response.end();
    }
    response.setHeader('Content-Type', 'text/plain;charset=utf8');
    response.write(\`Je dois trouver un nombre entre \${minBoundary} et \${maxBoundary} ...\${os.EOL}\`);
    response.write(\`OK, disons \${proposition}\`);
    response.end();
});`
        },
        {
            code:
`    //on se débarasse du slash
const route = request.url.substring(1);

switch(route) {
    case 'plus':
        response.write(\`Je dois donc trouver un nombre entre \${proposition} et \${maxBoundary}\`);
        break;
    case 'moins':
        response.write(\`Je dois donc trouver un nombre entre \${minBoundary} et \${proposition}\`);
        break;
    case 'bravo':
        response.write('Super, je suis trop fort !!');
        break;
    default:
        response.write(\`Je dois trouver un nombre entre \${minBoundary} et \${maxBoundary} ...\${os.EOL}\`);
        response.write(\`OK, disons \${proposition}\`);
        break;
}
response.end();`
        },
        {
            code:
`switch (route) {
    case 'plus':
        //mise à jour de la borne min
        minBoundary = proposition;
        //calcul nouvelle proposition
        proposition = setProposition(minBoundary, maxBoundary);
        //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
        response.write(\`Je dois donc trouver un nombre entre \${minBoundary} et \${maxBoundary} ...\${os.EOL}\`);
        response.write(\`Hum... Peut-être \${proposition}\`);
        break;
    case 'moins':
        //mise à jour de la borne max
        maxBoundary = proposition;
        //calcul nouvelle proposition
        proposition = setProposition(minBoundary, maxBoundary);
        //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
        response.write(\`Je dois donc trouver un nombre entre \${minBoundary} et \${maxBoundary} ...\${os.EOL}\`);
        response.write(\`Hum... Peut-être \${proposition}\`);
        break;
    case 'bravo':
        response.write('Super, je suis trop fort !!');
        break;
    default:
        response.write(\`Je dois trouver un nombre entre \${minBoundary} et \${maxBoundary} ...\${os.EOL}\`);
        response.write(\`OK, disons \${proposition}\`);
        break;
}`
        },
        {
            code:
`response.setHeader('Content-Type', 'text/html;charset=utf8');`
        },
        {
            code:
`    //on crée notre structure HTML
response.write(\`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jeu de la fourchette over HTTP</title>
    </head>
    <body>\`);
...
//on ferme notre structure HTML
response.write('</body></html>');`
        },
        {
            code:
`switch (route) {
    case 'plus':
        //mise à jour de la borne min
        minBoundary = proposition;
        //calcul nouvelle proposition
        proposition = setProposition(minBoundary, maxBoundary);
        //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
        response.write(\`<p>Je dois donc trouver un nombre entre \${minBoundary} et \${maxBoundary} ...<p>\`);
        response.write(\`<p>Hum... Peut-être \${proposition}</p>\`);
        break;
    case 'moins':
        //mise à jour de la borne max
        maxBoundary = proposition;
        //calcul nouvelle proposition
        proposition = setProposition(minBoundary, maxBoundary);
        //Mise à jour message avec les nouvelles bornes et la nouvelle proposition
        response.write(\`<p>Je dois donc trouver un nombre entre \${minBoundary} et \${maxBoundary} ...</p>\`);
        response.write(\`<p>Hum... Peut-être \${proposition}</p>\`);
        break;
    case 'bravo':
        response.write('<p>Super, je suis trop fort !!</p>');
        break;
    default:
        response.write(\`<p>Je dois trouver un nombre entre \${minBoundary} et \${maxBoundary} ...</p>\`);
        response.write(\`<p>OK, disons \${proposition}</p>\`);
        break;
}`
        },
        {
            code:
`//on ajoute des balises <a> qui pointent sur nos routes
response.write(\`
    <p>
        <a href="/plus">Plus</a>
        <a href="/moins">Moins</a>
        <a href="/bravo">Bravo</a>
    </p>
\`);

/*response.write(\`
<form method="POST" action="/plus"><button type="submit">Plus</button></form>
<form method="POST" action="/moins"><button type="submit">Moins</button></form>
<form method="POST" action="/bravo"><button type="submit">Bravo</button></form>
\`);*/`
        },
        {
            code:
`const boundaries = {
    min: 1,
    max: 100
}

let minBoundary = boundaries.min;
let maxBoundary = boundaries.max;`
        },
        {
            code:
`case 'bravo':
    minBoundary = boundaries.min;
    maxBoundary = boundaries.max;
    proposition = setProposition(minBoundary, maxBoundary);
    response.write('<p>Super, je suis trop fort !!</p>');
    break;`
        }
    ]
};

export const bookshelf = {
    steps: [
        {
            code:
`const createBookTable = () => {
    let res = \`
    <table>
        <thead>
            <tr>
                <th>Titre</th>
                <th>Langue</th>
                <th>Pays</th>
                <th>Auteur</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
    \`;
    for (const book of books) {
        res += \`
        <tr>
            <td>\${book.title}</td>
            <td>\${book.language}</td>
            <td>\${book.country}</td>
            <td>\${book.author}</td>
            <td>\${book.date}</td>
        </tr>
        \`;
    }
    res += '</tbody></table>';
    return res;
};
...
response.write(createBookTable());
...`
        },
        {
            code:
`const moment = require('moment');`
        },
        {
            code:
`    for (const book of books) {
    res += \`
    <tr>
        <td>\${book.title}</td>
        <td>\${book.language}</td>
        <td>\${book.country}</td>
        <td>\${book.author}</td>
        <td>\${moment(book.date, 'YYYY-MM-DD')}</td>
    </tr>
    \`;
}`
        },
        {
            code:
`for (const book of books) {
    res += \`
    <tr>
        <td>\${book.title}</td>
        <td>\${book.language}</td>
        <td>\${book.country}</td>
        <td>\${book.author}</td>
        <td>\${moment(book.date, 'YYYY-MM-DD').format('dddd, MMMM Do YYYY')}</td>
    </tr>
    \`;
}`
        },
        {
            code:
`const createBookTable = () => {
    let res = \`
    <table>
        <thead>
            <tr>
                <th>Titre</th>
                <th>Langue</th>
                <th>Pays</th>
                <th>Auteur</th>
                <th>Date</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
        \`;
    for (const book of books) {
        res += \`
        <tr>
            <td>\${book.title}</td>
            <td>\${book.language}</td>
            <td>\${book.country}</td>
            <td>\${book.author}</td>
            <td>\${moment(book.date, 'YYYY-MM-DD').format('dddd, MMMM Do YYYY')}</td>
            <td>\${moment(book.date, 'YYYY-MM-DD').fromNow(true)}</td>
        </tr>
        \`;
    }
    res += '</tbody></table>';
    return res;
};`
        },
        {
            code:
`const moment = require('moment');

require('moment/locale/fr');

moment.locale('fr');`
        },
        {
            code:
`//books.js
const books = [
    ...
];

module.exports = books;

//app.js
const books = require('./modules/books.js');`
        },
        {
            code:
`//bookshelf.js
const moment = require('moment');

require('moment/locale/fr');
moment.locale('fr');

const bookshelf = {

    books: [],

    setBooks: data => bookshelf.books = data,

    createBookTable: () => {
        let res = \`
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Langue</th>
                    <th>Pays</th>
                    <th>Auteur</th>
                    <th>Date</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
        \`;
        for (const book of bookshelf.books) {
            res += \`
            <tr>
                <td>\${book.title}</td>
                <td>\${book.language}</td>
                <td>\${book.country}</td>
                <td>\${book.author}</td>
                <td>\${moment(book.date, 'YYYY-MM-DD').format('dddd, MMMM Do YYYY')}</td>
                <td>\${moment(book.date, 'YYYY-MM-DD').fromNow(true)}</td>
            </tr>
            \`;
        }
        res += '</tbody></table>';
        return res;
    }
};

module.exports = bookshelf;`
        },
        {
            code:
`const books = require('./modules/books.js');
const bookshelf = require('./modules/bookshelf.js');
bookshelf.setBooks(books);
...
response.write(bookshelf.createBookTable());
...`
        },
        {
            code:
`//bookshelf.js
//version longue
/*orderBy: (field) => {
    bookshelf.books.sort((book1, book2) => {
        if (book1[field] > book2[field]) {
            return 1;
        }
        else {
            return -1;
        }
    })
},*/

//version courte
orderBy: (field) => {
    bookshelf.books.sort((book1, book2) => book1[field] > book2[field] ? 1 : -1)
},

//version Xtrem
//orderBy: field => bookshelf.books.sort((book1, book2) => book1[field] > book2[field] ? 1 : -1),

//app.js
const books = require('./modules/books.js');
const bookshelf = require('./modules/bookshelf.js');
bookshelf.setBooks(books);
bookshelf.orderBy('date');`
        }
    ]
}

export const worldtime = {
    steps: [
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
`app.get('/', (request, response) => {
    response.sendFile('views/index.html', {root: __dirname+'/'});
});`
        },
        {
            code:
`const capitalCities = require('./my_modules/capitalCities');`
        },
        {
            code:
`app.get('/city/:cityName', (request, response) => {
    const cityName = request.params.cityName;
    response.send('Capitale à afficher : '+cityName);
});`
        },
        {
            code:
`const cityTime = require('./my_modules/cityTime');`
        },
        {
            code:
`const moment = require('moment');
require('moment-timezone');`
        },
        {
            code:
`//my_modules/cityTime
const cityTime = {
    cities: [],
    setCities: (cities) => cityTime.cities = cities
}

module.exports = cityTime;

//app.js
cityTime.setCities(capitalCities);
`
        },
        {
            code:
`setCity: (city) => {
    //version classique
    //on boucle sur le tableau cities pour trouver le nom égal au paramètre
    /*for (const capitale of cityTime.cities) {
        if (capitale.name.toLowerCase() === city) {
            cityTime.city = capitale;
            break;
        }
    }*/

    //version plus stylée 1
    //on utilise la méthode Array.filter qui récupère une séléction dans le tableau
    //pour récupérer l'élément, soit [0], soit Array.pop
    /*let foundCity = cityTime.cities.filter(element => element.name.toLowerCase() === city).pop();*/

    //version plus stylée 2
    //on utilise la méthode Array.find qui récupère un élément du tableau
    let foundCity = cityTime.cities.find(element => element.name.toLowerCase() === city);

    //si la ville a été trouvée, on la stocke dans une propriété
    if (foundCity) {
        cityTime.city = foundCity;
    }
}`
        },
        {
            code:
`app.get('/city/:cityName', (request, response) => {
    const cityName = request.params.cityName;
    cityTime.setCity(cityName);
    console.log(cityTime.city);
    response.send('Capitale à afficher : ' + cityTime.city.name + ', Timezone : ' + cityTime.city.tz);
});`
        },
        {
            code:
`getDay: () => moment().tz(cityTime.city.tz).format('dddd Do MMMM YYYY'),
getTime: () => moment().tz(cityTime.city.tz).format('H:mm:ss')`
        },
        {
            code:
`app.get('/city/:cityName', (request, response) => {
    const cityName = request.params.cityName;
    cityTime.setCity(cityName);
    response.send(\`
    <!DOCTYPE html>
    <html language="fr">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Date et heure à \${cityTime.city.name}</title>                    
        </head>
        <body>
            <div>A \${cityTime.city.name}, nous sommes le \${cityTime.getDay()} et il est \${cityTime.getTime()}</div>
        </body>
    </html>
    \`);
});`
        },
        {
            code:
`setLocale: (locale) => {
    require('moment/locale/'+locale);
    moment().locale(locale);
}`
        },
        {
            code:
`const cityTime = require('./my_modules/cityTime');
//initialisation du tableau de villes
cityTime.setCities(capitalCities);
//setup des locales en français
cityTime.setLocale('fr');`
        },
        {
            code:
`app.get('/city/:cityName', (request, response) => {
    ...
    if (!cityTime.city) { //équivalent à if (cityTime.city === undefined)
        return response.status(404).send('Cette capitale n\\'est pas renseignée dans nos données');
    }
    ...
});`
        },
        {
            code:
`const capitalCities = [
    ...
    {
        name: 'Reykjavic',
        tz: 'Atlantic/Reykjavic'
    },
    {
        name: 'Antananarivo',
        tz: 'Inf-dian/Antananarivo'
    }
];`
        },
        {
            language: 'XML',
            code:
`<ul>
    ...
    <li><a href="/city/reykjavic">Reykjavic</a></li>
    <li><a href="/city/antananarivo">Antananarivo</a></li>
</ul>`
        },
        {
            code:
`const moment = require('moment');
require('moment-timezone');

const timezone = {
    setCityObject: city => timezone.cityObject = city,

    getDay: () => moment().tz(timezone.cityObject.tz).format('dddd Do MMMM YYYY'),
    
    getTime: () => moment().tz(timezone.cityObject.tz).format('H:mm:ss'),

    setLocale: (locale) => {
        require('moment/locale/'+locale);
        moment().locale(locale);
    }
}

module.exports = timezone;`
        },
        {
            code:
`...
const timezone = require('./my_modules/timezone')
//setup des locales en français
timezone.setLocale('fr');
...
timezone.setCityObject(cityTime.city);

response.send(\`
<!DOCTYPE html>
<html language="fr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Date et heure à \${cityTime.city.name}</title>                    
    </head>
    <body>
        <div>A \${cityTime.city.name}, nous sommes le \${timezone.getDay()} et il est \${timezone.getTime()}</div>
    </body>
</html>
\`);`
        }
    ]
};

export const gamehub = {
    etapes: [
        {
            code:
`//index.js

//on importe express
const express = require('express');

//on crée le serveur
const app = express();

//on définit le port
const port = 3000;

//on indique à express le moteur de template qu'on va utiliser
app.set('view engine', 'ejs');

//on ajoute le répertoires des views
app.set('views', 'views');

//on indique le répertoire pour les ressources statiques
app.use(express.static('./public'));

//on lance le serveur
app.listen(port, () => {
    console.log('Server started on port ' + port);
});`
        },
        {
            code:
`//index.js

//mise en place de la route / qu'on fait pointer sur la view index.ejs
app.get('/', (request, response) => {
    response.render('index');
});`
        },
        {
            language: 'XML',
            code:
`//views/index.ejs

<nav>
    <ul>
        <li>
            <a href="/game/fourchette">Jeu de la fourchette</a>
        </li>
        <li>
            <a href="/game/diceRoller">Jeu Dice Roller</a>
        </li>
    </ul>
</nav>`
        },
        {
            code:
`//mise en place de la route /game/fourchette qu'on fait pointer sur la view fourchette.ejs
app.get('/game/fourchette', (request, response) => {
    response.render('fourchette');
});

//mise en place de la route /game/diceRoller qu'on fait pointer sur la view diceRoller.ejs
app.get('/game/diceRoller', (request, response) => {
    response.render('diceRoller');
});`
        },
        {
            language: 'XML',
            code:
`<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>GameHub</title>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
	<header>
		<h1>
			<a href="/">GameHub</a>
		</h1>
		<nav>
			<ul>
				<li>
					<a href="/game/fourchette">Jeu de la fourchette</a>
				</li>
				<li>
					<a href="/game/diceRoller">Jeu Dice Roller</a>
				</li>
			</ul>
		</nav>
	</header>`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header.ejs') %>
<main>
    <h3>Index</h3>
</main>

<footer>

</footer>
</body>

</html>`
        },
        {
            code:
`//mise en place de la route /game/diceRoller qu'on fait pointer sur la view diceRoller.ejs
app.get('/game/diceRoller', (request, response) => {
    response.render('diceRoller', {css: '/css/diceRoller.css'});
});`
        },
        {
            code:
`<link rel="stylesheet" href="/css/style.css">
<% if (locals.css) { %>
    <link rel="stylesheet" href="<%= locals.css %>">
<% } %>`
        },
        {
            code:
`//import du fichier games.json
const json = require('./games.json');
console.log(json);`
        },
        {
            code:
`//on rend disponible l'object json dans toutes les vues
app.locals.json = json;`
        },
        {
            language: 'XML',
            code:
`<ul>
    <% for (const game of locals.json) { %>
        <li>
            <a href="/game/<%= game.name %>"><%=game.title %></a>
        </li>
    <% } %>
</ul>`
        },
        {
            code:
`//mise en place route globale pour les jeux
app.get('/game/:nomDuJeu', (request, response) => {
    //On extrait le nom du jeu de la requête
    const nomDuJeu = request.params.nomDuJeu;
    //on utilise Array.find pour essayer de trouver un jeu avec ce nom
    const game = json.find(el => el.name === nomDuJeu);
    //SI le jeu existe, on lance la vue
    //SINON on envoie un message d'erreur et un status 404
    if (game) {
        response.render(nomDuJeu);
    } else {
        response.status(404).send('Le jeu demandé est introuvable');
    }
});`
        },
        {
            code:
`//mise en place route globale pour les jeux
app.get('/game/:nomDuJeu', (request, response) => {
    //On extrait le nom du jeu de la requête
    const nomDuJeu = request.params.nomDuJeu;
    //on utilise Array.find pour essayer de trouver un jeu avec ce nom
    const game = json.find(el => el.name === nomDuJeu);
    //SI le jeu existe, on lance la vue
    //SINON on envoie un message d'erreur et un status 404
    if (game) {
        response.render(nomDuJeu, {game});
    } else {
        response.status(404).send('Le jeu demandé est introuvable');
    }
});`
        },
        {
            language: 'XML',
            code:
`<head>
    <meta charset="UTF-8">
    <title>GameHub</title>
    <link rel="stylesheet" href="/css/style.css">
    <% if (locals.game && game.cssFile) { %>
        <link rel="stylesheet" href="/css/<%= game.cssFile %>">
    <% } %>
</head>`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/header.ejs') %>
<div id="board" class="beautiful">

</div>
<script src="js/app.js" charset="utf-8"></script>
</body>
</html>`
        },
        {
            language: 'HTML',
            code:
`<script src="/js/grunt.js" charset="utf-8"></script>`
        },
        {
            language: 'CSS',
            code:
`.beautiful .player {
    width: 100%;
    height: 100%;
    background-image: url('/images/sprite.png');
    background-repeat: no-repeat;
    background-size: auto 280px;
    border: none;
    margin: auto;
    transform: none;
    transition: none;
}`
        },
        {
            language: 'JSON',
            code:
`{
    "name": "grunt",
    "title": "RPG Grunt",
    "cssFile": "grunt.css",
    "jsFile": "grunt.js"
}`
        },
        {
            language: 'XML',
            code:
`<% if (locals.game && game.jsFile) { %>
    <script src="/js/<%= game.jsFile %>"></script>
<% } %>

</body>
</html>`
        },
        {
            language: 'XML',
            code:
`<%- include('partials/footer.ejs') %>`
        }
    ]
};

export const gamehubMw = {
    etapes: [
        {
            language: 'CSS',
            code:
`.img404Game {
    width: 100%;
    height: 600px;
    background: url(/images/404Game.jpg) center/contain no-repeat
}`
        },
        {
            language: 'HTML',
            code:
`<%- include('./partials/header')  %> 

<div class="img404Game"></div>

<%- include('./partials/footer') %>`
        },
        {
            code:
`if (game) {
    response.render(nomDuJeu, {game});
} else {
    response.status(404).render('404Game');
}`
        },
        {
            language: 'CSS',
            code:
`.img404 {
    width: 100%;
    height: 600px;
    background: url(/images/404.jpg) center/contain no-repeat
}`
        },
        {
            language: 'HTML',
            code:
`<%- include('./partials/header')  %> 

<div class="img404"></div>

<%- include('./partials/footer') %>`
        },
        {
            code:
`//mise en place route globale pour les jeux
app.get('/game/:nomDuJeu', (request, response) => {
    ...
});

//mise en place du middleware 404 si la requête n'a pas pu être traitée
app.use((request, response) => response.status(404).render('404'));`
        },
        {
            code:
`//Middleware de log
app.use((request, response, next) => {
    //log des infos
    console.log(new Date(), request.ip, request.path);
    //IMPORTANT : on n'oublie pas d'appeler next pour continuer le traitement
    next();
});`
        },
        {
            code:
`//Middleware de log
app.use((request, response, next) => {
    //log des infos
    console.log(\`[\${new Date().toISOString()} \${request.ip}] \${request.path}\`);
    //IMPORTANT : on n'oublie pas d'appeler next pour continuer le traitement
    next();
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
};