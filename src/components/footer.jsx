import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import loc from "../assets/localization";


function Footer() {
  return (
    <div className="container-footer">
      <div className="link-footer">
      <Link to="/">{loc.commonLari}</Link>
      <Link to="/projects">{loc.headerProjects}</Link>
      <Link to="/contact">{loc.headerContact}</Link>
      </div>
      <span className="poppins-extralight">Page by Fernanda</span>
    </div>
  );
}

export default Footer;
 