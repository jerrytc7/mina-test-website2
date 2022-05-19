import React from "react";

function Documents({ documents }) {
  return (
    <div>
      <header>
        <h3>Documents</h3>
        <p>Here are some important documents for our school!</p>
      </header>
      <body>
        {documents.map((document) => (
          <ul>
            <li>
              <a href={document.path} target="_blank" rel="noreferrer">
                {" "}
                {document.title}
              </a>
            </li>
          </ul>
        ))}
      </body>
    </div>
  );
}

export default Documents;
