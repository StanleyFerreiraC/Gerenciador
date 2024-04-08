import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from './App.jsx'
import Login from "./Pages/Login";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
  );
