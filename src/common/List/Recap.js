import React from "react";

import style from "./List.module.scss";

const Recap = props => <li className={style.Recap}>{props.children}</li>;

export default Recap;