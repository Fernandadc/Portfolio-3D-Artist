import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import db from "../assets/database";



function Projects()
{
  return (
    <div className="project-page">
         
      <Slider>
  {db.works.map((work) => (
    <div key={work.id}>
     <a href="">
      <div className="slider-item-desc">
      <h6>{work.name}</h6>
      </div>
      <div className="slider-img-box">
      <img className="slider-img" src={work.image} alt= {work.alt} />
      </div>
    </a>
    </div>
  ))}
</Slider>

    </div>
  );
}

export default Projects;
