import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem} from "../../../../common";

import "../../../style.scss"

const S2E02 = props => {
    return (
        <Fragment>
            <Code />
            <div className="Title">JS, ça fonctionne bien</div>
            <div className="Inner">
                <Card title="Correction">
                    <Doc type="Challenge" url="http://localhost:1235/ChallengeS2E01/" />
                    <List>
                        <Recap>
                            <BoxItem text="A quoi peut servir JS" />
                            <BoxItem text="Concept généraux de prog" />
                            <BoxItem text="Bases du langage : déclaration, assignation, type primitifs" />
                            <BoxItem text="Utilisation de la console" />
                            <BoxItem text="Conditions, comparaisons" />
                        </Recap>
                        <Control>
                            <BoxItem text="Alors comment ça s'est passé ce challenge ?" />
                            <BoxItem text="Sondage : J'ai trouvé ça : trop facile, m'en suis tiré, j'ai galléré, z'êtes malades !!" />
                            <BoxItem text="Sondage : exo1 fini : oui/presque/non" />
                            <BoxItem text="Sondage : exo2 fini : oui/presque/non" />
                            <BoxItem text="Sondage : exo3 fini : oui/presque/non" />
                            <BoxItem text="Sondage : bonus fini : oui/presque/non" />
                        </Control>
                        <Transition>
                            <BoxItem text="On va revoir tout ça ensemble" />
                        </Transition>
                        <ListItem title="Correction exo1">
                            <Item text="pas de feinte, même principe qu'hier" />
                            <Item text="on déclare nos 2 variables et on leur assigne une valeur" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text={`var question1 = "..."`} />
                            <BoxItem text={`var solution1 = "..."`} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ok exo 1 ? Y avait pas de piège ..." />
                        </Control>
                        <ListItem title="Correction exo2 - 1">
                            <Question text="Qu'est-ce qu'on va utiliser comme fonction ?" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text="var reponse1 = prompt(question1)" />
                        </Demo>
                        <ListItem title="Correction exo2 - 2">
                            <Item text="Vous avez remarqué la phrase ? On dirait de l'algo ..." />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text="/*SI reponse égale solution" />
                            <BoxItem text="ALORS affiche Gagné !" />
                            <BoxItem text="*/SINON affiche Perdu ..." />
                        </Demo>
                        <ListItem title="Correction exo2 - 3">
                            <Question text="Qui me dit comment on va implémenter ça ?" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text={`if (reponse1 === solution1) {`} />
                            <BoxItem text={`alert("Gagné !");`} />
                            <BoxItem text={`} else {`} />
                            <BoxItem text={`alert("Perdu ...");`} />
                            <BoxItem text={`}`} />
                        </Demo>
                        <Control>
                            <BoxItem text="C'est clair ce if ?" />
                        </Control>
                        <ListItem title="Correction exo3 - 1">
                            <Item text="Plus tricky celui-là ..." />
                            <Item text="Au début pas de souci, on déclare question2 et solution2" />
                            <Item text="On pose la question et on stocke dans reponse2" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text={`var question2 = "..."`} />
                            <BoxItem text={`var solution2 = "..."`} />
                            <BoxItem text={`var reponse2 = prompt(question2)`} />
                        </Demo>
                        <ListItem title="Correction exo3 - 2">
                            <Item text="Ensuite on doit comparer avec la bonne réponse, c'est là que ça se corse :" />
                            <SubItem text="On nous l'a donné en indice : prompt renvoie une string" />
                            <SubItem text="Notre réponse, c'est 63, un number" />
                            <Item text="D'où un problème, si on compare une string et un number avec ===, ça renvoie faux" />
                            <Item text="On nous a donné un autre indice : parseInt" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt" />
                        <ListItem title="Correction exo3 - 3">
                            <Item text="Ca a l'air nickel, c'est bien ça qu'on veut faire" />
                            <Item text="Dans notre cas, c'est la base 10" />
                        </ListItem>
                        <Demo type="console">
                            <BoxItem text={`parseInt("35"), retourne 35`} />
                            <BoxItem text={`parseInt("35.5") retourne 35, parseInt renvoie un entier`} />
                            <BoxItem text={`parseInt("35px"), retourne 35`} />
                            <BoxItem text={`var num = parseInt("35"), typeof num`} />
                            <BoxItem text={`var str = "test", typeof str`} />
                            <BoxItem text={`parseInt("test") c'est quoi ce truc bizarre NaN ?`} />
                        </Demo>
                        <ListItem title="Correction exo3 - 4">
                            <Item text="NaN : not a number, la conversion n'a pas marché" />
                            <Item text="JS nous indique qu'il attendait une valeur number mais qu'il l'a pas eue" />
                            <Item text="On a une autre méthode pour transformer une string en number, c'est Number" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" />
                        <Demo type="console">
                            <BoxItem text={`Number("35"), retourne 35`} />
                            <BoxItem text={`Number("35.5") retourne 35.5, prend en compte les float`} />
                            <BoxItem text={`var num = Number("35.5"), typeof num`} />
                            <BoxItem text={`Number("35px"), retourne NaN`} />
                        </Demo>
                        <Recap>
                            <BoxItem text="2 méthodes pour transformer une string en number" />
                            <BoxItem text="parseInt : renvoie un entier, même si lettres APRES le nombre" />
                            <BoxItem text="Number : renvoie un entier ou un float, mais aime pas du tout les lettres" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Maintenant qu'on est bien armé, on peut retourner au combat" />
                        </Transition>
                        <ListItem title="Correction exo3 - 5">
                            <Item text="On a la solution dans solution2, c'est un number" />
                            <Item text="On a la reponse de l'utilisateur dans reponse2, c'est une string" />
                            <Question text="C'est a vous maintenant, qu'est-ce que je fais pour les comparer ?" />
                            <Item text="On va transformer reponse2 en number" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text="var reponse2Number = parseInt(reponse2, 10)" />
                            <BoxItem text="if (reponse2Number === solution2)" />
                            <BoxItem text="Reste du test : copier/coller" />
                        </Demo>
                        <ListItem title="Correction bonus - 5">
                            <Question text="Réfléchissons ensemble, c'est quoi les étapes ?" />
                            <Item text="On va créer une variable pour contenir le score" />
                            <Item text="On va la mettre à jour à chaque bonne réponse" />
                            <Item text="On va afficher le score à la fin du jeu" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text="var score = 0;" />
                        </Demo>
                        <ListItem title="Correction bonus - 6">
                            <Item text="On doit donc ajouter 1 à score à chaque bonne réponse" />
                            <Question text="On fait comment dans le coup ?" />
                            <Item text="Il faut incrémenter la variable, lui ajouter 1" />
                            <Item text="On assigne une nouvelle valeur : l'ancienne valeur + 1" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text={`après alert("Gagné !"), score = score + 1;`} />
                            <BoxItem text="//score += 1;" />
                            <BoxItem text="//score++;" />
                        </Demo>
                        <ListItem title="Correction bonus - 7">
                            <Item text="Il nous resete à afficher le score en fin de partie" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text="En fin de code, alert(score)" />
                        </Demo>
                        <ListItem title="Correction bonus - 8">
                            <Item text="On va afficher un message différent au singulier ou au pluriel" />
                            <Question text="On va utilisr une ... ?" />
                            <Item text="SI score supérieur à 1 ALORS afficher avec s SINON afficher sans s" />
                        </ListItem>
                        <Demo type="repo ChallengeS1E01">
                            <BoxItem text={`var message = ""`} />
                            <BoxItem text={`if (score > 1) message = pluriel`} />
                            <BoxItem text="else message = singulier" />
                            <BoxItem text="alert(message);" />
                        </Demo>
                        <Recap>
                            <BoxItem text="Dans ce challenge on a révisé les variables, les conditions et les comparaisons" />
                            <BoxItem text="On a découvert comment transformer une string en number" />
                            <BoxItem text="On a aussi vu 3 façon d'incrémenter une variable : oldValue+1, value += 1; value++" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Le code fonctionne, c'est le but 1er c'est super !" />
                            <BoxItem text="Est-ce que vous remarquez qu'entre question 1 et question2 le code se ressemble vachement ?" />
                            <BoxItem text="Nous les devs, on n'aime pas se répéter" />
                            <BoxItem text="Faudrait pouvoir prendre ce bout de code similaire et le stocker ailleurs pour réutilisation" />
                            <BoxItem text="JS nous aime, il a encore pensé à nous : c'est le rôle des fonctions" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Intro fonctions">
                    <Doc type="Slides" url="http://localhost:1234/s2/e2/fonction" />
                    <List>
                        <ListItem title="Intro">
                            <Item text="On va utiliser des fonctions pour factoriser le code" />
                            <Item text="On évite au maximum de se répéter :" />
                            <SubItem text="le code est plus propre, plus agréable à lire" />
                            <SubItem text="en cas de modif, on ne change qu'à un seul endroit" />
                            <Item text="Imaginez un déménagement, quest-ce qu'il vaut mieux : 15 voitures qui se suivent ou un gros camion" />
                            <Item text="Si camion change de route, pas grave, 15 bagnoles, plus dur, vaut mieux factoriser les ressources" />
                            <Item text="La fonction fait ça avec les instructions" />
                            <Item text="Liste d'instructions qu'on va exécuter en appelant la fonction" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Point de départ">
                            <Item text={`prog met un message = "bonjour"`} />
                            <Item text="demande prénom et l'ajoute (concat avec +=)" />
                            <Item text="on a vu +=, marche avec numbers, marche aussi avec strings" />
                            <Item text="pareil avec nom et age" />
                            <Item text="affiche le message" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Bon pour tout le monde ?" />
                        </Control>
                        <Click dir="bottom" />
                        <ListItem title="DRY">
                            <Item text="Nous les devs, on n'aime pas se répéter" />
                            <Item text="Je le redirai souvent, c'est une bonne pratique de prog" />
                            <Item text="Effectivement, copier/coller peut marcher mais code fouilli" />
                            <Item text="Pour modifier, penser à tous les endroits où on a copié" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Comment stocker les instructions ?">
                            <Item text="L'idée : pouvoir assigner des instructions à une variable" />
                            <Item text="Pas possible comme ça, faut qu'on trouve autre chose" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Les fonctions">
                            <Item text="JS nous a à la bonne, c'est le rôle des fonctions" />
                            <Item text="Stocker des instructions qu'on exécutera toutes d'un coup en appelant la fonction" />
                            <Item text="Comment on fait ça ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Déclaration">
                            <Item text="Comme une variable, il faut déclarer une fonction" />
                            <Item text="Plusieurs façons de faire en JS :" />
                            <Item text="Classique : mot-clé function, nom, parenthèses accolades" />
                            <Item text="Entre accolades, on place les instructions" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Décortique">
                            <Item text="Je répète : mot-clé function, nom, parenthèses accolades" />
                            <Item text="C'est la déclaration" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Exécuter">
                            <Item text="Appeler/exécuter la fonction !== déclarer" />
                            <Item text="On va exécuter toutes les instructions entre accolades" />
                            <Item text="On utilise le nom + ()" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Recap">
                            <Item text="On déclare avec function + nom + ..." />
                            <Item text="On exécute avec nom + ()" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Fonction presentation">
                            <Item text="On a déplacé toutes nos instructions entre les accolades de fonction presentation" />
                            <Item text="C'est la déclaration, aucun code n'est exécuté" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Exécution">
                            <Item text="On appelle fonction presentation avec ()" />
                            <Item text="Pour l'exécuter 2 fois, il suffit de l'appeler 2 fois" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Fonction : paquet d'instructions, plus propre, plus simple à maintenir" />
                            <BoxItem text={`Déclarer une fonction : function nom () {}`} />
                            <BoxItem text="Appeler/exécuter une fonction: nom + ()" />
                        </Recap>
                        <Transition>
                            <BoxItem text="C'est déjà chouette mais on peut faire bien plus" />
                            <BoxItem text="Pour code souple et réutilisable, on va le configurer, le rendre adaptable" />
                        </Transition>
                        <Click dir="right" />
                        <ListItem title="Paramètres">
                            <Item text="Ca va être le rôle des paramètres" />
                            <Item text="Le comportement du code sera différent selon les paramètres reçus" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Fonction simple">
                            <Item text="Dans fonction, variable message qui vaut Bonjour" />
                            <Item text="on alert message concaténé à !!" />
                            <Item text="Si on veut dire autre chose que bonjour ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Paramètre message">
                            <Item text="On ne va plus déclarer message dans la fonction avec du code en dur" />
                            <Item text="On définit un paramètre message entre les parenthèses" />
                            <Item text="Paramètre va agir comme une variable dans la fonction" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Argument message">
                            <Item text="A l'appel, on passe la valeur de message qu'on souhaite" />
                            <Item text="Au lieu de Bonjour!!, on aura Hello!!" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Recap">
                            <Item text="Dans la déclaration, on définit un paramètre entre les parenthèse" />
                            <Item text="A l'exécution, on passe un argument entre les parenthèses" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Code final">
                            <Item text="On déclare presentation avec un paramètre message" />
                            <Item text="On peut l'exécuter plein de fois avec des arguments différents" />
                            <Item text="Le message affiché sera différent, il a été configuré" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Point de détail">
                            <Item text="Je vous ai dit : plusieurs façons de déclarer une fonction" />
                            <Item text="une autre façon qu'on verra assez souvent : var nom = function parenthèses" />
                            <Item text="Fonction est dite anonyme" />
                            <Item text="Petites subtilités dans l'utilisation mais on en reparlera plus tard" />
                            <Item text="Utilisez celle que vous préférez" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Tout le monde est là ?" />
                            <BoxItem text="Y en a qui pleurent ou pas ? Faut me le dire !" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a vu comment déclarer avec function nom() et appeler une fonction" />
                            <BoxItem text="Comment la configurer avec paramètres pour code plus souple et l'appeler avec arguments" />
                            <BoxItem text="2ème façon de déclarer avec var nom = function()" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Pratiquons avec code du challenge" />
                            <BoxItem text="On va le rendre beau, propre, réutilisable" />
                        </Transition>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E02;