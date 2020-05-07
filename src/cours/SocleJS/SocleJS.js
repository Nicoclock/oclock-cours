import React, {Component, Fragment} from "react";

import {Saison} from "../../common";

import * as episodes from "./episodes";

import "../style.scss";

class SocleJS extends Component {

    state = {
        saison: null,
        episode: null
    }

    setSaison = saison => this.setState({saison, episode: null});

    resetSaison = () => this.setState({saison: null, episode: null});

    setEpisode = episode => this.setState({episode});

    resetEpisode = () => this.setState({episode: null});

    seasons = [
        {name: "Saison 1", title: "Intégration HTML/CSS", episodes: ["Bienvenue chez Oclock", "Fond et forme", "Box-model", "layout", "Position", "Atelier", "Forms", "Responsive", "Atelier solo"]},
        {name: "Saison 2", title: "Interaction JS - Front side", episodes: ["Programmer", "JS, ça fonctionne bien", "Objets", "DOM", "Events", "Atelier", "Fonctions avancées", "Vers ES6", "Atelier solo", "Révisions"]},
        {name: "Saison 3", title: "Découverte client/serveur - NodeJS", episodes: ["Node", "Node + HTTP", "Modules (journée ménage)", "Express : routes", "Express: vues", "Atelier", "Middleware", "Body-parser", "Atelier solo", "Revisions"]},
        {name: "Saison 4", title: "Data, gestion de projet, SQL", episodes: ["Organiser son projet et son code", "Organiser ses données - 1", "Organiser ses données - 2", "Express - DB", "Sessions", "Atelier pair-programming", "Relations", "SEO", "Atelier solo", "Révisions"]},
        {name: "Saison 5", title: "Architecture, MVC, POO, ORM", episodes: ["Gestion de projet appliquée", "POO et héritage", "Architecture", "Active Record, 2ème tour", "Sequelize", "Autelier", "Auth et rôles", "Promesses !", "Atelier solo"]},
        {name: "Saison 6", title: "Conception et développement d'une API", episodes: ["API + Ajax", "Models", "Okaban is alive !", "Atelier", "Sécurité"]},
        {name: "Saison 7", title: "Conception et développement d'une SPA pour consommer l'API", episodes: ["Révisions et conception", "API !", "API again", "Atelier", "Sécurité, bundles, v-hosts, ..."]},
        {name: "Saison 8", title: "Découverte du reste du monde", episodes: ["Admin sys", "CMS", "NoSQL", "Ouverture", "End"]},
    ];


    render() {
        return (
            <Fragment>
                <div className="Column">
                    {this.seasons.map((el, index) => (
                        <Saison key={index} code={"S"+(index+1)} name={el.name} title={el.title} episodes={el.episodes} 
                            saison={this.state.saison} setSaison={this.setSaison} resetSaison={this.resetSaison}
                            episode={this.state.episode} setEpisode={this.setEpisode} resetEpisode={this.resetEpisode}/>
                    ))}
                </div>
                    <div className="Content">
                        {this.state.saison && this.state.episode ? 
                            React.createElement(episodes[this.state.saison+this.state.episode])
                        :
                            null
                        }
                    </div>
            </Fragment>
        );
    }
}

export default SocleJS;