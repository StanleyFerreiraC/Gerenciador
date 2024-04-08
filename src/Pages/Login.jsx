import React from "react";

const Login = () => {
  return (
    <div
      style={{
        height: "407px",
        width: "356px",
        backgroundColor: "#24225C",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Login</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          textAlign: 'left'
        }}
      >
        <h3>Usuario:</h3>
        <input type="text"></input>
        <h3>Senha:</h3>
        <input type="password"></input>
      </div>
      <h3>Esqueceu sua senha ?</h3>
      <button>LOGIN</button>
    </div>
  );
};

export default Login;
