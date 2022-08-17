import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./Nav.module.scss";

const Nav = () => (
  <nav className={styles.nav}>
    <Link to="/">davelovemartin</Link>
    <div>
      <Link to="/journal">journal</Link>
      <Link to="/portfolio">portfolio</Link>
    </div>
  </nav>
);

export default Nav;
