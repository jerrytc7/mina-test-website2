import React from "react";

function Documents() {
  return (
    <div>
      <header>
        <h3>Documents</h3>
      </header>
      <body>
        <p>Here are some important documents for our school!</p>
        <ul>
          <li>
            <a href="mina-brochure-front.png" target="_blank">
              {" "}
              Front Brochure
            </a>
          </li>
          <li>
            <a href="mina-brochure-back.png" target="_blank">
              {" "}
              Back Brochure
            </a>
          </li>
        </ul>
      </body>
    </div>
  );
}

export default Documents;
