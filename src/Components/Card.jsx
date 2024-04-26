import React from "react";
import "../App.css";

const Card = () => {
  return (
    <div
    className="cards"
      style={{
        height: "100%",
        minWidth: "25%",
        borderRadius: "20px",
        backgroundColor: "#b91814",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minWidth: "80%",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            textAlign: "left",
            paddingLeft: "30px",
          }}
        >
          PROJETO
        </p>
      </div>
      <span className="material-symbols-outlined">more_vert</span>
      <span className="material-symbols-outlined">archive</span>
    </div>
  );
};

export default Card;
