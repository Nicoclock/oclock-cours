import React from "react";

import style from "./Git.module.scss";

const Git = props => {
    return (
        <div className={style.Container}>
            <div className={style.Commande}>git add  .</div>
            <div className={style.Commande}>git commit -m "{props.commit}"</div>
            <div className={style.Commande}>git push</div>
        </div>
    );
};

export default Git;