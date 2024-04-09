import React from "react";
import Add from "../assets/add.svg";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="add"
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "20px",
          backgroundColor: "#8c28a0",
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