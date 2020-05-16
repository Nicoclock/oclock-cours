import React from "react";

import style from "./List.module.scss";

const Control = props => <li className={style.Control}><div className={style.ControlTitle}>Contrôle</div>{props.children}</li>;

export default Control;