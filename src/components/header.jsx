import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loc from "../assets/localization";
import { Link } from "react-router-dom";

function Header({ isContactPage }) {

  return (
    <header className={isContactPage ? "header-contact" : ""}>
      
      <ul className="content-menu noto-sans-font">
        <li>
          <Link to="/">{loc.commonLari}</Link>
        </li>
        <li>
          <Link to="/projects">{loc.headerProjects}</Link>
        </li>

        <li>
          <Link to="/contact">{loc.headerContact}</Link>
        </li>
      </ul>
      
    </header>
  );
}

export default Header;
