import React, {Component} from "react";

import {digits} from "../../utils";

import plus from "../../images/plus.png";
import minus from "../../images/minus.png";

import style from "./Saison.module.scss";

class Saison extends Component {

    state = {
        showTitle: this.props.saison === this.props.code,
        // showEpisodes: true
        showEpisodes: this.props.saison === this.props.code
    }

    toggle = () => {
        if (this.props.saison !== this.props.code)
            this.props.setSaison(this.props.code);
        else {
            this.props.resetSaison();
        }
    }

    render() {
        return (
            <div 
                onMouseOver={() => this.setState({showTitle: true})}
                onMouseOut={() => this.setState({showTitle: !this.state.showEpisodes ? false : true})}
            >
                <div className={style.Name} onClick={this.toggle}>
                    <img src={this.props.saison === this.props.code || this.state.showEpisodes ? minus : plus} 
                        alt={this.props.saison === this.props.code || this.state.showEpisodes ? "Hide" : "Show"} />
                    <label>{this.props.name}</label>
                </div>
                {this.props.saison === this.props.code || this.state.showTitle ? 
                    <div className={style.Title}>{this.props.title}</div>
                :
                    null
                }
                {this.props.saison === this.props.code || this.state.showEpisodes ?
                    this.props.episodes.map((el, index) => (
                        <div key={index} 
                            className={style.Episode+(this.props.episode === "E"+digits(index+1, 2) ? " "+style.Active : "")} 
                            onClick={() => this.props.setEpisode("E"+digits(index+1, 2))}>{el}</div>
                    )) 
                :
                    null
                }

            </div>
        );
    }
};

export default Saison;