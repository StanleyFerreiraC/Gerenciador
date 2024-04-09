import React, { useState } from "react";
import logo from "../assets/logolight.png";

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

  return (
    <div
      style={{
        height: "380px",
        width: "310px",
        backgroundColor: "rgba(111, 111, 111, 0.4)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          textAlign: "left",
        }}
      >
        <input type="text" value={username} placeholder="Usuario"></input>
        <input type="password" value={password} placeholder="Senha"></input>
      </div>
      <h3 className="forgot">Esqueceu sua senha ?</h3>
      <button>Login</button>
    </div>
  );
};

export default Login;
