import React from "react";

function WorkCard(props) {
    return(
        <div className="work-component">
        <a href="">
            <img src={props.work.image} alt="work-img" />
            <h3>{props.work.name}</h3>
            <p>{props.work.description}</p>
        </a>
        </div>
    );
}

export default WorkCard;