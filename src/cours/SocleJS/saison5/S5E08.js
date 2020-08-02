import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Snippet, ExoSondage} from "../../../common";
import {day8 as snippets} from "./Code/snippets";

import "../../style.scss"

const S5E08 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Promesses !</div>
            <div className="Inner">
                <List>
                    <Card title="Callback hell">
                        <Recap>
                            <BoxItem text="On n'a pas chômé hier !" />
                            <BoxItem text="Entre la correction, les 2 formulaires et la gestion du rôle administrateur ..." />
                            <BoxItem text="Dans le coup, on a un projet qui commence à ressembler à quelque chose !" />
                        </Recap>
                        <Question text="Est-ce que vous avez des choses que vous voulez repréciser ? Des questions qui restent ?" />
                        <ListItem title="C'est quoi ce .then dans sequelize ?">
                            <Item text="Vous vous posez sûrement la question" />
                            <Item text="Ca sort d'où ? on l'a définit nulle part ..." />
                            <Item text="C'est de ça qu'on va parler aujourd'hui : les promesses !" />
                            <Item text="C'est quoi une Promise en JS, pourquoi ça a été créé, tout ça ..." />
                        </ListItem>
                        <ListItem title="Why ?">
                            <Item text="Promise ajoutée en JS avec ES6" />
                            <Item text="Syntaxe différente pour effectuer un traitement asynchrone" />
                            <Item text="Exécution n'aura pas lieu tout de suite, on attend une info avant de lancer la fonction" />
                            <Item text="Callbacks de sequelize par exemple : on attend que la BDD ait répondu, envoyé des infos" />
                            <Item text="Quand les infos sont là, JS les passe en paramètre de la fonction callback" />
                            <Item text="Et le traitement continue" />
                        </ListItem>
                        <ListItem title="Callback hell">
                            <Item text="Dans certains cas, on va avoir besoin de chaîner plusieurs traitements" />
                            <Item text="Beaucoup même, des fois ..." />
                            <Item text="On se retrouve avec un callback dans un callback dans un callback ..." />
                            <Item text="Ca devient vite l'enfer pour s'y retrouver là-dedans : callback hell !" />
                            <Item text="Un 'tit exemple que vous voyez de quoi je parle" />
                        </ListItem>
                        <ListItem title="GDP callbacks">
                            <Item text="On va simuler en JS les étapes d'une gestion de projet" />
                            <Item text="Je vous ai préparé un bout de code, on va le regarder ensemble" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.callback[snippet++]} />
                        </Demo>
                        <ListItem title="Création 1ère étape">
                            <Item text="On va utiliser le module pour simuler la gestion de la 1ère étape" />
                            <Item text="On utilise la méthode doTaskCallback du module pour demandeClient" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.callback[snippet++]} />
                        </Demo>
                        <ListItem title="Détails 1ère étape">
                            <Item text="On a passé le nom de la tâche et une fonction à exécuter après la pseudo-réalisatin de la tâche" />
                            <Item text="Le module a simulé un délai avant de passer à la tâche suivante" />
                            <Item text="On peut éventuellement recevoir une erreur, il faut prévoir le traitement" />
                            <Item text="Ici, on se contente de l'afficher, ça peut être plus complexe ..." />
                            <Item text="Là, on n'a qu'une seule tâche, le code est encore potable" />
                        </ListItem>
                        <Sondage question="Le code pour la 1ère tâche est clair ?" reponses={["yep", "nope"]} />
                        <ListItem title="Bienvenue en enfer">
                            <Item text="On va pas tout coder ensemble, ce serait fastidieux et pas très utile" />
                            <Item text="J'ai préparé le code complet pour que vous voyez pourquoi on parle d'enfer !" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.callback[snippet++]} />
                        </Demo>
                        <ListItem title="Commentaires">
                            <Item text="On fait bien toutes les tâches, pas de souci" />
                            <Item text="Imaginez qu'on doive en inverser 2 ou en rajouter une" />
                            <Item text="Vous voyez le côté casse-gueule ?" />
                            <Item text="Entre la logique et la syntaxe, vraiment super simple de se tromper !!" />
                            <Item text="Pour éviter ça, les devs de JS ont inventé les promesses" />
                        </ListItem>
                    </Card>
                    <Card title="Promises">
                        <ListItem title="Construction">
                            <Item text="fichier demo pour voir comment ça se construit" />
                            <Item text="C'est juste pour la syntaxe, le code lui-même fera pas grand chose" />
                        </ListItem>                        
                        <Demo type="repo Code">
                            {console.log(resetSnippet())}
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <ListItem title="Real démo">
                            <Item text="On va déclarer un boolean et l'utiliser pour simuler un traitement" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <ListItem title="Et les erreurs ?">
                            <Item text="On a vu comment gérer un résultat ok" />
                            <Item text="Voyons ce qui se passe quand on passe le boolean à false" />
                            <Item text="Ce coup là, on va utiliser reject" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <ListItem title="catch">
                            <Item text="L'erreur est bien affiché mais c'est craspouille" />
                            <Item text="On a une autre méthode des promesses exprès pour gérer ça : catch" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <Sondage question="Pour construire une promesse, on utilise ..." reponses={["un module", "un constructeur", "sa langue"]} />
                        <Sondage question="Une promesse est contruite avec une fonction qui a 2 paramètres, lesquels ?" reponses={["resolve et reject", "then et catch", "le 1er et le 2ème"]} />
                        <Sondage question="Quand le traitement dans la promesse s'est bien passé, on appelle ..." reponses={["resolve", "reject", "le 06 96 00 00 01"]} />
                        <Sondage question="Quand le traitement dans la promesse a échoué, on appelle ..." reponses={["resolve", "reject", "les flics"]} />
                        <Sondage question=".then reçoit en paramètre une fonction avec ce qu'on a passé ..." reponses={["à resolve", "à reject", "au constructeur", "réponse D"]} />
                        <Sondage question=".catch reçoit en paramètre une fonction avec ce qu'on a passé ..." reponses={["à resolve", "à reject", "au constructeur", "réponse D"]} />
                        <Recap>
                            <BoxItem text="Promise est une classe JS, on en crée une avec new Promise()" />
                            <BoxItem text="On passe au constructeur une fonction avec 2 arguments : resolve et reject" />
                            <BoxItem text="Dans le corps de la fonction, on appelle resolve si tout s'est bien passé, reject en cas d'erreur" />
                            <BoxItem text="Les promesses ont une méthode .then et .catch" />
                            <BoxItem text="Chacune reçoivent une fonction en argument" />
                            <BoxItem text="Celle de then a un argument : ce qu'on a passé à resolve" />
                            <BoxItem text="Celle de catch a un argument : ce qu'on a passé à reject" />
                        </Recap>
                        <ListItem title="Back to gdp">
                            <Item text="On va refaire la simulation de gestion de projet avec des promesses" />
                            <Item text="Dans le module, on a une autre méthode : doTaskPromise" />
                            <Item text="On lui passe le nom de la tâche à effectuer et on appelle then" />
                            <Item text="Dans la fonction de then, pas de paramètre : on a appelé resolve sans rien lui mettre en argument" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <ListItem title="Why return la promesse ?">
                            <Item text="si on appelle juste la fonction doTaskPromise avec la nouvelle tâche, ça va ressembler au callback hell" />
                            <Item text="on perd un peu l'avantage des promesses, ça refait un code moche" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour contourner ça, on va chainer les promesses" />
                            <Item text="Dans la fonction de .then on va faire un return d'une nouvelle promesse" />
                            <Item text="l'avantage, en plus d'un beau code : besoin d'un seul catch à la fin" />
                            <Item text="En cas d'erreur n'importe où dans la chaine, on passe direct dans le catch" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <ListItem title="Syntaxe ES6">
                            <Item text="On n'a que 2 tâches pour l'instant mais le code est déjà mieux qu'avec les callbacks !" />
                            <Item text="On l'améliore encore un peu avec la syntaxe ES6" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <ListItem title="Traitement complet">
                            <Item text="Il nous reste à ajouter les autres tâches" />
                            <Item text="En les chainant comme ça, on obtient un code bien plsu clair, plus facile à maintenir" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.promise[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Les promesses permettent de mieux organiser le code asynchrone" />
                            <BoxItem text="Plus facile à maintenir et à faire évoluer" />
                            <BoxItem text="Pour l'instant vous n'aurez pas à écrire les promesses comme dans la démo" />
                            <BoxItem text="Juste à les utiliser avec des packages comme sequelize" />
                            <BoxItem text="Maintenant, vous savez ce que c'est que ce .then" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Encore mieux avec ES6 : on peut écrire les promesses de façon synchrone" />
                            <BoxItem text="On va pouvoir se passer du then en utilisant 2 new mots-clé : async et await" />
                        </Transition>
                    </Card>
                    <Card title="Async/await">
                        <ListItem text="Présentation">
                            <Item text="avec await, on dit à JS : attends avant de continuer, on attend le résultat d'une promesse" />
                            <Item text="JS se met en pause tant que la promesse n'a pas appelé resolve ou reject" />
                            <Item text="Quand elle a fini, elle repasse la main à la fonction et on continue le traitement" />
                            <Item text="Ca permet d'écrire du cose asynchrone (avec délai d'attente) de façon synchrone" />
                            <Item text="Plus de callback, plus de then, ça ressemble presque à du code de la S2" />
                            <Item text="contrainte de await : doit être dans une fonction déclarée avec async" />
                            <Item text="On prévient JS qu'on va utiliser await dans le corps de la fonction" />
                            <Item text="Voyons un exemple, ce sera plus parlant" />
                        </ListItem>
                        <Demo type="repo Code">
                            {console.log(resetSnippet())}
                            <Code step={snippets.async[snippet++]} />
                        </Demo>
                        <ListItem title="Commentaires">
                            <Item text="On a mis doTheJob en async pour pouvoir utiliser await" />
                            <Item text="On ne peut pas utiliser l'un sans l'autre" />
                            <Item text="Ici, syntaxe ES6, pas obligé (montrer les 2 autres déclaration)" />
                            <Item text="Dans le code, on stocke le résultat de la promesse dans une variable" />
                            <Item text="On récupère le resolve de la promesse en fait, on l'a attendu avec await" />
                            <Item text="On pourrait déclarer une nouvelle variable et await la promesse de la tâche suivante" />
                            <Item text="Vu qu'on écrit comme du code synchrone, on peut boucler tant que nextTask n'est pas undefined" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.async[snippet++]} />
                        </Demo>
                        <Sondage question="await doit toujours être appelé dans une fonction" reponses={['oui', 'non', 'nsp']} />
                        <Sondage question="Une fonction qui utilise await doit être ..." reponses={['patiente', 'déclarée avec async', 'en syntaxe ES6']} />
                        <Recap>
                            <BoxItem text="async/await : mécanisme pour écrire du code asynchrone de façon synchrone" />
                            <BoxItem text="Plus de callback, plus de then, le code s'exécute dans l'ordre indiqué" />
                            <BoxItem text="C'est plus facile à lire dans le coup, moins perturbant pour la tête" />
                            <BoxItem text="On met le programme en pause tant que la promesse n'est pas résolue" />
                            <BoxItem text="Quand elle a fini, on reprend le code comme si de rien n'était" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Sequelize utilise donc les promesses, vous le savez déjà" />
                            <BoxItem text="Toutes les requêtes sont des promesses, d'où le .then à chaque fois" />
                            <BoxItem text="La bonne nouvelle, c'est que Express accepte que les middlewares soient déclarés en async" />
                            <BoxItem text="Vous me voyez venir ? Partout où y a une requête, on va passer en async/await" />
                            <BoxItem text="Toutes les méthodes à requêtes des controleurs, quoi ..." />
                            <BoxItem text="Si si, c'est une bonne nouvelle ! On aura un code superbe à la fin !" />
                        </Transition>
                    </Card>
                    <Card title="Back to sequelize">
                        <ListItem title="adminController : pas de requête" />
                        <ListItem title="mainController">
                            <Item text="Là on a une requête, vous essayez de transformer la fonction home avec async et await ?" />
                            <Item text="Déjà où est-ce qu'on met async ?" />
                            <Item text="Ensuite await nous permet de récupérer le résultat de la promesse dans une variable" />
                            <Item text="C'est quoi le résultat ici ?" />
                            <Item text="Qu'est-ce que j'écris alors ?" />
                        </ListItem>
                        <ListItem title="quizzController">
                            <Sondage question="Je le fait tout(e) seul(e)" reponses={["yes yes !", "heu ... non"]} />
                        </ListItem>
                        <ListItem title="tagController">
                            <Item text="Celui là, je vous laisse faire" />
                        </ListItem>
                        <ListItem title="userController">
                            <Item text="Le petit dernier ..." />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Quand on a pigé le truc, on peut rapidement passer d'un .then à un async await" />
                            <BoxItem text="Faut juste être sûr qu'on est bien dans une fonction ..." />
                        </Recap>
                        <ListItem title="Pour ceux qui veulent">
                            <Item text="Montrer try / catch sur async-await.js" />
                        </ListItem>
                    </Card>
                </List>
            </div>
        </Fragment>
    );
}

export default S5E08;