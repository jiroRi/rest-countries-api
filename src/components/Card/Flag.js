import React from "react";
import styled from "styled-components";

export const Flag = (props) => {
  return <Image {...props} />;
};

const Image = styled.div`
  width: 100%;
  min-width: 264px;
  height: 160px;
  min-height: 160px;
  border-radius: 4px 4px 0px 0px;

  background-image: url(${(props) => props.flag});
  background-size: cover;
`;
