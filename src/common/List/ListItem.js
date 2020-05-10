import React from "react";

import style from "./List.module.scss";

const ListItem = props => (
    <li className={style.ListItem}>
        {props.title ? <div className={style.Title}>{props.title}</div> : null}
        {props.children}
    </li>
);

export default ListItem;