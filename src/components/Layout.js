import * as React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Intro from "./Intro";
import Center from "./Center";
import Container from "./Container";

import "./Layout.module.scss";
import Readmore from "./Readmore";
import Main from "./Main";

const Layout = (props) => {
  const { children, title, subtitle } = props;
  return (
    <>
      <Container>
        <Header>
          <Nav />
          <Intro title={title} subtitle={subtitle} />
          <Readmore />
        </Header>
      </Container>
      <Main>
        <Center>{children}</Center>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
