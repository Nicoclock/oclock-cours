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
    // rappel : un programme node ne se ferme pas tout seul
    process.exit(1);
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
}