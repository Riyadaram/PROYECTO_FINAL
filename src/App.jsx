// import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import logotype from './assets/logo/logotype.png'
// import Login from './components/Login'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" >
          <img src={logotype} className="logo app" alt="Your Cloud logo" />
        </a>
      </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer className='footer'>
        <Link to="/login" className="btn-primary login">Login</Link>
        <Link to="/register" className="btn-primary register">Register</Link>
      </footer>

      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} /> */}
      </Routes>
    </>
  )
}

export default App
