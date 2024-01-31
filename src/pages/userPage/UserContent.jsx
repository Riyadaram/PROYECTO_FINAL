import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './UserContent.css'
import FooterMenu from '../../components/footerMenu/FooterMenu'
import { useContext } from 'react'
import { AutenticacionContext } from '../../context/AutenticacionContext'




const UserContent = () => {

    const {user} = useContext(AutenticacionContext); {/*Darle una vuelta a esto*/}

  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">{user ? user.name : 'User Name'}</h1> {/*Trabajando en nombre del usuario al hacer login*/}
            <Link to='' className="logout-btn" >Log Out</Link>
            <Link to='' className="upload-btn" >Upload File</Link>
            <Link to='' className="create-folder-btn" >New Folder</Link>

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent