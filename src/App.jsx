// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Login />} /> */}
      </Routes>
    </>
  )
}

export default App
