import React, {Fragment} from "react";

import {Card, Code, List, ListItem, Item, SubItem, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Snippet, ExoSondage} from "../../../common";
import {day2 as snippets} from "./Code/snippets";

import "../../style.scss"

const S5E02 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">POO ,et héritage</div>
            <div className="Inner">
                <Card title="Correction" duration="2:00:00">
                    <List>
                        <Recap>
                            <BoxItem text="Commencé à décortiquer notre nouveau projet" />
                            <BoxItem text="Extraction des infos de la demande client" />
                            <BoxItem text="Définition des use cases" />
                            <BoxItem text="Répartition par sprints" />
                            <BoxItem text="Création de wireframes pour structurer nos vues" />
                            <BoxItem text="Réalisation du MCD pour visualiser nos entités" />
                            <BoxItem text="A faire : réalisation du MLD" />
                        </Recap>
                        <ListItem title="Premier jet, juste avec les champs connus" />
                        <Demo type="MLD">
                            <Code step={snippets.mld[snippet++]} />
                        </Demo>
                        <ListItem title="relations">
                            <Item text="Maintenant, on doit indiquer comment les entités sont reliées entre elles" />
                            <Item text="On va observer les cardinalités max dans les relations du MCD" />
                            <SubItem text="max 1,n : clé étrangère dans la table qui a 1" />
                            <SubItem text="max 1,1 : clé étrangère dans la table à 1,1, là où ça parait logique" />
                            <SubItem text="max n,n : on est obligé de rajouter une table pour faire la relation" />
                            <ListItem text="faisons déjà toutes les relations avec max 1,n" />
                        </ListItem>
                        <ListItem title="Relation utilisateur/quiz">
                            <Sondage question="On a des cardinalités max à 1,n. Quelle table doit recevoir la clé étrangère ?" reponses={['utilisateur', 'quiz', 'demande_asile']} />
                            <Item text="La table qui a 1 au max, c'est quiz" />
                            <Item text="utilisateur aurait plusieurs valeurs étrangères" />
                            <Item text="quiz prend l'id de l'utilisateur en clé étrangère" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.mld[snippet++]} />
                        </Demo>
                        <ListItem title="Relation quiz/question">
                            <Sondage question="On a des cardinalités max à 1,n. Quelle table doit recevoir la clé étrangère ?" reponses={['question', 'quiz', 'titre_sejour']} />
                            <Item text="La table qui a 1 au max, c'est question" />
                            <Item text="quiz aurait plusieurs valeurs étrangères" />
                            <Item text="question prend l'id du quiz en clé étrangère" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.mld[snippet++]} />
                        </Demo>
                        <ListItem title="Relation question/niveau">
                            <Sondage question="On a des cardinalités max à 1,n. Quelle table doit recevoir la clé étrangère ?" reponses={['question', 'niveau', 'la communeauté internationale']} />
                            <Item text="La table qui a 1 au max, c'est encore question" />
                            <Item text="niveau aurait plusieurs valeurs étrangères" />
                            <Item text="question prend l'id du niveau en clé étrangère" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.mld[snippet++]} />
                        </Demo>
                        <ListItem title="Relation contient entre question/réponse">
                            <Sondage question="On a des cardinalités max à 1,n. Quelle table doit recevoir la clé étrangère ?" reponses={['question', 'réponse', 'la Turquie']} />
                            <Item text="La table qui a 1 au max, c'est réponse" />
                            <Item text="question aurait plusieurs valeurs étrangères, on n'en voudra qu'une, la bonne réponse !" />
                            <Item text="réponse prend l'id de la question en clé étrangère" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.mld[snippet++]} />
                        </Demo>
                        <ListItem title="Relation valide entre question/réponse">
                            <Sondage question="On a des cardinalités max à 1,1. Quelle table doit recevoir la clé étrangère ?" reponses={['question', 'réponse', 'la Grèce']} />
                            <Item text="La table qui a 1,1 comme cardinalité, c'est question" />
                            <Item text="On va stocker l'id de la bonne réponse dans question" />
                            <Item text="Difficile à indiquer dans réponse, champ sup qui serait souvent à false, beaucoup de répétition" />
                            <Item text="question prend l'id de la bonne réponse en clé étrangère" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.mld[snippet++]} />
                        </Demo>
                        <ListItem title="Relation vquiz/thème">
                            <Item text="Plus compliqué ici, on a n,n en max" />
                            <Item text="Avec des clé étrangères, on aurait plusieurs thèmes dans question et plusieurs question dans thème" />
                            <Item text="Pour modéliser ça, on passe par une table supplémentaire" />
                            <Item text="On va y associer l'id d'un quiz et l'id d'un thème" />
                            <Item text="Ca permet d'avoir plusieurs thèmes pour un quiz et plusieurs quiz pour un thème" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.mld[snippet++]} />
                        </Demo>
                        <ListItem title="Création des tables">
                            <Item text="A partir du MLD, on va se faire un script de création des tables" />
                            <Item text="Conventions de nommage des tables et des champs :" />
                            <SubItem text="au singulier" />
                            <SubItem text="en anglais" />
                            <SubItem text="en minuscule" />
                            <SubItem text="en snake_case" />
                            <Item text="On va aussi entourer les noms de tables et de champ avec des double quotes pour éviter les conflits" />
                            <Item text="On prévient PostgreSQL : ces infos sont à ma base, va pas chercher dans les tiennes" />
                        </ListItem>
                        <Demo type="MLD">
                            {console.log(resetSnippet())}
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Transaction">
                            <Item text="Vu qu'on va faire plusieurs requêtes, on va se mettre un filet de sécurité" />
                            <Item text="Si jamais on a une erreur en milieu de script, faut pas qu'on se retrouve avec la moitié des requêtes effectuées" />
                            <Item text="Ca peut vite être cauchemardesque d'annuler les requêtes ok jusqu'à l'erreur" />
                            <Item text="On va utiliser une transaction : PostgreSQL va simuler l'exécution avant d'envoyer vraiment au serveur" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Nettoyage">
                            <Item text="Sécurisons encore un peu notre script" />
                            <Item text="Pour être sûr que les tables n'existent pas déjà, on les supprime !" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Clés primaires">
                            <Item text="Pour définir nos clé primaires, on va utiliser un type de données particulier : serial" />
                            <Item text="C'est un raccourci pour déclarer un integer qui va s'auto-incrémenter" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Table level" />
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Table user" />
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Table quiz">
                            <Item text="Cette fois, besoin d'une clé étrangère, une référence vers une autre table" />
                            <Item text="On peut le faire directement à la création de la table si la table référencée existe déjà" />
                            <Item text="Ici, on référence l'auteur du script, un user, la table existe déjà" />
                            <Item text={`On utilise REFERENCES "<table>"("<champ>")`} />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Table tag" />
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Table question">
                            <Item text="Ici, on va avoir un problème : on a une ref à answer, la table n'est pas encore créée" />
                            <Item text="On pourra pas faire le REFERENCES directement à la création" />
                            <Item text="On va contourner le souci, on va déclarer le champ de façon classique" />
                            <Item text="En fin de fichier, on ajoutera une requête pour indiquer cette clé étrangère" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Table answer" />
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Table quiz_has_tag">
                            <Item text="Particularité pour cette table : on veut une clé primaire sur les 2 champs" />
                            <Item text="Il faut que l'association entre l'id du quiz et l'id du thème soit unique" />
                            <Item text="On peut pas mettre PRIMARY KEY sur plusieurs champs directement" />
                            <Item text="On le fait après la déclaration des champs" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Foreign key">
                            <Item text="Toutes les tables sont créées, on peut ajouter notre foreign key manquante sur quiz" />
                            <Item text="On va modifier la table avec un ALTER TABLE et ajouter cette contrainte sur le champ answer_id qu'on a déjà créé" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                    </List>
                </Card>
                <Card title="POO" duration="1:00:00">
                    <List>
                        <ListItem title="Les objets en JS">
                            <Item text="Top de l'empaquetage du code" />
                            <Item text="Pratique dans les modules pour échanger plein d'infos entre les fichiers" />
                            <Item text="Mais ça a quand même ses limites" />
                            <Item text="On va voir ça dans un exemple" />
                        </ListItem>
                        <Demo type="repo Code">
                            {console.log(resetSnippet())}
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <ListItem title="Design pattern Factory">
                            <Item text="On voudrait plutôt pouvoir faire des objects configurables mais avec les mêmes méthodes" />
                            <Item text="Comme dans une usine à la chaine, on va se faire un moule, un modèle d'object" />
                            <Item text="On va pouvoir changer ses propriétés mais les méthodes seront partagées" />
                            <Item text="DRY et souple : on va utiliser pour ça un design pattern" />
                            <Item text="Modèle de programmation, solution générique pour régler un type de problème" />
                            <Item text="Dans notre cas : Factory" />
                            <Item text="Le principe : un object usine avec une méthode de création d'un type d'object" />
                            <Item text="On va se faire une usine à glaces" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Sondage question="Avec une factory, on fait des glaces de façon ..." reponses={["plus DRY", "plus souple", "plus mieux"]} />
                        <Sondage question="Avec une factory, toutes les glaces ont ..." reponses={["les mêmes méthodes", "le même parfum", "des défauts de fabrication"]} />
                        <Recap>
                            <BoxItem text="Pour prendre un autre exmple, un object littéral c'est un peu la pizza surgelée" />
                            <BoxItem text="La factory, c'est le pizzaiolo : il fait toujours les pizzas de la même façon avec des ingrédients différents" />
                            <BoxItem text="C'est toujours meilleur que le surgelé, non ?" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Le design pattern Factory, c'est déjà bien cool" />
                            <BoxItem text="Dans la POO, on entend souvent parler de classes et d'instances" />
                            <BoxItem text="En JS, récemment, on a ajouté le mot-clé class" />
                            <BoxItem text="Sous le capot, c'est une sorte de factory mais ça permet d'harmoniser la POO JS avec celle des autres langages" />
                            <Item text="Plus simple si on veut switcher de langage" />
                        </Transition>
                        <ListItem title="Classes">
                            <Item text="La class, c'est notre moule à glace, notre modèle" />
                            <Item text="L'instance', c'est notre glace en sortie d'usine" />
                            <Item text="Pour déclarer une class, mot-clé class" />
                            <Item text="Pour obtenir une instance, un object sorti d'usine, mot-clé new" />
                            <Item text="Voyons tout de suite dans un exemple" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <ListItem title="Constructor">
                            <Item text="Pour l'instant, pas grande différence avec un object" />
                            <Item text="C'est même un peu plus long, ça vaut pas la factory" />
                            <Item text="On voudrait pouvoir configurer nos glaces directement à la création" />
                            <Item text="En fait, le mot-clé new appelle une méthode cachée de la class, le constructeur" />
                            <Item text="C'est lui qui va lancer la fabrication de l'instance (le glacier ou le pizzaiolo)" />
                            <Item text="Il existe toujours dans une class, on ne doit l'écrire que si on veut passer des arguments" />
                            <Item text="Voyons comment on peut configurer notre class Glace" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <ListItem title="Méthodes d'instance">
                            <Item text="On va ajouter les 2 méthodes qu'on avait, ajouterParfum et toString" />
                            <Item text="Ces méthodes seront disponibles pour toutes les instances de Glace" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Sondage question="Une classe, c'est ..." reponses={["un modèle d'objet", "un objet", "un cockpit d'étudiants ?"]} />
                        <Sondage question="Une instance, c'est ..." reponses={["un modèle d'objet", "un objet", "un tribunal ?"]} />
                        <Sondage question="Pour ajouter une propriété typeCornet à notre class Glace, on va écrire ..." 
                            reponses={["typeCornet,", "typeCornet;", "...au glacier"]} />
                        <Exo>
                            <Enonce text="Le code suivant est foireux :" />
                            <Snippet lines={snippets.poo[snippet++].code} />
                            <ExoSondage question="L'erreur se situe ligne ..." reponses={["2", "3", "5"]} />
                        </Exo>
                        <Transition>
                            <BoxItem text="On peut modifier directement les props d'un object en JS" />
                            <BoxItem text="Pas de vrai moyen de l'éviter, mais on peut essayer de contourner ..." />
                        </Transition>
                        <ListItem title="Getter/Setter">
                            <Item text="On va ruser ..." />
                            <Item text="On va rendre nos noms de propriétés moins évidents" />
                            <Item text="Pour y accéder, on va utiliser un getter" />
                            <Item text="C'est une sorte d'homme de paille, d'intermédiaire qui va protéger la vraie propriété" />
                            <Item text="Ce sera une fonction, on va pouvoir y intégrer un peu de validation" />
                            <Item text="On va, par exemple, vérifier que le type de données est correct" />
                            <Item text="La syntaxe est un peu curieuse ..." />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Le code suivant est foireux :" />
                            <Snippet lines={snippets.poo[snippet++].code} />
                            <ExoSondage question="L'erreur se situe ligne ..." reponses={["2", "3", "6"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="Crer un nouveau fichier vehicule.js" />
                            <Enonce text="Déclarer une class Vehicule avec 3 propriétés :" />
                            <Enonce text="- nbWheels : un number" />
                            <Enonce text="- enginePower : un number" />
                            <Enonce text="- isStarted : un boolean initialisé à false" />
                            <Enonce text="Faire un constructeur permettant de configurer nbWheels et enginePower" />
                            <Enonce text="Faire les getters et setters pour toutes les propriétés" />
                            <Enonce text="Ajouter 2 méthodes, start et stop pour modifier la propriété isStarted" />
                            <Enonce text="Ajouter 1 méthode toString qui renvoie une chaine de la forme :" />
                            <Enonce text="Véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}." />
                            <Enonce text="BONUS - Ajouter un check des types de données dans les setters" />
                        </Exo>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Sondage question="Alors, les classes ?" reponses={["ça a l'air cool", "pas encore limpide ...", "je vois pas l'intérêt"]} />
                        <Recap>
                            <BoxItem text="Les classes offrent plus de souplesse que les objects littéraux ou une factory" />
                            <BoxItem text="Syntaxe à prendre en main mais quand on commence on peut plus s'en passer" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Reste un truc très pratique des classes" />
                            <BoxItem text="On peut définir un premier modèle avec des fonctionnalités et faire passer ces fonctionnalités à d'autres classes" />
                            <BoxItem text="Principe de l'héritage" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Héritage">
                    <List>
                        <ListItem title="Héritage">
                            <Item text="On va pouvoir se faire une grande famille de classes" />
                            <Item text="Une classe va pouvoir hériter d'une autre qui a elle-même hérité d'une autre" />
                            <Item text="Un peu comme chez les humains : le patrimoine génétique est transmis d'une génération à l'autre" />
                            <Item text="En JS, le patrimoine génétique c'est les propriétés et les méthodes" />
                            <Item text="On va pouvoir les transmettre du parent à l'enfant" />
                            <Item text="D'ailleurs, on va parler de classe mère et de classe fille" />
                            <Item text="Une tite démo" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Sur le même principe, créer une class Moto qui étend la class Vehicule" />
                            <Enonce text="nbRoues vaut 2, enginePower reste configurable" />
                            <Enonce text="Surcharger la méthode toString pour obtenir le message :" />
                            <Enonce text="Moto : Véhicule à 2 roues, de puissance X, est démarré/n\'est pas démarré." />
                            <Enonce text="Démarrer la moto et faire un console.log du résultat de toString" />
                        </Exo>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Sondage question="Une class fille va hériter de sa class mère ..." reponses={['toute sa tune', 'ses propriétés', 'ses propriétés et méthodes']} />
                        <Sondage question="Pour accéder à la class mère depuis la class fille, on utilise ..." reponses={["this", "super", "la grand-mère"]} />
                        <Recap>
                            <BoxItem text="Avec l'héritage, on peut créer toute une hiérachie, un arbre généalogique de classes" />
                            <BoxItem text="Donne accès à toutes les propriétés et méthodes de la class mère" />
                            <BoxItem text="On garde une ref de la mère dans la fille : super" />
                            <BoxItem text="On peut surcharger des méthodes existantes, elles auront un comportement différent dans la mère et dans la fille" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Pour l'instant les props sont attachées à une instance, l'object réel créé grâce à la class" />
                            <BoxItem text="Les valeurs de ces props sont différentes, chaque instance a ses propres props" />
                            <BoxItem text="On peut avoir besoin de propriétés partagée, communes entre les instances d'une même class" />
                            <BoxItem text="Voyons comment on peut faire ça" />
                        </Transition>
                        <ListItem title="Person">
                            <Item text="On va se créer une classe Person avec quelques props" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <ListItem title="Vampire">
                            <Item text="Maintenant, une class Vampire qui hérite de Person" />
                            <Item text="Dans le constructeur, on va utiliser le constructeur de Person et modifier la propriété state" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <ListItem title="Static">
                            <Item text="Les vampires ont un super-pouvoir : ils connaissent le nombre total de vampires dans le monde" />
                            <Item text="Pour faire ça en JS, on va attacher une propriété non pas à l'instance mais à la class, au modèle" />
                            <Item text="Comme la caisse enregistreuse d'un magasin : chaque transaction a un montant propre" />
                            <Item text="à la fin de la journée, la caisse sait donner le total encaissé" />
                            <Item text="On modifie la class Vampire pour ajouter ce super-pouvoir" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                        <Sondage question="Une propriété statique est rattachée ..." reponses={["à une instance", "à une classe", "à l'electricité ?"]} />
                        <Sondage question="On accède à une propriété statique avec ..." reponses={["this", "super", "le nom de la classe", "Réponse D"]} />
                        <ListItem title="Présentation challenge" />
                        <Demo type="repo Code">
                            <Code step={snippets.poo[snippet++]} />
                        </Demo>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S5E02;