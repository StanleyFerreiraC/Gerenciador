import React from "react";

const CreateCard = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#0707077a",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <div
        style={{
          height: "70%",
          minWidth: "30%",
          borderRadius: "20px",
          backgroundColor: "#4f145b",
          display: "flex",
          alignItems: "center",
        }}
      >
        CreateCard
      </div>
    </div>
  );
};

export default CreateCard;
