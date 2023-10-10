import React from "react";
import "../App.css";
export default function Text() {
  return (
    <div>
      <div className="title">
        <h1 className="title-header"> Welcome. </h1>
        <p className="title-about">
          Greetings, I'm Shokoya Ridwan, a versatile developer with expertise in
          full-stack and smart contract development. I excel in crafting
          comprehensive applications, proficiently handling both front-end and
          back-end aspects. My commitment to constant skill enhancement and
          staying current with cutting-edge technologies drives me to
          consistently deliver top-notch, full-stack applications to my valued
          clients.
        </p>
      </div>

      <h4 className="projects"> Projects </h4>
      <ul className="projects-links">
        <ol>
          <a href="https://quotes-0h1y.onrender.com" className="link">
            {" "}
            Random Quote Machine{" "}
          </a>
        </ol>
        <ol>
          <a href="https://previewer-llie.onrender.com" className="link">
            {" "}
            Markdown Previewer{" "}
          </a>
        </ol>
        <ol>
          <a href="/"> xxx </a>
        </ol>
        <ol>
          <a href="https://github.com/Gunnastan/automatic-chainsaw">
            {" "}
            This Website{" "}
          </a>
        </ol>
      </ul>
    </div>
  );
}
