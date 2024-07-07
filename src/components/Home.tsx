import React from "react";

import { icon } from "../constants";

import backgroundImage from "../assets/hero-bg.jpg";

export default function Home() {
  return (
    <main>
      <img src={backgroundImage} alt="background image" />
      <div>
        <ul>
          {icon.map((icon, key) => (
            <li key={key}>
              <a href={icon.url}>
                <img src={icon.icon} alt={icon.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
