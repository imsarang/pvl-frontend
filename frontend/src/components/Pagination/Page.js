import React from "react";
import "./style.css";
const Page = ({ text }) => {
  return (
    <div className="idvl-page">
      <button className={text === 1 ? "text-btn-click" : "text-btn"}>
        {text}
      </button>
    </div>
  );
};

export default Page;
