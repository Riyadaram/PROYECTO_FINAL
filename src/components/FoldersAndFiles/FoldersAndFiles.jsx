import { useState, useEffect, useContext } from 'react';
import { getFilesInFolder, getFoldersAndFiles, deleteFile } from '../../services';
import { AutenticacionContext } from '../../context/AutenticacionContext';
import { Link } from 'react-router-dom';
import { CiFolderOn } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import './FoldersAndFiles.css'



import PropTypes from 'prop-types';



const FoldersAndFiles = ({carpeta, files, setFiles}) => {
    const [folders, setFolders] = useState([]);
    const [folder, setFolder] = useState();
    const [error, setError] = useState(null);
    const { token } = useContext(AutenticacionContext);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
            let response;
            if(carpeta){
                response = await getFilesInFolder(token, carpeta );
            }else{
                response = await getFoldersAndFiles(token);
            }
          setFolders(response.folders ? response.folders: []);
          setFiles(response.files);
          setFolder(response.folder)
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
  
      // Cleanup function
      return () => {
        // Perform cleanup if needed
      };
    }, [token, carpeta]); // Dependencia de efecto: token

    const handleDeleteFile = async (fileId) => {
      try {
          await deleteFile(token, fileId);
          const updatedFiles = files.filter(file => file.id !== fileId);
          setFiles(updatedFiles);
      } catch (error) {
          setError(error.message);
      }
  };
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
        <div className="file-gallery-container">
        <h2>{folder?.folder_name}</h2>
        <div className="file-grid">
        <div>
          {folder && (
            <>
            <p className='big-dot'>.</p>
            <Link to={`/user-content`} className='big-dot'>
              ../back
            </Link>
            </>
          )
          }  
          {folders.map(folder => (
            // <div key={folder.id} className="file-item"><p>{folder.folder_name}</p></div>
            <div key={folder.id} className="file-item">
            <CiFolderOn />
            <Link to={`/user-content?c=${folder.id}`}>
              <i className="fas fa-folder"></i>
              <p>{folder.folder_name}</p>
            </Link>
          </div>
            // <div key={folder.id} className="file-item"><img src={file.url} alt={file.name} /><p>{folder.folder_name}</p></div>
          ))}
        </div>
        <div>
          {files.map(file => (
            <div key={file.id} className="file-item">
              <CiFileOn />


              <a href={`${import.meta.env.VITE_URL_API}/${file.user_id}${!carpeta? "" : "/"+carpeta}/${file.file_name}`} target={"_blank"} alt={file.file_name} download={true} rel="noreferrer">{file.file_name}</a>

              <MdDeleteForever className="delete-icon" onClick={() => handleDeleteFile(file.id)} />

             </div>
          ))}
        </div>
        </div>
       
      </div>
    );
  };

  FoldersAndFiles.propTypes = {
    carpeta: PropTypes.string, // carpeta prop is expected to be a string
    files: PropTypes.array.isRequired, // files prop is expected to be an array and is required
    setFiles: PropTypes.func.isRequired // setFiles prop is expected to be a function and is required
  };
  
  export default FoldersAndFiles;