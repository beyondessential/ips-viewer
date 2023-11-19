import React from "react";
import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { SearchForm } from "./SearchForm";

const Container = styled(MuiContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  padding-left: 0px;
  padding-right: 0px;
`;

export const Viewer = () => {
  return (
    <>
      <Container maxWidth={false}>
        <SearchForm />
      </Container>
    </>
  );
};
