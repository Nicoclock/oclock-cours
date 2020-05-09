import React, {Fragment} from "react";

import {Card} from "../../../../common";

import "../../../style.scss"

const S2E02 = props => {
    return (
        <Fragment>
            <div className="Title">JS, ça fonctionne bien</div>
            <div className="Inner">
                <Card title="Correction">
                    <div className="Doc">Challenge : http://localhost:1235/ChallengeS2E01/</div>
                    <ul className="List">
                        <li className="Recap">
                            <div className="Item">A quoi peut servir JS</div>
                            <div className="Item">Concept généraux de prog</div>
                            <div className="Item">Bases du langage : déclaration, assignation, type primitifs</div>
                            <div className="Item">Utilisation de la console</div>
                            <div className="Item">Conditions, comparaisons</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Alors comment ça s'est passé ce challenge ?</div>
                            <div className="Item">Sondage : J'ai trouvé ça : trop facile, m'en suis tiré, j'ai galléré, z'êtes malades !!</div>
                            <div className="Item">Sondage : exo1 fini : oui/presque/non</div>
                            <div className="Item">Sondage : exo2 fini : oui/presque/non</div>
                            <div className="Item">Sondage : exo3 fini : oui/presque/non</div>
                            <div className="Item">Sondage : bonus fini : oui/presque/non</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">On va revoir tout ça ensemble</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo1</div>
                            <div className="Item">- pas de feinte, même principe qu'hier</div>
                            <div className="Item">- on déclare nos 2 variables et on leur assigne une valeur</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">var question1 = "..."</div>
                            <div className="Item">var solution1 = "..."</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Ok exo 1 ? Y avait pas de piège ...</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo2 - 1</div>
                            <div className="Question">Qu'est-ce qu'on va utiliser comme fonction ?</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">var reponse1 = prompt(question1)</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo2 - 2</div>
                            <div className="Item">- Vous avez remarqué la phrase ? On dirait de l'algo ...</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">/*SI reponse égale solution</div>
                            <div className="Item">ALORS affiche Gagné !</div>
                            <div className="Item">*/SINON affiche Perdu ...</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo2 - 3</div>
                            <div className="Question">Qui me dit comment on va implémenter ça ?</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">{`if (reponse1 === solution1) {`}</div>
                            <div className="Item">{`alert("Gagné !");`}</div>
                            <div className="Item">{`} else {`}</div>
                            <div className="Item">{`alert("Perdu ...");`}</div>
                            <div className="Item">{`}`}</div>
                        </li>
                        <li className="Control">
                            <div className="Item">C'est clair ce if ?</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo3 - 1</div>
                            <div className="Item">- Plus tricky celui-là ...</div>
                            <div className="Item">- Au début pas de souci, on déclare question2 et solution2</div>
                            <div className="Item">- On pose la question et on stocke dans reponse2</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">var question2 = "..."</div>
                            <div className="Item">var solution2 = "..."</div>
                            <div className="Item">var reponse2 = prompt(question2)</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo3 - 2</div>
                            <div className="Item">- Ensuite on doit comparer avec la bonne réponse, c'est là que ça se corse :</div>
                            <div className="SubItem">* On nous l'a donné en indice : prompt renvoie une string</div>
                            <div className="SubItem">* Notre réponse, c'est 63, un number</div>
                            <div className="Item">- D'où un problème, si on compare une string et un number avec ===, ça renvoie faux</div>
                            <div className="SubItem">- On nous a donné un autre indice : parseInt</div>
                        </li>
                        <div className="Doc">Ressource : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt</div>
                        <li className="ListItem">
                            <div className="Slide">Correction exo3 - 3</div>
                            <div className="Item">- Ca a l'air nickel, c'est bien ça qu'on veut faire</div>
                            <div className="Item">- Dans notre cas, c'est la base 10</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">parseInt("35"), retourne 35</div>
                            <div className="Item">parseInt("35.5") retourne 35, parseInt renvoie un entier</div>
                            <div className="Item">parseInt("35px"), retourne 35</div>
                            <div className="Item">var num = parseInt("35"), typeof num</div>
                            <div className="Item">var str = "test", typeof str</div>
                            <div className="Item">parseInt("test") c'est quoi ce truc bizarre NaN ?</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo3 - 4</div>
                            <div className="Item">- NaN : not a number, la conversion n'a pas marché</div>
                            <div className="Item">- JS nous indique qu'il attendait une valeur number mais qu'il l'a pas eue</div>
                            <div className="Item">- On a une autre méthode pour transformer une string en number, c'est Number</div>
                        </li>
                        <div className="Doc">Ressource : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number</div>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">Number("35"), retourne 35</div>
                            <div className="Item">Number("35.5") retourne 35.5, prend en compte les float</div>
                            <div className="Item">var num = Number("35.5"), typeof num</div>
                            <div className="Item">Number("35px"), retourne NaN</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">2 méthodes pour transformer une string en number</div>
                            <div className="Item">parseInt : renvoie un entier, même si lettres APRES le nombre</div>
                            <div className="Item">Number : renvoie un entier ou un float, mais aime pas du tout les lettres</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Maintenant qu'on est bien armé, on peut retourner au combat</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction exo3 - 5</div>
                            <div className="Item">- On a la solution dans solution2, c'est un number</div>
                            <div className="Item">- On a la reponse de l'utilisateur dans reponse2, c'est une string</div>
                            <div className="Question">C'est a vous maintenant, qu'est-ce que je fais pour les comparer ?</div>
                            <div className="Item">- On va transformer reponse2 en number</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">var reponse2Number = parseInt(reponse2, 10)</div>
                            <div className="Item">if (reponse2Number === solution2)</div>
                            <div className="Item">Reste du test : copier/coller</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction bonus - 5</div>
                            <div className="Question">Réfléchissons ensemble, c'est quoi les étapes ?</div>
                            <div className="Item">- On va créer une variable pour contenir le score</div>
                            <div className="Item">- On va la mettre à jour à chaque bonne réponse</div>
                            <div className="Item">- On va afficher le score à la fin du jeu</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">var score = 0;</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction bonus - 6</div>
                            <div className="Item">On doit donc ajouter 1 à score à chaque bonne réponse</div>
                            <div className="Question">On fait comment dans le coup ?</div>
                            <div className="Item">- Il faut incrémenter la variable, lui ajouter 1</div>
                            <div className="Item">- On assigne une nouvelle valeur : l'ancienne valeur + 1</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">après alert("Gagné !"), score = score + 1;</div>
                            <div className="Item">//score += 1;</div>
                            <div className="Item">//score++;</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Correction bonus - 7</div>
                            <div className="Item">- Il nous resete à afficher le score en fin de partie</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">En fin de code, alert(score)</div>
                            </li>
                        <li className="ListItem">
                            <div className="Slide">Correction bonus - 8</div>
                            <div className="Item">- On va afficher un message différent au singulier ou au pluriel</div>
                            <div className="Question">On va utilisr une ... ?</div>
                            <div className="Item">- SI score supérieur à 1 ALORS afficher avec s SINON afficher sans s</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">var message = ""</div>
                            <div className="Item">{`if (score > 1) message = pluriel`}</div>
                            <div className="Item">else message = singulier</div>
                            <div className="Item">alert(message);</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Dans ce challenge on a révisé les variables, les conditions et les comparaisons</div>
                            <div className="Item">On a découvert comment transformer une string en number</div>
                            <div className="Item">On a aussi vu 3 façon d'incrémenter une variable : oldValue+1, value += 1; value++</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Le code fonctionne, c'est le but 1er c'est super !</div>
                            <div className="Item">Est-ce que vous remarquez qu'entre question 1 et question2 le code se ressemble vachement ?</div>
                            <div className="Item">Nous les devs, on n'aime pas se répéter</div>
                            <div className="Item">Faudrait pouvoir prendre ce bout de code similaire et le stocker ailleurs pour réutilisation</div>
                            <div className="Item">JS nous aime, il a encore pensé à nous : c'est le rôle des fonctions</div>
                        </li>
                    </ul>
                </Card>
                <Card title="Intro fonctions">
                    <div className="Doc">Slides : http://localhost:1234/s2/e2/fonction</div>
                    <ul className="List">
                        <li className="ListItem">
                            <div className="Slide">Intro</div>
                            <div className="Item">- On va utiliser des fonctions pour factoriser le code</div>
                            <div className="Item">- On évite au maximum de se répéter :</div>
                            <div className="SubItem">* le code est plus propre, plus agréable à lire</div>
                            <div className="SubItem">* en cas de modif, on ne change qu'à un seul endroit</div>
                            <div className="Item">- Imaginez un déménagement, quest-ce qu'il vaut mieux : 15 voitures qui se suivent ou un gros camion</div>
                            <div className="Item">- Si camion change de route, pas grave, 15 bagnoles, plus dur, vaut mieux factoriser les ressources</div>
                            <div className="Item">- La fonction fait ça avec les instructions</div>
                            <div className="Item">- Liste d'instructions qu'on va exécuter en appelant la fonction</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Point de départ</div>
                            <div className="Item">- prog met un message = "bonjour"</div>
                            <div className="Item">- demande prénom et l'ajoute (concat avec +=)</div>
                            <div className="Item">- on a vu +=, marche avec numbers, marche aussi avec strings</div>
                            <div className="Item">- pareil avec nom et age</div>
                            <div className="Item">- affiche le message</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Bon pour tout le monde ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">DRY</div>
                            <div className="Item">- Nous les devs, on n'aime pas se répéter</div>
                            <div className="Item">- Je le redirai souvent, c'est une bonne pratique de prog</div>
                            <div className="Item">- Effectivement, copier/coller peut marcher mais code fouilli</div>
                            <div className="Item">- Pour modifier, penser à tous les endroits où on a copié</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Comment stocker les instructions ?</div>
                            <div className="Item">- L'idée : pouvoir assigner des instructions à une variable</div>
                            <div className="Item">- Pas possible comme ça, faut qu'on trouve autre chose</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Les fonctions</div>
                            <div className="Item">- JS nous a à la bonne, c'est le rôle des fonctions</div>
                            <div className="Item">- Stocker des instructions qu'on exécutera toutes d'un coup en appelant la fonction</div>
                            <div className="Item">- Comment on fait ça ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Déclaration</div>
                            <div className="Item">- Comme une variable, il faut déclarer une fonction</div>
                            <div className="Item">- Plusieurs façons de faire en JS :</div>
                            <div className="Item">- Classique : mot-clé function, nom, parenthèses accolades</div>
                            <div className="Item">- Entre accolades, on place les instructions</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Décortique</div>
                            <div className="Item">- Je répète : mot-clé function, nom, parenthèses accolades</div>
                            <div className="Item">- C'est la déclaration</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Exécuter</div>
                            <div className="Item">- Appeler/exécuter la fonction !== déclarer</div>
                            <div className="Item">- On va exécuter toutes les instructions entre accolades</div>
                            <div className="Item">- On utilise le nom + ()</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Recap</div>
                            <div className="Item">- On déclare avec function + nom + ...</div>
                            <div className="Item">- On exécute avec nom + ()</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Fonction presentation</div>
                            <div className="Item">- On a déplacé toutes nos instructions entre les accolades de fonction presentation</div>
                            <div className="Item">- C'est la déclaration, aucun code n'est exécuté</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Exécution</div>
                            <div className="Item">- On appelle fonction presentation avec ()</div>
                            <div className="Item">- Pour l'exécuter 2 fois, il suffit de l'appeler 2 fois</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Fonction : paquet d'instructions, plus propre, plus simple à maintenir</div>
                            <div className="Item">{`Déclarer une fonction : function nom () {}`}</div>
                            <div className="Item">Appeler/exécuter une fonction: nom + ()</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">C'est déjà chouette mais on peut faire bien plus</div>
                            <div className="Item">Pour code souple et réutilisable, on va le configurer, le rendre adaptable</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Paramètres</div>
                            <div className="Item">- Ca va être le rôle des paramètres</div>
                            <div className="Item">- Le comportement du code sera différent selon les paramètres reçus</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Fonction simple</div>
                            <div className="Item">- Dans fonction, variable message qui vaut Bonjour</div>
                            <div className="Item">- on alert message concaténé à !!</div>
                            <div className="Item">- Si on veut dire autre chose que bonjour ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Paramètre message</div>
                            <div className="Item">- On ne va plus déclarer message dans la fonction avec du code en dur</div>
                            <div className="Item">- On définit un paramètre message entre les parenthèses</div>
                            <div className="Item">- Paramètre va agir comme une variable dans la fonction</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Argument message</div>
                            <div className="Item">- A l'appel, on passe la valeur de message qu'on souhaite</div>
                            <div className="Item">- Au lieu de Bonjour!!, on aura Hello!!</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Recap</div>
                            <div className="Item">- Dans la déclaration, on définit un paramètre entre les parenthèse</div>
                            <div className="Item">- A l'exécution, on passe un argument entre les parenthèses</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Code final</div>
                            <div className="Item">- On déclare presentation avec un paramètre message</div>
                            <div className="Item">- On peut l'exécuter plein de fois avec des arguments différents</div>
                            <div className="Item">- Le message affiché sera différent, il a été configuré</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Point de détail</div>
                            <div className="Item">- Je vous ai dit : plusieurs façons de déclarer une fonction</div>
                            <div className="Item">- une autre façon qu'on verra assez souvent : var nom = function parenthèses</div>
                            <div className="Item">- Fonction est dite anonyme</div>
                            <div className="Item">- Petites subtilités dans l'utilisation mais on en reparlera plus tard</div>
                            <div className="Item">- Utilisez celle que vous préférez</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Tout le monde est là ?</div>
                            <div className="Item">Y en a qui pleurent ou pas ? Faut me le dire !</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">On a vu comment déclarer avec function nom() et appeler une fonction</div>
                            <div className="Item">Comment la configurer avec paramètres pour code plus souple et l'appeler avec arguments</div>
                            <div className="Item">2ème façon de déclarer avec var nom = function()</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Pratiquons avec code du challenge</div>
                            <div className="Item">On va le rendre beau, propre, réutilisable</div>
                        </li>
                    </ul>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E02;