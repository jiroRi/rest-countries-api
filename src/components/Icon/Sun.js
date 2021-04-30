import React from "react";
import styled from "styled-components";

export const Sun = () => (
  <Icon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 .833a.833.833 0 01.834.834v1.666a.833.833 0 11-1.667 0V1.667A.833.833 0 0110 .833zM5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-3.333a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm.834 10a.833.833 0 00-1.667 0v1.666a.833.833 0 001.667 0v-1.666zM19.166 10a.834.834 0 01-.834.833h-1.666a.833.833 0 010-1.666h1.666a.833.833 0 01.834.833zm-15.834.833a.833.833 0 100-1.666H1.667a.833.833 0 100 1.666h1.666zm13.149-7.315a.833.833 0 010 1.179l-1.178 1.178a.833.833 0 11-1.179-1.178l1.178-1.179a.833.833 0 011.179 0zM5.875 15.303a.834.834 0 10-1.178-1.178l-1.179 1.178a.832.832 0 101.179 1.179l1.178-1.179zM3.518 3.518a.833.833 0 011.179 0l1.178 1.179a.833.833 0 11-1.178 1.178L3.518 4.697a.833.833 0 010-1.179zm11.786 10.607a.833.833 0 00-1.179 1.178l1.178 1.179a.833.833 0 001.179-1.179l-1.178-1.178z"
      fill="#000"
    />
  </Icon>
);

const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1rem;

  path {
    fill: ${(props) => props.theme.title};
  }
`;
