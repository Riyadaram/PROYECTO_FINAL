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

            <form className='login-form'>
                <input
                className='input-field'
                name="username"
                placeholder="User Name"
                // value={username}
                // onChange={e => setUsername(e.target.value)}
                />
                <input
                className='input-field'
                name="password"
                placeholder="Password"
                type="password"
                // value={password}
                // onChange={e => setPassword(e.target.value)}
                />
                <button className='login-btn'>Next</button>
                {/* {error?.error &&
                <p className="error">Se ha producido un error: {error.error}</p>
                } */}
                <p>
                 <Link className="recover-password-link" to="/signup">Forgot your password?</Link>
                </p>

                
                
            </form>
            <footer className='footer'>
                    <h3>Built by</h3>
                <p>
                <Link className="build-team" to="https://www.linkedin.com/in/gonzalo-jrr/" target="_blank">Gonzalo Rodriguez</Link>
                <Link className="build-team" to="https://www.linkedin.com/in/scarlettsantanawilliams/" target="_blank">Scarlett Santana</Link>
                <Link className="build-team" to="https://www.linkedin.com" target="_blank">Mohammed El Mangadi</Link>
                <Link className="build-team" to="https://www.linkedin.com/in/vlad-puentesb/" target="_blank">Vlad Beltran</Link>
                </p>
            </footer>
        </div>
      
    )
  }
  
  export default Login
  
  