import React from "react";
import styled from "styled-components";
import { TamanuLogo } from "../assets/TamanuLogo";

const NavBarWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  height: 100px;
  width: auto;
`;

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <TamanuLogo />
    </NavBarWrapper>
  );
};
