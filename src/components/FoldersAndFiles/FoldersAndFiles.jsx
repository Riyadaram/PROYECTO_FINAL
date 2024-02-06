import { useState, useEffect, useContext } from 'react';
import { getFoldersAndFiles } from '../../services';
import { AutenticacionContext } from '../../context/AutenticacionContext';


const FoldersAndFiles = () => {
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    const { token } = useContext(AutenticacionContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getFoldersAndFiles(token);
          console.log("Folders and Files Data:", response);
          setFolders(response.data.folder);
          setFiles(response.data.files);
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
      <div>
        <h2>Folders</h2>
        <ul>
          {folders.map(folder => (
            <li key={folder.id}>{folder.folder_name}</li>
          ))}
        </ul>
  
        <h2>Files</h2>
        <ul>
          {files.map(file => (
            <li key={file.id}>{file.file_name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FoldersAndFiles;