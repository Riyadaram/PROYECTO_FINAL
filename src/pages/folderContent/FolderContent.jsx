
import { useContext } from 'react'
import { AutenticacionContext } from '../../context/AutenticationContext'
import Header from '../../components/header/Header'
import FileUpload from '../../components/fileUpload/FileUpload'
import FooterMenu from '../../components/footerMenu/FooterMenu'
import FileGallery from '../../components/fileGallery/FileGallery'
import './FolderContent.css'




const FolderContent = () => {

    const {user, } = useContext(AutenticacionContext); 
    
  
    return (
        <div className="folder-content">
            <Header />

            <h1 className="folder-name">{user ? user : 'Folder Name'}</h1> 
            <FileUpload />

           <FileGallery />
            

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default FolderContent
  