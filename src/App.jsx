// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import RecoverPassword from './pages/login/RecoverPassword'
import UserContent from './pages/userPage/UserContent'
import './App.css'
import CreateFolderPage from './pages/createFolder/CreateFolder'

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
        {/* Aquí puedes añadir las nuevas rutas de la rama Zalo */}
        <Route path="/add-file" element='' />
        <Route path="/create-folder" element={<CreateFolderPage />} />
        <Route path="/folder" element='' />
        <Route path="/search" element='' />
      </Routes>
    </>
  )
}

export default App
