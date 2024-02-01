import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './UserContent.css'
import FooterMenu from '../../components/footerMenu/FooterMenu'
import { useContext } from 'react'
import { AutenticacionContext } from '../../context/AutenticacionContext'




const UserContent = () => {

    const {user, logout} = useContext(AutenticacionContext); {/*Darle una vuelta a esto*/}
    const navigate = useNavigate();

  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">{user ? user : 'User Name'}</h1> {/*Trabajando en nombre del usuario al hacer login*/}
            <Link to='' className="logout-btn" >Log Out</Link>
            <a href="#" onClick={(e)=>{
                    e.preventDefault();
                    logout();
                    navigate("/login");
            }}>Logout</a>
            <Link to='' className="upload-btn" >Upload File</Link>
            <Link to='' className="create-folder-btn" >New Folder</Link>

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent