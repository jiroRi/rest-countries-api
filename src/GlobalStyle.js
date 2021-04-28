import { createGlobalStyle } from "styled-components";
import "sanitize.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 62.5%;
    }

    body {
        width: 100vw;
        height: 1024px;
        max-width: 100vw;
        max-height: 100vh;
    }
`;
