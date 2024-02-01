import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import FileUpload from './FileUpload'
import FooterMenu from '../../components/footerMenu/FooterMenu'
import './UserContent.css'





const UserContent = () => {

  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">User Name</h1>
            <span className="logout-btn" onClick={() => setUser()}>Log Out</span>
            <FileUpload />
            <Link to='' className="create-folder-btn" >New Folder</Link>

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent
  
  