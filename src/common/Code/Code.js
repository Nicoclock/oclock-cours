import React from "react";
import Highlight from "react-highlight.js";

import style from "./Code.module.scss";

const Code = props => {
    return (
        <div className={style.Container}>
            <Highlight language={props.language ? props.language : props.step && props.step.language ? props.step.language : "JavaScript"}>
                <pre className={style.Pre}>
                    <code>{props.code || props.step.code}</code>
                </pre>
            </Highlight>
        </div>
    );
};

export default Code;