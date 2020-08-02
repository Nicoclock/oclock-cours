import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import {day3 as snippets} from "./Code/snippets";

import "../../style.scss"

const S5E03 = () => {
    let snippet = 0;
    return (
        <Fragment>
            <div className="Title">Architecture</div>
            <div className="Inner">
                <Card title="Correction">
                    <List>
                        <Recap>
                            <BoxItem text="Limites des objects littéraux" />
                            <BoxItem text="Design pattern Factory, début de solution" />
                            <BoxItem text="Solution plus efficace, standard : les classes" />
                            <BoxItem text="Déclaration, propriétés, méthodes, getters et setters" />
                            <BoxItem text="Héritage et propriétés statiques" />
                        </Recap>
                        <Control>
                            <Sondage question="Vous voulez revenir sur quelque chose avant la correction ?" reponses={['yes please', 'non, ça va']} />
                        </Control>
                        <ListItem title="Le début du commencement" />                        
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Du code classe" />                        
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Do not repeat yourself" />                        
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Getters et setters" />                        
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Sondage question="Il vous reste des trucs pas clairs ?" reponses={['oui, plein !', "ça s'éclaircit", 'nope']} />
                    </List>
                </Card>
                <Card title="Architecture">
                    <List>
                        <ListItem title="Organiser son code">
                            <Item text="Reparlons un peu d'orga du code" />
                            <Item text="Selon le projet, on peut organiser le code de plusieurs façons" />
                            <Item text="On va parler d'architecture de l'application" />
                        </ListItem>
                        <Doc type="Slides" url="http://localhost:1234/s5/archi" />
                        <ListItem title="Intro">
                            <Item text="Qu'est-ce que ça mange le matin ?" />
                            <Item text="Qu'est-ce qu'on entend par architecture ?" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Juste un nom qui décrit une façon d'organiser le code" />
                        <Click dir="right" />
                        <ListItem title="On va voir ensemble un peu ce qui existe" />
                        <Click dir="right" />
                        <ListItem title="MVC">
                            <Item text="Une des plus répandue" />
                            <Item text="On sépare le code en 3 grandes familles : les modèles, les vues et un contrôleur qui orchestre le tout" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="C'est déjà ce qu'on fait ...">
                            <Item text="un dossier views et un dossier models, ça vous parle ?" />
                            <Item text="On n'a pas encore tout raccordé mais on est su la bonne voie !" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Model">
                            <Item text="On a commencé à le faire avec le challenge" />
                            <Item text="Il nous reste à raccorder nos modèles à la base, on va voir comment" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Vue">
                            <Item text="Jusqu'à maintenant, c'est le boulot de nos vues EJS" />
                            <Item text="On leur passe des infos, elles en gèrent l'affichage" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Contrôleur">
                            <Item text="un peu le nerf de la guerre, le chef d'orchestre de l'appli" />
                            <SubItem text="Il reçoit les requêtes"/>
                            <SubItem text="interroge les models pour récupérer (GET) ou sauvegarder(POST) des données" />
                            <SubItem text="renvoie une réponse souvent sous forme de vue" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Avantages" />
                        <Click dir="bottom" />
                        <ListItem title="SOC">
                            <Item text="On a vraiment chaque bout de code rangé à sa place" />
                            <Item text="Architecture claire, on sait vite où retrouver les infos" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="DRY">
                            <Item text="Selon la requête, on peut réutiliser un model ou une view" />
                            <Item text="Evite au maximum les répétitions" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Modularité">
                            <Item text="Changement d'affichage" />
                            <Item text="Ajout d'un règle métier" />
                            <Item text="les plupart des modifs ne se font qu'à un seul endroit" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="SOA">
                            <Item text="Egalement très utilisé" />
                            <Item text="Mini-serveurs qu'on peut consulter pour obtenir une info précise" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Autonome">
                            <Item text="Découplage fort, besoin de rien d'autre pour fonctionner" />
                            <Item text="Se suffit à lui-même" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Exemple du cockpit" />
                        <Click dir="right" />
                        <ListItem title="Autres patterns" />
                        <Click dir="right" />
                        <ListItem title="Liaison avec BDD" />
                        <Click dir="bottom" />
                        <ListItem title="Les 2 sont ok avec MVC" />
                        <Click dir="bottom" />
                        <ListItem title="DataMapper" />
                        <Click dir="bottom" />
                        <ListItem title="Avantages/Inconvénients" />
                        <Click dir="bottom" />
                        <ListItem title="Exemple" />
                        <Click dir="bottom" />
                        <ListItem title="Active Record" />
                        <Click dir="bottom" />
                        <ListItem title="Avantages/Inconvénients" />
                        <Click dir="bottom" />
                        <ListItem title="Exemple" />
                        <Click dir="bottom" />
                        <ListItem title="Exemple de comparaison" />
                        <Click dir="right" />
                    </List>
                </Card>
                <Card title="Active Record">
                    <List>
                        <ListItem title="A l'attaque">
                            <Item text="Alors le programme des réjouissances :" />
                            <SubItem text="Setup du projet" />
                            <SubItem text="Module de connexion à la base" />
                            <SubItem text="On va bosser sur une classe simple : Level" />
                            <SubItem text="Tit rappel de l'utilisation d'un data mapper" />
                            <SubItem text="Fonctions active record" />
                        </ListItem>
                        <ListItem text="Avertissement">
                            <Item text="Ca va peut-être piquer un peu ... : on va démonter notre vieille voiture pour examiner les pièces" />
                            <Item text="Important d'avoir une idée de ce qui se passe sous le capot" />
                            <Item text="Quand on aura bien tout démonté, on file à la concession s'acheter une porsche, promis !" />
                        </ListItem>
                        <ListItem title="Setup">
                            <Item text="npm init" />
                            <Item text="npm install dotenv pg" />
                            <Item text=".gitignore" />
                            <Item text=".env avec PG_URL=postgresql://oquiz:oquiz@localhost/oquiz" />
                        </ListItem>
                        <ListItem title="Module de connexion">
                            <Item text="Dans ce module, on va mettre en place la connexion à la base" />
                            <Item text="On va instancier un client pg, le connecter et le placer dans l'export" />
                            <Item text="Dans nos modèles, on n'aura plus qu'à l'importer avec require, il sera prêt à l'emploi" />
                            <Item text="Comme un plat préparé, y a plus qu'à réchauffer ..." />
                            <Item text="On crée un fichier database.js dans le dossier app" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Rappel DataMapper">
                            <Item text="On va d'abord se faire une version DataMapper" />
                            <Item text="Module qui va gérer toutes les requêtes vers la BDD" />
                            <Item text="On va appeler ses méthodes pour obtenir/enregistrer des infos" />
                            <Item text="Cette fois, au lieu de retourner des rows brutes, des raw rows, on va retourner des instances de nos modèles" />
                            <Item text="On les a codés pour qu'il prennent un object en paramètre de leur constructeur" />
                            <Item text="L'object qu'on va leur passer, ce sera un object row de la BDD" />
                            <Item text="On a fait matcher le nom des propriétés et le nom des champs" />
                            <Item text="Dans le coup, JS saura faire l'association entre la row de la BDD et les props de nos modèles" />
                            <Item text="Dans app, on crée un fichier DataMapper.js" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Définition des méthodes">
                            <Item text="On va définir 2 méthodes :" />
                            <SubItem text="une pour récupérer tous les niveaux" />
                            <SubItem text="une pour récupérer un niveau à partir de son id" />
                            <Item text="A partir des infos de la base, on va créer des instances de Level" />
                            <Item text="On passera ces instances en résultat plutôt que les rows directement" />
                            <Item text="On va décorer nos rows, une tite couche de peinture pour les rendre plus jolies" />
                            <Item text="On leur donne un côté prêt à l'emploi, les modèles sont fait pour manipuler les infos plus facilement" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Premier test">
                            <Item text="On a codé la première méthode du DataMapper" />
                            <Item text="Avant de continuer, on va faire un premier test pour être sûr que tout est relié correctement" />
                            <Item text="On crée un fichier test.js à la racine du projet" />
                            <Item text="On va s'en servir pour simuler un controleur de l'appli" />
                            <Item text="On va y importer le DataMapper et essayer de récupérer tous les niveaux de notre appli" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem text="A vous maintenant">
                            <Item text="On va créer la méthode pour récupérer un seul niveau" />
                            <Item text="On la déclare ensemble, je vous laisse la coder" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Why les modèles ?">
                            <Item text="Pourquoi on se casse la tête à faire des instances ? C'est quoi l'avantage ?" />
                            <Item text="On va pouvoir utiliser des méthodes de ces instances" />
                            <Item text="Au lieu de recevoir le kit ikéa, on reçoit le meuble déjà construit, prêt à l'emploi" />
                            <Item text="Si on ajoute une méthode toString à Level, on pourra l'utiliser dans test.js" />
                            <Item text="Les rows de la BDD ne permettent pas ça" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On modifie test.js pour utiliser ce toString dans le console.log" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="On a bien accès aux méthodes de Level, c'est tout l'intérêt de faire des instances dans le DataMapper" />
                        </Recap>
                        <Control>
                            <BoxItem text="Il vous reste des questions sur le DataMapper ?" />
                        </Control>
                        <Transition>
                            <BoxItem text="Voilà pour le rappel du DataMapper" />
                            <BoxItem text="Maintenant on va voir comment se construit un Active Record" />
                        </Transition>
                        <ListItem title="Active Record">
                            <Item text="Principe : on va placer les méthodes d'accès à la base directement dans nos modèles" />
                            <Item text="Au lieu de centraliser les requêtes, chaque modèle va avoir des méthodes" />
                            <Item text="Un tit côté chacun à sa place, on mélange pas les torchons et les serviettes, les niveaux et les quiz" />
                            <Item text="C'est plus de l'organisation du code qu'un nouveau concept : chaque modèle sera plus indépendant" />
                            <Item text="On continue sur Level : on va déplacer la méthode getAllLevels dedans, rename en findAll" />
                            <Item text="Dans le coup, il faut importer le client pg dans Level" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Méthode d'instance ?">
                            <Item text="Là, getAllLevels est une méthode d'instance" />
                            <Item text="Il faut qu'on ait fait un new Level pour y avoir accès" />
                            <Item text="Mais cette une méthode qui est justement chargée de créer les instances" />
                            <Item text="C'est un peu comme demander au haricot vert de créer sa boite de conserve" />
                            <Item text="Faudrait plutôt rattacher la méthode à la class ..." />
                            <Question text="Une idée de comment faire ça ?" />
                            <Item text="Comme une propriété, on peut rendre une méthode statique" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Appel dans test">
                            <Item text="On est ready, modifions test.js pour utiliser cette méthode" />
                            <Item text="On doit bien-sûr commencer par import notre modèle" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="findOne">
                            <Item text="On va faire la même chose pour getOneLevel" />
                            <Item text="Vous vous sentez de la faire ou on le fait ensemble ?" />
                        </ListItem>
                        <Sondage question="Coder la méthode findOne dans Level ?" reponses={["yes, j'essaie", "heu ... c'est un peu tôt"]} />
                        <ListItem title="Correction">
                            <Item text="On commence par copier le code de getOneLevel dans Level" />
                            <Item text="On la renomme en findOne" />
                            <Item text="Cette méthode crée aussi une instance, on n'oublie pas de la passer en statique" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Appel dans test">
                            <Item text="Comme pour findAll, on modifie l'appel dans test.js pour utiliser notre nouvelle méthode" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Méthodes d'instance">
                            <Item text="Voilà pour les méthodes statiques de lecture en base qui créent des instances" />
                            <Item text="On continue le CRUD (Create, Read, Update, Delete)" />
                            <Item text="On a fait le R, faisons maintenant le C, l'insertion en base" />
                            <Item text="Pour cette méthode là, on part d'une instance qu'on aura créé avant, pas besoin de static" />
                            <Item text="Dans Level, on crée une méthode insert et on va ui-tiliser this pour accéder aux propriétés" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Correction CoreModel">
                            <Item text="On a une erreur lors du test" />
                            <Item text="On a codé CoreModel de façon un peu trop stricte" />
                            <Item text="En utilisant le setter id dans le constructeur, on est obligé de passer un id" />
                            <Item text="C'est trop rigide, ça nous permet pas de faire un insert" />
                            <Item text="La base va créer l'id toute seule de toute façon" />
                            <Item text="On assouplit CoreModel en mettant this._id dans le constructeur" />
                            <Item text="On ne passe plus par le setter, plus de test d'intégrité" />
                            <Item text="_id prendra la valeur undefined en attendant la réponse de la base" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Update">
                            <Item text="Cette fois on est bon, on pas passer au U du CRUD" />
                            <Item text="De la même façon, pour mettre à jour on va partir d'une instance existante" />
                            <Item text="Ce sera une méthode d'instance avec du this pour accéder aux propriétés" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Delete">
                            <Item text="Il ne reste plus que le D du crud" />
                            <Item text="Ce sera aussi une méthode d'instance" />
                            <Item text="Vous essayez de la faire ?" />
                        </ListItem>
                        <Sondage question="Coder la méthode delete dans Level ?" reponses={["yes, j'essaie", "heu ... non"]} />
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>



                        <Recap>
                            <BoxItem text="Alors, vous le vivez comment cet Active Record ?" />
                            <BoxItem text="C'est vraiment du rangement, on organise le code un peu différemment" />
                            <BoxItem text="Ca rend nos modèles plus indépendants du reste de l'appli" />
                            <BoxItem text="Encore une fois, on démonte la voiture là, on regarde ce qui se passe sous le capot" />
                            <BoxItem text="On continue encore un peu demain et après on va chercher notre porsche, promis !" />
                        </Recap>
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S5E03;