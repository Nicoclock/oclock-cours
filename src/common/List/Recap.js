import React from "react";

import style from "./List.module.scss";

const Recap = props => <li className={style.Recap}><div className={style.RecapTitle}>Récap</div>{props.children}</li>;

export default Recap;