import * as React from "react";

import * as styles from "./Box.module.scss";

const Box = (props) => {
  const { children } = props;
  return <div className={styles.box}>{children}</div>;
};

export default Box;
