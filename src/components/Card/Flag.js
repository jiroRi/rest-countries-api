import React from "react";
import styled from "styled-components";

export const Flag = (props) => {
  return <Image {...props} />;
};

const Image = styled.img`
  width: 100%;
  min-width: 264px;
  height: 160px;
  min-height: 160px;
  border-radius: 4px 4px 0px 0px;

  background-image: url(${(props) => props.flag});
  background-size: cover;

  ${(props) =>
    props.variant === "full" &&
    `
    width: 100%;
    height: auto;
    margin-bottom: 4rem;
    box-shadow: ${props.theme.boxShadow.flag};

    @media ${props.theme.device.tablet} {
      height: auto;
    }

    @media ${props.theme.device.laptop} {
      max-width: auto;
    }

    @media ${props.theme.device.desktopS} {
      max-width: 560px;
      height: 400px;
    }

    @media ${props.theme.device.desktopM} {
      max-width: auto;
      height: auto;
    }
  `}
`;
