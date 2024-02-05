import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AutenticacionContext } from '../../context/AutenticacionContext'
import Header from '../../components/Header/Header'

import FooterMenu from '../../components/footerMenu/FooterMenu'
import './UserContent.css'





const UserContent = () => {

    const {user, logout} = useContext(AutenticacionContext); 
    const navigate = useNavigate();
  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">{user ? user : 'User Name'}</h1> 
            <a href="#" className="logout-btn" onClick={(e)=>{
                    e.preventDefault();
                    logout();
                    navigate("/");
            }}>Logout
            </a>

           
            

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent
  
  