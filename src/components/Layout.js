import * as React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Intro from "./Intro";

import "./Layout.module.scss";

const Layout = (props) => {
  const { children, title, subtitle } = props;
  return (
    <>
      <Header>
        <Nav />
        <Intro title={title} subtitle={subtitle} />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
