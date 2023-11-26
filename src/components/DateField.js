import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { isAfter, isBefore, parse } from "date-fns";
import PropTypes from "prop-types";

import { TextInput } from "./TextInput";
import { OuterLabelFieldWrapper } from "./OuterLabelFieldWrapper";
import * as COLORS from "../constants/colors";

const StyledError = styled.div`
  color: ${COLORS.RED};
  font-size: 12px;
  font-weight: 500;
`;

const CustomIconTextInput = styled(TextInput)`
  input::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M13.125 1.75H11.375V0H8.75V1.75H5.25V0H2.625V1.75H0.875C0.392 1.75 0 2.142 0 2.625V13.125C0 13.608 0.392 14 0.875 14H13.125C13.608 14 14 13.608 14 13.125V2.625C14 2.142 13.608 1.75 13.125 1.75ZM12.25 12.25H1.75V6.125H12.25V12.25Z' fill='%23326699' /%3E%3C/svg%3E");
    cursor: pointer;
    border-radius: 50%;
    margin-left: 0.5rem;
  }

  ${(props) =>
    props.$isPlaceholder
      ? `
        .MuiInputBase-input {
          color: grey;
        }
      `
      : ""}
  }
`;

export const DateField = ({
  type = "date",
  value,
  format = "yyyy-MM-dd",
  onChange,
  name,
  label,
  required,
  max = "9999-12-31",
  min,
  inputProps = {},
  error,
  ...props
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  const onValueChange = useCallback(
    (event) => {
      const formattedValue = event.target.value;
      const date = parse(formattedValue, format, new Date());

      if (max) {
        const maxDate = parse(max, format, new Date());
        if (isAfter(date, maxDate)) {
          onChange({ target: { value: "", name } });
          return;
        }
      }

      if (min) {
        const minDate = parse(min, format, new Date());
        if (isBefore(date, minDate)) {
          onChange({ target: { value: "", name } });
          return;
        }
      }

      let outputValue;
      try {
        outputValue = date.toISOString();
      } catch (e) {
        setIsPlaceholder(true);
      }

      if (outputValue) {
        setIsPlaceholder(false);
      }

      setCurrentText(formattedValue);
      if (outputValue === "Invalid date") {
        onChange({ target: { value: "", name } });
        return;
      }

      onChange({ target: { value: outputValue, name } });
    },
    [onChange, format, name, min, max]
  );

  return (
    <OuterLabelFieldWrapper
      label={label}
      required={required}
    >
      <CustomIconTextInput
        type={type}
        value={currentText}
        onChange={onValueChange}
        InputProps={{
          // Set max property on HTML input element to force 4-digit year value (max year being 9999)
          inputProps: { max, min, ...inputProps },
        }}
        $isPlaceholder={isPlaceholder}
        hasError={!!error}
        {...props}
      />
      {!!error && <StyledError>{`*${error}`}</StyledError>}
    </OuterLabelFieldWrapper>
  );
};

DateField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  format: PropTypes.string,
};

DateField.defaultProps = {
  name: "",
  onChange: () => null,
  value: "",
  fullWidth: true,
  format: "yyyy-MM-dd",
};
