import React from "react";

import style from "./List.module.scss";

const Item = props => <div className={style.Item}>- {props.text}</div>;

export default Item;