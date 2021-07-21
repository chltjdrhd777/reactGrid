import React from "react";

import { css } from "@emotion/css";

const headerCSS = (function () {
  class CSSMaker {
    masterSidebar = css`
      background-color: red;
      grid-row: span 4;
    `;
  }

  return new CSSMaker();
})();

const { masterSidebar } = headerCSS;

function index() {
  return <aside className={masterSidebar}></aside>;
}

export default index;
