import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce} from "../../../common";
import {ettehcruof} from "./Code/challenges";
import {day2 as snippets} from "./Code/snippets";

import "../../style.scss"

const S3E02 = props => {
    let challenge = 0;
    let snippet = 0;

    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Node + HTTP</div>
            <div className="Inner">
                <Card title="Correction" duration="0:45:00">
                    <List>
                        <Recap>
                            <BoxItem text="On a découvert l'univers de NodeJS" />
                            <BoxItem text="Le contexte change, pas le JS" />
                            <BoxItem text="REPL, console Node : équivalent à la console du navigateur" />
                            <BoxItem text="Premier script avec Node, on a découvert readline" />
                        </Recap>
                        <Sondage question="Alors ce challenge ?" reponses={["ça a été", "j'ai galéré", "La misère !!"]} />
                        <ListItem title="Require readline" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Interface" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Question posée" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Retour à la ligne" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Proposer un nombre" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Déterminer les réponses possibles" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Nouvelle proposition" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Repeat jusqu'à bonne réponse" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 1" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 2" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 3" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 4" />
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={ettehcruof.etapes[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Encore des soucis là-dessus ? Des questions ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Faut pas hésiter à tordre le code JS" />
                            <BoxItem text="Très permissif, on lui fait faire ce qu'on veut" />
                            <BoxItem text="Juste se méfier du côté asynchrone, ça surprend au début" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On va retouver cet asynchronisme un peu partout en JS" />
                            <BoxItem text="Particulièrement dans ce qu'on va voir maintenant : le serveur HTTP avec node" />
                            <BoxItem text="Avant d'écrire notre serveur, décortiquons un peu cette histoire de client/serveur" />
                        </Transition>
                    </List>
                </Card>
                <Card title="HTTP et Node" duration="1:00:00">
                    <List>
                        <Doc type="Slides" url="http://localhost:1234/s3/e2/client-server" />
                        <ListItem title="Concept et fonctionnement">
                            <Item text="En fait on l'utilise depuis le début" />
                            <Item text="Quand on affiche une page web, on utilise le serveur de notre machine : localhost" />
                            <Item text="client : celui qui fait une demande de ressource, un requête" />
                            <Item text="serveur : logiciel qui reçoit la requête, fabrique la ressource qui va bien et la renvoie au client" />
                            <Item text="Le serveur local est surtout utilisé par les devs" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Schéma général">
                            <Item text="La plupart de tout le temps, serveur est sur une machine distante" />
                            <Item text="La requête transite par internet" />
                            <Item text="Abus de langage : serveur = machine. En vrai, c'est un logiciel" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="HTTP">
                            <Item text="Pour causer, le client et le serveur utilise un langage à eux, un protocole" />
                            <Item text="HTTP : HyperText Transfer Protocol" />
                            <Item text="Le navigateur parle HTTP, il fait un paquet de la demande et l'envoie : requête" />
                            <Item text="Le serveur la récupère, l'analyse et renvoie une réponse en utilisant HTTP" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="HTTP">
                            <Item text="Ce paquet HTTP inclut un header avec de nombreuses infos" />
                            <SubItem text="l'url appelée" />
                            <SubItem text="le type de données envoyées ou reçues (types MIME)" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types" />
                        <ListItem>
                            <Item text="le plus classique : appeler une URL pour afficher une page" />
                            <Item text="En retour, on reçoit du HTML qui inclut les liens vers le CSS, le JS, les images, ..." />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Exemple détaillé">
                            <Item text="Plein de types de clients" />
                            <Item text="Le plus connu : navigateur, mais aussi utilitaires comme curl ou wget, applis Andoid ou Mac, ..." />
                            <Item text="Seule contrainte : générer une requête HTTP" />
                            <Item text="Côté serveur : archi classique" />
                            <SubItem text="logiciel serveur (apache, nginx, ...) reçoit la requête" />
                            <SubItem text="Délègue le traitement à des scripts en PHP, Python, Ruby, ..." />
                            <SubItem text="Ces scripts fabriquent la réponse (infos en BDD) et la retransmette au serveur" />
                            <SubItem text="serveur se contente de renvoyer la réponse générée" />
                            <Item text="Avec Node, on associe le logiciel serveur et les scripts qui génèrent la réponse" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Détails HTTP">
                            <Item text="Appel d'une URL : envoi d'une requête en GET" />
                            <Item text="GET : commande HTTP, y en a d'autres (POST, PUT, DELETE)" />
                            <Item text="Script fait son traitement, rassemble les infos et génère du HTML" />
                            <Item text="Si pas de problème, serveur envoie réponse avec status 200" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTTP/Status" />
                        <ListItem>
                            <Item text="Nombreux codes de retour" />
                            <Question text="Vous en connaissez d'autres ? Jamais eu d'erreur 404 ?" />
                            <Item text="Cleint interprète le code de retour. Si ok, affiche la ressource demandée" />
                        </ListItem>
                        <Click dir="right" />
                        <Recap>
                            <BoxItem text="client demande affichage d'une page" />
                            <BoxItem text="logiciel serveur capte la requête et la passe à un script" />
                            <BoxItem text="le script fabrique la réponse et la repasse au serveur" />
                            <BoxItem text="le serveur envoie la réponse" />
                            <BoxItem text="le client la reçoit et agit selon le status" />
                            <BoxItem text="Status 200 : tout va bien, client interprète la réponse pour afficher la ressource" />
                            <BoxItem text="Status non 200 : pépin, le client affiche une erreur" />
                        </Recap>
                        <Control>
                            <BoxItem text="Tout va bien ? Des questions ?" />
                        </Control>
                        <Sondage question="Un serveur est un ..." reponses={["logiciel", "ordinateur", "gars avec un plateau"]} />
                        <Sondage question="On appelle client un ..." reponses={["navigateur", "gars avec du fric", "logiciel qui peut parler HTTP"]} />
                        <Sondage question="Notre serveur local s'appelle ..." reponses={["comme il veut", "localhost", "mymachine.com"]} />
                        <Sondage question="Le serveur a pu traiter la demande, il envoie la réponse avec le status ..." reponses={["200", "404", "OK"]} />
                        <Transition>
                            <BoxItem text="Avantage de Node : serveur et script de traitement dans le même langage" />
                            <BoxItem text="Vous êtes ready ? Vous êtes chauds ? On se fait notre premier serveur ?" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Serveur simple en Node" duration="1:30:00">
                    <List>
                        <ListItem title="Premier serveur">
                            <Item text="Z'êtes très émus j'espère ..." />
                            <Item text="Pas trop d'ambition, on commence super simple" />
                            <Item text="D'abord, fichier server.js" />
                            <Item text="On commence par importer un module built-in : http" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pas de panique pour les modules, en détail demain" />
                            <Item text="Object JS : au lieu de le déclarer dans le même fichier, on a mis le code ailleurs" />
                            <Item text="Maintenant, on a les outils, on crée notre serveur" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Traitement asynchrone : on passe un callback en paramètre" />
                            <Item text="2 objects dispos dans ce callback : la requête et la réponse" />
                            <Item text="Faisons très simple : ignorons la requête pour l'instant, on va juste répondre Bonjour" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Si on lance, il se passe rien ... Why oh why ??" />
                            <Item text="Le serveur est créé, mais ça suffit pas" />
                            <Item text="Il faut qu'il écoute pour détecter quand une requête arrive" />
                            <Item text="Pour ça on a besoin d'un port (orthographe)" />
                            <Item text="Pas trop de détail : c'est une porte d'entrée qu'un logiciel peut surveiller" />
                            <Item text="Certains sont réservés, inutilisables par les devs mais on en a plein de dispos" />
                            <Item text="Notre serveur va écouter le port 3000" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On relance le serveur, cette fois se coupe pas, il écoute ..." />
                            <Item text="Test navigateur sur http://localhost:3000" />
                            <Item text="Magique, on reçoit bien notre réponse" />
                        </ListItem>
                        <Control>
                            <BoxItem text="La première fois que j'ai fait ça, je me suis dit : Node, c'est vraiment le pied !" />
                            <BoxItem text="Comment ça va vous ? L'est belle la vie ou bien ?" />
                        </Control>
                        <Sondage question="Pour faire un serveur avec Node, on a besoin du module ..." reponses={["server", "http", "request"]} />
                        <Sondage question="On crée le serveur avec http. ..." reponses={["createServer", "makeServer", "buildServer"]} />
                        <Sondage question="Pour fonctionner, le serveur doit ..." reponses={["manger du porc", "habiter un port", "écouter un port"]} />
                        <Recap>
                            <BoxItem text="Créer un serveur avec Node, c'est le pied" />
                            <BoxItem text="En 4 lignes de code, on a un truc qui tourne" />
                            <BoxItem text="Ok, fait pas grand chose encore ..." />
                        </Recap>
                        <Transition>
                            <BoxItem text="Bah justement, on va ajouter des fonctionnalités" />
                            <BoxItem text="D'ailleurs non, suis fatigué, je vous laisse faire avec un 'tit éxo" />
                        </Transition>
                        <Exo>
                            <Enonce text="Créez un fichier server-counter.js" />
                            <Enonce text="Créez un serveur qui va écouter le port 3000" />
                            <Enonce text="Avec JS, on peut déclarer une variable en début de fichier et l'utiliser dans une fonction" />
                            <Enonce text="Créez une variable counter" />
                            <Enonce text="Utilisez-la pour répondre à chaque requête avec le message :" />
                            <Enonce text="Utilisez-la pour répondre à chaque requête avec le message : " />
                            <Enonce text="'Déjà x visiteur(s) sur ce serveur !'" />
                            <Enonce text="Bonus : Ajoutez une nouvelle ligne à la réponse selon le nb de visiteurs" />
                            <Enonce text="- de 10 visites : 'c'est le lancement ...'" />
                            <Enonce text="entre 10 et 20 visites : 'ça monte !'" />
                            <Enonce text="+ de 20 visites : 'Rôôô, on fait le buzz !'" />
                        </Exo>
                        <ListItem title="exo autonomie">
                            <Item text="je vous donne 10 minutes et on le fait ensemble" />
                            <Item text="pb sous chrome : le compteur augmente 2 par 2" />
                            <Item text="on corrigera ça ensemble" />
                            <Item text="I bon, on y va ?" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Déjà 1er problème : les accents !!" />
                            <Item text="On va devoir préciser l'encodage des caractères" />
                            <Item text="On modifie le header de la réponse" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On relance le serveur : les accents sont nickels" />
                            <Item text="maintenant, pourquoi compteur += 2 ?" />
                            <Item text="On va étudier un peu les requêtes qu'on reçoit" />
                            <Item text="une prop contient l'url appelée, faisons un debug" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On relance le serveur et on recharge" />
                            <Item text="Sous chrome, 2 requêtes : une sur /, une sur /favicon.ico" />
                            <Item text="On va appliquer notre code uniquement sur la 1ère requête" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="I bon pour vous ? On s'en refait un petit ?" />
                        </Control>
                        <Exo>
                            <Enonce text="Créez un fichier server-hello.js" />
                            <Enonce text="Créez un tableau avec 4 façons de dire bonjour dans des langues différentes" />
                            <Enonce text="Si vous manquez d'inspiration : https://www.freelang.com/expressions/bonjour.php" />
                            <Enonce text="Créez un serveur qui écoute le port 3000" />
                            <Enonce text="A la réception d'une requête, choisissez un bonjour dans le tableau de façon aléatoire" />
                            <Enonce text="Cette fois, renvoyons du HTML : le type MIME est text/html" />
                            <Enonce text="Attention aux accents, la réponse doit être encodée en utf8" />
                            <Enonce text="Ecrivez un h1 contenant votre bonjour aléatoire et envoyez-le" />
                        </Exo>
                        <ListItem title="Exo autonomie">
                            <Item text="On se retrouve dans 10-15 minutes pour le faire ensemble" />
                            <Item text="A vous de jouer !" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.server[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Voilà, c'était super dur ou pas ?" />
                            <BoxItem text="Vous êtes des pros du serveur ? On est bon ?" />
                        </Control>
                        <Transition>
                            <BoxItem text="On a vu rapidement request.url" />
                            <BoxItem text="Justement, on va s'en servir un peu plus pour définir plusieurs traitement" />
                            <BoxItem text="Cette aiguillage sur le serveur, on appelle ça des routes" />
                            <BoxItem text="Allez, suivez le guide !" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Routes" duration="1:00:00">
                    <List>
                        <ListItem title="Routage">
                            <Item text="On va donc utiliser l'info url de la requête pour dispatcher nos traitement" />
                            <Item text="Y aura des moyens plus sexy de faire, mais là utilisons un simple switch" />
                            <Item text="On commence par créer notre serveur et on le fait tourner sur le port 3000" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="server">
                            <Code step={snippets.routes[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Inspectons cette prop url de request" />
                            <Item text="un 'tit console.log suffira pour l'instant" />
                            <Item text="Je me débarasse de cette requête sur favicon qui m'agace" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.routes[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On voit que cette prop url contient tout ce qui suit le nom et le port du serveur" />
                            <Item text="On va l'utiliser dans un switch pour appliquer un traitement différent" />
                            <Item text="On va répondre en text et en UTF-8" />
                            <Question text="Qu'est-ce que je rajoute pour ça ?" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.routes[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Le switch est en place, définissons nos routes" />
                            <SubItem text="1 pour /" />
                            <SubItem text="1 pour /bonjour" />
                            <SubItem text="1 pour /dis-ton-nom" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.routes[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Alors ce carrelage, il est magnifique ou il est pas magnigfique ?" />
                            <BoxItem text="Mais si, magnifique !" />
                            <BoxItem text="Comment vous êtes en chef de gare ? Ca va l'aiguillage ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On peut très facilement diversifier nos traitement en observant l'url appelée" />
                            <BoxItem text="Node nous la fourni dans la prop url de la requête" />
                        </Recap>
                        <Transition>
                            <BoxItem text="A vous de jouer, un 'tit exo pour fixer tout ça !" />
                        </Transition>
                        <Exo>
                            <Enonce text="Créez un fichier routes-hello.js" />
                            <Enonce text="Reprenez le tableau des bonjours, transformez-le en object" />
                            <Enonce text="La clé de chaque bonjour sera le code ISO-639-1 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1" />
                            <Enonce text="Créez un serveur sur le port 3000" />
                            <Enonce text="L'utilisateur va renseigner sa langue dans l'URL" />
                            <Enonce text="Envoyez le bonjour correspondant à la langue saisie dans l'URL" />
                            <Enonce text="Pour enlever le / de l'URL : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/substring" />
                            <Enonce text="Si la langue n'est pas connue, affichez 'Langue non reconnue'" />
                            <Enonce text="Format de la réponse : comme vous voulez, plain ou HTML, mais en UTF-8" />
                            <Enonce text="Bonus : " />
                            <Enonce text="- si la langue n'est pas reconnue, trouvez comment envoyer une erreur 404 en plus du message" />
                            <Enonce text="- la doc de node est votre amie : https://nodejs.org/api/http.html" />
                            <Enonce text="Bonus qui pique :" />
                            <Enonce text="- trouvez dans la requête le header qui parle de langue et comment le récupérer" />
                            <Enonce text="- conditionnez votre réponse non plus sur l'URL mais sur la première langue de ce header" />
                        </Exo>
                        <ListItem title="Exo autonomie">
                            <Item text="Faisons ça ensemble" />
                        </ListItem>
                        <Demo type="server">
                            <Code step={snippets.routes[snippet++]} />
                        </Demo>
                        <ListItem title="Bonus" />
                        <Demo type="server">
                            <Code step={snippets.routes[snippet++]} />
                        </Demo>
                        <ListItem title="Bonus qui pique" />
                        <Demo type="server">
                            <Code step={snippets.routes[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Callback écrit en JS : on met ce qu'on veut comme traitement dedans" />
                            <BoxItem text="Des boucles, des conditions, des appels de fonction, ..." />
                            <BoxItem text="Seule limite : notre imagination" />
                        </Recap>
                        <ListItem title="Présentatino challenge" />
                    </List>
                </Card>
                
            </div>
        </Fragment>
    );
}

export default S3E02;