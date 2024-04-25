import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import Oig from "../assets/img/OIG.svg";

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
  };

  const moverDivRight = () => {
    setPosicao(36.5); // Mover a div 100px para a direita
    setDisplaySing("none");
    setDisplayLogin("flex");
  };

  //Função de autenticação Login
  const handlerLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    //Se o campo estiver vazio mostre a mensagem
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
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
    console.log(email, password);

    //Se o campo estiver vazio mostre a mensagem
    if (!email.trim() || !password.trim()) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/Cadastro",
        JSON.stringify({ username, email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        moverDivRight();
      }
    } catch (error) {
      if (!error?.response) {
        moverDivRight();
        setError("Erro ao acessar o servidor");
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
        sx={{
          display: "flex",
          width: "60%",
          alignItems: "center",
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
        <img style={{ height: "70px", width: "60px", scale:"1.5" }} src={Oig} />
        <strong className="erro">{error}</strong>

        {/******Login******/}
        <Box
          component="form"
          className="login visibilityLogin"
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
            onClick={(e) => handlerLogin(e)}
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
            sx={{ color: "white", borderColor: "white" }}
          />
          <TextField

            className="input"
            name="email"
            label="E-mail"
            variant="outlined"
            type="email"
            size="small"
          />
          <TextField

            className="input"
            label="Senha"
            variant="outlined"
            type="password"
            size="small"
          />
          <Button
            className="entrar"
            variant="contained"
            onClick={(e) => handlerCadastro(e)}
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
