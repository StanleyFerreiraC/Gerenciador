import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import Oig from "../assets/img/OIG.svg";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Login = () => {
  const [posicao, setPosicao] = useState(36.5);
  const [displaySing, setDisplaySing] = useState("none");
  const [displayLogin, setDisplayLogin] = useState("flex");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Move o card de login
  const moverDivleft = () => {
    setPosicao(49.9); // Mover a div 100px para a direita
    setDisplaySing("flex");
    setDisplayLogin("none");
    setError("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  const moverDivRight = () => {
    setPosicao(36.5); // Mover a div 100px para a direita
    setDisplaySing("none");
    setDisplayLogin("flex");
    setError("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  //Função de autenticação Login
  const handlerLogin = async (e) => {
    e.preventDefault();
    console.log("login");

    //Se o campo estiver vazio mostre a mensagem
    if (!email.trim() || !password.trim()) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-projeto-trello.onrender.com/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status == 401) {
        setError("Usuário ou senha incorretos");
      }
    }
  };

  const handlerCadastro = async (e) => {
    e.preventDefault();
    console.log("Cadastro");

    //Se o campo estiver vazio mostre a mensagem
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/cadastro",
        JSON.stringify({ username, email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        moverDivRight();
        setError("Confirme seu cadastro");
      }
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status == 422) {
        setError("E-mail já cadastrado");
      }
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        gap={1}
        className="cardbacklogin"
        sx={{
          display: "flex",
          width: "60%",
          alignItems: "center",
          boxShadow: "0px 0px 10px 0px #000000",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "10px 20px 10px 20px",
          color: "black",
          height: "28%",
        }}
      >
        <Box
          gap={1}
          className="cadastro visibility"
          sx={{
            display: `flex`,
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <a style={{ color: `black` }}>Ainda não tem uma conta ?</a>
          <a style={{ color: `black` }}>
            Cadastre-se e crie listas para <br /> organizar sua rotina
          </a>
          <Button
            className="entrar"
            onClick={moverDivleft}
            variant="contained"
            sx={{
              boxShadow: "none",
              backgroundColor: "#cb4204",
              marginTop: "20px",
              width: "53%",
            }}
          >
            Cadastre-se
          </Button>
        </Box>

        <Box
          gap={1}
          className="login visibility"
          sx={{
            display: `flex`,
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <a style={{ color: `black` }}>Ja tem cadastro ?</a>

          <a style={{ color: `black` }}>
            Então entre na sua conta <br /> e veja sua lista de tarefa
          </a>
          <Button
            className="entrar"
            onClick={moverDivRight}
            variant="contained"
            sx={{
              boxShadow: "none",
              backgroundColor: "#cb4204",
              marginTop: "20px",
              width: "50%",
            }}
          >
            entrar
          </Button>
        </Box>
      </Box>
      <Box></Box>
      <Box
      className="cardlogin"
        sx={{
          zIndex: "10",
          position: "absolute",
          right: `${posicao}%`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#b91814",
          borderRadius: "10px",
          padding: "10px 10px 20px 10px",
          boxShadow: "0px 0px 10px 0px #000000",
          transition: "right .8s ease-in-out",
          height: "32%",
        }}
        noValidate
        autoComplete="off"
      >
        {/******Logo******/}
        <img
          style={{ height: "70px", width: "60px", scale: "1.5" }}
          src={Oig}
        />
        <strong className="erro">{error}</strong>

        {/******Login******/}
        <Box
          component="form"
          className="login visibilityLogin"
          onSubmit={handlerLogin}
          sx={{
            "& > :not(style)": { m: 1 },
            display: `${displayLogin}`,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            className="input"
            type="email"
            label="E-mail"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="input"
            label="Senha"
            variant="outlined"
            type="password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a className="a" style={{ fontSize: "13px", margin: "none" }}>
              Esqueceu sua senha ?
            </a>
          </Box>
          <Button
            className="entrar"
            variant="contained"
            type="submit"
            sx={{
              boxShadow: "none",
              width: "100px",
              backgroundColor: "#fefefe",
              color: "#cb4204",
            }}
          >
            entrar
          </Button>
        </Box>

        {/******Cadastro de usuarios******/}
        <Box
          component="form"
          onSubmit={handlerCadastro}
          className="cadastro visibility"
          sx={{
            "& > :not(style)": { m: 1 },
            display: `${displaySing}`,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            className="input"
            name="Usuario"
            label="Usuario"
            variant="outlined"
            type="text"
            size="small"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="input"
            name="email"
            label="E-mail"
            variant="outlined"
            type="email"
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="input"
            label="Senha"
            variant="outlined"
            type="password"
            size="small"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="entrar"
            variant="contained"
            type="submit"
            sx={{
              boxShadow: "none",
              width: "100px",
              backgroundColor: "#fefefe",
              color: "#cb4204",
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
