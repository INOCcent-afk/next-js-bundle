import React, { FC, ReactNode } from "react";
import { Router } from "next/router";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { BodyInner, GlobalStyle } from "../../styles/GlobalStyles";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  React.useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, [Router]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <BodyInner>{children}</BodyInner>
      <Footer />
    </>
  );
};

export default Layout;
