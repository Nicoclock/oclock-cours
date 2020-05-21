import React from 'react';

import style from "./List.module.scss";

const Sondage = props => {
    return (
        <div className={style.Sondage}>
            <div className={style.SondageTitle}>Sondage / Quiz</div>
            <div className={style.SondageQuest}>*{props.question}*</div>
            {props.reponses.map((el, index) => (
                <div key={index} className={style.SondageResp}>{el}</div>
            ))}
        </div>
    );
};

export default Sondage;