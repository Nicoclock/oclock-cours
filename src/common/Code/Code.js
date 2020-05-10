import React from "react";
import Highlight from "react-highlight.js";

import style from "./Code.module.scss";

const Code = props => {
    return (
        <Highlight language={props.language}>
            <pre className={style.Pre}>
                <code>{props.code}</code>
            </pre>
        </Highlight>
    );
};

export default Code;