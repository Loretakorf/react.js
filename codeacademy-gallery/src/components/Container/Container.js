import React from "react";

import style from "./Container.module.css";
console.log(style);

const Container =({children}) => {
    return <div className={style.root}>{children}</div>
};
export default Container;