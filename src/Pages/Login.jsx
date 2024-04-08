import React from "react";
import logo from "../assets/logolight.png";

const Login = () => {
  return (
    <div
      style={{
        height: "380px",
        width: "310px",
        background: "linear-gradient(rgb(0, 0, 0) 20%, rgb(22, 59, 143) 130%)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "6em",
          padding: "30px"
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
        <input type="text" placeholder="Usuario"></input>
        <input placeholder="Senha" type="password"></input>
      </div>
      <h3 className="forgot">Esqueceu sua senha ?</h3>
      <button>Login</button>
    </div>
  );
};

export default Login;
