import React from "react";

import Code from "../Code/Code";

import style from "./List.module.scss";

const Snippet = props => <div className={style.Item}>
    <Code language={props.language || "JavaScript"} code={"```\n"+props.lines+"\n```"} />
</div>;

export default Snippet;