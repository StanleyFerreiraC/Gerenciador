import React, { useState, useEffect } from "react";
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
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  //Função para pegar as informações dos cards existentes
  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/getCard",
          JSON.stringify({ projectname, initdate, enddate }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.status === 200) {
          const nameCards = response.data.map((card) => card.projectname);
          setCards(nameCards);
        }
      } catch (error) {
        if (!error?.response) {
          setError("Erro ao enviar para o servidor");
        }
      }
    };

    getCards();
  }, []);

  //Função para criar novos cards
  const handlerCreateCard = async (e) => {
    e.preventDefault();
    console.log(projectname, initdate, enddate);

    //Se o campo estiver vazio mostre a menssagem
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
        window.location.reload();
      }
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao enviar para o servidor");
      }
    }
  };

  const apagarcard = async (cards) => {
    const respostaConfirm = window.confirm(
      "Você quer realmente deletar esse projeto ?"
    );
    if (respostaConfirm) {
      try {
        await axios.delete(`http://localhost:3000/deleteCard/`, {
          data: { cards },
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 50);
  const maxDateString = maxDate.toISOString().split("T")[0];

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
            cursor: "pointer",
          }}
        >
          {cards.length > 0 &&
            cards.map((cards, index) => (
              <Card key={index} cards={cards} apagarcard={apagarcard} />
            ))}
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
          currentDate={currentDate}
          maxDateString={maxDateString}
        />
      )}
    </Container>
  );
};

export default Home;
