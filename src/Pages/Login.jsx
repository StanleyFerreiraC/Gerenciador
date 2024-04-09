import React from "react";
import logo from "../assets/logolight.png";

const Login = () => {
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
      <h3>Esqueceu sua senha ?</h3>
    </div>
  );
};

export default Login;
