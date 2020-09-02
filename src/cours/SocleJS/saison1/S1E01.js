import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce} from "../../../common";
import {day1 as snippets} from "./Code/snippets";

import "../../style.scss"

const S1E01 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Bienvenue chez O'Clock</div>
            <div className="Inner">
                <List>
                    <Card title="Environnement" duration="1:30:00">
                        <ListItem title="J'me présente, je m'appelle ... Nico" />
                        <Doc type="Ressource" url="https://github.com/O-clock-FS-JS/programmeSocleJS/projects" />
                        <ListItem title="Programme des réjouissances">
                            <Item text="Voilà un peu à quelle sauce on va vous cuisiner" />
                            <Item text="On commence doucement en S1, on sort tranquillement du parking" />
                            <Item text="HTML et CSS, vous connaissez déjà un tit peu peut-être" />
                            <Item text="S2, on passe la seconde, on découvre JS en front" />
                            <Item text="On commence à intégrer un peu de logique dans notre code" />
                            <Item text="S3, on accélère un coup sur la départementale" />
                            <Item text="Client/serveur, JS côté back avec Node" />
                            <Item text="S4, on accélère encore un coup, c'est la 4 voies à 110" />
                            <Item text="On découvre la persistence, le stockage en BDD" />
                            <Item text="S5, là c'est l'autoroute, un bon 130 bien soutenu" />
                            <Item text="On reprend tout ce qu'on a vu avant, on mélange bien et on met à cuire" />
                            <Item text="Ca paraitra peut-être un peu indigeste ..." />
                            <Item text="La 1ère fois qu'on suit une recette, le résultat pas toujours top" />
                            <Item text="Mais faut pas se décourager, faut juste recommencer ! En code, tout pareil" />
                            <Item text="Après, S6, S7, on accélère plus mais pratique, pratique, pratique et ... pratique pour finir !" />
                            <Item text="Enfin la S8, on souffle un peu, on découvre, on explore" />
                            <Item text="Pour que vous voyez un peu plus la taille du terrain de jeu, l'est grand !!" />
                        </ListItem>
                        <Transition>
                            <BoxItem text="Voilà un peu le programme du socle" />
                            <BoxItem text="Mais avant d'essayer de révolutionner le monde du web, faut commencer par le début" />
                            <BoxItem text="On a des outils à notre dispo, on va faire ou refaire un 'tit tour d'horizon" />
                        </Transition>
                        <ListItem title="Nos outils">
                            <Item text="Vous l'avez déjà fait en S0, on se le refait ensemble" />
                            <Item text="Déjà, le 1er, l'essentiel, le nerf de la guerre : le cockpit" />
                            <Item text="Plusieurs éléments, le principal pour nous, le chat" />
                        </ListItem>
                        <ListItem title="Chat">
                            <Item text="C'est notre prinicpal outil de comm" />
                            <Item text="Grâce à lui, cours vivant, interactif, on échange on discute" />
                            <Item text="Je compte sur vous pour l'utiliser à max alors n'hésitez pas !" />
                            <Item text="On est chez o'clock, pas à l'ENA, les blagues pourries sont les bienvenues" />
                            <Item text="Faut qu'on bosse, mais pas obligé de le faire en faisant la gueule" />
                        </ListItem>
                        <ListItem title="Emojis chat">
                            <Item text="Déjà, en cliquant sur votre photo, vous pouvez ajouter un émoji pour mettre votre humeur du jour ou du moment" />
                            <Item text="Si vous être chauds, si vous êtes dans le gaz, peu importe, indiquez votre humeur !" />
                            <Item text="Ca m'aide de mon côté à prendre la température" />
                            <Item text="plein de têtes à l'envers, c'est le moment de faire un récap ... ou une pause !" />
                            <Item text="Que des lunettes del sol, on est bon, on est à fond !" />
                            <Item text="Vous pouvez aussi le faire dans le chat même, pour réagir à un truc sur le coup" />
                            <Item text="Alors, n'hésitez pas, dites-moi comment vous vous sentez !" />
                        </ListItem>
                        <ListItem title="Types de messages">
                            <Item text="Dans ce chat, vous pouvez mettre plusieurs types de messages" />
                            <Item text="Le classique : vous tapez le texte et vous validez avec entrée" />
                            <Item text="Le snippet pour envoyer un bout de code, 2 solutions :" />
                            <SubItem text="le bouton plus, ajouter un snippet" />
                            <SubItem text="Vous encadrez votre texte avec 3 baktiks (accents graves)" />
                            <Item text="Le spoiler pour répondre aux questions" />
                            <Item text="Moi je vois en direct mais c'est masqué pour les collègues" />
                            <SubItem text="le bouton plus, ajouter un spoiler" />
                            <SubItem text="Vous encadrez votre texte avec 3 dièses" />
                            <Item text="Vous pouvez mixer les 2, faire un spoiler d'un bout de code" />
                            <Item text="### ``` code ```###" />
                            <Item text="Pour faire un message sur plusieurs lignes :" />
                            <SubItem text="Sous mac : option + entrée" />
                            <SubItem text="Sous windows/linux, sais pas trop ... : alt + entrée j'imagine" />
                        </ListItem>
                        <ListItem title="Tags">
                            <Item text="vous avez aussi des messages particuliers, des tags" />
                            <Item text="@freeze : pour me signaler que l'écran est figé, ça bip dans l'oreillette" />
                            <Item text="@question suivi de votre question : ça met le message dans un onglet spécial pour moi" />
                            <Item text="Mettez bien le tag en début de message, sinon j'ai pas le texte de la question, c'est moins pratique pour la retrouver" />
                            <Item text="Pour tagguer quelqu'un, @ + son nom cockpit" />
                            <Item text="Pour vos noms cockpit, pas d'espace, pas de caractères chelous, sinon pas de tag ..." />
                        </ListItem>
                        <ListItem title="Sondage">
                            <Item text="Je peux lancer un sondage pour vous poser une quest, vous demander votre avis, ..." />
                            <Item text="Vous cliquez et je vois les réponses" />
                            <Item text="Je peux même savoir qui a répondu quoi, tit côté Big Brother, c'est cool !" />
                            <Item text="Attention, vous pouvez pas changer votre réponse" />
                            <Item text="Si vous vous gourez, un 'tit message pour me le signaler" />
                        </ListItem>
                        <ListItem title="Pin">
                            <Item text="Des fois je vous mettrez des liens vers des ressources, des messages importants, ..." />
                            <Item text="Je vais les accrocher, vous pourrez les retrouver dans votre onglet @pin" />
                            <Item text="Ils seront dispos toute la journée, effacés dans la nuit seulement" />
                            <Item text="Un peu étourdi des fois, rappelez le moi si vous voyez que j'ai oublié" />
                        </ListItem>
                        <ListItem title="Messages privés">
                            <Item text="Les messages privés sont ... bah privés" />
                            <Item text="Vous cliquez sur la photo de quelqu'un, ça vous ouvre un onglet de plus" />
                            <Item text="C'est plus pour vous, si vous voulez échanger entre vous" />
                            <Item text="Pour vous foutre de ma tronche pendant le cours, c'est comme ça qu'il faut faire" />
                            <Item text="Vous pouvez aussi m'envoyer des MPs mais je vous demarai d'éviter pendant le cours" />
                            <Item text="En cas d'urgence hésitez pas mais pour les questions liées au coours, plutôt channel général" />
                            <Item text="Vous êtes sûrement pas le ou la seule à vous poser la quest, ça peut servir à tout le monde" />
                            <Item text="Les seules questions auquelles je répondrai pas, c'est celles que vous poserez pas ..." />
                        </ListItem>
                        <ListItem title="Comportement sur le chat">
                            <Item text="Utilisez le à fond ce chat, pour commenter, pour déconner, pour questionner, y a pas de souci" />
                            <Item text="On est entre gens civilisés, on se cause correct !!" />
                            <Item text="Même quand ça pique, même quand ça fâche, même quand on est crevé" />
                            <Item text="On garde le smile, on reste bienveillants" />
                            <Item text="on est coincé sur le même bateau pour un bon moment" />
                            <Item text="Faisons en sorte de pas créer de tensions inutiles" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Emojis" />
                            <BoxItem text="Snippets, spoilers ou mix des 2" />
                            <BoxItem text="@freeze, @question, @+nom" />
                            <BoxItem text="Sondage" />
                            <BoxItem text="@pin" />
                            <BoxItem text="MPs" />
                            <BoxItem text="Super outil, juste on reste zen pour que ça se passe bien" />
                        </Recap>
                        <ListItem title="Slides">
                            <Item text="Onglet slides, on l'utilise pas en fait" />
                            <Item text="Je vous passerai des slides sur ma VM" />
                            <Item text="Vous les aurez dans le replay" />
                        </ListItem>
                        <Transition>
                            <BoxItem text="Voilà pour le chat, notre principal outil de comm" />
                            <BoxItem text="Maintenant, votre VM ou pour les intimes, le téléporteur" />
                        </Transition>
                        <ListItem title="Conseils d'utilisation">
                            <Item text="La VM, c'est pour bosser, c'est pour coder" />
                            <Item text="Vaut mieux lancer le cockpit sur votre machine pour économiser les ressources" />
                            <Item text="Je vous recommande de bosser sur la VM" />
                            <Item text="Tous les outils nécessaires sont installés et configurés" />
                            <Item text="Vous pouvez bosser sur votre hôte, on peut pas vous forcer" />
                            <Item text="Mais en cas de pépin, vous serez un peu sans filet, on pourra pas trop vous aider" />
                            <Item text="A vous de voir ... mais si vous hésitez, prenez la VM !" />
                            <Item text="Si on vous propose des mises à jours, n'hésitez pas à les faire" />
                            <Item text="Toujours mieux d'avoir la dernière version des applis" />
                            <Item text="Par contre, pas pendant le cours, attendez le soir pour le faire tranquillement" />
                        </ListItem>
                        <ListItem title="Apparté technique">
                            <Item text="Votre matos DOIT MARCHER maintenant" />
                            <Item text="Si vous avez des pépins, c'est entre aujourd'hui et maintenant qu'il faut les régler" />
                            <Item text="N'attendez pas qu'on ait vraiment commencé, vous serez vachement handicapés" />
                            <Item text="Vous avez un channel slack exprès pour, #sav" />
                            <Item text="Un 'tit bonjour, vous expliquez votre problème et on va vous aider" />
                            <Item text="Nos admin sys sont brillantissimes, ils vont vous dépanner en 2 secondes 30" />
                            <Item text="Le boonjour déjà, (gens civilisés, tout ça ...) et surtout décrivez votre problème" />
                            <Item text="D'une façon général, sur sav ou le chat, ça marche pô veut rien dire pour nous" />
                            <Item text="Pour une aide efficace, essayez d'expliquer ce qui vous gène" />
                            <Item text="Avec des captures d'écran si vous avez pas les mots" />
                            <Item text="En thread, c'est mieux. Vous savez comment faire ?" />
                        </ListItem>
                        <Sondage question="Je sais utiliser les threads sur Slack" reponses={['yep', 'nope']} />
                        <ListItem title="Demo thread si besoin" />
                        <ListItem title="Eteindre la VM">
                            <Item text="Dernier point sur le téléporteur" />
                            <Item text="Faut l'éteindre correctement, comme des pros, comme des propres !" />
                            <Item text="Pas de shutdown à l'arrache, bouton applications en bas à gauche et Eteindre en haut du menu" />
                            <Item text="Sinon, vous risquez de corrompre les données de la VM" />
                            <Item text="De perdre au mieux des infos et au pire, de tout perdre, toute la VM !!" />
                            <Item text="Donc, très sérieux là, pas de blague, on éteind la VM correctement !" />
                        </ListItem>
                        <Transition>
                            <BoxItem text="Peut-être déjà entendu tout ça" />
                            <BoxItem text="Ca fait pas de mal de répéter un coup" />
                            <BoxItem text="Maintenant, on va voir nos outils dans la VM plus en détail" />
                        </Transition>
                        <ListItem title="Vos 3 nouveaux meilleurs amis">
                            <Item text="3 outils principaux qui vont nous accompagner tous les jours :" />
                            <SubItem text="le navigateur, chrome" />
                            <SubItem text="l'invite de commande, ou terminal ou console ou shell" />
                            <SubItem text="l'éditeur de texte, Visual Studio Code ou VSCode ou VSC" />
                        </ListItem>
                        <ListItem title="Navigateur">
                            <Item text="Recammandé : Chrome" />
                            <Item text="En général le 1er à implémenter les new fonctionnalités" />
                            <Item text="Toute une série d'outils pour les devs, les plus puissants, les plus complets" />
                            <Item text="Sur les autres, c'est pas mal non plus mais en général pls lourds" />
                            <Item text="Pour ouvrir les outils :" />
                            <SubItem text="Click droit sur la page et inspecter" />
                            <SubItem text="Via le menu, plus d'outils, outils de développement" />
                            <Item text="On peut les placer comme on veut" />
                            <Item text="Juste s'haibuer quand on dev à afficher la page sur une moitié d'écran" />
                            <Item text="Pas plus d'infos, z'êtes tous des users, limit vous en savez plus que moi" />
                            <Item text="Juste un test, affichez http://vpn.lan" />
                        </ListItem>
                        <Sondage question="Tout le monde a bien le pouce ?" reponses={["yep", "nope"]} />
                        <ListItem title="VPN">
                            <Item text="Preuve de l'accès au VPN de l'école" />
                            <Item text="Super important pour pouvoir bosser en duo ou en groupe" />
                            <Item text="Besoin d'y être connecté pour vous connecter les uns avec les autres" />
                        </ListItem>
                        <Transition>
                            <BoxItem text="1er meilleur ami, le navigateur" />
                            <BoxItem text="Le suivant, vous connaissez peut-être moins : le terminal" />
                        </Transition>
                        <ListItem title="Terminal">
                            <Item text="Sur votre VM, émulateur de terminal, en gros c'est pareil" />
                            <Item text="C'est comme une fenêtre sur votre disque dur" />
                            <Item text="On va pouvoir lui passer des commandes en langage SHELL" />
                            <Item text="Par abus de langage, on appelle le terminal le shell des fois" />
                            <Item text="C'est super puissant mais comme pour tout langage, faut lui c
                            auser correct" />
                            <Item text="Votre meilleur ennemi en fait, un peu capricieux, il peut faire sa tête de ... bois" />
                        </ListItem>
                        <ListItem title="Prompt">
                            <Item text="A l'ouverture, on a déjà quelques infos" />
                            <Item text="Avant le curseur, on voit :" />
                            <SubItem text="nom d'utilisateur" />
                            <SubItem text="@ qu'on lit at, chez en anglais" />
                            <SubItem text="nom de la machine" />
                        </ListItem>
                        <ListItem title="Commandes">
                            <Item text="On va donc pouvoir taper des commandes dans cette invite de commandes" />
                            <Item text="Ca nous donne vraiment accès à TOUT, on est les maîtres du monde avec ce terminal" />
                            <Item text="Toutes les applis avec une GUI ne font qu'appeler des commandes dispos dans le terminal" />
                            <Item text="C'est super puissant ! Faut juste apprendre à lui parler" />
                        </ListItem>
                        <ListItem title="BASH">
                            <Item text="'je veux commander à manger' et je valide, je me fais jeter" />
                            <Item text="C'est pas ok Google ou Siri, faut utiliser un langage particulier" />
                            <Item text="langage shell ou bash ou zsh, assez similaire, à notre niveau pas de grosses diffs" />
                            <Item text="Dans tous les langages de prog, on va utiliser des mot-clés" />
                            <Item text="Ces mots spéciaux correspondes à des instructions, des commandes, on donne nos ordres" />
                            <Item text="Comme une langue étrangère, on a du vocabulaire à apprendre" />
                            <Item text="Après on apprend la grammaire et on peut faire des phrases" />
                            <Item text="Dans notre jargon, on appelle ça apprendre la syntaxe" />
                        </ListItem>
                        <ListItem text="Première commande">
                            <Item text="Qui je suis" />
                            <Item text="Ca vous parait peut-être un peu bête, c'est déjà marqué" />
                            <Item text="Mais quand on est connecté à une machine connectée à une autre machine ça aide à s'y retrouver" />
                        </ListItem>
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="pwd">
                            <Item text="Séquence émotion, votre 1ère commande shell" />
                            <Item text="Je vous laisse 2 secondes pour vous essuyer les yeux ..." />
                            <Item text="Et on passe à la suivante : où je suis ?" />
                            <Item text="Le disque dur est vaste, ça peut être pratique d'afficher l'endroit où on est" />
                        </ListItem>
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="Chemins">
                            <Item text="Là on est sur un vrai système" />
                            <Item text="Les chemins vers les dossiers/fichiers sont pas comme sous windaube ... dows, pardon !" />
                            <Item text="On n'a pas de c:, de \, tout ça ..." />
                            <Item text="Le point d'entrée du DD, c'est /, on appelle ça la racine" />
                            <Item text="C'est le sommet de la pyramide" />
                            <Item text="A chaque fois qu'il y a un nouveau /, on descend d'un étage dans la pyramide" />
                        </ListItem>
                        <ListItem title="Casse">
                            <Item text="Gaffe avec les majuscules et les minuscules, la casse dans la langue des devs" />
                            <Item text="La plupart du temps, c'est super important !" />
                            <Item text="PWD et pwd, c'est pas la même chose" />
                            <Item text="Faut être très vigilant sur les noms des commandes, des fichiers ou des dossiers" />
                            <Item text="Bien regarder comment s'écrivent les noms" />
                        </ListItem>
                        <ListItem title="Lister le contenu">
                            <Item text="Pour regarder ce que contient un dossier, nouvelle commande" />
                            <Item text="Coloration : les dossiers et les fichiers sont pas indiqués pareil" />
                            <Item text="Pratique, d'un simple coup d'oeil on peut voir ce que c'est" />
                        </ListItem>
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="Se déplacer dans le disque dur">
                            <Item text="Allez, encore une : pour se déplacer dans un dossier, on utilise cd + nom dossier" />
                            <Item text="Change Directory : remarquez l'invite de commande, elle a changé" />
                            <Item text="En plus du user et de la machine, on a le wd, le répertoire où on se trouve" />
                            <Item text="En fait ce ~, c'est un raccourci vers le dossier perso, /home/etudiant" />
                            <Item text="On a l'autocomplétion dans le terminal, j'ai tapé cd Doc et tabulation" />
                        </ListItem>
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <Question text="Pour me placer à la racine du disque, je tape quoi ?" />
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <Question text="Et si je veux revenir dans mon dossier perso ?" />
                        <ListItem title="Dossier perso, plusieurs solutions" />
                        <ListItem title="Avec 2 commandes" />
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="En un seul coup" />
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="En utilisant le raccourci" />
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="En tapant cd tout court, chemin par défaut est le dossier perso" />
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <Question text="Je me remets à la racine, comment aller dans le dossier Documents d'un seul coup ?" />
                        <ListItem title="Distinction relatif / absolu">
                            <Item text="2 types de chemins" />
                            <Item text="Quand le path commence par /, on part de la racine, chemin absolu" />
                            <Item text="Quand le path commence pas par /, on part de là où on est, chemin relatif" />
                            <Item text="Même chose que d'aller à la poste depuis l'entrée de la ville(absolu) ou depuis chez vous(relatif)" />
                            <Item text="Les chemins sont différents mais on arrive au même endroit !" />
                        </ListItem>
                        <Doc type="Ressource" url="https://github.com/O-clock-Alumni/fiches-recap/" />
                        <ListItem title="Fiches récap">
                            <Item text="plusieurs commandes déjà : whoami, pwd, ls, cd" />
                            <Item text="Plein d'autres, pas facile à retenir comme ça" />
                            <Item text="On a une fiche récap pour ça, je vous donne l'adresse" />
                            <Item text="Si vous avez un 404, c'est que vous n'êtes pas loggué" />
                            <Item text="Si toujours 404 après le log, faut prévenir Julianne sur Slack" />
                            <Item text="Dossier ldc, fichier teminal.md, bon résumé de ce qu'on voit aujourd'hui" />
                            <Item text="Un peu plus même, n'hésitez pas si vous êtes curieux" />
                        </ListItem>
                        <ListItem title="Options">
                            <Item text="ls c'est cool mais en fait ça n'affiche pas tout" />
                            <Item text="Certains fichiers ou dossiers sont planqués pour pas qu'on y touche par erreur" />
                            <Item text="Pour les voir, il faut ajouter une option à ls" />
                        </ListItem>
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="Fichiers cachés">
                            <Item text="On voit plusieurs éléments qu'on voyait pas avant" />
                            <Item text="Ils ont tous un point commun, vous voyez lequel ?" />
                            <Item text="Ils commencent tous par un ." />
                            <Item text="Précision sur . et .. : pas des fichiers, des raccourcis de navigation" />
                            <Item text=". : le dossier courant" />
                            <Item text=".. : le dossier parent, un cran au dessus dans la pyramide" />
                        </ListItem>
                        <ListItem title="Liste des options">
                            <Item text="commandes ont souvent plein d'options" />
                            <Item text="pas besoin de les apprendre par coeurs, --help va afficher la liste" />
                        </ListItem>
                        <Demo type="shell">
                            <Code step={snippets.shell[snippet++]} />
                        </Demo>
                        <ListItem title="ls -l">
                            <Item text="option sympa de ls, plus d'infos et sous forme de liste, plus facile à lire" />
                            <Item text="pas tout expliquer, à gauche on voit les droits d'accès" />
                            <Item text="rwwx 3 fois : user, group, autres" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="On en sait un peu plus maintenant" />
                            <BoxItem text="S'orienter, se déplacer" />
                            <BoxItem text="Voyons maintenant comment on peut créer un dossier" />
                        </Recap>
                        <ListItem title="mkdir">
                            <Item text="On revient dans le dossier perso : cd" />
                            <Item text="Pour créer un répertoir, la commande est mkdir suivi du nom du rep" />
                            <Item text="Pour créer le répertoire Lyra dans mon dossier, je tape mkdir lyra" />
                            <Item text="Attention, pas d'espace dans le nom du dossier, sinon ça crée 2 dossiers" />
                            <Item text="Si le terminal ne dit rien, c'est très bon signe !" />
                            <Item text="On peut vérifier avec ls, le dossier a bien été ajouté" />
                            <Item text="Si on s'est tropmé, on peut supprimer le dosser avec rmdir suivi du nom" />
                            <Item text="Ne marche qu'avec un dossier vide !" />
                            <Item text="Plutôt que le supprimer, on peut aussi le renommer" />
                            <Item text="renommer, pour le terminal, équivaut à le déplacer, on change son chemin" />
                            <Item text="mv ancienNom nouveauNom, mv lyra Lyra" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Supprimez le dossier Lyra s'il existe" />
                            <Enonce text="Recréer le dossier Lyra contenant un dossier S01 en une seule commande" />
                            <Enonce text="Aidez-vous de la documentation de la commande mkdir pour trouver comment faire" />
                        </Exo>
                        <ListItem title="Supprimer un dossier plein">
                            <Item text="On voit la doc de mkdir avec l'option --help" />
                            <Item text="L'option -p semble bien correspondre à ce qu'on veut faire" />
                            <Item text="mkdir -p Lyra/S01, le terminal ne dit rien" />
                            <Item text="on vérifie avec ls, les 2 dossiers sont créés, nickel" />
                            <Item text="Suppression d'un dossier avec du contenu : prudence, c'est irreversible !" />
                            <Item text="Pas de corbeille, détape intermédiaire, une fois validé c'est foutu, c'est fait !" />
                            <Item text="rm -rf Lyra supprime le dossier et le dossier S01 qu'il contient" />
                        </ListItem>
                        <ListItem title="Manipulation fichier">
                            <Item text="On a aussi une commande pour créer un fichier" />
                            <Item text="touch nom va créer un fichier vide de ce nom à l'emplacement où on est" />
                            <Item text="On peut ensuite le remplir avec un éditeur de texte" />
                            <Item text="On va voir VSCode dans 2 minutes, voyons déjà comment supprimer ce fichier" />
                            <Item text="rm nom va supprimer le fichier, qu'il soit rempli ou pas" />
                            <Item text="Pareil, pas de corbeille, la suppression est irréversible, alors gaffe !" />
                        </ListItem>
                        <Transition>
                            <BoxItem text="On a vu plusieurs des commandes de base" />
                            <BoxItem text="On sait comment manipulerl'arborescence en ajoutant ou supprimant des fichiers ou dossiers" />
                            <BoxItem text="C'est cool déjà mais on peut faire tellement plus" />
                        </Transition>
                    </Card>
                    <Card title="Outils" duration="2:00:00">
                        <ListItem title="Raccourcis applis">
                            <Item text="On peut par exemple lancer chrome depuis la ldc" />
                            <Item text="Dans votre terminal, tapez google-chrome oclock.io" />
                            <Item text="Magique, ça lance chrome et ça affiche l'addresse qu'on a indiqué après la commade !" />
                            <Item text="Avec le terminal toujours, on se place dans le dossier Lyra/S01" />
                            <Item text="On va pouvoir lancer VSCode dans ce dossier directement" />
                            <Item text="La commande : code suivi du chemin vers le dossier" />
                            <Item text="Vu qu'on est dans le bon dossier dans le terminal, on utilise le raccouorci vers le dossier courant" />
                            <Item text="code ." />
                        </ListItem>
                        <ListItem title="Découverte markdown">
                            <Item text="On va commencer à coder un peu, on passe à du concret, bienvenue dans le côté obscur !" />
                            <Item text="On va découvrir ensemble un nouveau langage, et oui déjà !" />
                            <Item text="C'est un langage de présentation, une petite mise en bouche avant d'attaquer le html demain" />
                            <Item text="Le markdown : un langage de balisage : pas de logique, on présente juste des infos" />
                            <Item text="Utilisé sur github pour présenter un projet, pour écrire nos fiches récaps ..." />
                            <Item text="Super léger, facile à prendre en main, on commence en douceur" />
                        </ListItem>
                        <ListItem title="Premier fichier">
                            <Item text="VSCode est ouvert dans le dossier S01, on crée un fichier markdown.md à l'intérieur" />
                            <Item text="Dans ce fichier, on va dévcrir les règles de syntaxe du langage" />
                            <Item text="1ère règle : un md commence toujours par un titre" />
                            <Item text="On indique le titre principal avec un #" />
                        </ListItem>
                        <Demo type="MD">
                            {console.log(resetSnippet())}
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Hiérarchie des titres">
                            <Item text="Dans la suite du doc, on peut définir des titres de plusieurs niveaux" />
                            <Item text="Niveau 2 : ##, niveau 3: ###, ... On peut aller jusqu'à 6 niveaux" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://fr.wikipedia.org/wiki/Markdown" />
                        <ListItem title="Texte">
                            <Item text="Pour écrire du texte normal, on écrit ... normalement" />
                            <Item text="Pour revenir à la ligne, 2 solutions :" />
                            <SubItem text="On termine la ligne avec 2 espaces" />
                            <SubItem text="On laisse une ligne vide entre 2 lignes de texte" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Aperçu">
                            <Item text="Voyons déjà ce que ça donne : on ouvre un aperçu du fichier interprété" />
                            <Item text="Interprété : la mise en page est appliquée, le langage md est traduit en affichage" />
                            <Item text="Bouton dans VSC ou ctrl+shift+v ou cmd+shift+v sous mac" />
                            <Item text="On voit bien la différence entre les différents niveaux de titres" />
                        </ListItem>
                        <ListItem title="Styles de texte" />
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Utilisation de MD">
                            <Item text="Peut-être vous reconnaissez cette syntaxe" />
                            <Item text="On la retouve sur discord, sur slack, dans le chat du cockpit" />
                            <Item text="Quelques limitations : pas de couleur de texte, pas de commentaires" />
                            <Item text="Ce sera pour demain avec le html" />
                        </ListItem>
                        <ListItem title="Snippets">
                            <Item text="En utilisant les baktiks, on protège le texte" />
                            <Item text="Il ne sra pas interprété, il sera affiché tel quel" />
                            <Item text="On peut le faire sur une ligne avec de simples baktiks" />
                            <Item text="Ou en block avec les triples baktiks" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Code">
                            <Item text="Snippets surtout utilisés pour du code" />
                            <Item text="On peut indiquer le langage pour la coloration syntaxique" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Citation">
                            <Item text="Pour indiquer qu'on reprend une phrase de quelqu'un, on peut faire un citation" />
                            <Item text="On utilise le signe supérieur au début de la 1ère ligne (espace x2, pas de saut de ligne)" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Listes">
                            <Item text="Séparateur : --- ou ***" />
                            <Item text="On peut faire des listes de 3 façons différentes" />
                            <Item text="Listes ordonnées, MD est intelligent et corrige numérotation si foireuse" />
                            <Item text="On peut mettre plusieurs niveaux de profondeur avec les tabulations" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Liste non ordonnée">
                            <Item text="On commence la ligne par -" />
                            <Item text="Pour les sous éléments, pareil, tabulation" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Liste de cases à cocher">
                            <Item text="Marche sur github, pas forcément partout" />
                            <Item text="Pour cocher la case, on ajoute un x entre les crochets" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Liens">
                            <Item text="2 types :" />
                            <SubItem text="Soit un lien clickable" />
                            <SubItem text="Soit un lien vers un document (image, vidéo, son)" />
                            <Item text="Pour les documents, si le lien est valide, le doc est affiché, sinon le texte" />
                            <Item text="Pour les images, la taille peut varier" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Tableaux">
                            <Item text="Séparateur de cellule : | appelé pipe" />
                            <Item text="Séparateur de ligne : on met --- dans les cellules" />
                            <Item text="Le | en fin de ligne n'est pas obligatoire" />
                        </ListItem>
                        <Demo type="MD">
                            <Code step={snippets.md[snippet++]} />
                        </Demo>
                        <ListItem title="Présentation challenge et Récap" />
                        <ListItem title="Pas d'envoi de challenge ce soir, juste sur la VM" />
                    </Card>
                </List>
            </div>
        </Fragment>
    );
}

export default S1E01;