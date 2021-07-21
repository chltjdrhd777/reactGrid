import React from "react";
import { Global, css } from "@emotion/react";
import { device } from "./theme";

const globalCSS = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  .grid-wrapper {
    display: grid;
    grid-template-columns: 20rem 1fr;
    height: 100vh;
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
