import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div
      className="hero-image"
        style={{
          backgroundImage: `url("hero-image.gif")`,
          height: "40rem",
          width: "",
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h3 className="mina-title">Mina's School of Great Falls</h3>
      </div>
    </div>
  );
}

export default Home;
