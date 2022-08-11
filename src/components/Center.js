import * as React from "react";

import * as styles from "./Center.module.scss";

const Center = (props) => {
  const { children } = props;
  return <div className={styles.center}>{children}</div>;
};

export default Center;
