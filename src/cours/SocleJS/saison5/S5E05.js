import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import {day5 as snippets} from "./Code/snippets";

import "../../style.scss"

const S5E05 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };

    return (
        <Fragment>
            <div className="Title">Sequelize</div>
            <div className="Inner">
                <Card title="Correction" duration="1:00:00">
                    <List>
                        <Recap>
                            <BoxItem text="Factorisation des méthodes CRUD dans le CoreModel" />
                            <BoxItem text="Tous les modèles héritent de cette classe" />
                            <BoxItem text="Ils ont tous leur accès CRUD sans une ligne de code en plus" />
                        </Recap>
                        <Sondage question="Et ce challenge alors ?" reponses={["tests ok", "tests et findBy ok", "tests et save ok", "test, findBy et save ok"]} />
                        <ListItem title="Tests">
                            <Item text="On commence par les tests dans test.js" />
                            <Item text="On importe les modèles qu'on veut tester : " />
                            <SubItem text="On a déjà Level" />
                            <SubItem text="Il faut ajouter User et Question" />
                            <Item text="On va voir un truc pratique : index.js dans le dossier models" />
                            <Item text="Au lieu d'importer tous les modèles, on va se faire un fichier catalogue" />
                            <Item text="Dans ce module, on va importer tous les modèles et les exporter dans un seul object" />
                            <Item text="Dans test.js, on va faire un require sur ce fichier catalogue" />
                            <Item text="Ca va nous permettre d'importer tous les modèles dont on a besoin en une seule ligne" />
                            <Item text="On peut appeler ce fichier catalogue comme on veut mais par convention : index.js" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Import en une seule ligne">
                            <Item text="On utilise maintenant ce catalogue dans test.js pour nos imports" />
                            <Item text="On ne va récupérer qu'une partie de l'object global" />
                            <Item text="on utilise les {} pour extraire des éléments de l'object global" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="All users">
                            <Item text="On est opé, on a tous nos modèles, on peut commencer à taffer" />
                            <Item text="Tous les utilisateurs : quelle méthode on doit utiliser ?" />
                            <Item text="On a findAll qui fera le job pour nous" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Question d'id 3">
                            <Item text="Quelle méthode on doit utiliser ici ?" />
                            <Item text="findOne en lui passant l'id en plus du callback" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Nouveau level 'très difficile">
                            <Item text="Cette fois, un peu différent, pas de méthode statique" />
                            <Item text="On crée une instance JS de Level" />
                            <Item text="On utilise sa méthode d'instance insert qui va créer l'enregistrement et compléter notre instance avec le nouvel id" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="findBy">
                            <Item text="Un peu plus chaud ça ..." />
                            <Item text="Au niveau SQL, ça va être quoi comme requête ?" />
                            <Item text="SELECT * FROM xxx WHERE ..." />
                            <Item text="Dans CoreModel, on va encore avoir besoin d'une boucle sur les props de params" />
                            <Item text="On va utiliser un tableau wheres pour stocker les critères" />
                            <Item text="On l'intègrera à la requête avec un join, comme on a déjà fait" />
                            <Item text="Question à mille balles : méthode statique ou méthode d'instance ?" />
                            <Item text="La vraie question : la méthode doit créer des instances ou pas ?" />
                            <Item text="C'est le R du CRUD, on lit des infos en base" />
                            <Item text="il faudra créer des instances JS à partir cde ces infos : méthode statique" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Essai dans test.js" />
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Gardons à l'esprit que pour JS, une requête SQL c'est une string" />
                            <BoxItem text="On s'écrit une 'vraie' requête et on essaie d'extraire les éléments qui peuvent varier" />
                            <BoxItem text="Un peu le même raisonnement que pour la factorisation en fait" />
                            <BoxItem text="Pas complet mais c'est un bon début pour une recherche multi-critères" />
                        </Recap>
                        <Sondage question="La méthode findBy ?" reponses={["ouais c'est clair", "humpf ... à relire tranquille", "Student.findBy({state: 'largué'})"]} />
                        <ListItem title="save">
                            <Item text="Petite dernière pour la route : méthode save" />
                            <Item text="Elle doit checker si un enregistrement existe" />
                            <Item text="S'il existe, update, sinon, insert" />
                            <Item text="Question classique, toujours à mille balles : méthode statique ou méthode d'instance ?" />
                            <Item text="On va devoir utiliser insert ou update : méthodes d'instance" />
                            <Item text="la classe n'a pas accès à ces méthodes, forcément méthode d'instance dans le coup" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="L'était pas trop violente celle-là, si ?" />
                            <BoxItem text="On finit avec une 'tite note de fastoche, enfin, de moins dur en tout cas !" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Bon la bonne nouvelle du jour : on a fini de démonter notre vieille bagnole" />
                            <BoxItem text="On a bien taffé, on a pigé en gros ce qui se passe sous la capot" />
                            <BoxItem text="Comme promis, étape suivante : on va chercher la porsche en concession" />
                            <BoxItem text="Y a des briques logicielles qui vont pouvoir gérer plein de choses pour nous" />
                            <BoxItem text="Fini de coder les requêtes à la mano, on passe au cran supérieur : les ORM" />
                        </Transition>
                    </List>
                </Card>
                <Card title="ORM">
                    <List>
                        <Doc type="Slides" url="http://localhost:1234/s5/orm" />
                        <ListItem title="ORM">
                            <Item text="Question classique, kesako ? ça mange quoi le matin ?" />
                            <Item text="C'est notre voiture neuve qui sent bon le cuir et tout !" />
                            <Item text="C'est en fait une couche supplémentaire qu'on va intégrer à notre app" />
                            <Item text="Elle va venir se placer entre nos modèles et la BDD pour nous faciliter la vie" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Exemple slide" />
                        <Click dir="right" />
                        <ListItem title="Kesako">
                            <Item text="Couche supplémentaire dans notre appli" />
                            <Item text="Selon le package choisi, utilise en interne un Data Mapper ou un Active Record" />
                            <Item text="Ribambelles de devs qui ont optimisé le truc" />
                            <Item text="Forcément mieux fait et plus efficace que ce qu'on peut faire tout seul dans notre coin" />
                        </ListItem>
                        <Click dir="right x 2" />
                        <ListItem title="Intègre une sorte de CoreModel pour créer les modèles plus vite" />
                        <Click dir="right" />
                        <ListItem ttitle="Eventuellement, peut créer la table en BDD à partir du modèle défini" />
                        <Click dir="right" />
                        <ListItem title="Switch rapide entre des bases SQL, très peu de code à modifier" />
                        <Click dir="right" />
                        <ListItem title="Va gérer pour nous l'intégrité des données (ex : email)" />
                        <Click dir="right" />
                        <ListItem title="Système assez poussé de transactions, interactions plus sécurisées avec la BDD" />
                        <Click dir="right" />
                        <ListItem title="Equivalent du RAID sur les disques durs" />
                        <Click dir="right" />
                        <ListItem title="Quelqu'un peut faire un roulement de tambour ?" />
                        <Click dir="right" />
                        <ListItem title="Notre requête compliquée de début de slide ... même pas mal pour un ORM" />
                        <Click dir="right" />
                        <Recap>
                            <BoxItem text="Notre prosche s'appelle Sequelize, allons faire connaissance" />
                            <BoxItem text="C'est un nouveau package, va falloir s'y habituer" />
                            <BoxItem text="Ca va peut-être piquer un peu au début, comme quand on découvre une nouvelle voiture" />
                            <BoxItem text="Mais ils sont où les clignotants ??" />
                            <BoxItem text="On va se faire des bouts de code dans test.js, vous aurez des exemples" />
                            <BoxItem text="La doc est très bien faire, plein d'exemples aussi" />
                            <BoxItem text="Allez go, contact et on passe la première" />
                        </Recap>
                    </List>
                </Card>
                <Card title="Sequelize">
                    <List>
                        <Doc type="Ressource" url="https://sequelize.org/master/manual/getting-started.html" />
                        <ListItem title="Install">
                            <Item text="Premier boulot, un tit tour sur la doc" />
                            <Item text="Sur la page on a les instructions d'installation, classique" />
                            <Item text="On a aussi un exemple pour créer un client" />
                            <Item text="En plus, un exemple avec pg, notre variable d'env PG_URL va resservir, trop cool" />
                            <Item text="Allez go, on se l'installe : npm install sequelize" />
                            <Item text="On s'occupe pas de la partie driver, on a déjà installé pg, on est opé" />
                            <Item text="Scroll to Changing the default model options pour timestamps" />
                        </ListItem>
                        <ListItem title="config">
                            <Item text="On va modifier le fichier database.js pour utiliser sequelize" />
                            <Item text="On suit la doc : on commence par importer la class Sequelize du package" />
                            <Item text="On l'instancie avec la variable PG_URL en paramètre" />
                            <Item text="La connexion à la base se fait automatiquement, on n'a plus qu'à exporter notre nouveau client" />
                        </ListItem>
                        <Demo type="repo Code">
                            {console.log(resetSnippet())}
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://sequelize.org/master/manual/model-basics.html" />
                        <ListItem title="Uilisation Model">
                            <Item text="On va reprendre notre classe de prédilectino pour les tests : Level" />
                            <Item text="On va utiliser sequelize pour gérer ce modèle" />
                            <Item text="Coup d'oeil dans la doc : on va étendre la classe Model de sequelize" />
                            <Item text="Plus besoin de props, de getters/setters" />
                            <Item text="On hérite d'une méthode statique init qui va centraliser toutes les infos" />
                            <SubItem text="un premier object qui va lister les champs et indiquer leur type" />
                            <SubItem text="un second object qui va gérer les infos de connexion" />
                            <Item text="On se lance ? Prêts pour un tour en porsche ?" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Let's play !">
                            <Item text="La class Model de sequelize a une tripotée de méthodes à dispo" />
                            <Item text="On va retrouver, entre autre, un équivalent pour toutes les méthodes définies dans CoreModel" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Autres modèles">
                            <Item text="Bon on a un modèle Level tout sequelizé" />
                            <Item text="On va rapidement modifier les autres modèles" />
                            <Item text="Puis on va mettre en place les relations, comme dans le MCD" />
                            <Item text="Grâce à ça, Sequelize saura gérer des requêtes complexes et relier les tables entre elles" />
                            <Item text="On va le voir mais ce sera super pratique pour nous" />
                            <Item text="D'abord, on modifie les modèles" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Relations">
                            <Item text="Nos modèles sont carrément moins fat, c'est good" />
                            <Item text="Faut mettre en place les relations modélisées dans le MCD" />
                            <Item text="Je vous cache pas : c'est là que ça va piquer un peu ... On s'accroche !" />
                            <Item text="On va étudier de nouveau les cardinalités max et utiliser des méthodes de Model" />
                            <Item text="Quand on aura fait ça, Sequelize pourra faire les joins" />
                            <Item text="Il pourra renvoyer des résultats plus complets impliquant plusieurs tables" />
                            <Item text="On pourrait mettre ces relations dans les fichiers modèles" />
                            <Item text="Dans notre cas ça va poser des problèmes, on va les mettre dans models/index.js" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Premier test pour voir ce que ça donne" />
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Avantages">
                            <Item text="Vous avez vous ce qu'on obtient avec une 'tite relation et une malheureuse propriété en plus ?" />
                            <Item text="On va gagner un temps monstre !!" />
                            <Item text="Ca vaut le coup de se prendre un peu la tête ou pas ?" />
                            <Item text="Si si, ça vaut le coup, on y retourne !" />
                            <Item text="En regardant le 1er exemple, vous essayez de faire la relation Quiz Question ?" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Relations 1,n">
                            <Item text="On a encore d'autres relations du même type :" />
                            <SubItem text="Entre question et niveau" />
                            <SubItem text="Entre question et réponse" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Autres relations">
                            <Item text="Il nous reste plus que 2 relations à faire :" />
                            <SubItem text="Entre quiz et thème (n,n)" />
                            <SubItem text="Entre question et réponse pour la bonne réponse (1,1)" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <ListItem title="Derniers test" />
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.sequelize[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Arf, moi je suis crevé !" />
                            <BoxItem text="Cette nouvelle bagnole, pas si facile à prendre en main finalement" />
                            <BoxItem text="Heureusement, pas de challenge ce soir !" />
                            <BoxItem text="Vous allez pouvoir relire ça tranquillement" />
                            <BoxItem text="Ce qu'il faut retenir surtout :" />
                            <SubItem text="Relation 1,n => belongsTo/hasMany" />
                            <SubItem text="Relation 1,1 => belongsTo sans contrepartie" />
                            <SubItem text="Relation n,n => belongsToMany/belongsToMany" />
                            <SubItem text="Include pour ajouter des propriétés au résultat d'une requête" />
                            <SubItem text="Peut contenir une string, un object ou un tableau" />
                            <SubItem text="Grâce à l'object, on peut faire un include dans un include, dans un include, ..." />
                        </Recap>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S5E05;