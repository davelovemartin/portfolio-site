import * as React from "react";

import * as styles from "./Stack.module.scss";

const Stack = (props) => {
  const { children } = props;
  return <div className={styles.stack}>{children}</div>;
};

export default Stack;
