import React from "react";
import ReactJson from "react-json-view";
import styled from "styled-components";
import { saveAs } from "file-saver";
import Button from "@material-ui/core/Button";
import DownloadIcon from "@material-ui/icons/GetApp";
import CopyIcon from "@material-ui/icons/FileCopy";

const StyledCopyButton = styled(Button)`
  float: right;
  margin: 10px;
`;

const StyledDownloadButton = styled(Button)`
  float: right;
  margin: 10px;
`;

const StyledButtonsContainer = styled.div`
  margin-top: 40px;
`;
const StyledContainer = styled.div`
  margin-top: 300px;
  width: 100%;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.text.tertiary};
  height: 100vh;
  overflow: auto;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const IPSResult = ({ ipsPayload }) => {
  return (
    <>
      <StyledButtonsContainer>
        <StyledDownloadButton
          variant="contained"
          color="primary"
          onClick={() => {
            const blob = new Blob([JSON.stringify(ipsPayload)], {
              type: "application/json;charset=utf-8",
            });
            saveAs(blob, "IPS");
          }}
        >
          <DownloadIcon />
          Download
        </StyledDownloadButton>
        <StyledCopyButton
          variant="outlined"
          color="primary"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(ipsPayload));
          }}
        >
          <CopyIcon />
          Copy
        </StyledCopyButton>
      </StyledButtonsContainer>

      <StyledContainer>
        <ReactJson src={ipsPayload} />
      </StyledContainer>
    </>
  );
};
