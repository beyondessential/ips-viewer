import React from "react";
import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";

import * as COLORS from "../constants/colors";

export const StyledTextField = styled(MuiTextField)`
  .MuiInputBase-root {
    background: white;
  }

  // The actual input field
  .MuiInputBase-input {
    color: black;
    padding: 13px 12px 13px 15px;
    line-height: 18px;
    ${(props) =>
      props.style?.minHeight ? `min-height: ${props.style.minHeight}` : ""};
    ${(props) =>
      props.style?.padding ? `padding: ${props.style.padding}` : ""};

    font-size: ${(props) => (props.size === "small" ? "11px" : "15px")};

    &::placeholder {
      color: black;
      opacity: 1;
    }
  }

  // helper text
  .MuiFormHelperText-root {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin: 4px 2px 2px;
  }

  // Hover state
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) =>
      props.borderColor || props.theme.palette.grey["400"]};
  }

  .MuiOutlinedInput-root:not(.Mui-disabled):hover
    .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) =>
      props.borderColor || props.theme.palette.grey["400"]};
  }

  // Focused state
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused:hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }

  // Place holder color when focused
  .MuiInputBase-input:focus::-webkit-input-placeholder {
    color: black;
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.palette.text.primary};
  }

  // text area fields
  .MuiOutlinedInput-multiline {
    padding: 0 0 5px 0;
  }

  .MuiInputAdornment-positionStart {
    margin-right: 0;
  }
`;

export const TextInput = ({ value = "", label, hasError, ...props }) => (
  <StyledTextField
    value={value}
    variant="outlined"
    borderColor={hasError ? COLORS.RED : undefined}
    {...props}
  />
);
