import React from "react";
import styles from "./Grid.module.css";


const styleMap = {
  1: styles.one,
  2: styles.two,
  3: styles.three,
  4: styles.four,
  5: styles.five,
  6: styles.six,
};

const Grid = ({ children, columns , className= "" }) => {
  return (
  <div className={`${styles.root} ${styleMap[columns]} ${className}`}>{children}</div>
  );
};
export default Grid;