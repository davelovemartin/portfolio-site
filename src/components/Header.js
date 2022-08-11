import * as React from "react";

import * as styles from "./Header.module.scss";

const Header = ({ children }) => (
  <header className={styles.header}>{children}</header>
);

export default Header;
