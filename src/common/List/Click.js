import React from "react";

import style from "./List.module.scss";

const Click = props => <li className={style.Click}>Click {props.dir}</li>;

export default Click;