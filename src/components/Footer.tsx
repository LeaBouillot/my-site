import React from "react";

import { icons } from "../constants";

export default function Footer() {
  return (
    <footer>
      <div className="">
        <h3>Brandon Johnson</h3>
        <ul>
          {icons.map((footer, key) => (
            <li key={key}>
              <a href={footer.link} target="_blank" rel="noreferrer">
                <img src={footer.icons} alt={footer.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
