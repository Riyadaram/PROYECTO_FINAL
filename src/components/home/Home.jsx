import { Link } from 'react-router-dom'
import logotype from '../../assets/logo/logotype.png'
import './Home.css'

const Home = () => {
  

  return (
    <div className="home">
       <div className='logo-container'>
        <a href="" >
          <img src={logotype} className="logo app" alt="Your Cloud logo" />
        </a>

        <p className="read-the-docs">
        Upload and save your files, don't be shy!
      </p>
      <footer className='footer'>
        <Link to="/login" className="btn-primary login-btn">Login</Link>
        <Link to="/register" className="btn-primary register-btn">Register</Link>
      </footer>
      </div>
      
      
      
    </div>
  )
}

export default Home