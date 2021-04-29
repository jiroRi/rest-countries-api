import React from "react";
import styled from "styled-components";

export const Back = () => (
  <Icon fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.034 7.75a1.157 1.157 0 00-.723-1.067 1.155 1.155 0 00-.443-.086l-13.483.018 4.5-4.546c.213-.216.331-.508.328-.813A1.16 1.16 0 008.053.107c-.305 0-.597.122-.81.338L.805 6.95a1.139 1.139 0 00-.33.813c.004.305.128.597.345.812l6.565 6.497c.218.215.512.336.816.336a1.139 1.139 0 001.139-1.15 1.16 1.16 0 00-.345-.813l-4.587-4.54 13.483-.001a1.144 1.144 0 00.814-.338 1.136 1.136 0 00.329-.817z" />
  </Icon>
);

const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;

  path {
    fill: ${(props) => props.theme.title};
  }
`;
