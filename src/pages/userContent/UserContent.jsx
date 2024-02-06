import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AutenticacionContext } from '../../context/AutenticationContext'
import Header from '../../components/header/Header'
import FileUpload from '../../components/fileUpload/FileUpload'
import FooterMenu from '../../components/footerMenu/FooterMenu'
// import FileGallery from '../../components/fileGallery/FileGallery'
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
            <FileUpload />

           {/* <FileGallery /> */}
            

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent
  