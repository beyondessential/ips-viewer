import React from "react";
import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";
import { TamanuLogo } from "../assets/TamanuLogo";
import { NAV_BAR_HEIGHT } from "../constants/styles";

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
