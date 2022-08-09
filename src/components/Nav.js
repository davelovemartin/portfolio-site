import * as React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <nav>
    <div>
      <Link to="/">davelovemartin</Link>
    </div>
    <div>
      <Link to="/journal">journal</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/resume">resumé</Link>
    </div>
  </nav>
);

export default Nav;
