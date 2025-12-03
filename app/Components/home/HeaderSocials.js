import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/julakshah"
        className="home__social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        href="https://www.linkedin.com/in/julakshah/"
        className="home__social-link"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default HeaderSocials;
