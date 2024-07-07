import React from "react";

import { resumeText } from "../constants";

export default function Resume() {
  return (
    <main>
      <h2>Résumé</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="resume__desc">
        {resumeText.map((resume, key) => (
          <div key={key}>
            <span>{key + 1}.</span>
            <h3>{resume.title}</h3>
            <p>{resume.year}</p>
            <p>{resume.subtitle}</p>
            <p>{resume.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
