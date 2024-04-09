import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Login from './Pages/Login'
import './App.css'


function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
