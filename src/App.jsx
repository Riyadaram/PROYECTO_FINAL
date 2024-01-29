// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import RecoverPassword from './components/login/RecoverPassword'
import UserContent from './components/userContent/UserContent'
import './App.css'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/user-content" element={<UserContent />} />
      </Routes>
    </>
  )
}

export default App
