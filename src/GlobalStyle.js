import { createGlobalStyle } from "styled-components";
import "sanitize.css";

export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 62.5%;
    }

    *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }

    *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollBarTrack};
    }
    
    /* Handle */
    *::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.scrollBarThumb};
    }

    /* Handle on hover */
    *::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.scrollBarThumbHover};
    }

    a {
        text-decoration: none;
    }

    body {
        width: 100%;
        max-width: 100%;
        max-height: 100vh;

        background-color: ${(props) => props.theme.bg};
    }
`;
