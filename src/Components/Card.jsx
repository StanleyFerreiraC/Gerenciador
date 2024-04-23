import React from "react";

const Card = () => {
  return (
    <div
      style={{
        height: "100%",
        minWidth: "180%",
        borderRadius: "20px",
        backgroundColor: "#adadade8",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minWidth: "85%",
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
