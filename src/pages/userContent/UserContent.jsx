import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AutenticacionContext } from '../../context/AutenticationContext'
import Header from '../../components/header/Header'
import FileUpload from './FileUpload'
import FooterMenu from '../../components/footerMenu/FooterMenu'
import './UserContent.css'





const UserContent = () => {

    const {user, logout} = useContext(AutenticacionContext); {/*Darle una vuelta a esto*/}
    const navigate = useNavigate();
  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">{user ? user : 'User Name'}</h1> {/*Trabajando en nombre del usuario al hacer login*/}
            {/* <Link to='' className="logout-btn" >Log Out</Link> */}
            <a href="#" className="logout-btn" onClick={(e)=>{
                    e.preventDefault();
                    logout();
                    navigate("/login");
            }}>Logout</a>

            {/* <h1 className="user-name">User Name</h1>
            <span className="logout-btn" onClick={() => setUser()}>Log Out</span> */}
            <FileUpload />
            <Link to='/create-folder' className="create-folder-btn" >New Folder</Link>

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent
  
  