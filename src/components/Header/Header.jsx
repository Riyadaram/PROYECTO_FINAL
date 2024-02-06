import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './Header.css'
import { AutenticacionContext } from '../../context/AutenticacionContext'
import { useContext } from 'react'

const Header = () => {

    const { token } = useContext(AutenticacionContext);

  
    return (
        <nav className="nav-bar">
                <Link to={token ? '/user-content' : '/'}>
                <img src={logo} className="logo app" alt="Your Cloud logo" />
            </Link>
            </nav>
        )
    }
    
    export default Header