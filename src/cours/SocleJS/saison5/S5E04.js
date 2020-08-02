import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Control, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import {day4 as snippets} from "./Code/snippets";

import "../../style.scss"

const S5E04 = () => {
    let snippet = 0;
    return (
        <Fragment>
            <div className="Title">Active Record, 2ème partie</div>
            <div className="Inner">
                <Card title="Correction">
                    <List>
                        <Recap>
                            <BoxItem text="Rappel de la solution DataMapper qui centralise toutes les requêtes" />
                            <BoxItem text="Découverte Active Record : chaque class gère sa propre logique de CRUD" />
                            <BoxItem text="Méthodes statiques quand on doit créer des instances à partir d'enregistrements BDD" />
                            <BoxItem text="Méthodes d'instance quand on part d'une instance JS pour modifier la BDD" />
                        </Recap>
                        <Doc type="Schéma" url="http://localhost:1235/E04/dataMapper.jpg" />
                        <Doc type="Schéma" url="http://localhost:1235/E04/activeRecord.jpg" />
                        <Sondage question="Alors ce challenge ?" reponses={["ça a été", "un peu galère mais bon ...", "vraiment difficile !"]} />
                        <ListItem titile="A l'attaque">
                            <Item text="On devait donc coder les méthodes Active Record de la class User" />
                            <Item text="Le but était comme pour Level de gérer les accès CRUD directement depuis la class" />
                            <Item text="Commençons par le findAll" />
                            <Item text="D'abord, faut importer notre client pg dans la class User" />
                            <Item text="Ensuite on peut reprendre le findAll de Level et le modifier" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="findOne">
                            <Item text="Faisons pareil pour findOne" />
                            <Item text="On récupère le code dans Level, on le met dans User et on le modifie" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="insert">
                            <Item text="Voilà pour les méthodes statiques, on passe aux méthodes d'instance" />
                            <Item text="On copie le code de insert depuis Level vers User" />
                            <Item text="Attention là, y a plus de modifs à faire !" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="update">
                            <Item text="Même combat, on reprend le code dans Level et on adapte" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="delete">
                            <Item text="Et enfin, le delete, même méthode" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Comment ça va jusque là ?" />
                            <BoxItem text="Vous pourriez le refaire pour un autre modèle ?" />
                        </Control>
                        <Sondage question="Refaire la manip pour un autre modèle ?" 
                            reponses={['yes yes', 'je devrais m\'en tirer', 'je peux pas j\'ai piscine']} />
                        <Transition>
                            <BoxItem text="Rassurez-vous, on va pas se taper tous les modèles" />
                            <BoxItem text="Mais on va pas chômer !" />
                            <BoxItem text="Si on regarde bien, les requêtes AR de Level et User se ressemblent vachement" />
                            <BoxItem text="On a fait des copier/coller et changer 2 3 bricoles" />
                            <BoxItem text="Et qu'est-ce qu'on fait que le code se ressemble vachement ?" />
                            <BoxItem text="On factorise ! on va essayer de placer toutes ces méthodes dans le CoreModel" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Factorisation">
                    <List>
                        <ListItem title="CoreModel">
                            <Item text="On commence par importer le client pg dans CoreModel" />
                            <Item text="Regardons un peu les 2 méthodes findAll" />
                            <Item text="Est-ce que vous poouvez me dire ce qui diffère entre les 2 ?" />
                            <SubItem text="Nom de la table" />
                            <SubItem text="Nom de la class" />
                            <Item text="Réflichissons, coment on peut accéder à ces infos dans CoreModel ?" />
                        </ListItem>
                        <Doc type="Schéma" url="http://localhost:1235/E04/this.jpg" />
                        <ListItem title="Nom de la table">
                            <Item text="findAll est une méthode statique" />
                            <Item text="Est-ce qu'on peut stocker la prop dans une prop d'instance ?" />
                            <Item text="Dans une méthode statique, pas d'accès aux props d'instance" />
                            <Item text="On va passer par un prop statique" />
                            <Item text="on la déclare dans CoreModel, on la surcharge dans chaque modèle" />
                            <Item text="Les classes filles héritent des méthodes et des props de la classe mère, même les statiques !" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Nom de la classe">
                            <Item text="Il faut qu'on remplace new User et new Level par quelque chose de plus générique" />
                            <Item text="On doit avoir accès à la class ici, des idées ?" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="findOne">
                            <Item text="Ok, on peut déjà virer findAll de Level et User, ça fait partie de l'héritage" />
                            <Item text="Sur le même principe, on va pouvoir migrer la méthode findOne dans CoreModel" />
                            <Item text="je vous laisse essayer ?" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title='insert'>
                            <Item text="Maintenant, on va passer aux méthodes d'instance" />
                            <Item text="je copie déjà un insert dans le CoreModel, regardons ce qui va nous poser problème" />
                            <Item text="Cette fois this pointera vers l'instance en cours et non vers la classe" />
                            <Item text="Pour accéder à la prop tableName, il faudrait pouvoir écrire NomClasse.tableName" />
                            <Item text="Seulement voilà, dans CoreModel on n'a pas le nom de la classe ..." />
                            <Item text="This va nous sauver la mise sur ce coup là encore" />
                            <Item text="Toute instance de classe a une propriété qui pointe vers sa class : constructor" />
                            <Item text="En écrivant this.constructor.<nom_prop>, on accède aux props statiques de la class" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="Fields">
                            <Item text="1er problème réglé !" />
                            <Item text="Un autre truc qui va changer d'un modèle à l'autre : les champs à insérer" />
                            <Item text="Comment on va pouvoir récupérer les propriétés de notre instance et leur valeur ?" />
                            <Item text="On va parcourir notre object this avec un for ... in, ça nous donnera le nom des props" />
                            <Item text="Dans la boucle, on va zapper l'id, il sera ajouté par la BDD à l'insertion" />
                            <Item text="Attention, on a protégé nos props avec un _, faut bien penser à l'enlever !" />
                            <Item text="Pour bien faire, il va nous falloir 3 tableaux :" />
                            <SubItem text="un pour les noms des propriétés" />
                            <SubItem text="un pour les valeurs des propriétés" />
                            <SubItem text="un pour les positions des propriétés" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="After insert">
                            <Item text="Elle était plus costaud celle-là" />
                            <Item text="Le plus important ici c'est de comprendre la logique" />
                            <Item text="Dans le monde pro, vous n'aurez pas à coder les méthodes AR" />
                            <Item text="Vous aurez à dispo la porsche que je vous promet depuis 2 jours" />
                            <Item text="Mais c'est important de comprendre un peu comment ça marche" />
                            <Item text="Bonne preuve de la puissance des classes et de l'héritage" />
                            <Item text="Beaucoup plus compliqué avec des objects littéraux" />
                            <Item text="Comment ça va vous ?" />
                        </ListItem>
                        <Sondage question="Factorisation de la méthode insert ?" 
                            reponses={["nickel !", "ça va, imothep ...", "ouais bof ...", "tu m'as perdu(e)"]} />
                        <ListItem title="update">
                            <Item text="On aura la même démarche pour update" />
                            <Item text="Même contrainte que pour l'insert : on veut pas mettrel'id à jour, on le zappe dans la boucle" />
                            <Item text="On veut seulement l'utiliser pour identifier l'enregistrement" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <ListItem title="delete">
                            <Item text="Enfin le delete, moins pénible celui-là" />
                            <Item text="On n'a pas les champs à gérer !" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.ar[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="On peut nettoyer User et Level, tous les autres modèles sont presque opés dans le coup" />
                            <BoxItem text="Faut pas oublier de leur déclarer une propriété statique tableName avec la bonne valeur" />
                            <BoxItem text="Ils héritent tous de CoreModel, leur accès CRUD est géré" />
                            <BoxItem text="Pour la factorisation, on a toujours la même démarche" />
                            <BoxItem text="On compare les méthodes dont le code semble se répéter pas mal" />
                            <BoxItem text="On identifie les différences et on cherche le moyen de faire du code générique" />
                            <BoxItem text="Pas forcément toujours possible mais quand-même très souvent" />
                            <BoxItem text="Vaut mieux se creuser la tête une fois pour toute" />
                            <BoxItem text="DRY, ça fait gagner plein de temps" />
                        </Recap>
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S5E04;