import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function About() {
  return (
    <Root>
      <h1>the ABOUT page</h1>
      <Link to="/sdlfkjdf">
        <h1>ABout</h1>
      </Link>
    </Root>
  );
}

export default About;

const Root = styled.div``;
