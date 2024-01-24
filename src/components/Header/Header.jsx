import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './Header.css'

const Header = () => {

  
    return (
        <nav className="nav-bar">
                <Link to="/">
                 <img src={logo} className="logo app" alt="Your Cloud logo " />
                 </Link>
            </nav>
        )
    }
    
    export default Header