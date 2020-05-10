import React from "react";

import style from "./List.module.scss";

const Question = props => <div className={style.Question}>{props.text}</div>;

export default Question;
