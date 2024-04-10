import React, { useState } from "react";
import logo from "../assets/logolight.png";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos de entrada
    if (!username.trim() || !password.trim()) {
      setError("Por favor, preencha todos os campos");
      return;
    }
  };

  const handlerLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);

    try {
      const response = await axios.post(
      "http://localhost:3000/login",
      JSON.stringify({ username, password }),
      {
        headers: { 'Content-Type' : 'application/json'}
      }
    );
  } catch (error) {
    if (!error?.response) {
      setError('Error accessing the server')
    } else if (error.response.status == 401) {
      setError('Incorrect username or password')
    }
  }

  };

  return (
    <div
      style={{
        height: "380px",
        width: "310px",
        backgroundColor: "rgba(111, 111, 111, 0.4)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 0px 5px 1px rgba(255, 255, 255, 0.5)",
      }}
    >
      <img
        style={{
          width: "6em",
          padding: "30px",
        }}
        src={logo}
      ></img>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            textAlign: "left",
          }}
        >
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <h3 className="forgot">Forgot your password ?</h3>
        <button onClick={(e) => handlerLogin(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
