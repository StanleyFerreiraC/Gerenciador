import React, { useState } from "react";
import logo from "../assets/logolight.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlerLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);

    //Se o campo estiver vazio mostre a mensagem
    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      if (!error?.response) {
        setError("Error accessing the server");
      } else if (error.response.status == 401) {
        setError("Incorrect username or password");
      }
    }
  };

  return (
    <div
      style={{
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
        onSubmit={handlerLogin}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "red",
            margin: "0px 0px 10px 0px",
          }}
        >
          {error}
        </p>
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <h3 className="forgot">Forgot your password ?</h3>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
