import React from "react";
import "./style.css";

const Card = ({ heading, value }) => {
  return (
    <div className="card">
      <div className="cardHead">
        <div className="cardHead1">Finance</div>
        <div className="cardHead2"> Know More {">"}</div>
      </div>
      <div className="cardMainContent">
        <div className="cardMainHead">
          <div className="cardMainHead1">{heading}</div>
          <div className="cardMainHead2">{value}</div>
        </div>
        <div className="btnContent">
          <div className="btnCard1">
            <button className="cardMainButton">Tag A Job</button>
          </div>
          <div className="btnCard2">
            <button className="cardMainButtonEmp">Employees Enrolled</button>
          </div>
          <div className="btnCard3">
            <button className="cardMainButtonAssign">Assign Certificate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
