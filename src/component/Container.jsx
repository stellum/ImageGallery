import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;

const ContainerDiv = styled.div`
  width: 1080px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
