import { Link } from 'react-router-dom'
import Header from '../header/Header'
import './Login.css'


const Login = () => {

  
    return (
        <div className="login">
            <Header />
    

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
                <button className='next-btn'>Next</button>
                {/* {error?.error &&
                <p className="error">Se ha producido un error: {error.error}</p>
                } */}
                <p>
                 <Link className="recover-password-link" to="/recoverpassword">Forgot your password?</Link>
                </p>

                
                
            </form>
            <div className='creators'>
                    <h5>Built by</h5>
                <p>
                <Link className="build-team" to="https://www.linkedin.com/in/gonzalo-jrr/" target="_blank">Gonzalo Rodriguez</Link>&nbsp;
                <Link className="build-team" to="https://www.linkedin.com/in/scarlettsantanawilliams/" target="_blank">Scarlett Santana</Link>&nbsp;
                <Link className="build-team" to="https://www.linkedin.com" target="_blank">Mohammed El Mangadi</Link>&nbsp;
                <Link className="build-team" to="https://www.linkedin.com/in/vlad-puentesb/" target="_blank">Vlad Beltran</Link>
                </p>
            </div>
        </div>
      
    )
  }
  
  export default Login
  
  