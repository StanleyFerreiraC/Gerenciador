import React from "react";

const Card = () => {
  return (
    <div
      style={{
        minHeight: "100px",
        minWidth: "450px",
        borderRadius: "20px",
        backgroundColor: "#8c28a0",
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
            paddingLeft: "30px"
          }}
        >
          PROJETO
        </p>
      </div>
      <span class="material-symbols-outlined">more_vert</span>
      <span class="material-symbols-outlined">delete</span>
    </div>
  );
};

export default Card;
