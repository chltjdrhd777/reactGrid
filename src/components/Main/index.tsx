import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import rose from "images/rose.png";
import bottle from "images/bottle.png";
import { DefaultBtn } from "emotionCSS/theme";

const mainCSS = (function () {
  class CSSMaker {
    masterMain = css`
      grid-column: 2 / -1;
      grid-row: 2 / 4;

      & > .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center; // === align-items : center && justify-items : center
        height: 100%;

        & > article[class~="description"] {
          max-width: 50rem;
          justify-self: start; // single grid item selection

          > .item-title {
            font-size: 9.6rem;
            font-weight: 400;
            margin-bottom: 3rem;
            color: black;
          }

          > .item-description {
            margin-bottom: 4rem;
          }
        }

        & > article[class~="image-wrapper"] {
          position: relative;

          & > .bottle {
          }

          & > .rose {
            position: absolute;
            bottom: -3rem;
            left: -15rem;
          }

          //after은 기본이 화면밖에 있는걸로 보임
          //따라서, 부모에 relative를 걸어주고
          //내부에서 absolute로 움직여서 표현해야 함
          &::after {
            content: "";
            width: 75rem;
            height: 32rem;
            background: #ffc5cc;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(29rem, -50%);
            z-index: -2;
          }
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterMain } = mainCSS;

function index() {
  return (
    <main className={masterMain}>
      <div className="container">
        <article className="description">
          <h1 className="item-title">Perfume</h1>
          <p className="item-description">
            It is a really beautiful perfume. It is a really beautiful perfume.
            It is a really beautiful perfume. It is a really beautiful perfume.
            It is a really beautiful perfume.
          </p>

          <DefaultBtn>
            <Link to="/">View more</Link>
          </DefaultBtn>
        </article>

        <article className="image-wrapper">
          <img src={rose} alt="" className="rose" />
          <img src={bottle} alt="" className="bottle" />
        </article>
      </div>
    </main>
  );
}

export default index;
