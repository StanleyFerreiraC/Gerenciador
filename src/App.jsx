import { useState } from 'react'
import { Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/background.svg'
import Login from './Pages/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
