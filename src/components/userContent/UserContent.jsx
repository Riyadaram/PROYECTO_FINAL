import { Link } from 'react-router-dom'
import Header from '../header/Header'
import './UserContent.css'
import FooterMenu from '../footerMenu/FooterMenu'




const UserContent = () => {

  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">User Name</h1>
            <button className="upload-btn" onClick={}>Upload</button>
            <button className="create-folder-btn" onClick={}>New Folder</button>

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent
  
  