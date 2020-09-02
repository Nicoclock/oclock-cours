export const day1 = {
    shell: [
        {
            language: 'BASH',
            code: 
`whoami`
        },
        {
            language: 'BASH',
            code: 
`pwd`
        },
        {
            language: 'BASH',
            code: 
`ls`
        },
        {
            language: 'BASH',
            code: 
`cd Documents`
        },
        {
            language: 'BASH',
            code: 
`cd /`
        },
        {
            language: 'BASH',
            code: 
`cd home
cd etudiant`
        },
        {
            language: 'BASH',
            code: 
`cd /home/etudiant`
        },
        {
            language: 'BASH',
            code: 
`cd ~`
        },
        {
            language: 'BASH',
            code: 
`cd`
        },
        {
            language: 'BASH',
            code: 
`ls -a ou ls -A`
        },
        {
            language: 'BASH',
            code: 
`ls --help`
        }
    ],
    md: [
        {
            language: 'MARKDOWN',
            code:
`# Markdown, règles de syntaxe`
        },
        {
            language: 'MARKDOWN',
            code:
`## Titre de niveau 2

### Titre de niveau 3

#### Titre de niveau 4

##### Titre de niveau 5

###### Titre de niveau 6`
        },
        {
            language: 'MARKDOWN',
            code:
`Ceci est un texte normal. Pour revenir à la ligne, on termine par 2 espaces  
On peut aussi laisser une ligne vide entre 2 bouts de texte

Ca marche aussi avec plus d'air entre les lignes !`
        },
        {
            language: 'MARKDOWN',
            code:
`## Décoration du texte

_ce bout de texte est en italique_  
*celui-là aussi*`
        },
        {
            language: 'MARKDOWN',
            code:
`__ce bout de texte est en gras__  
**celui-là aussi**`
        },
        {
            language: 'MARKDOWN',
            code:
`*on peut mixer de l'italique __et du gras__*`
        },
        {
            language: 'MARKDOWN',
            code:
`~~dans VSCode on peut barré du texte mais ça marche pas partout~~`
        },
        {
            language: 'MARKDOWN',
            code:
`## Snippets

\`Ce code *n'est __pas__ interprété*\``
        },
        {
            language: 'MARKDOWN',
            code:
`\`\`\`
Ce block de texte
ne sera pas interprété non plus
Les sauts de ligne seront conservés
\`\`\``
        },
        {
            language: 'MARKDOWN',
            code:
`\`\`\`html
<h1>Hello world !</h1>
\`\`\``
        },
        {
            language: 'MARKDOWN',
            code:
`\`\`\`js
//on en reparlera très vite
console.log('Hello world !');
\`\`\``
                    },
        {
            language: 'MARKDOWN',
            code:
`## Citation

> Ceci est une citation  
sur plusieurs lignes`
        },
        {
            language: 'MARKDOWN',
            code:
`---

## Listes

Ma liste ordonnée :
1. 1er élément
2. 2ème élément
    1. 1er sous-élément
    2. 2ème sous-élément
2. 3ème élément`
        },
        {
            language: 'MARKDOWN',
            code:
`
***

Ma liste non ordonnée :
- 1er élément
- 2ème élément
    - 1er sous-élément
    - 2ème sous-élément
- 3ème élément`
        },
        {
            language: 'MARKDOWN',
            code:
`---

Ma liste de cases à cocher :
- [ ] 1er élément
- [ ] 2ème élément
- [x] 3ème élément`
        },
        {
            language: 'MARKDOWN',
            code:
`---

## Liens

- clickable

[un lien vers google](https://www.google.fr/)

- vers un document

![Image de Lyra](https://fr.web.img5.acsta.net/medias/nmedia/18/63/76/90/18785459.jpg)`
        },
        {
            language: 'MARKDOWN',
            code:
`---

## Tableaux

|Lyra Blue|Lyra Red|
|---|---|
|nom1|nom2|
|nom3|nom4
|nom5|
||nom6`
        }
    ]
};

export const day2 = {
    prez: [
        {
            language: 'MARKDOWN',
            code: 
`# Présentation

Je suis Nico, j'ai 42 ans et (presque) toutes mes dents  
J'habite en Charente maritime sur __l'île d'oléron__ avec mon chien

[Ile d'Oléron](https://fr.wikipedia.org/wiki/%C3%8Ele_d%27Ol%C3%A9ron)

![carte](https://www.ile-oleron-marennes.com/sites/default/files/decouvrir/page-sas/ile-oleron-marennes-tourisme.jpg)

## Ma vie, mon oeuvre

Je suis développeur depuis __2001__, je fais du Web depuis __2010__  
Mes langages de prédilection :
- JavaScript
- HTML
- CSS / SaSS
- Java

## Mes passions

Hormis la programmation, je suis un grand fan des films/séries d'animation, fantastiques et de SF comme :

- Films
    - Tous les films de Miyazaki
    - L'âge de glace
    - Le seigneur des anneaux
    - Star Wars
- Séries
    - Le trône de fer
    - Dexter
    - Sense8
    - Westworld
- Bouquins
    - Dune (tout Frank Herbert en fait)
    - Fondation (Asimov)
    - J.R.R Tolkien

## My absolute hero
![Scrat](https://i.imgflip.com/2hik5v.jpg)`
        }
    ],
    html: [
        {
            language: 'HTML',
            code: 
`<!-- Le 1er truc à apprendre : comment écrire des commentaires pour documenter le doc -->

<!-- format d'une balise : on écrit les mots-clé en minuscule -->
<motcle>Ici du contenu</motcle>

<!-- Balises autofermantes : input, hr, img, ...
ces 2 syntaxes sont acceptées -->
<motcle>
<motcle />

<!-- Pour construire le document, on va imbriquer les balises les unes dans les autres -->

<ancetre>
    <enfant>du contenu</enfant>
    <enfant>encore du contenu</enfant>
    <enfant>
        <petitenfant />
        <petitenfant>
            Du texte <inner>mis en évidence</inner>
        </petitenfant>
    </enfant>
</ancetre>

<!-- On peut configurer les balises avec des attributs -->

<balise attribut1="" attribut2="">mon contenu</balise>`
        },
        {
            language: 'HTML',
            code: 
`<!-- on commence par indiquer le type du document 
la syntaxe est un peu bizarre pour celle-là -->
<!DOCTYPE html>

<!-- on définit la balise qui va contenir toutes les autres -->
<html>
    <!-- un doc html contient une entête avec des informations sur la page elle-même 
    cette entête ne sera pas visible dans le navigateur mùais elle aura des effets sur l'affichage -->
    <head>
        <!-- les infos sont contenues dans des balises <meta> 
        une qu'on verra souvent indique l'encodage des caractères pour afficher correctement les accents (entre autre) -->
        <meta charset="UTF-8">
        <!-- on peut indiquer ici un titre qui va apparaitre au niveau de l'onglet dans le navigateur -->
        <title>Modèle HTML</title>
    </head>
    <!-- pour ajouter du contenu visible par l'utilisateur on utilise le corps de la page -->
    <body>
        <!-- ajout d'un titre à la page 
        comme en markdwon, on a jusqu'à 6 niveaux de titre (h1, h2, h3, ...)-->
        <h1>My beautiful page</h1>
        <!-- Un peu de texte : on crée un paragraphe avec <p> -->
        <p>Mon texte dans un block paragraphe</p>
    </body>
</html>`
        },
        {
            language: 'HTML',
            code: 
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Tests avec Emmet</title>
    </head>
    <body>
        
    </body>
</html>`
        },
        {
            language: 'HTML',
            code: 
`<!-- div pour division, conteneur basic en html
pour créer une div avec un paragraphe dedans : div>p + entrée ou tab -->
<div>
    <!--on peut ajouter du texte fictif pour faire du remplissage
    lorem + tab ou lorem24 (pour 24 mots) + entrée ou tab -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos nemo, tenetur in laboriosam dicta veniam aliquid nostrum laborum magnam, iure rerum maxime fugiat.</p>
</div>

<!-- pour créer des éléments au même niveau, on utilise + 
div+div + entrée ou tab -->
<div></div>
<div></div>

<!-- un menu est souvent contenu dans une balise nav
il contient une liste d'éléments (ul ou ol) qui elle même contient des items (li) 
un menu complet avec 5 items : nav>ul>li*5 -->
<nav>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</nav>`
        },
        {
            language: 'HTML',
            code: 
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>HTML et CSS</title>
    </head>
    <body>
        <h1>HTML et CSS</h1>
    
        <h2>HTML : Le fond</h2>
        <h3>Définition</h3>
        <p>
            <strong>HTML</strong> signifie "<em>HyperText Markup Language</em>" 
            qu'on peut traduire par "langage de balises pour
            l'hypertexte". Il est utilisé afin de créer et de
            représenter le contenu d'une page web et sa structure.
            D'autres technologies sont utilisées avec HTML pour décrire
            la présentation d'une page (CSS) et/ou ses fonctionnalités
            interactives (JavaScript).
        </p>

        <h3>Les textes</h3>
        <p>
            Avec les balises <strong>h1-h6</strong> il est possible de
            définir des titres en respectant une logique de profondeur
        </p>
        <ul>
            <li>
                <h1>1. : Titre principal</h1>
                <ul>
                    <li>
                        <h2>1.1 : sous-titre</h2>
                        <ul>
                            <li><h3>1.1.1 ...</h3></li>
                            <li><h3>1.1.2 ...</h3></li>
                            <li><h3>1.1.3 ...</h3></li>
                        </ul>
                    </li>
                    <li><h2>1.2 : sous-titre</h2></li>
                    <li><h2>1.3 : sous-titre</h2></li>
                </ul>
            </li>
        </ul>

        <p>
            Pour représenter un paragraphe de texte courant la balise
            <strong>p</strong> est parfaite
        </p>

        <p>
            <strong>strong</strong> et <strong>em</strong> sont des
            balises permettant de définir des mots ou expressions
            <em>signifiants</em> dans un texte courant
        </p>
    
        <h2>CSS : La forme</h2>
        <h3>Définition</h3>
        <p>
            <strong>CSS</strong> signifie "<em>Cascading Style Sheets</em>", 
            c'est un langage de feuille de style utilisé pour
            décrire la présentation d'un document écrit en HTML ou en
            XML. CSS décrit la façon dont les éléments doivent être
            affichés à l'écran, sur du papier, en vocalisation, ou sur
            d'autres supports.
        </p>

        <h3>Anatomie d'une règle CSS</h3>
        
        <h4>Sélecteur</h4>
        <p>
            C'est le nom de l'élément HTML situé au début de l'ensemble
            de règles. Il permet de sélectionner les éléments sur
            lesquels appliquer le style souhaité (en l'occurence, les
            éléments p). Pour mettre en forme un élément différent, il
            suffit de changer le sélecteur.
        </p>
        <h4>Déclaration</h4>
        <p>
            C'est une règle simple comme color: red; qui détermine les
            propriétés de l'élément que l'on veut mettre en forme.
        </p>
        <h4>Propriétés</h4>
        <p>
            Les différentes façons dont on peut mettre en forme un
            élément HTML (dans ce cas, color est une propriété des
            éléments p). En CSS, vous choisissez les différentes
            propriétés que vous voulez utiliser dans une règle CSS.
        </p>
        <h4>Valeur de la propriété</h4>
        <p>
            À droite de la propriété, après les deux points, on a la
            valeur de la propriété. Celle-ci permet de choisir une mise
            en forme parmi d'autres pour une propriété donnée (par
            exemple, il y a d'autres couleurs que red pour la propriété
            color).
        </p>
    </body>
</html>`
        },
        {
            language: 'HTML',
            code: 
`<!-- on ajoute le lien vers notre fichier style.css (dans le dossier css) 
on indique le chemin vers le fichier dans l'attribut href 
Ce chemin est relatif par rapport à l'emplacement de la page html 
on remonte dans le dossier parent (projet) pour redescendre dans le dossier css
et accéder à notre feuille de style -->
<link rel="stylesheet" href="../css/style.css" />`
        },
        {
            language: 'CSS',
            code: 
`/*
Ceci est un commentaire
On peut l'écrire sur plusieurs lignes
*/

/*
on va appliquer une police de caractères à toute notre page
on précise la règle sur la balise body, toutes les balises enfant vont en hériter
*/

/* body est un sélecteur CSS, il nous permet de cibler l'élément html correspondant*/
body {
    /*on précise une font avec la propriété font-family
    on indique la valeur de la propriété après les :
    on termine l'instruction par ;*/
    font-family: Arial, sans-serif;
}`
        },
        {
            language: 'CSS',
            code: 
`background-color: deepskyblue;`
        },
        {
            language: 'CSS',
            code: 
`/* background-color: #C0FFEE; */
background-color: #e3f1ef;`
        },
        {
            language: 'CSS',
            code: 
`/* on cible l'élément qu'on veut styliser */
h1 {
    /* notation raccourcie, équivalent à 66 66 66*/
    color: #666;
}`
        },
        {
            language: 'CSS',
            code: 
`/* on cible l'élément qu'on veut styliser */
h1 {
    /* notation raccourcie, équivalent à #666666 */
    color: #666;
    font-size: 40px;
}`
        },
        {
            language: 'CSS',
            code: 
`h2 {
    color: #0bad93;
    font-style: italic;
}`
        },
        {
            language: '',
            code: 
`/* sélecteur multiple, on cible plusieurs types d'éléments en les séparant par une virgule*/
h2, h3 {
    text-transform: uppercase;
}`
        },
        {
            language: 'CSS',
            code: 
`em {
    text-decoration: underline;
}`
        },
        {
            language: 'CSS',
            code: 
`strong {
    background-color: lightyellow;
    font-weight: bold;
}`
        },
        {
            language: 'HTML',
            code: 
`<h3>En image</h3>
<img src="../images/css.svg" alt="structure CSS" />`
        },
        {
            language: 'CSS',
            code: 
`img {
    /* notation condensée, on indique sur la même ligne
    - la taille de la bordure
    - son type
    - sa couleur
    */
    border: 1px solid black;
    border-radius: 10px;
}`
        },
        {
            language: 'HTML',
            code: 
`<p id="ressources"> Ressources :
    <a href="https://htmlreference.io/">htmlreference</a> -
    <a href="https://cssreference.io/">cssreference</a> -
    <a href="https://developer.mozilla.org/fr/">MDN</a>
</p>`
        },
        {
            language: 'CSS',
            code: 
`/* on peut utiliser l'id d'un élément pour le cibler
syntaxe : # suivi du nom indiqué dans l'attribut id */
#ressources {
    background-color: #0bad93;
    color: #fff;
    /* on peut indiquer un 'volume' de gras à mettre sur le texte*/
    font-weight: 700;
    /* va mettre une taille à 130% par rapport à la référence */
    font-size: 1.3em;
}`
        },
        {
            language: 'CSS',
            code: 
`/* en séparant 2 sélecteurs avec un espace, select1 select2,
on sélectionne tous les éléments select2 contenus dans select1 
dans notre cas, tous les a contenus dans le p d'id ressources */
#ressources a {
    color: white;
}`
        },
        {
            language: 'CSS',
            code: 
`/* on applique un effet sur un lien au survol de la souris en ajoutant :hover après le a 
juste pour info, on appelle ça une pseudo class */
#ressources a:hover {
    color: black;
    text-decoration: none;
}`
        }
    ]
};

export const day3 = {
    challenge: [
        {
            language: 'BASH',
            code: 
`mkdir html css`
        },
        {
            language: 'BASH',
            code: 
`touch html/index.html css/style.css`
        },
        {
            language: 'HTML',
            code: 
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../css/style.css">
        <title>Recette pancakes</title>
    </head>
    <body>
        
    </body>
</html>`
        },
        {
            language: 'HTML',
            code: 
`<h1>1 Mug Pancakes</h1>

<h2>Résumé</h2>

La pâte : 5 minutes

Cuisson : 10 minutes

Difficulté : facile, Budget : &euro;--

<h2>Préparation</h2>

<h3>Ustensiles</h3>

1 mug (env. 35cl)
1 saladier
1 petite crêpière ou 1 poêle
1 cuillère à soupe
1 fourchette ou 1 fouet

<h3>Ingrédients</h3>

Pour une douzaine de pancakes environ

env. 200g farine
env. 250ml de lait
1/2 à 1 sachet de levure chimique
1 oeuf
2 cuillères soupe d'huile
2 cuillères soupe de sucre

<h2>Instructions</h2>

<h3>La pâte</h3>

dans le mug, mélanger farine, sucre et levure

Réserver dans un saladier

de nouveau dans le mug : bien mélanger l'oeuf et l'huile puis ajouter le lait

verser progressivement le contenu du mug dans le saladier en mélangeant énergiquement

c'est prêt

<h3>La cuisson</h3>

Idéalement sur une petite crêpière, verser simplement la quantité de pâte souhaitée. Laisser cuire jusqu'à l'apparition de petites bulles sur le dessus du pancake puis retourner

À la poêle, même principe à feu doux

<h2>Dégustation</h2>

Parfait avec un peu de beurre de cacahuète, avec une bonne confiture ou tout simplement avec un peu de sucre`
        },
        {
            language: 'HTML',
            code: 
`<h1>1 Mug Pancakes</h1>

<h2>Résumé</h2>

<p>La pâte : 5 minutes</p>
<p>Cuisson : 10 minutes</p>
<p>Difficulté : facile, Budget : &euro;--</p>

<h2>Préparation</h2>

<h3>Ustensiles</h3>

<ul>
    <li>1 mug (env. 35cl)</li>
    <li>1 saladier</li>
    <li>1 petite crêpière ou 1 poêle</li>
    <li>1 cuillère à soupe</li>
    <li>1 fourchette ou 1 fouet</li>
</ul>

<h3>Ingrédients</h3>

<p>Pour une douzaine de pancakes environ</p>

<ul>
    <li>env. 200g farine</li>
    <li>env. 250ml de lait</li>
    <li>1/2 à 1 sachet de levure chimique</li>
    <li>1 oeuf</li>
    <li>2 cuillères soupe d'huile</li>
    <li>2 cuillères soupe de sucre</li>
</ul>

<h2>Instructions</h2>

<h3>La pâte</h3>

<ol>
    <li>dans le mug, mélanger farine, sucre et levure</li>
    <li>Réserver dans un saladier</li>
    <li>de nouveau dans le mug : bien mélanger l'oeuf et l'huile puis ajouter le lait</li>
    <li>verser progressivement le contenu du mug dans le saladier en mélangeant énergiquement</li>
    <li>c'est prêt</li>
</ol>

<h3>La cuisson</h3>

<p>Idéalement sur une petite crêpière, verser simplement la quantité de pâte souhaitée. Laisser cuire jusqu'à l'apparition de petites bulles sur le dessus du pancake puis retourner</p>

<p>À la poêle, même principe à feu doux</p>

<h2>Dégustation</h2>

<p>Parfait avec un peu de beurre de cacahuète, avec une bonne confiture ou tout simplement avec un peu de sucre</p>`
        },
        {
            language: 'CSS',
            code: 
`body {
    background-color: #fff3bd;
    font-family: Verdana, sans-serif;
    text-align: center;
}`
        },
        {
            language: 'CSS',
            code: 
`h1 {
    font-size: 40px;
    background-color: #f02425;
    color: #fff;
    text-transform: uppercase;
}`
        },
        {
            language: 'CSS',
            code: 
`h2 {
    font-size: 30px;
    color: #f02425;
}`
        },
        {
            language: 'CSS',
            code: 
`h3 {
    font-size: 20px;
    font-style: italic;
    font-weight: normal;
    text-decoration: underline;
}`
        },
        {
            language: 'CSS',
            code: 
`p, ol, ul {
    text-align: left;
}

p {
    color: #666;
}`
        },
        {
            language: 'HTML',
            code: 
`...
<p><strong>Difficulté</strong> : facile, <em>Budget</em> : &euro;--</p>
...
<li>de nouveau dans le mug : <em>bien mélanger l'oeuf et l'huile</em> puis ajouter le lait</li>
<li>verser <strong>progressivement</strong> le contenu du mug dans le saladier en <strong>mélangeant énergiquement</strong></li>`
        },
        {
            language: 'CSS',
            code: 
`strong, em {
    color: #f02425;
    font-style: normal;
}`
        },
        {
            language: 'HTML',
            code: 
`<h1>1 Mug Pancakes</h1>

<img alt="Pancakes" src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?fit=crop&w=600">

<h2>Résumé</h2>`
        },
        {
            language: 'HTML',
            code: 
`<li>1 <a href="https://mafabriqueperso.fr/835-large_default/mug-ceramique-colore.jpg">mug</a> (env. 35cl)</li>
<li>1 saladier</li>
<li>1 <a href="https://www.tefal.fr/Cuisson-%C3%A0-table/Cuisson-partag%C3%A9e/CREP%27PARTY-COLORMANIA/p/2100108999">petite crêpière</a> ou 1 poêle</li>`
        },
        {
            language: 'CSS',
            code: 
`a {
    color: #248dd9;
    font-weight: bold;
}`
        },
        {
            language: 'HTML',
            code: 
`<h3 id="pate">La pâte</h3>
...
<h3 id="cuisson">La cuisson</h3>`
        },
        {
            language: 'HTML',
            code: 
`<p><a href="#pate">La pâte</a> : 5 minutes</p>
<p><a href="#cuisson">Cuisson</a> : 10 minutes</p>`
        },
        {
            language: 'HTML',
            code: 
`...
<p class="astuce">Astuce : Vous n'avez pas d'oeuf ? Incorporer un peu de bannane écrasée dans la préparation.</p>

<h2>Instructions</h2>

<h3 id="cuisson">La cuisson</h3>
...
<p class="astuce">Astuce : Ajouter un petit bout de beurre à fondre sur la pile de pancakes, un régal.</p>

<h2>Dégustation</h2>
...
<p class="astuce">Astuce : Si vous n'avez pas d'accompagnement en tête, verser un peu de sirop d'érable avant de servir.</p>`
        },
        {
            language: 'CSS',
            code: 
`.astuce {
    font-weight: bold;
    font-size: 13px;
    background-color: #fed48a;
    color: #666;
    text-align: center;
    font-style: italic;
}`
        }
    ],
    chaussons: [
        {
            language: 'HTML',
            code: 
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../css/styles.css">
        <title>Accueil</title>
    </head>
    <body>
        O'clock

        Au départ 
        Maintenant
        O'clock

        Au départ, il y avait des chaussons...

        lorem...

        ...Maintenant, il y a des formations

        Les étudiants

        lorem...

        Les profs

        lorem...

        Les cours

        lorem...

        Pour nous contacter, n'hésitez à nous écrire sur contact@oclock.io.

        Vous pouvez aussi nous passer un coup de fil sur 0123456789.

    </body>
</html>`
        },
        {
            language: 'HTML',
            code: 
`<div id="container">
    O'clock

    Au départ 
    Maintenant
    O'clock

    Au départ, il y avait des chaussons...

    lorem...

    ...Maintenant, il y a des formations

    Les étudiants

    lorem...

    Les profs

    lorem...

    Les cours

    lorem...

    Pour nous contacter, n'hésitez à nous écrire sur contact@oclock.io.

    Vous pouvez aussi nous passer un coup de fil sur 0123456789.
</div>`
        },
        {
            language: 'HTML',
            code: 
`<header id="presentation">
    O'clock

    Au départ 
    Maintenant
    O'clock
</header>
<main id="main">
    Au départ, il y avait des chaussons...

    lorem...

    ...Maintenant, il y a des formations

    Les étudiants

    lorem...

    Les profs

    lorem...

    Les cours

    lorem...
</main>
<footer id="contact">
    Pour nous contacter, n'hésitez à nous écrire sur contact@oclock.io.

    Vous pouvez aussi nous passer un coup de fil sur 0123456789.
</footer>`
        },
        {
            language: 'HTML',
            code: 
`<nav>
    Au départ 
    Maintenant
    O'clock
</nav>`
        },
        {
            language: 'HTML',
            code: 
`<section id="depart">
    Au départ, il y avait des chaussons...

    lorem...
</section>
<section id="maintenant">
    ...Maintenant, il y a des formations

    Les étudiants

    lorem...

    Les profs

    lorem...

    Les cours

    lorem...
</section>`
        },
        {
            language: 'HTML',
            code: 
`<article class="article">
    Les étudiants

    lorem...
</article>
<article class="article">
    Les profs

    lorem...
</article>
<article class="article">
    Les cours

    lorem...
</article>`
        },
        {
            language: 'HTML',
            code: 
`<div id="container">
<header id="presentation">
    <h1>O'clock</h1>
    <nav>
        <a href="#depart">Au départ</a>
        <a href="#maintenant">Maintenant</a>
        <a href="https://oclock.io">O'clock</a>
    </nav>
</header>
<main id="main">
    <section id="depart">
        <h2>Au départ, il y avait des chaussons...</h2>

        <img src="../images/chaussons-team-oclock.jpg" alt="Les chaussons des formateurs O'clock">

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero similique, officiis soluta est modi, ea labore sed cupiditate maiores explicabo ex consequatur. Ab facere qui illum possimus iste rem nostrum!</p>
    </section>
    <section id="maintenant">
        <h2>...Maintenant, il y a des formations</h2>
        <article class="article">
            <h3>Les étudiants</h3>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam vero repudiandae molestias quod vitae veniam possimus ut harum? Voluptates sint pariatur, ullam enim eaque saepe obcaecati vero porro? A, tenetur!</p>
        </article>
        <article class="article">
            <h3>Les profs</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit commodi, unde pariatur voluptatum nostrum, soluta blanditiis qui quis maiores voluptas sed dolorum debitis quibusdam? Inventore quos animi nemo libero ipsa.</p>
        </article>
        <article class="article">
            <h3>Les cours</h3>
    
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti corporis odit sit consequatur accusamus quas consectetur molestias et nulla, adipisci asperiores aspernatur tenetur in excepturi voluptates, earum, ipsa quaerat?</p>
        </article>
    </section>
</main>
<footer id="contact">
    <p>
        Pour nous contacter, n'hésitez à nous écrire sur 
        <a href="mailto:contact@oclock.io">contact@oclock.io</a>.
        <br />
        Vous pouvez aussi nous passer un coup de fil sur 
        <a href="tel:+33123456789">0123456789</a>.
    </p>
</footer>
</div>`
        },
        {
            language: 'HTML',
            code: 
`<link rel="stylesheet" href="../css/reset.css">
<link rel="stylesheet" href="../css/styles.css">`
        },
        {
            language: 'CSS',
            code: 
`body {
    background-color: #ccc;
    font-family: sans-serif;
}`
        },
        {
            language: 'CSS',
            code: 
`#container {
    background-color: #fff;
    /* on donne une largeur à la div
    il existe aussi une propriété height pour gérer la hauteur d'un élément
    par défaut, la hauteur d'une div va être calculée selon son contenu */
    width: 760px;
    /* on utilise la propriété margin pour "l'espace de danse" */
    /* notation raccourcie : 
        - 1ère valeur s'applique à top et bottom
        - la 2ème valeur s'applique à left et right 
    On peut laisser le navigateur calculer la valeur left et right en indiquant auto    
    */
    margin: 50px auto;

    /* on décolle les textes du bord en ajoutant un peu de graisse et de chair, propriété padding */
    /* on utilise encore la notation raccourcie : top-bototm, left-right*/
    padding: 15px 20px;
}`
        },
        {
            language: 'CSS',
            code: 
`/* HEADER */

#presentation {
    text-align: center;
}

#presentation h1 {
    /*on utilise la notation à 4 valeurs (top right bottom left). La dernière vaut 0, on peut l'omettre */
    margin: 15px 0 10px;
    /* aucune taille précisée sur les parents, la taille par défaut du navigateur (16px) vaut 1em */
    font-size: 3em;
}

nav {
    background-color: #eee;
    /* un peu d'air tout autour */
    margin: 10px;
    /* un peu de gras sur l'os */
    padding: 10px;
}

nav a {
    /* un peu d'air autour des liens */
    margin: 10px;
}`
        },
        {
            language: 'CSS',
            code: 
`/* GENERAL */

a {
    color: #ed1243;
    text-decoration: none;
}

a:hover {
    /* une autre façon de souligner du texte en utilisant sa bordure basse */
    border-bottom: 1px solid #ed1243;
}`
        },
        {
            language: 'CSS',
            code: 
`section h2 {
    font-size: 1.3em;
    font-weight: bold;
    color: #777;
    text-align: center;
    text-transform: uppercase;
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 3px solid #ccc;
}`
        },
        {
            language: 'CSS',
            code: 
`section img {
    width: 80%;
    border: 1px solid black;
    border-radius: 20px;
    margin: auto;
}`
        },
        {
            language: 'CSS',
            code: 
`section img {
    width: 80%;
    border: 1px solid black;
    border-radius: 20px;
    margin: auto;
    /* la valeur par défaut du display pour une image est inline, dans la ligne, au fil du texte
    En la passant à block, on force l'image à se comporter comme une div, à prendre toute la place disponible dans la largeur
    ainsi, on peut utiliser la valeur auto de margin pour la centrer, elle a une largeur de référence 
    on peut aussi masquer complètement un élément en mettant sa propriété display à none */
    display: block;
}`
        },
        {
            language: 'CSS',
            code: 
`section h3 {
    font-size: 1.2em;
    font-weight: bold;
}`
        },
        {
            language: 'CSS',
            code: 
`section p {
    font-family: Arial;
    /* on peut utiliser tous les types d'unités : ici la taille par défaut d'un caractère en haut et en bas */
    margin: 1em 0;
    /* le texte doit prendre toute la largeur dispo */
    text-align: justify;
    /* on peut préciser la hauteur de chaque ligne, le texte contenu sera centré verticalement 
    on ne met pas d'unité ici, 1 est la taille normale, ici on augmente un peu */
    line-height: 1.4;
    /* on peut aussi indiquer l'espace entre chaque lettre pour bien étaler le texte */
    letter-spacing: 0.04em;
}`
        },
        {
            language: 'CSS',
            code: 
`* FOOTER */
/* j'utilise l'id pour le fun, on pouvait appliquer les règles à l'élément footer lui-même
footer {
    ...
}*/
#contact {
    background-color: #ddd;
    padding: 12px 0;
    margin-top: 50px;
}

#contact p {
    text-align: center;
    font-size: 0.9em;
}`
        },
        {
            language: 'CSS',
            code: 
`#contact {
    background-color: #ddd;
    padding: 12px 0;
    margin: 50px -20px -15px -20px;
}`
        }
    ]
};

export const day4 = {
    challenge: [
        {
            language: 'HTML',
            code: 
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../css/reset.css">
        <link rel="stylesheet" href="../css/styles.css">
        <title>Herocorp</title>
    </head>
    <body>
        <div id="container">
            Hero Corp

            La série
            
            Présentation
            
            
            Hero Corp est une série télévisée française fantastique et humoristique, produite par CALT, créée par Simon Astier et Alban Lenoir, réalisée par Simon Astier et écrite par Arnaud Joyet et Simon Astier.
            
            Les deux premières saisons ont été diffusées du 25 octobre 2008 au 29 janvier 2010 sur Comédie+ et rediffusées sur France 4 et Game One. La troisième saison a été diffusée sur France 4 du 21 octobre 2013 au 6 décembre 20132. La quatrième saison a été, quant à elle, diffusée du 19 décembre 2014 au 23 janvier 2015 sur France 4 et à partir du 9 février 2015 sur Game One. Une cinquième et dernière saison a été diffusée sur France 4 du 24 mai 2017 au 7 juin 20173.
            
            
            Synopsis
            
            À la suite d’une guerre dans les années 1980, il est décidé de créer l’agence Hero Corp, une organisation regroupant tous les super-héros afin de maintenir un climat de paix. Cette agence possède plusieurs sites secrets sur la planète et dans le département de la Lozère se trouvent les retraités, mis au rancart, démissionnaires, démasqués, pas-formés. Coupés du monde, ils peuvent retrouver une vie calme et paisible. Vingt ans après, ce calme paisible vole en éclats lorsque réapparaît The Lord.
            
            Face au retour de The Lord, le plus grand super-vilain de l’Histoire, le village est démuni. Selon une prédiction, John est l'unique solution face à ce danger que Hero Corp préfère garder sous silence.
            
            John arrive dans un village isolé pour aller enterrer sa tante. Il se rend compte que les habitants cachent quelque chose et qu’ils n’ont pas l’air décidés à le laisser partir.

            Présentation de Hero Corp, la série © Hero Corp
        </div>
    </body>
</html>`
        },
        {
            language: 'HTML',
            code: 
`<div id="container">
    <header id="header">
        Hero Corp

        La série
    </header>
    <main id="main">
        Présentation


        Hero Corp est une série télévisée française fantastique et humoristique, produite par CALT, créée par Simon Astier et Alban Lenoir, réalisée par Simon Astier et écrite par Arnaud Joyet et Simon Astier.
        
        Les deux premières saisons ont été diffusées du 25 octobre 2008 au 29 janvier 2010 sur Comédie+ et rediffusées sur France 4 et Game One. La troisième saison a été diffusée sur France 4 du 21 octobre 2013 au 6 décembre 20132. La quatrième saison a été, quant à elle, diffusée du 19 décembre 2014 au 23 janvier 2015 sur France 4 et à partir du 9 février 2015 sur Game One. Une cinquième et dernière saison a été diffusée sur France 4 du 24 mai 2017 au 7 juin 20173.
        
        
        Synopsis
        
        À la suite d’une guerre dans les années 1980, il est décidé de créer l’agence Hero Corp, une organisation regroupant tous les super-héros afin de maintenir un climat de paix. Cette agence possède plusieurs sites secrets sur la planète et dans le département de la Lozère se trouvent les retraités, mis au rancart, démissionnaires, démasqués, pas-formés. Coupés du monde, ils peuvent retrouver une vie calme et paisible. Vingt ans après, ce calme paisible vole en éclats lorsque réapparaît The Lord.
        
        Face au retour de The Lord, le plus grand super-vilain de l’Histoire, le village est démuni. Selon une prédiction, John est l'unique solution face à ce danger que Hero Corp préfère garder sous silence.
        
        John arrive dans un village isolé pour aller enterrer sa tante. Il se rend compte que les habitants cachent quelque chose et qu’ils n’ont pas l’air décidés à le laisser partir.
    </main>            
    <footer id="footer">
        Présentation de Hero Corp, la série © Hero Corp
    </footer>
</div>`
        },
        {
            language: 'HTML',
            code: 
`<main id="main">
    <section id="presentation">
        <header id="presentation-header">
            Présentation

            Hero Corp est une série télévisée française fantastique et humoristique, produite par CALT, créée par Simon Astier et Alban Lenoir, réalisée par Simon Astier et écrite par Arnaud Joyet et Simon Astier.
        </header>
        <aside id="presentation-aside">
            Les deux premières saisons ont été diffusées du 25 octobre 2008 au 29 janvier 2010 sur Comédie+ et rediffusées sur France 4 et Game One. La troisième saison a été diffusée sur France 4 du 21 octobre 2013 au 6 décembre 20132. La quatrième saison a été, quant à elle, diffusée du 19 décembre 2014 au 23 janvier 2015 sur France 4 et à partir du 9 février 2015 sur Game One. Une cinquième et dernière saison a été diffusée sur France 4 du 24 mai 2017 au 7 juin 20173.
        </aside>                
        <article id="presentation-synopsis">
            Synopsis
        
            À la suite d’une guerre dans les années 1980, il est décidé de créer l’agence Hero Corp, une organisation regroupant tous les super-héros afin de maintenir un climat de paix. Cette agence possède plusieurs sites secrets sur la planète et dans le département de la Lozère se trouvent les retraités, mis au rancart, démissionnaires, démasqués, pas-formés. Coupés du monde, ils peuvent retrouver une vie calme et paisible. Vingt ans après, ce calme paisible vole en éclats lorsque réapparaît The Lord.
            
            Face au retour de The Lord, le plus grand super-vilain de l’Histoire, le village est démuni. Selon une prédiction, John est l'unique solution face à ce danger que Hero Corp préfère garder sous silence.
            
            John arrive dans un village isolé pour aller enterrer sa tante. Il se rend compte que les habitants cachent quelque chose et qu’ils n’ont pas l’air décidés à le laisser partir.

        </article>                
    </section>
</main>`
        },
        {
            language: 'HTML',
            code: 
`<main id="main">
    <section id="presentation">
        <header id="presentation-header">
            <h2>Présentation</h2>
            <img src="../images/hc-logo.png" alt="Hero corp logo">
            <p class="texte-courant">
                <strong>Hero Corp</strong> est une série télévisée française fantastique et humoristique, produite par CALT, créée par Simon Astier et Alban Lenoir, réalisée par Simon Astier et écrite par Arnaud Joyet et Simon Astier.
            </p>
        </header>
        <aside id="presentation-aside">
            <p class="note">
                Les deux premières saisons ont été diffusées du 25 octobre 2008 au 29 janvier 2010 sur Comédie+ et rediffusées sur France 4 et Game One. La troisième saison a été diffusée sur France 4 du 21 octobre 2013 au 6 décembre 20132. La quatrième saison a été, quant à elle, diffusée du 19 décembre 2014 au 23 janvier 2015 sur France 4 et à partir du 9 février 2015 sur Game One. Une cinquième et dernière saison a été diffusée sur France 4 du 24 mai 2017 au 7 juin 20173.
            </p>
        </aside>                
        <article id="presentation-synopsis">
            <h3>Synopsis</h3>
            <p class="texte-courant">
                À la suite d’une guerre dans les années 1980, il est décidé de créer l’agence Hero Corp, une organisation regroupant tous les super-héros afin de maintenir un climat de paix. Cette agence possède plusieurs sites secrets sur la planète et dans le département de la Lozère se trouvent les retraités, mis au rancart, démissionnaires, démasqués, pas-formés. Coupés du monde, ils peuvent retrouver une vie calme et paisible. Vingt ans après, ce calme paisible vole en éclats lorsque réapparaît The Lord.
            </p>
            <p class="texte-courant">
                Face au retour de The Lord, le plus grand super-vilain de l’Histoire, le village est démuni. Selon une prédiction, John est l'unique solution face à ce danger que Hero Corp préfère garder sous silence.
            </p>
            <p class="texte-courant">
                John arrive dans un village isolé pour aller enterrer sa tante. Il se rend compte que les habitants cachent quelque chose et qu’ils n’ont pas l’air décidés à le laisser partir.
            </p>
        </article>                
    </section>
</main>`
        },
        {
            language: 'CSS',
            code: 
`body {
    background-color: lightgrey;
    font-family: Arial, sans-serif;
}`
        },
        {
            language: 'CSS',
            code: 
`#container {
    width: 800px;
    margin: 16px auto;
    text-align: center;
    background-color: #fff;
    border: 1px solid black;
    padding: 16px;
}`
        },
        {
            language: 'CSS',
            code: 
`h1, h2, h3 {
    font-weight: bold;
    margin: 16px 0;
}

h1 {
    font-size: 3em;
}

h2 {
    font-size: 1.6em;
}

h3 {
    font-size: 1.3em;
    color: darkred;
}`
        },
        {
            language: 'CSS',
            code: 
`/* HEADER */

#header {
    /* chemin relatif depuis le fichier CSS */
    background: url('../images/hc.png');
    /* par défaut, l'image se répète pour remplir tout l'espace, on change le comportement */
    background-repeat: no-repeat;
    /* on positionne l'image pour coller au visuel */
    background-position: top center;
    /* on utilise le padding pour positionner le texte en dessous de l'image */
    padding-top: 270px;
}`
        },
        {
            language: 'CSS',
            code: 
`h1 {
    font-size: 3em;
    border-top: 2px solid darkred;
    border-bottom: 2px solid darkred;
    padding: 16px 0;
}`
        },
        {
            language: 'CSS',
            code: 
`h1 strong {
    /* font de référence : le parent, 3em*/
    font-size: 0.3em;
    color: white;
    background-color: #000;
    font-weight: bold;
    padding: 8px 16px;
}`
        },
        {
            language: 'CSS',
            code: 
`#main {
    margin: 10px 0;
}`
        },
        {
            language: 'CSS',
            code: 
`#presentation {
    width: 600px;
    margin: 0 auto;
    background-color: #eee;
    padding: 20px;
    margin-bottom: 20px;
    line-height: 1.3;
}`
        },
        {
            language: 'CSS',
            code: 
`#presentation-header {
    border-bottom: 1px solid black;
    margin-bottom: 1em;
}

#presentation-header img {
    width: 100px;
    margin: 1em;
}`
        },
        {
            language: 'CSS',
            code: 
`.texte-courant {
    text-align: left;
    margin-bottom: 1em;
}

.texte-courant strong {
    font-weight: bold;
}

.note {
    font-style: italic;
    font-size: 0.8em;
}`
        },
        {
            language: 'CSS',
            code: 
`/* FOOTER */

#footer {
    background-color: #eee;
    padding: 2em 0 5em;
}`
        },
        {
            language: 'HTML',
            code: 
`<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">`
        },
        {
            language: 'CSS',
            code: 
`h1, h2, h3 {
    font-weight: bold;
    margin: 16px 0;
    font-family: Oswald, sans-serif;
}`
        },
        {
            language: 'HTML',
            code: 
`<section id="list-actors">
    <h2>Principaux acteurs</h2>
    <ul id="actors">
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/Simon_Astier">simon astier</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/Alban_Lenoir">alban lenoir</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/S%C3%A9bastien_Lalanne">sébastien lalanne</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/G%C3%A9rard_Darier">gérard darier</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/Agn%C3%A8s_Boury">agnès boury</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Podetti">françois podetti</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/Arnaud_Joyet">arnaud joyet</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/Philippe_No%C3%ABl">philippe noël</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/%C3%89tienne_Fague">etienne fague</a></li>
        <li><a target="_blank" href="https://fr.wikipedia.org/wiki/Aurore_Pourteyron">aurore pourteyron</a></li>
    </ul>
</section>`
        },
        {
            language: 'CSS',
            code: 
`#actors {
    width: 600px;
    margin: 0 auto;
}

#actors li {
    background-color: #eee;
    color: darkred;
    margin: 0.3em;
    border-radius: 1em;
}

#actors li a {
    font-size: 0.8em;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 1em;
    /* par défaut <a> a un display inline. Pour lui appliquer des ppropriétés du box modèle, on lui met un display block */
    display: block;
}`
        },
        {
            language: 'CSS',
            code: 
`#actors li {
    background-color: #eee;
    color: darkred;
    margin: 0.3em;
    border-radius: 1em;
    font-size: 1em;
    transition: all 0.3s ease-out;
}

#actors li:hover {
    background-color: darkred;
    color: white;
    font-size: 1.2em;
}`
        },
        {
            language: 'HTML',
            code: 
`<section id="images">
    <h2>Quelques images de la série</h2>
    <div id="pictures">
        <article class="picture">
            <img src="..images/groupe.jpg" alt="Prêt à l'action">
            <h3>Prêt à l'action</h3>
            <p>La fine équipe du début de l'aventure</p>
        </article>
        
        <article class="picture">
            <img src="../images/hc-logo.png" alt="Logo">
            <h3>Logo</h3>
            <p>Logo de la célèbre ligue des justiciers</p>
        </article>
        <article class="picture">
            <img src="../images/groupe-costumes.jpg" alt="En costume">
            <h3>En costume</h3>
            <p>Les vaillants justiciers de Hero Corp en costume</p>
        </article>
    </div>
</section>`
        },
        {
            language: 'CSS',
            code: 
`#pictures .picture {
    width: 30%;
    margin: 1em auto;
    padding: 1.5em 1em;
    border: 1px solid #ccc;
}

#pictures .picture img {
    height: 120px;
}`
        }
    ],
    display: [
        {
            language: 'CSS',
            code: 
`#presentation-aside {
    /* objectif => float */
    float: right;
    width: 200px;
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid black;
    text-align: right;
    margin-bottom: 10px;
}`
        },
        {
            language: 'CSS',
            code: 
`#presentation strong {
    display: inline-block;
    font-weight: bold;
    width: 200px;
    padding: 20px;
    border: 1px solid black;
}`
        }
   ]
};

export const day5 = {
    challenge: [
        {
            language: 'HTML',
            code: 
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../css/reset.css">
        <link rel="stylesheet" href="../css/styles.css">
        <title>oFig</title>
    </head>
    <body>
        oFig Figurines et statuettes

        Figurines sur le thème Final Fantasy

        Final Fantasy Crisis Core
        Aerith Gainsborough
        Figurine de 7 pouces - livrée avec son packaging
        Ajouter au panier
        74,90 &euro;


        Final Fantasy VII
        Cloud Strife Remake
        Figurine de 8 pouces - livrée avec son packaging
        Ajouter au panier
        74,90 &euro; 59 &euro;


        Final Fantasy Advent Children
        Cloud Strife
        Figurine de 7 pouces - livrée avec son packaging
        Ajouter au panier
        98,90 &euro;

        oFig - toutes les images sont sous copyright SquareEnix
    </body>
</html>`
        },
        {
            language: 'HTML',
            code: 
`<div class="container">
    <header>
        oFig Figurines et statuettes

        Figurines sur le thème Final Fantasy
    </header>
    <main>
        <article class="item">
            Final Fantasy Crisis Core
            Aerith Gainsborough
            Figurine de 7 pouces - livrée avec son packaging
            Ajouter au panier
            74,90 &euro;
        </article>
        
        <article class="item">
            Final Fantasy VII
            Cloud Strife Remake
            Figurine de 8 pouces - livrée avec son packaging
            Ajouter au panier
            74,90 &euro; 59 &euro;
        </article>
        
        <article class="item">
            Final Fantasy Advent Children
            Cloud Strife
            Figurine de 7 pouces - livrée avec son packaging
            Ajouter au panier
            98,90 &euro;
        </article>
    </main>
    <footer>
        oFig - toutes les images sont sous copyright SquareEnix
    </footer>
</div>`
        },
        {
            language: 'HTML',
            code: 
`<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">`
        },
        {
            language: 'CSS',
            code: 
`body {
    font-family: Raleway, Arial, sans-serif;
    /* pas obligatoire mais ça donne un peu d'air à la page */
    padding-top: 120px;
}`
        },
        {
            language: 'HTML',
            code: 
`<header>
    <h1 class="logo">oFig 
        <span class="logo__desc">Figurines et statuettes</span>
    </h1>
    <div class="selection">Figurines sur le thème 
        <strong class="selection__current">Final Fantasy</strong>
    </div>
</header>`
        },
        {
            language: 'CSS',
            code: 
`header {
    background-color: #c80000;
    color: white;
}`
        },
        {
            language: 'CSS',
            code: 
`.logo {
    font-size: 2em;
    font-weight: 700;
    padding: 0.5em;
}

.logo__desc {
    /* rem prend pour référence la taille de l'élément racine, html
    rien de défini, on prend la taille par défaut du navigateur */
    font-size: 0.8rem;
}`
        },
        {
            language: 'CSS',
            code: 
`.selection {
    background-color: #666;
    text-align: center;
    /* pour les nombres à virgule commençant par 0, on peut omettre le 0 */
    padding: .5em;
}

.selection__current {
    font-size: 1.2em;
    font-style: italic;
}`
        },
        {
            language: 'HTML',
            code: 
`<footer>
    <p>oFig - toutes les images sont sous copyright SquareEnix</p>
</footer>`
        },
        {
            language: 'CSS',
            code: 
`/* FOOTER */

footer {
    background-color: #666;
    text-align: center;
    color: white;
    font-size: 0.8em;
    padding: 1em;
}`
        },
        {
            language: 'HTML',
            code: 
`<article class="item">
    <div class="item__image">
        <img src="../images/aerith.png" alt="Aerith Gainsborough - figurine">
    </div>
    <div class="item__content">
        <h3 class="item__content__category">Final Fantasy Crisis Core</h3>
        <h2 class="item__content__name">Aerith Gainsborough</h2>
        <p class="item__content__desc">Figurine de 7 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a href="#" class="item__buy__cart">Ajouter au panier</a>
        <span class="item__buy__price">
            74,90 &euro;
        </span>
    </div>
</article>`
        },
        {
            language: 'CSS',
            code: 
`.item {
    width: 250px;
    border: 1px solid #ccc;
    padding: .3em;
    margin: .3em;
    /* on va ajouter un effet sympa au survol de la souris, on prévoit une transition en douceur */
    transition: .5s;
}

.item:hover {
    box-shadow: 0 0 5px #ccc;
}`
        },
        {
            language: 'CSS',
            code: 
`.item__image img {
    /* on force l'image à ne pas dépacer la largeur de la div */
    max-width: 100%;
}`
        },
        {
            language: 'CSS',
            code: 
`.item__content {
    padding: .3em;
}

.item__content__category {
    text-transform: uppercase;
    color: #ccc;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    font-size: .7em;
    padding: .3em;
    margin: .3em 0;
}

.item__content__name {
    /* équivalent à font-weight: bold */
    font-weight: 700;
    font-size: 1.3em;
    margin: .5em 0
}

.item__content__desc {
    font-size: .8em;
}`
        },
        {
            language: 'CSS',
            code: 
`.item__buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 1em;
    margin-top: 1em;
    background-color: #c80000;
    /* encore un effet au survol, on prévoit une transition */
    transition: .5s;
}

.item__buy:hover {
    background-color: #333;
}

.item__buy__cart {
    font-size: .8em;
}

.item__buy__price {
    font-size: 1em;
    font-weight: 700;
}`
        },
        {
            language: 'CSS',
            code: 
`main {
    /* on donne une largeur max et on centre l'élément */
    width: 800px;
    margin: 1em auto;
    /* on indique que les éléments enfants doivent être placés en utilisant l'espace disponible en largeur pour leur donner de l'air */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}`
        },
        {
            language: 'HTML',
            code: 
`<article class="item">
    <div class="item__image">
        <img src="../images/cloud.png" alt="Cloud Strife - figurine">
    </div>
    <div class="item__content">
        <h3 class="item__content__category">Final Fantasy VII</h3>
        <h2 class="item__content__name">Cloud Strife Remake</h2>
        <p class="item__content__desc">Figurine de 8 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a href="#" class="item__buy__cart">Ajouter au panier</a>
        <span class="item__buy__price">
            <!-- 2 nouvelles balises : del et ins
            au niveau sémantique, elles symbolisent un avant et un après
            comme dans notre exemple : un ancien prix et un nouveau prix
            On ajoute un modifier à notre class CSS pour respecter le BEM -->
            <del class="item__buy__price--old">74,90 &euro;</del>
            <ins>59 &euro;</ins>
        </span>
    </div>
</article>`
        },
        {
            language: 'CSS',
            code: 
`.item__buy__price--old {
    /* on raye le prix */
    text-decoration: line-through;
    /* on remet le texte à la bonne taille */
    font-size: 0.8em;
    /* on enlève le gras */
    font-weight: normal;
}`
        },
        {
            language: 'HTML',
            code: 
`<article class="item">
    <div class="item__image">
        <img src="../images/cloud-ac.png" alt="Cloud Strife - figurine">
    </div>
    <div class="item__content">
        <h3 class="item__content__category">Final Fantasy Advent Children</h3>
        <h2 class="item__content__name">Cloud Strife</h2>
        <p class="item__content__desc">Figurine de 7 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a href="#" class="item__buy__cart">Ajouter au panier</a>
        <span class="item__buy__price">
            98,90 &euro;
        </span>
    </div>
</article>`
        },
        {
            language: 'HTML',
            code: 
`<article class="item">
    <div class="item__image">
        <img src="../images/cloud-bike.png" alt="Cloud Strife & Fenrir - figurine">
    </div>
    <div class="item__content">
        <h3 class="item__content__category">Final Fantasy VII</h3>
        <h2 class="item__content__name">Cloud Strife & Fenrir</h2>
        <p class="item__content__desc">Figurine de 7 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a class="item__buy__cart" href="">Ajouter au panier</a>
        <span class="item__buy__price">
            113,90 &euro;
        </span>
    </div>
</article>

<article class="item">
    <div class="item__image">
        <img src="../images/tifa.png" alt="Tifa Lockhart - figurine">
    </div>
    <div class="item__content">
        <h3 class="item__content__category">Final Fantasy Advent Children</h3>
        <h2 class="item__content__name">Tifa Lockhart</h2>
        <p class="item__content__desc">Figurine de 7 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a class="item__buy__cart" href="">Ajouter au panier</a>
        <span class="item__buy__price">
            <del class="item__buy__price--old">98,90 &euro;</del>
            <ins>69 &euro;</ins>
        </span>
    </div>
</article>

<article class="item">
    <div class="item__image">
        <img src="../images/vincent.png" alt="Vincent Valentine - figurine">
    </div>
    <div class="item__content">
        <h3 class="item-category">Final Fantasy VII</h3>
        <h2 class="item__content__name">Vincent Valentine</h2>
        <p class="item__content__desc">Figurine de 7 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a class="item__buy__cart" href="">Ajouter au panier</a>
        <span class="item__buy__price">
            74,90 &euro;
        </span>
    </div>
</article>

<article class="item">
    <div class="item__image">
        <img src="../images/barret.png" alt="Barret Wallace - figurine">
    </div>
    <div class="item__content">
        <h3 class="item-category">Final Fantasy VII</h3>
        <h2 class="item__content__name">Barret Wallace</h2>
        <p class="item__content__desc">Figurine de 8 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a class="item__buy__cart" href="">Ajouter au panier</a>
        <span class="item__buy__price">
            74,90 &euro;
        </span>
    </div>
</article>

<article class="item">
    <div class="item__image">
        <img src="../images/sephiroth.png" alt="Sephiroth - figurine">
    </div>
    <div class="item__content">
        <h3 class="item-category">Final Fantasy VII</h3>
        <h2 class="item__content__name">Sephiroth</h2>
        <p class="item__content__desc">Figurine de 10 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a class="item__buy__cart" href="">Ajouter au panier</a>
        <span class="item__buy__price">
            113,90 &euro;
        </span>
    </div>
</article>

<article class="item">
    <div class="item__image">
        <img src="../images/nanaki.png" alt="Nanaki - figurine">
    </div>
    <div class="item__content">
        <h3 class="item-category">Final Fantasy Advent Children</h3>
        <h2 class="item__content__name">Nanaki - Red XIII</h2>
        <p class="item__content__desc">Figurine de 5 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a class="item__buy__cart" href="">Ajouter au panier</a>
        <span class="item__buy__price">
            98,90 &euro;
        </span>
    </div>
</article>`
        },
        {
            language: 'CSS',
            code: 
`body {
    font-family: 'Raleway', Arial, sans-serif;
}

/* HEADER */

header {
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: #c80000;
    color: white;
    /* on s'assure que le header sera toujours affiché 'par dessus' le reste */
    z-index: 1;
}
...
main {
    padding-top: 100px;
    /* on donne une largeur max et on centre l'élément */
    max-width: 800px;
    margin: 1em auto;
    /* on indique que les éléments enfants doivent être placés en utilisant l'espace disponible en largeur pour leur donner de l'air */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}`
        },
        {
            language: 'HTML',
            code: 
`<article class="item">
    <div class="item__image">
        <img src="../images/cloud.png" alt="Cloud Strife - figurine">
    </div>
    <div class="item__content">
        <h3 class="item__content__category">Final Fantasy VII</h3>
        <h2 class="item__content__name">Cloud Strife Remake</h2>
        <p class="item__content__desc">Figurine de 8 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a href="#" class="item__buy__cart">Ajouter au panier</a>
        <span class="item__buy__price">
            <!-- 2 nouvelles balises : del et ins
            au niveau sémantique, elles symbolisent un avant et un après
            comme dans notre exemple : un ancien prix et un nouveau prix
            On ajoute un modifier à notre class CSS pour respecter le BEM -->
            <del class="item__buy__price--old">74,90 &euro;</del>
            <ins>59 &euro;</ins>
        </span>
    </div>
    <!-- on ajoute l'élément html constenant la démarque -->
    <div class="item--sales">-20%</div>
</article>
...
<article class="item">
    <div class="item__image">
        <img src="../images/tifa.png" alt="Tifa Lockhart - figurine">
    </div>
    <div class="item__content">
        <h3 class="item__content__category">Final Fantasy Advent Children</h3>
        <h2 class="item__content__name">Tifa Lockhart</h2>
        <p class="item__content__desc">Figurine de 7 pouces - livrée avec son packaging</p>
    </div>
    <div class="item__buy">
        <a class="item__buy__cart" href="">Ajouter au panier</a>
        <span class="item__buy__price">
            <del class="item__buy__price--old">98,90 &euro;</del>
            <ins>69 &euro;</ins>
        </span>
    </div>
    <div class="item--sales">-30%</div>
</article>`
        },
        {
            language: 'CSS',
            code: 
`.item {
    /* on positionne le parent, il servira de référence pour les positionnements en absolute */
    position: relative;
    width: 250px;
    border: 1px solid #ccc;
    padding: .3em;
    margin: .3em;
    /* on va ajouter un effet sympa au survol de la souris, on prévoit une transition en douceur */
    transition: .5s;
}

.item--sales {
    /* sortie du flow, on positionne l'élément avec comme référence le parent positionné le plus proche*/
    position: absolute;
    top: 10px;
    right: 10px;
    /* avec le border-radius, on peut donner une forme arrondie parfaite*/
    border-radius: 50%;
    background-color: #666;
    border: 4px solid #ccc;
    color: white;
    width: 70px;
    height: 70px;
    text-align: center;
    line-height: 60px;
    font-size: 1.4em;
    font-weight: 700;
}`
        },
        {
            language: 'HTML',
            code: 
`<div class="fixed-sales">soldes</div>`
        },
        {
            language: 'CSS',
            code: 
`.fixed-sales {
    /* on veut une position fixe à l'écran */
    position: fixed;
    left: 0;
    /* calc permet de faire des opérations de maths sur des valeurs d'unités différentes */
    top: calc(50% - 99px/2);
    background-color: #c80000;
    color: white;
    width: 25px;
    padding: 15px 5px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: .8em;
    text-align: center;
    /* on force l'affichage en vertical */
    word-break: break-all;
    /* on décompose le border-radius pour arrondir seulement les coins de droite */
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}`
        }
    ]
};

export const day7 = {
    atelier: [
        {
            language: 'HTML',
            code: 
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../css/reset.css">
        <link rel="stylesheet" href="../css/style.css">
        <title>Document</title>
    </head>
    <body>
        <div id="container">
            <section id="left-side" class="blueTest">

            </section>
            <section id="right-side" class=redTest>

            </section>
        </div>        
    </body>
</html>`
        },
        {
            language: 'CSS',
            code: 
`body {
    font-family: sans-serif;
}

/* HELPERS */

.redTest {
    background-color: rgba(255, 0, 0, 0.5);
}

.greenTest {
    background-color: rgba(0, 255, 0, 0.5);
}

.blueTest {
    background-color: rgba(0, 0, 255, 0.5);
}`
        },
        {
            language: 'CSS',
            code: 
`/* LAYOUT */

#container {
    display: flex;
}

section {
    width: 50%;
    height: 100vh;
}`
        },
        {
            language: 'HTML',
            code: 
`<section id="left-side">
    <header class="redTest">

    </header>
    <main class="greenTest">

    </main>
    <footer class="blueTest">
        
    </footer>
</section>`
        },
        {
            language: 'CSS',
            code: 
`section {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

#left-side {
    justify-content: space-between;
}

/* utile uniquement pendant la mise en place */
#left-side * {
    min-height: 100px;
}

#left-side main {
    /* avec cette instruction, le main prendra toute la place restante entre le header et le footer */
    flex-grow: 1;
}`
        },
        {
            language: 'HTML',
            code: 
`<section id="right-side">
    <header class="redTest">

    </header>
    <main class="greenTest">

    </main>
</section>`
        },
        {
            language: 'CSS',
            code: 
`/* utile uniquement pendant la mise en place */
#right-side header {
    min-height: 100px;
}

#right-side main {
    flex-grow: 1;
}`
        },
        {
            language: 'HTML',
            code: 
`<section id="left-side">
    <header>
        o'clock students news
    </header>
    <main>
        latest news from our students
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus ipsam mollitia nam doloribus tempore quod? Laborum et enim doloremque aliquam sequi debitis inventore nesciunt accusamus, distinctio consequuntur. Asperiores, saepe.
    </main>
    <footer>
        Plan du site
        Mentions légales
        Contact
    </footer>
</section>
<section id="right-side">
    <header>
        Latest news
    </header>
    <main>
        [news]Lorem ipsum dolor sit amet
        John Marchill
        le 21 Juillet 2019
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque suscipit nibh quis porttitor. Voilà, je tenais à le dire.
        
        [team]Le pair programming pour les n00bs
        Paul Darson
        le 2 Août 2019
        Le pair programming pour les dévs, c'est un peu comme certains fromages : c'est mieux à deux.
        
        [work]Pourquoi j'aime JS
        Bruce Ékoute
        le 7 Août 2019
        JavaScript est un langage très particulier, c'est indéniable. Je vous propose de faire le tour de toutes ces petites choses simples qui lui donnent une saveur si unique.
        
        [team]La situation de scribe
        Otis
        le 5 Septembre 2019
        Mais, vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres, des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres forgent une destinée...
        
        [work]Le travail : pourquoi ce n'est jamais naturel ?
        Trouveur d'Éperon de Wyverne
        le 6 Septembre 2019
        Le terme "travail" vient du latin "trepalium" qui signifie "torture". Voilà, je vous laisse avec ça.
        
        [news]Les chats augmentent la longévité
        Rincevent
        le 27 Septembre 2019
        Jusqu'à un certain nombre. Au delà de 28 chats, les scientifiques semblent quelque peu sceptiques. Surtout sur l'aspect budgétaire...
    </main>
</section>`
        },
        {
            language: 'CSS',
            code: 
`#container {
    display: flex;
}

section {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

/* LEFT SIDE */

#left-side {
    justify-content: space-between;
}`
        },
        {
            language: 'CSS',
            code: 
`#left-side {
    justify-content: space-between;
    background: url('../images/nicole.jpg') center/cover no-repeat
}`
        },
        {
            language: 'HTML',
            code: 
`<header>
    <h1 class="title">o'clock students news</h1>
</header>`
        },
        {
            language: 'CSS',
            code: 
`#left-side {
    justify-content: space-between;
    /* mise en place de Nicole
    - origine au centre de la section : center
    - couvre toute la place disponible : cover
    */
    background: url('../images/nicole.jpg') center/cover no-repeat;
    color: white;
    padding: 3em 2em 1em;
}

#left-side .title {
    width: 100px;
    font-size: 1.8em;
    font-weight: bold;
    padding-left: 50px;
    line-height: 1em;
    text-transform: uppercase;
    background: url('../images/onews.svg') no-repeat;
    background-size: 35px;
    background-position: 0 4px;
}`
        },
        {
            language: 'HTML',
            code: 
`<main class="news">
    <h2 class="news__title">Latest news <span>from our students</span></h2>
    <p class="news__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus ipsam mollitia nam doloribus tempore quod? Laborum et enim doloremque aliquam sequi debitis inventore nesciunt accusamus, distinctio consequuntur. Asperiores, saepe.</p>
</main>`
        },
        {
            language: 'CSS',
            code: 
`.news {
    background-color: rgba(255, 255, 255, 0.2);
    text-align: right;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.news__title {
    font-size: 1.6em;
    font-weight: bold;
    padding-bottom: 0.5em;
}

.news__title span {
    font-size: 1rem;
    font-weight: normal;
    font-style: italic;
}

.news__text {
    width: 80%;
    line-height: 1.7em;
}`
        },
        {
            language: 'HTML',
            code: 
`<footer>
    <nav class="menu">
        <a class="menu__link" href="#">Plan du site</a>
        <a class="menu__link" href="#">Mentions légales</a>
        <a class="menu__link" href="#">Contact</a>
    </nav>
</footer>`
        },
        {
            language: 'CSS',
            code: 
`.menu {
    display: flex;
    justify-content: flex-end;
    padding: 0.3em;
}

.menu__link {
    margin: 0 1.5em;
}`
        },
        {
            language: 'CSS',
            code: 
`/* RIGHT SIDE */

#right-side {
    background-color: #f9f9f9;
}`
        },
        {
            language: 'HTML',
            code: 
`<header>
    <h1 class="title">Latest news</h1>
</header>`
        },
        {
            language: 'CSS',
            code: 
`#right-side .title {
    font-size: 1.6em;
    font-weight: bold;
    padding: 1em;
}`
        },
        {
            language: 'HTML',
            code: 
`<main>
    <article class="article">
        [news]Lorem ipsum dolor sit amet
        John Marchill
        le 21 Juillet 2019
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque suscipit nibh quis porttitor. Voilà, je tenais à le dire.
    </article>
    <article class="article">
        [team]Le pair programming pour les n00bs
        Paul Darson
        le 2 Août 2019
        Le pair programming pour les dévs, c'est un peu comme certains fromages : c'est mieux à deux.
    </article>
    <article class="article">
        [work]Pourquoi j'aime JS
        Bruce Ékoute
        le 7 Août 2019
        JavaScript est un langage très particulier, c'est indéniable. Je vous propose de faire le tour de toutes ces petites choses simples qui lui donnent une saveur si unique.
    </article>
    <article class="article">
        [team]La situation de scribe
        Otis
        le 5 Septembre 2019
        Mais, vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres, des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres forgent une destinée...
    </article>
    <article class="article">
        [work]Le travail : pourquoi ce n'est jamais naturel ?
        Trouveur d'Éperon de Wyverne
        le 6 Septembre 2019
        Le terme "travail" vient du latin "trepalium" qui signifie "torture". Voilà, je vous laisse avec ça.
    </article>
    <article class="article">
        [news]Les chats augmentent la longévité
        Rincevent
        le 27 Septembre 2019
        Jusqu'à un certain nombre. Au delà de 28 chats, les scientifiques semblent quelque peu sceptiques. Surtout sur l'aspect budgétaire...
    </article>
</main>`
        },
        {
            language: 'CSS',
            code: 
`#right-side main {
    display: flex;
    flex-wrap: wrap;
}

.article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
}`
        },
        {
            language: 'HTML',
            code: 
`<article class="article">
    <span class="article__badge badge--news">news</span>
    <h2 class="article__title">Lorem ipsum dolor sit amet</h2>
    <div class="article__meta">
        <img class="meta__icon" src="../images/icon-john.png" alt="John Marchill">
        <strong class="meta__author">John Marchill</strong>
        <span class="meta__date">le 21 Juillet 2019</span>
    </div>
    <p class="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque suscipit nibh quis porttitor. Voilà, je tenais à le dire.</p>
    <a class="article__detail" href="#">Continue reading</a>
</article>`
        },
        {
            language: 'CSS',
            code: 
`.badge--news {
    background-color: #98dc62;
}

.badge--team {
    background-color: #dc5e53;
}

.badge--work {
    background-color: #0766f0;
}

.article__badge {
    font-size: .8em;
    font-weight: bold;
    border-radius: 3px;
    color: white;
    padding: .3em .5em;
}

.article__title {
    font-size: 1.5em;
    font-weight: bold;
    padding: 1.3em 0;
}

.article__meta {
    font-size: .8em;
}

.meta__icon {
    width: 25px;
    vertical-align: middle;
}

.meta__author {
    padding-left: 1em;
    font-weight: bold;
}

.meta__date {
    color: #aaa;
}

.article__text {
    line-height: 1.4em;
    padding: 1em 0;
}

.article__detail {
    color: #007bff;
    font-weight: bold;
    font-size: 0.9em;
    text-decoration: underline;
}

.article__detail:hover {
    color: #0056b3;
}`
        },
        {
            language: 'HTML',
            code: 
`<main>
    <article class="article">
        <span class="article__badge badge--news">news</span>
        <h2 class="article__title">Lorem ipsum dolor sit amet</h2>
        <div class="article__meta">
            <img class="meta__icon" src="../images/icon-john.png" alt="John Marchill">
            <strong class="meta__author">John Marchill</strong>
            <span class="meta__date">le 21 Juillet 2019</span>
        </div>
        <p class="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque suscipit nibh quis porttitor. Voilà, je tenais à le dire.</p>
        <a class="article__detail" href="#">Continue reading</a>
    </article>
    <article class="article">
        <span class="article__badge badge--team">team</span>
        <h2 class="article__title">Le pair programming pour les n00bs</h2>
        <div class="article__meta">
            <img class="meta__icon" src="../images/icon-dar.png" alt="Paul Darson">
            <strong class="meta__author">Paul Darson</strong>
            <span class="meta__date">le 2 Août 2019</span>
        </div>
        <p class="article__text">Le pair programming pour les dévs, c'est un peu comme certains fromages : c'est mieux à deux.</p>
        <a class="article__detail" href="#">Continue reading</a>
    </article>
    <article class="article">
        <span class="article__badge badge--work">work</span>
        <h2 class="article__title">Pourquoi j'aime JS</h2>
        <div class="article__meta">
            <img class="meta__icon" src="../images/icon-ohz.png" alt="Bruce Ékoute">
            <strong class="meta__author">Bruce Ékoute</strong>
            <span class="meta__date">le 7 Août 2019</span>
        </div>
        <p class="article__text">JavaScript est un langage très particulier, c'est indéniable. Je vous propose de faire le tour de toutes ces petites choses simples qui lui donnent une saveur si unique.</p>
        <a class="article__detail" href="#">Continue reading</a>
    </article>
    <article class="article">
        <span class="article__badge badge--team">team</span>
        <h2 class="article__title">La situation de scribe</h2>
        <div class="article__meta">
            <img class="meta__icon" src="../images/icon-spr.png" alt="Otis">
            <strong class="meta__author">Otis</strong>
            <span class="meta__date">le 5 Septembre 2019</span>
        </div>
        <p class="article__text">Mais, vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres, des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres forgent une destinée...</p>
        <a class="article__detail" href="#">Continue reading</a>
    </article>
    <article class="article">
        <span class="article__badge badge--work">work</span>
        <h2 class="article__title">Le travail : pourquoi ce n'est jamais naturel ?</h2>
        <div class="article__meta">
            <img class="meta__icon" src="../images/icon-tr.png" alt="Trouveur d'Éperon de Wyverne">
            <strong class="meta__author">Trouveur d'Éperon de Wyverne</strong>
            <span class="meta__date">le 6 Septembre 2019</span>
        </div>
        <p class="article__text">Le terme "travail" vient du latin "trepalium" qui signifie "torture". Voilà, je vous laisse avec ça.</p>
        <a class="article__detail" href="#">Continue reading</a>
    </article>
    <article class="article">
        <span class="article__badge badge--news">news</span>
        <h2 class="article__title">Les chats augmentent la longévité</h2>
        <div class="article__meta">
            <img class="meta__icon" src="../images/icon-tre.png" alt="Rincevent">
            <strong class="meta__author">Rincevent</strong>
            <span class="meta__date">le 27 Septembre 2019</span>
        </div>
        <p class="article__text">Jusqu'à un certain nombre. Au delà de 28 chats, les scientifiques semblent quelque peu sceptiques. Surtout sur l'aspect budgétaire...</p>
        <a class="article__detail" href="#">Continue reading</a>
    </article>
</main>`
        },
        {
            language: 'CSS',
            code: 
`#left-side {
    justify-content: space-between;
    /* mise en place de Nicole
    - origine au centre de la section : center
    - couvre toute la place disponible : cover
    */
    background: url('../images/nicole.jpg') center/cover no-repeat;
    color: white;
    padding: 3em 2em 1em;
    text-shadow: 1px 1px 3px black;
}

...

.news {
    background-color: rgba(255, 255, 255, 0.2);
    text-align: right;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-shadow: 0.5px 0.5px 1px #aaa;
}

...

.menu__link {
    margin: 0 1.5em;
    transition: all 0.3s
}

.menu__link:hover {
    text-decoration: underline;
    color: red;
    text-shadow: .5px .5px 1px white;
}`
        },
        {
            language: 'CSS',
            code: 
`body {
    font-family: sans-serif;
    overflow: hidden;
}

...

#right-side main {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
}`
        },
        {
            language: 'CSS',
            code: 
`.article__detail {
    color: #007bff;
    font-weight: bold;
    font-size: 0.9em;
    text-decoration: underline;
    margin-top: auto;
}`
        }
    ],
    form: [
        {
            language: 'HTML',
            code:
`index.html
<section id="left-side" class="nicole">

contact.html
<section id="left-side" class="gabriel">`
        },
        {
            language: 'CSS',
            code:
`/* LEFT SIDE */

#left-side {
    justify-content: space-between;
    color: white;
    padding: 3em 2em 1em;
    text-shadow: 1px 1px 3px black;
}

.nicole {
    /* mise en place de Nicole
    - origine au centre de la section : center
    - couvre toute la place disponible : cover
    */
    background: url('../images/nicole.jpg') center/cover no-repeat;
}

.gabriel {
    background: url('../images/gabriel.jpg') center/cover no-repeat;
}`
        },
        {
            language: 'HTML',
            code:
`<main class="news news--nicole">`
        },
        {
            language: 'CSS',
            code:
`.news {
    text-align: right;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.news--nicole {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0.5px 0.5px 1px #aaa;
}`
        },
        {
            language: 'HTML',
            code:
`<main class="news">
    <h2 class="news__title">Say a word <span>contact us</span></h2>
    <p class="news__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus ipsam mollitia nam doloribus tempore quod? Laborum et enim doloremque aliquam sequi debitis inventore nesciunt accusamus, distinctio consequuntur. Asperiores, saepe.</p>
</main>

...

<section id="right-side">
    <header>
        <h1 class="title">Contact</h1>
    </header>
    <main>
        
    </main>
</section>`
        },
        {
            language: 'HTML',
            code:
`<main id="contact">
    <article>
        <form id="form" action="">
            <!-- il faudrait pouvoir grouper ces champs car ils traitent du même sujet -->
            <!-- et "étiqueter" ce groupe : Identité -->
            <fieldset>
                <legend>Identité</legend>
                <div class="form-row">
                    <p class="label">Je suis</p>
                    <div class="input-group">
                        <!-- ici, un petit bouton "switch" (l'un ou l'autre), celui-là serait coché par défaut -->
                        <label for="civilite-2">une femme</label>
                        <span>/</span>
                        <!-- là, le deuxième -->
                        <label for="civilite-1">un homme</label>
                    </div>
                </div>
                <div class="form-row">
                    <label class="label" for="prenom">Mon prénom est </label>
                    <!-- un champ texte tout bidon, mais avec Prénom écrit dedans -->
                </div>
                <div class="form-row">
                    <label class="label" for="nom">Et mon nom, </label>
                    <!-- le même, avec Nom dedans -->
                </div>
                <div class="form-row">
                    <label class="label" for="source">J'ai connu ce site grâce à </label>
                    <!-- là, une petite liste de sources, mais faut pas que ça prenne trop de place, elle pourrait évoluer avec le temps -->
                </div>
            </fieldset>
            <!-- </groupe de champs> -->
            <!-- deuxième groupe de champs : celui du message -->
            <!-- Idem, un petit libellé pour guider l'utilisateur 👌 -->
            <fieldset>
                <legend>Message</legend>
                <div class="form-row">
                    <label class="label" for="email">Répondez-moi via</label>
                    <!-- un champ pour l'adresse e-mail (mais vraiment pour une adresse e-mail, faut pas qu'on puisse rentrer n'importe quoi dedans) -->
                </div>
                <div class="form-row">
                    <label class="label" for="message">Je voulais vous dire que</label>
                    <!-- une belle zone de texte pour pouvoir nous écrire tout un roman 😍 -->
                </div>
                <div class="form-row">
                    <label class="label" for="file">Et vous montrer ça aussi</label>
                    <!-- il parait qu'on peut envoyer des fichiers, make it happen -->
                </div>
            </fieldset>
            <!-- </groupe de champs> -->
            <!-- Là, c'est plus pour la distinction visuelle mais faudrait aussi créer un groupe... de 1 🤷 -->
            <fieldset>
                <div class="form-row">
                    <label class="label" for="info">Je certifie la véracité de ces informations.</label>
                    <!-- là, une cochette -->
                </div>
            </fieldset>
            <!-- </groupe de champs> -->
            <!-- un bouton pour envoyer le tout -->
        </form>
    </article>
</main>`
        },
        {
            language: 'CSS',
            code:
`/* FORMULAIRE */
#right-side #contact {
    background-color: #fff;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

#form {
    padding: 2em;
    margin: 2em;
    border: 1px solid #eaeaea;
}
  
#form fieldset {
    border-left: 1px solid #4cced3;
    padding: .5em 1em 0;
    margin-bottom: 2em;
}
#form legend {
    margin-left: -.3em;
    font-size: 1.1em;
}
  
.form-row {
    display: flex;
    margin-bottom: .4em;
}
  
.form-row .label {
    flex-basis: 30%;
    margin: 0;
    padding-right: 3%;
}
  
  /* tous les enfants direct d'un élément ayant la class form-row */
  /* sauf les .label, vu qu'ils ont des règles plus spécifiques définies juste au dessus 😉 */
.form-row > * {
    flex-basis: 70%;
}
  
.input-group {
    display: flex;
    align-items: center;
}
  
.input-group > * {
    margin: 0 .5em 0 0;
}
  
  /* moche mais bon, sinon la cochette prend toute la largeur (enfin, 70%), pas sûr que ça rende bien sur tous les navigateurs 🤔 */
#info {
    flex-basis: 1em;
}
  
#contact input[type=text],
#contact input[type=email],
#contact textarea,
#contact select {
     background-color: #f9f9f9;
    border: none;
    border-bottom: 1px solid #4cced3;
}
#contact input[type=email] {
    width: 100%;
}
#contact textarea {
    padding: .2em;
    width: 100%;
}
#contact button {
    background-color: #4cced3;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    font-size: 1.3em;
    padding: 5px 10px;
}`
        },
        {
            language: 'HTML',
            code:
`<form id="form" action="">
    <!-- il faudrait pouvoir grouper ces champs car ils traitent du même sujet -->
    <!-- et "étiqueter" ce groupe : Identité -->
    <fieldset>
        <legend>Identité</legend>
        <div class="form-row">
            <p class="label">Je suis</p>
            <div class="input-group">
                <!-- ici, un petit bouton "switch" (l'un ou l'autre), celui-là serait coché par défaut -->
                <label for="civilite-2">une femme</label>
                <span>/</span>
                <!-- là, le deuxième -->
                <label for="civilite-1">un homme</label>
            </div>
        </div>
        <div class="form-row">
            <label class="label" for="prenom">Mon prénom est </label>
            <!-- un champ texte tout bidon, mais avec Prénom écrit dedans -->
        </div>
        <div class="form-row">
            <label class="label" for="nom">Et mon nom, </label>
            <!-- le même, avec Nom dedans -->
        </div>
        <div class="form-row">
            <label class="label" for="source">J'ai connu ce site grâce à </label>
            <!-- là, une petite liste de sources, mais faut pas que ça prenne trop de place, elle pourrait évoluer avec le temps -->
        </div>
    </fieldset>
    <!-- </groupe de champs> -->
    <!-- deuxième groupe de champs : celui du message -->
    <!-- Idem, un petit libellé pour guider l'utilisateur 👌 -->
    <fieldset>
        <legend>Message</legend>
        <div class="form-row">
            <label class="label" for="email">Répondez-moi via</label>
            <!-- un champ pour l'adresse e-mail (mais vraiment pour une adresse e-mail, faut pas qu'on puisse rentrer n'importe quoi dedans) -->
        </div>
        <div class="form-row">
            <label class="label" for="message">Je voulais vous dire que</label>
            <!-- une belle zone de texte pour pouvoir nous écrire tout un roman 😍 -->
        </div>
        <div class="form-row">
            <label class="label" for="file">Et vous montrer ça aussi</label>
            <!-- il parait qu'on peut envoyer des fichiers, make it happen -->
        </div>
    </fieldset>
    <!-- </groupe de champs> -->
    <!-- Là, c'est plus pour la distinction visuelle mais faudrait aussi créer un groupe... de 1 🤷 -->
    <fieldset>
        <div class="form-row">
            <label class="label" for="info">Je certifie la véracité de ces informations.</label>
            <!-- là, une cochette -->
        </div>
    </fieldset>
    <!-- </groupe de champs> -->
    <!-- un bouton pour envoyer le tout -->
</form>`
        },
        {
            language: 'HTML',
            code:
`<p class="label">Je suis</p>
<div class="input-group">
    <!-- ici, un petit bouton "switch" (l'un ou l'autre), celui-là serait coché par défaut -->
    <input type="radio" id="civilite-2" name=civilite value="2" checked>
    <label for="civilite-2">une femme</label>
    <span>/</span>
    <!-- là, le deuxième -->
    <input type="radio" id="civilite-1" name=civilite value="1">
    <label for="civilite-1">un homme</label>
</div>`
        },
        {
            language: 'HTML',
            code:
`<div class="form-row">
    <label class="label" for="prenom">Mon prénom est </label>
    <!-- un champ texte tout bidon, mais avec Prénom écrit dedans -->
    <input type="text" id="prenom" name="prenom" placeholder="Prénom">
</div>
<div class="form-row">
    <label class="label" for="nom">Et mon nom, </label>
    <!-- le même, avec Nom dedans -->
    <input type="text" id="nom" name="nom" placeholder="Nom">
</div>`
        },
        {
            language: 'HTML',
            code:
`<div class="form-row">
    <label class="label" for="source">J'ai connu ce site grâce à </label>
    <!-- là, une petite liste de sources, mais faut pas que ça prenne trop de place, elle pourrait évoluer avec le temps -->
    <select name="source" id="source">
        <option value="">Choisir ...</option>
        <option value="Facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
        <option value="Google">Google</option>
        <option value="Bouche à oreille">Bouche à oreille</option>
        <option value="JT de 13h de Jean-Pierre Pernault">JT de 13h de Jean-Pierre Pernault</option>
        <option value="Autre">Autre</option>
    </select>
</div>`
        },
        {
            language: 'HTML',
            code:
`<div class="form-row">
    <label class="label" for="email">Répondez-moi via</label>
    <!-- un champ pour l'adresse e-mail (mais vraiment pour une adresse e-mail, faut pas qu'on puisse rentrer n'importe quoi dedans) -->
    <input type="email" id="email" name="email" placeholder="Adresse e-mail">
</div>`
        },
        {
            language: 'HTML',
            code:
`<div class="form-row">
    <label class="label" for="message">Je voulais vous dire que</label>
    <!-- une belle zone de texte pour pouvoir nous écrire tout un roman 😍 -->
    <textarea name="message" id="message" rows="5" placeholder="Votre message"></textarea>
</div>`
        },
        {
            language: 'HTML',
            code:
`<div class="form-row">
    <label class="label" for="file">Et vous montrer ça aussi</label>
    <!-- il parait qu'on peut envoyer des fichiers, make it happen -->
    <input type="file" name="file" id="file">
</div>`
        },
        {
            language: 'HTML',
            code:
`<fieldset>
    <div class="form-row">
        <label class="label" for="info">Je certifie la véracité de ces informations.</label>
        <!-- là, une cochette -->
        <input type="checkbox" name="info" id="info">
    </div>
</fieldset>`
        },
        {
            language: 'HTML',
            code:
`<!-- un bouton pour envoyer le tout -->
<button>Envoyer</button>`
        }
    ]
};

export const day8 = {
    challenge: [
        {
            language: 'HTML',
            code:
`<div class="container">
    <header>
        <h1 class="logo">oFig 
            <span class="logo__desc">Figurines et statuettes</span>
        </h1>
        <div class="selection">Votre panier 
            <strong class="selection__current">3 produits</strong>
        </div>
    </header>
    <main class="cart">
    </main>
    <footer>
        <p>oFig - toutes les images sont sous copyright SquareEnix</p>
    </footer>
    <div class="fixed-sales">soldes</div>
</div>`
        },
        {
            language: 'CSS',
            code:
`/* CART */

.cart {
    width: 600px;
    margin: 1em auto;
    flex-direction: column;
    align-items: center;
}`
        },
        {
            language: 'HTML',
            code:
`<form action="">
    <h2>Votre panier</h2>
    <section class="cart__section">

    </section>
    <h2>Préférences de livraison</h2>
    <section class="cart__section">

    </section>
    <!-- montant à payer-->
    <section class="cart__section">

    </section>
    <!-- buttons -->
    <section class="cart__section">
        
    </section>
</form>`
        },
        {
            language: 'CSS',
            code:
`.cart h2 {
    font-size: 1.3em;
    font-weight: bold;
    margin: .8em 0
}

.cart__section {
    padding: 1em;
    border-bottom: 1px solid #ccc;
}`
        },
        {
            language: 'HTML',
            code:
`<section class="cart__section">
    <table class="cart__table">
        <thead>
            <tr>
                <th>Figurine</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cloud Strife</td>
                <td>59 &euro;</td>
                <td>
                    <input class="cart__quantity" type="number" value="1">
                    <a class="cart__remove" href="#">supprimer</a>
                </td>
            </tr>
            <tr>
                <td>Tifa Lockhart</td>
                <td>69 &euro;</td>
                <td>
                    <input class="cart__quantity" type="number" value="1">
                    <a class="cart__remove" href="#">supprimer</a>
                </td>
            </tr>
            <tr>
                <td>Barret Wallace</td>
                <td>69 &euro;</td>
                <td>
                    <input class="cart__quantity" type="number" value="1">
                    <a class="cart__remove" href="#">supprimer</a>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td class="cart__total" colspan=2>Total de la commande</td>
                <td class="cart__price">197 &euro;</td>
            </tr>
        </tfoot>
    </table>
</section>`
        },
        {
            language: 'CSS',
            code:
`.cart__table {
    text-align: center;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart__table thead {
    font-size: 1.2em;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
}

.cart__table th, .cart__table td {
    padding: .5em 0;
}

.cart__quantity {
    width: 40px;
}

.cart__remove {
    color: #ca3a28;
    font-size: .7em;
    text-decoration: underline;
}

.cart__total {
    font-weight: bold;
}

.cart__price {
    color: #ca3a28;
    font-size: 1.6em;
    font-weight: bold;
}`
        },
        {
            language: 'HTML',
            code:
`<section class="cart__section cart__section--column">
    <div class="cart__livraison">
        <h3>Où souhaitez-vous être livré ?</h3>
        <label for="current-address">
            <input type="radio" id="current-address" name="shipping" checked>
            Mon adresse courante
        </label>
        <label for="other-address">
            <input type="radio" id="other-address" name="shipping">
            Autre adresse
        </label>
        <h3>Options</h3>
        <label for="sms">
            <input type="checkbox" name="sms" id="sms" checked>
            Suivi de livraison par sms (inclus)
        </label>
        <label for="money-back">
            <input type="checkbox" name="money-back" id="money-back" checked>
            Satisfait ou remboursé (+ 2 euros)
        </label>
        <label for="care">
            <input type="checkbox" name="care" id="care" checked>
            Garantie 2 ans (+ 10 euros)
        </label>
    </div>
    <div class="cart__livraison">
        <h3>Adresse</h3>
    </div>
</section>`
        },
        {
            language: 'CSS',
            code:
`.cart__section--column {
    display: flex;
    justify-content: space-between;
}

.cart__livraison {
    margin-bottom: 1em;
}

.cart__section h3 {
    font-weight: bold;
    color: #666;
    padding: 1em 0;
    margin-bottom: .5em;
}

.cart__section label {
    display: block;
    font-size: .8em;
    margin-bottom: .5em;
}`
        },
        {
            language: 'HTML',
            code:
`<div class="cart__livraison cart__livraison--adresse">
    <h3>Adresse</h3>
    <label for="street">Rue</label>
    <input type="text" id="street" name="street">
    <label for="zipcode">Code postal</label>
    <input type="text" id="zipcode" name="zipcode">
    <label for="city">Ville</label>
    <input type="text" id="city" name="city">
    <h3>Informations complémentaires</h3>
    <label for="infos">interphone, bâtiment, etc...</label>
    <textarea name="infos" id="infos"></textarea>
</div>`
        },
        {
            language: 'CSS',
            code:
`.cart__livraison--adresse input, .cart__livraison--adresse textarea {
    width: 100%;
    padding: .5em .8em;
    margin-bottom: .3em;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #f8f8f8;
}`
        },
        {
            language: 'HTML',
            code:
`<!-- montant à payer-->
<section class="cart__section">
    <div class="cart__amount">
        <span class="cart__total">Montant total à régler :</span>
        <span class="cart__price">197 &euro;</span>
    </div>
</section>`
        },
        {
            language: 'CSS',
            code:
`.cart__amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}`
        },
        {
            language: 'HTML',
            code:
`<!-- buttons -->
<section class="cart__section cart__section--column">
    <button class="cart__button cart__button--continue">Continuer vos achats</button>
    <button class="cart__button cart__button--submit">Valider et payer</button>
</section>`
        },
        {
            language: 'CSS',
            code:
`.cart__button {
    border: none;
    padding: 1em 1.6em;
    font-weight: bold;
    font-size: 1em;
    transition: .5s;
}

.cart__button:hover {
    background-color: #666;
    color: white;
}

.cart__button--continue {
    background-color: #ccc;
    color: black;
}
.cart__button--submit {
    background-color: #c80000;
    color: white;
}`
        },
        {
            language: 'CSS',
            code:
`.cart__table tbody tr:nth-child(2n+1) {
    background-color: #eee;
}`
        }
    ],
    rwd:[
        {
            language: 'CSS',
            code:
`@media print {
    header, footer, .fixed-sales, .cart__section:last-child {
        display: none;
    }
}`
        },
        {
            language: 'CSS',
            code:
`@media screen and (min-width: 1000px) {
}`
        },
        {
            language: 'CSS',
            code:
`@media screen and (min-width: 1000px) {
    .cart {
      width:900px;
    }
    .cart__section--column {
      justify-content: space-around;
    }
}`
        },
        {
            language: 'CSS',
            code:
`@media screen and (max-width: 900px) {
    .logo {
        text-align: center;
    }
}`
        },
        {
            language: 'CSS',
            code:
`@media screen and (max-width: 700px) {
    html {
        font-size: 12px;
    }
}`
        },
        {
            language: 'CSS',
            code:
`@media screen and (max-width: 700px) {
    html {
        font-size: 14px;
    }
    .cart {
        width: 90%;
    }
    .cart__section--column {
        width: 80%;
        margin: auto;
        flex-direction: column;
    }
    .cart__section label {
        font-size: 1em;
    }
    .fixed-sales {
        font-size: 1em;
    }
}`
        }
    ]
}