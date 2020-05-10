import React from "react";

import style from "./List.module.scss";

const List = props => <ul className={style.List}>{props.children}</ul>;

export default List;