import React from "react";
import { css } from "@emotion/css";

const headerCSS = (function () {
  class CSSMaker {
    masterHeader = css``;
  }

  return new CSSMaker();
})();

const { masterHeader } = headerCSS;

function index() {
  return <header className={masterHeader}></header>;
}

export default index;
