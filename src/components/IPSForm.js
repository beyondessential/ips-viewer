import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import MuiButton from "@material-ui/core/Button";
import { format, parseISO } from "date-fns";

import { DateField } from "./DateField";
import { backgroundImage } from "../images";

const StyledErrorMessage = styled.span`
  color: red;
`;

const SearchFormContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  float: left;
  width: 50%;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
`;

const FormWrapper = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ImageContainer = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: right;
  width: 50%;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const EnterButton = styled(MuiButton)`
  font-size: 0.9rem;
  text-transform: none;
  font-weight: 600;
  line-height: 1rem;
  color: white;
  background: ${(props) => props.theme.palette.primary.main};
  width: 6.5rem;
  border-radius: 3px;
  align-self: stretch;
  margin-left: 20px;

  &:hover {
    background: #007acd;
  }

  @media screen and (max-width: 480px) {
    border-radius: 3px;
    height: 50px;
    margin-top: 10px;
  }
`;

export const IPSForm = ({ hasError, ipsPayload, onValidate }) => {
  const [enteredDateOfBirth, setEnteredDateOfBirth] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const patient = ipsPayload.entry.find(
      (entry) => entry.resource.resourceType === "Patient"
    );
    console.log('patient', patient);
    console.log('enteredDateOfBirth', enteredDateOfBirth)
    if (patient?.resource?.birthDate === enteredDateOfBirth) {
      onValidate();
      return;
    }

    setErrorMessage("Date of birth does not match");
  };

  return (
    <SearchFormContainer>
      <FormContainer>
        <FormWrapper>
          <h1>International patient summary</h1>
          {!!hasError ? (
            <StyledErrorMessage>IPS cannot be loaded</StyledErrorMessage>
          ) : (
            <>
              <p>
                Please enter the patient date of birth to access the
                International Patient Summary
              </p>
              <Form onSubmit={handleSubmit}>
                <DateField
                  fullWidth={false}
                  width="30px"
                  style={{ width: 300 }}
                  onChange={(event) => {
                    const date = format(
                      parseISO(event.target.value),
                      "yyyy-MM-dd"
                    );
                    setEnteredDateOfBirth(date);
                  }}
                  errorMessage={errorMessage}
                />
                <EnterButton type="submit">Enter</EnterButton>
              </Form>
              {!!errorMessage && (
                <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
              )}
            </>
          )}
        </FormWrapper>
      </FormContainer>
      <ImageContainer />
    </SearchFormContainer>
  );
};

IPSForm.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

IPSForm.defaultProps = {
  status: "idle",
  onClear: () => {},
  onChange: () => {},
  onSubmit: () => {},
  inputValue: null,
  className: null,
};
