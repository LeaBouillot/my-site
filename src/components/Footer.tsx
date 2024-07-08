import React from "react";

import {icon} from "../constants"

export default function Footer() {

    return (
        <footer>
           <div className="">
            <h3>Brandon Johnson</h3>
            <ul>
              {icon.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link} target="_blank" rel="noreferrer">
                    <img src={footer.icon} alt={footer.title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
    )
}