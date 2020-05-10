import React, {Fragment} from "react";

import style from "./Doc.module.scss";

const Doc = props => {
    return (
        <div className={style.Doc}>
            <div className={style.Type}>{props.type} :</div>
            <div className={style.Url}>{props.url}</div>
        </div>
    );
};

export default Doc;