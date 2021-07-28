import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import Logo from "images/brand.png";

const headerCSS = (function () {
  class CSSMaker {
    masterHeader = css`
      grid-column: 2/ -1;
      grid-row: span 1;
      display: flex;
      align-items: center;
      animation: 0.5s fade-in ease-in;
      & > .container {
        width: 100%;
        max-width: 120rem;
        margin: 0 auto;
        padding: 0 1.5rem;

        & > .main-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;

          & > .nav-list {
            display: flex;
            & li {
              margin-left: 5rem;
            }

            & a {
              font-size: 1.4rem;
              text-transform: uppercase;
              color: #6a6768;
            }
          }
        }
      }
    `;
  }

  return new CSSMaker();
})();

const { masterHeader } = headerCSS;

function index() {
  return (
    <header className={masterHeader}>
      <div className="container">
        <nav className="main-nav">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>

          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/fqa">FQA</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default index;
