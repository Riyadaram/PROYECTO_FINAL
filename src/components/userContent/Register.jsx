import { Link } from 'react-router-dom'
import Header from '../header/Header'
import './Register.css'
import FooterMenu from '../FooterMenu/FooterMenu'



const Register = () => {

  
    return (
        <div className="register">
            <Header />

            <form className='register-form'>
            <input
                className='input-field'
                name="username"
                placeholder="User Name"
                // value={username}
                // onChange={e => setUsername(e.target.value)}
                />
                <input
                className='input-field'
                name="email"
                placeholder="e mail address"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                />
                <input
                className='input-field'
                name="password"
                placeholder="Password"
                type="password"
                // value={password}
                // onChange={e => setPassword(e.target.value)}
                />
                <input
                className='input-field'
                name="password"
                placeholder="Confirm Password"
                type="password"
                // value={password}
                // onChange={e => setPassword(e.target.value)}
                />
                <button className='register-btn'>Confirm</button>
                {/* {error?.error &&
                <p className="error">Se ha producido un error: {error.error}</p>
                } */}
                <p>
                 <Link className="recover-password-link" to="/login">Already have an account?</Link>
                </p>

                
                
            </form>
            <FooterMenu />
          
        </div>
      
    )
  }
  
  export default Register
  
  