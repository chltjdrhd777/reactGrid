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
    color: #6a6768;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  img {
    max-width: 100%;
  }

  .grid-wrapper {
    display: grid;
    grid-template-columns: 20rem 1fr;
    height: 100vh;
  }

  .centering-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .centering-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  //? media
  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {
  }

  //? keyframes
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-2.5rem);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fase-in-left {
    from {
      transform: translate(100rem, -50%);
    }
    to {
      opacity: 1;
      transform: tanslate(29rem, -50%);
    }
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
