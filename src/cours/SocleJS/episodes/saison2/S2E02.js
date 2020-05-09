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
                            <div className="Item">après alert("Gagné !"), score = score + 1;</div>
                            <div className="Item">En fin de code, alert(score)</div>
                            <div className="Item">Gestion du s de bonne(s) réponse(s) avec un if ?</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Dans ce challenge on a révisé les variables, les conditions et les comparaisons</div>
                            <div className="Item">On a découvert comment transformer une string en number</div>
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
            </div>
        </Fragment>
    );
}

export default S2E02;