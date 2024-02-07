import { useContext, useEffect, useState } from 'react';
import { AutenticacionContext } from '../../context/AutenticacionContext';
import { getFoldersAndFiles } from '../../services';
import { Link } from 'react-router-dom';
import './FileGallery-folder.css'

const FileGalleryFolder = () => {
  const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    const { token } = useContext(AutenticacionContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFoldersAndFiles(token);
        console.log("Folders and Files Data:", response);
        setFolders(response.folder);
        setFiles(response.files);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Perform cleanup if needed
    };
  }, [token]); // Dependencia de efecto: token

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (

    <div className="file-gallery-folder">
        <h2 className='folder-subtitle'>The content of this folder is:</h2>
        <div className="file-grid">
        <div>
          {folders.map(folder => (
            // <div key={folder.id} className="file-item"><p>{folder.folder_name}</p></div>
            <div key={folder.id} className="file-item">
            <Link to={`/folder/${folder.id}`}>
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
              <img src={file.url} alt={file.name} />
              <p>{file.file_name}</p>
              </div>
          ))}
        </div>
        </div>
       
      </div>


  );
};

export default FileGalleryFolder;