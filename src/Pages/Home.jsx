import React, { useState } from "react";
import Add from "../assets/add.svg";
import "../App.css";
import Card from "../Components/Card";
import CreateCard from "../Components/CreateCard";
import axios from "axios";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [projectname, setProjectname] = useState("");
  const [initdate, setInitdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [error, setError] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const getCards = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "http://localhost:3000/getCard",
        JSON.stringify({ projectname, initdate, enddate }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao enviar para o servidor");
      }
    }
  };

  const handlerCreateCard = async (e) => {
    e.preventDefault();
    console.log(projectname, initdate, enddate);

    //Se o campo estiver vazio mostre a mensagem
    if (!projectname.trim() || !initdate.trim() || !enddate.trim()) {
      setError("Preencha todos os campos");
      console.log(error);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/cardCreate",
        JSON.stringify({ projectname, initdate, enddate }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        setIsVisible(!isVisible);
        setError("");
        getCards;
      }
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao enviar para o servidor");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      {!isVisible && (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bold",
            height: "100%",
          }}
        >
          <Card  getCards={getCards}/>
          <Box
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
          </Box>
        </Box>
      )}
      {isVisible && (
        <CreateCard
          error={error}
          setProjectname={setProjectname}
          setInitdate={setInitdate}
          setEnddate={setEnddate}
          handlerCreateCard={handlerCreateCard}
          toggleVisibility={toggleVisibility}
        />
      )}
    </Container>
  );
};

export default Home;
