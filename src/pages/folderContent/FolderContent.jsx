import { useContext } from 'react'
import { AutenticacionContext } from '../../context/AutenticacionContext'
import Header from '../../components/Header/Header'
import FileUpload from '../../pages/userPage/FileUpload'
import FooterMenu from '../../components/footerMenu/FooterMenu'
import FileGalleryFolder from './FileGallery-folder'
import './FolderContent.css'





const FolderContent = () => {

    const {folderName} = useContext(AutenticacionContext); 
    
  
    return (
        <div className="folder-content">
            <Header />

            <h3 className="folder-name">{folderName ? folderName : 'Folder Name'}</h3> 
            

           <FileGalleryFolder />
            

            <FooterMenu />
            
          
        </div>
      
    )
  }
  
  export default FolderContent