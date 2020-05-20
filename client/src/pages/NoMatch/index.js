import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <Root>
      <h1>NO MATCH, 404</h1>
      <Link to="/">Return Home</Link>
    </Root>
  );
}

export default NoMatch;

const Root = styled.div``;
