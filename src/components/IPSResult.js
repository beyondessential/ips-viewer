import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactJson from "react-json-view";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useIPS } from "../api/useIPS";

const StyledContainer = styled.div`
  width: 100%;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.text.primary};
  height: 100vh%;
  padding: 10px;
  margin-top: 10px;
`;

export const IPSResult = () => {
  const [url, setUrl] = useState(null);
  const { url: urlBase64 } = useParams();
  const [patientJson] = useIPS({ url });
  
  useEffect(() => {
    setUrl(atob(urlBase64));
  }, [urlBase64]);

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          navigator.clipboard.writeText(JSON.stringify(patientJson));
        }}
      >
        Copy
      </Button>
      <StyledContainer>
        <ReactJson src={patientJson} />
      </StyledContainer>
    </>
  );
};
