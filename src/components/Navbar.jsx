import React from "react";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../App.css";
export default function Navbar(props) {
  return (
    <div>
      <Container>
        <div className="socials">
          <a href="https://github.com/Gunnastan">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/ridwan-shokoya-63343a223/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <button className="move">
            <FontAwesomeIcon icon={faEnvelope} onClick={props.toggle} />
          </button>
        </div>
      </Container>
    </div>
  );
}
