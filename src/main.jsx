import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import App from "./App.jsx";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Projeto from "./Pages/Projeto";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:cards" element={<Projeto />} />
        </Route>
      </Routes>
  </HashRouter>
);
