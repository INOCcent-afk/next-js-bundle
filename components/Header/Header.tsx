import React, { FC } from "react";

import Link from "next/link";

import { StyledHeader } from "./Header.styled";
import { useAppSelector } from "../../redux/hook";

const Header: FC = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <StyledHeader>
      <ul>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/services" passHref>
          <a>Services</a>
        </Link>
        <Link href="/users" passHref>
          <a>Containers</a>
        </Link>
      </ul>
      <h1>{count}</h1>
    </StyledHeader>
  );
};

export default Header;
