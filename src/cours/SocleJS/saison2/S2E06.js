import React, {Fragment} from "react";

import {Card, Doc} from "../../../common";

import "../../style.scss"

const S2E06 = props => {
    return (
        <Fragment>
            <div className="Title">Atelier</div>
            <div className="Inner">
                <Card title="Atelier pair programming">
                    <Doc type="repo Invader" url="http://localhost:1235/E06/Invader/html/index.html" />
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E06;