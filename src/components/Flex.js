import * as React from "react";

import * as styles from "./Flex.module.scss";

const Flex = (props) => {
  const { children } = props;
  return <div className={styles.flex}>{children}</div>;
};

export default Flex;
