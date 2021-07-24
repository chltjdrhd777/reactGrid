import React from "react";

import { css } from "@emotion/css";

const headerCSS = (function () {
  class CSSMaker {
    masterFooter = css`
      grid-column: 2 / -1;
      grid-row: 4 / 5;
    `;
  }

  return new CSSMaker();
})();

const { masterFooter } = headerCSS;

function index() {
  return (
    <footer className={masterFooter}>
      <div className="container">
        <span className="selected"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </footer>
  );
}

export default index;
