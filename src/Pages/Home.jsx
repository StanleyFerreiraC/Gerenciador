import React, { useState } from "react";
import Add from "../assets/add.svg";
import "../App.css";
import Card from "../Components/Card";
import CreateCard from "../Components/CreateCard";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {!isVisible && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bold",
            height: "100%",
          }}
        >
          <Card />
          <div
            className="add"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "20px",
              backgroundColor: "#b91814",
              marginTop: "15px",
            }}
            onClick={toggleVisibility}
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
      )}
      {isVisible && <CreateCard toggleVisibility={toggleVisibility} />}
    </div>
  );
};

export default Home;
