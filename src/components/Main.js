import * as React from "react";

import * as styles from "./Main.module.scss";

const Main = (props) => {
  const { children } = props;
  return <main className={styles.main}>{children}</main>;
};

export default Main;
