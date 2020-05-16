import React from "react";

import style from "./List.module.scss";

const Transition = props => <li className={style.Transition}><div className={style.TransitionTitle}>Transition</div>{props.children}</li>;

export default Transition;