import React from "react";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import db, { work } from "../assets/database";
import WorkCard from "../components/work-card";


function Homepage(props) {
  return (
    <>
      <div className="page-home">
        {/*image behind the menu*/}
        <div className="img-homepage">

        </div>
        <div className="text-container">
          <h1>Hello People</h1>
          <p>texto base</p>
          <p>projetos abaixo</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className="work-container">
          {db.works
            .map((work) => (
              <WorkCard work={work} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}



export default Homepage;
