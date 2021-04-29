import React from "react";
import styled from "styled-components";

export const Text = (props) => (
  <Container {...props}>{props.children}</Container>
);

const Container = styled.p`
  color: ${(props) => props.theme.cardValue};
  font-size: 1.5rem;
  font-weight: 300;

  ${(props) =>
    props.variant === "title" &&
    `
        color: ${props.theme.cardTitle};
        font-size: ${props.theme.mobileFontSizes.cardTitle};
        font-weight: 800;

        @media ${props.theme.device.tablet} {
            font-size: ${props.theme.desktopFontSizes.cardTitle};
        }
    `}

  ${(props) =>
    props.variant === "body" &&
    `
        color: ${props.theme.cardValue};
        font-size: ${props.theme.mobileFontSizes.cardValue};

        @media ${props.theme.device.tablet} {
            font-size: ${props.theme.desktopFontSizes.cardValue};
        }
    
        strong {
            color: ${props.theme.cardLabel};
            font-size: ${props.theme.mobileFontSizes.cardLabel};
            font-weight: 600;

            @media ${props.theme.device.tablet} {
                font-size: ${props.theme.desktopFontSizes.cardLabel};
            }
        }
    `}
`;
