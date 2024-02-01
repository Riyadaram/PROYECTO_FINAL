import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './UserContent.css'
import FooterMenu from '../../components/footerMenu/FooterMenu'




const UserContent = () => {

  
    return (
        <div className="user-content">
            <Header />

            <h1 className="user-name">User Name</h1>
            <Link to='' className="logout-btn" >Log Out</Link>
            <Link to='' className="upload-btn" >Upload File</Link>
            <Link to='/create-folder' className="create-folder-btn" >New Folder</Link>

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default UserContent