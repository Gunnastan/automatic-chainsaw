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
          <a href="/" className="link">
            {" "}
            xxx{" "}
          </a>
        </ol>
        <ol>
          <a href="/"> xxxx </a>
        </ol>
        <ol>
          <a href="/"> xxx </a>
        </ol>
        <ol>
          <a href="https://github.com/Gunnastan"> This Website </a>
        </ol>
      </ul>
    </div>
  );
}