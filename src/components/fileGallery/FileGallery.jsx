import { useContext, useEffect, useState } from 'react';
import { AutenticacionContext } from "../../context/AutenticationContext";

const FileGallery = () => {
  const { user } = useContext(AutenticacionContext);
  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {
    const fetchUserFiles = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/${user.id}`);
        const data = await response.json();
        setUserFiles(data.files);
      } catch (error) {
        console.error('Error fetching user files:', error);
      }
    };

    fetchUserFiles();
  }, [user.id]);

  return (
    <div className="file-gallery-container">
      <h2>Your File Gallery</h2>
      <div className="file-grid">
        {userFiles.map((file) => (
          <div key={file.id} className="file-item">
            <img src={file.url} alt={file.name} />
            <p>{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileGallery;
