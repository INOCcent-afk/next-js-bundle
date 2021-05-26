import React, { FC, ReactNode } from "react";

import { StyledButton } from "./Button.styled";

type Props = {
  children: ReactNode;
  event: () => void;
};

const Button: FC<Props> = ({ children, event }: Props) => {
  return (
    <>
      <StyledButton onClick={event}>{children}</StyledButton>
    </>
  );
};

export default Button;
