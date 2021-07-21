import React from "react";

import { css } from "@emotion/css";

const headerCSS = (function () {
  class CSSMaker {
    masterMain = css``;
  }

  return new CSSMaker();
})();

const { masterMain } = headerCSS;

function index() {
  return <main className={masterMain}></main>;
}

export default index;
