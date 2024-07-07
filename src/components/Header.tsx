import React, { useState } from "react";

import { headerNav } from "../constants";

export default function Header() {
  const [show, setShow] = useState(false);

  const ToggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header d="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Brandon Johnson</h1>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer,     Freelancer, Photographer"
          ></span>
        </p>
      </div>
      <nav>
        <ul>
          {headerNav.map((navItem) => (
            <li key={navItem.title}>
              <a href={navItem.url}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="header__nav__mobile"
        id="headerToggle"
        aria-controls="primary-menu"
        aria-expanded={show ? "true" : "false"}
        role="button"
        tabIndex="0"
        onClick={ToggleMenu} //menu burger
      >
        <span></span>
      </div>
    </header>
  );
}
