  
import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div
      className="card"
      onClick={() => {
        console.log("i clicked");
        props.selectImg(props.id);
        props.shuffle(props.id);
      }}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Cards;