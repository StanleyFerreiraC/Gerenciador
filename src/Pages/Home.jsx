import React from "react";
import Add from "../assets/add.svg";
import "../App.css";
import Card from "../Components/Card";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      <Card></Card>
      <div
        className="add"
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "20px",
          backgroundColor: "#8c28a0",
          marginTop: "15px",
        }}
      >
        <ion-icon
          style={{
            height: "40px",
            width: "40px",
          }}
          name="add-outline"
        ></ion-icon>
      </div>
    </div>
  );
};

export default Home;
