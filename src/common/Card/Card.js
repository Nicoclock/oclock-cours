import React, {Component, Fragment} from "react";

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
                    </Fragment>
                :
                    <div className={style.CardButton} onClick={() => this.setState({show: true})}>{this.props.title}</div>
                }
            </Fragment>
        );
    }
}

export default Card;