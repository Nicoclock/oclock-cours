import React from "react";

import style from "./List.module.scss";

const BoxItem = props => <div className={style.Item}>{props.text}</div>;

export default BoxItem;