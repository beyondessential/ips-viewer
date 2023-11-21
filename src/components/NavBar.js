import React from "react";
import styled from "styled-components";
import { TamanuLogo } from "../assets/TamanuLogo";

const StyledTamanuLogo = styled(TamanuLogo)`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100px;
  width: auto;
`;

export const NavBar = () => {
  return <StyledTamanuLogo />;
};
