import React from "react";

import { css } from "@emotion/css";

const sidebarCSS = (function () {
  class CSSMaker {
    masterSidebar = css`
      grid-column: 1/2;
      grid-row: span 4;

      & > span {
        transform: rotate(-90deg);
        background: #48484848;

        &:nth-of-type(2) {
          width: 2px;
          height: 10rem;
          transform: rotate(0);
          margin: 2rem 0;
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterSidebar } = sidebarCSS;

function index() {
  return (
    <aside className={`centering-col ${masterSidebar}`}>
      <span>4</span>
      <span></span>
      <span>1</span>
    </aside>
  );
}

export default index;
