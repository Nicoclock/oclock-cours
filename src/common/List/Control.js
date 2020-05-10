import React from "react";

import style from "./List.module.scss";

const Control = props => <li className={style.Control}>{props.children}</li>;

export default Control;