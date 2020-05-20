import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { placeholder, type, label, name, required, onChange } = props;
  return (
    <Root>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={type || "text"}
        name={name}
        required={required}
        onChange={onChange}
      ></input>
    </Root>
  );
};

export default Input;

const Root = styled.div`
  label {
    margin-right: 20px;
  }
`;
