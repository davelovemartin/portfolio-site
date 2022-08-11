import * as React from "react";

import * as styles from "./Logo.module.scss";

const Logo = (props) => {
  const { children } = props;
  return <div className={styles.logo}>{children}</div>;
};

export default Logo;
