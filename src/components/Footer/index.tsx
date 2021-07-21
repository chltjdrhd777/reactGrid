import React from "react";

import { css } from "@emotion/css";

const headerCSS = (function () {
  class CSSMaker {
    masterFooter = css``;
  }

  return new CSSMaker();
})();

const { masterFooter } = headerCSS;

function index() {
  return <footer className={masterFooter}></footer>;
}

export default index;
