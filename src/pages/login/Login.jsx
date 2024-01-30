import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './login.css'
import FooterMenu from '../../components/FooterMenu/FooterMenu'
import { useState } from 'react'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        try {
        } catch (error) {}
    };

  
    return (
        <div className="login">
            <Header />
    

            <form className='login-form' onSubmit={handleForm}>


                <input
                className='input-field'
                name="email"
                placeholder="User Email"
                id="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                />


                <input
                className='input-field'
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                />


                <button className='next-btn'>Login</button>
                {error ? <p>{error}</p> : null}


                <p>
                 <Link className="recover-password-link" to="/recoverpassword">Forgot your password?</Link>
                </p>

                
                
            </form>
            <div className='creators'>
                    <h3>Built by</h3>
                <p>
                <Link className="build-team" to="https://www.linkedin.com/in/gonzalo-jrr/" target="_blank">Gonzalo Rodriguez</Link>&nbsp;
                <Link className="build-team" to="https://www.linkedin.com/in/scarlettsantanawilliams/" target="_blank">Scarlett Santana</Link>&nbsp;
                <Link className="build-team" to="https://www.linkedin.com" target="_blank">Mohammed El Mangadi</Link>&nbsp;
                <Link className="build-team" to="https://www.linkedin.com/in/vlad-puentesb/" target="_blank">Vlad Beltran</Link>
                </p>
            </div>
            <FooterMenu />
        </div>
      
    )
  }
  
  export default Login
  
  