import React from "react";
import "./style.css"; 

function Scoreboard(props) {
  return (
    <div className="score-board">
      <h4>Scores</h4>
      <span className="scores">
          Score: <span>{props.score}</span>
          <br></br>
          Highest Score: <span>{props.highestscore}</span>
      </span>
    </div>
  );
}

export default Scoreboard;