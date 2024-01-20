import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './login.css'

const Login = () => {

  
    return (
        <div className="login">
            <nav className="nav-bar">
                <a href="" >
                 <img src={logo} className="logo app" alt="Your Cloud logo " />
                 </a>
            </nav>

            <form >
                <input
                name="username"
                placeholder="User Name"
                // value={username}
                // onChange={e => setUsername(e.target.value)}
                />
                <input
                name="password"
                placeholder="Password"
                type="password"
                // value={password}
                // onChange={e => setPassword(e.target.value)}
                />
                <button>Next</button>
                {/* {error?.error &&
                <p className="error">Se ha producido un error: {error.error}</p>
                } */}
                <p>
                 <Link to="/signup">Forgot your password?</Link>
                </p>
            </form>
        </div>
      
    )
  }
  
  export default Login
  
  