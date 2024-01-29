import { Link } from 'react-router-dom'
import Header from '../header/Header'
import './UserContent.css'
import FooterMenu from '../footerMenu/FooterMenu'




const UserContent = () => {

  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">User Name</h1>
            <button className="upload-btn" >Upload File</button>
            <button className="create-folder-btn" >New Folder</button>

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent
  
  