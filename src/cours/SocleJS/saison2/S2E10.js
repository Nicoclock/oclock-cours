import React, {Fragment} from "react";

import "../../style.scss"

const S2E10 = props => {
    return (
        <Fragment>
            <div className="Title">Révisions</div>
            <div className="Inner">

                - domContentLoaded to DOMContentLoaded


                - identification méthode
                - identification balise du bouton
                - on change le display du bouton
                - méthode inverse
                - tests console

                - méthode endGame

                - prop indice
                - eventListener sur cases
                - méthode playerSays
                - effet bump
                - tests

                - méthode randomColor
                - modif pour appel dans newGame
                - méthode nextMove
                - reset indice dans else simonSays
                - timout sur rappel à simonSays pour laisser le temps au bouton

                - début simonSays : Mémorisez
                - ajout d'un else : Reproduisez

                - ou placer le timeout ? comme reproduisez ...
                - à chaque click on reset et retimeout avec indice++
                - on doit clearTimeout dans simonSays

                - prop simonOn à true au début de simonSays
                - dans if simonSays, simonOn à false
                - playerSays : si simonOn return

            </div>
        </Fragment>
    );
}

export default S2E10;