import React from "react";

import style from "./List.module.scss";

const SubItem = props => <div className={style.SubItem}>* {props.text}</div>;

export default SubItem;