import React, { FC, ReactNode } from "react";
import Footer from "../../components/Footer";

import Header from "../../components/Header";
import { BodyInner, GlobalStyle } from "../../styles/GlobalStyles";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
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
