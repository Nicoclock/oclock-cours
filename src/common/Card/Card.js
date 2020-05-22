import React, {Component, Fragment} from "react";

import Timer from "../Timer/Timer";

import style from "./Card.module.scss";

class Card extends Component {
    state = {
        show: false
    }

    render() {
        return (
            <Fragment>
                {this.state.show ? 
                    <Fragment>
                        <div className={style.CardButton} onClick={() => this.setState({show: false})}>Fermer la carte</div>
                        {this.props.children}
                        <div className={style.CardButton} onClick={() => this.setState({show: false})}>Fermer la carte</div>
                        <div className={style.Blank}></div>
                        {this.props.duration ? <Timer startTime={this.props.duration} /> : null}
                    </Fragment>
                :
                    <div className={style.CardButton} onClick={() => this.setState({show: true})}>{this.props.title}</div>
                }
            </Fragment>
        );
    }
}

export default Card;