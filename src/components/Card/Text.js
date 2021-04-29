import React from "react";
import styled from "styled-components";

export const Text = (props) => (
  <Container {...props}>{props.children}</Container>
);

const Container = styled.span`
  color: ${(props) => props.theme.cardValue};
  font-size: 1.5rem;
  font-weight: 300;

  /* Card */
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
        font-size: ${props.theme.mobileFontSizes.cardLabel};

        @media ${props.theme.device.tablet} {
            font-size: ${props.theme.desktopFontSizes.cardLabel};
        }
    
        strong {
            color: ${props.theme.cardLabel};
            font-weight: 600;

            @media ${props.theme.device.tablet} {
                font-size: ${props.theme.desktopFontSizes.cardLabel};
            }
        }
    `}
    /* Card */

    /* Full Details */
    ${(props) =>
    props.variant === "full-title" &&
    `       
            margin-bottom: 2.8rem;

            color: ${props.theme.cardTitle};
            font-size: ${props.theme.mobileFontSizes.fullTitle};
            font-weight: 800;
    
            @media ${props.theme.device.tablet} {
                font-size: ${props.theme.desktopFontSizes.fullTitle};
            }
    `}

    ${(props) =>
    props.variant === "full-body" &&
    `
    margin-bottom: 1rem;
    
    color: ${props.theme.cardValue};
    font-size: ${props.theme.mobileFontSizes.fullLabel};

    @media ${props.theme.device.tablet} {
        font-size: ${props.theme.desktopFontSizes.fullLabel};
    }

    strong {
        color: ${props.theme.cardLabel};
        font-size: ${props.theme.mobileFontSizes.fullLabel};
        font-weight: 600;

        @media ${props.theme.device.tablet} {
            font-size: ${props.theme.desktopFontSizes.fullLabel};
        }
    }
    `}
`;
