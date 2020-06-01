import React from 'react';

import style from "./List.module.scss";

const Sondage = props => {
    return (
        <div className={props.className || style.Sondage}>
            {props.className ? null : <div className={style.SondageTitle}>Sondage / Quiz</div>}
            <div className={style.SondageQuest}>*{props.question}*</div>
            {props.reponses.map((el, index) => (
                <div key={index} className={style.SondageResp}>{el}</div>
            ))}
        </div>
    );
};

export default Sondage;