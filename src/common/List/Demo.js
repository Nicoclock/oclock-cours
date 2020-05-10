import React from "react";

import BoxItem from "./BoxItem";

import style from "./List.module.scss";

const Demo = props => <li className={style.Demo}><BoxItem text={`Démo ${props.type}`} />{props.children}</li>;

export default Demo;