import { useState, useContext } from "react";
import { AutenticacionContext } from "../../context/AutenticationContext";
import { uploadFileService } from "../../services";
import './FileUpload.css';

const FolderFileUpload = ({ folderId }) => {
    const [error, setError] = useState('');
    const { token } = useContext(AutenticacionContext);

  const handleFileChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('fileToUpload', file);
      formData.append('folderId', folderId); // Pass folder ID along with the file
      const uploadedFile = await uploadFileService(formData, token);
      console.log(uploadedFile);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <form className="imgUpload">
      <label>
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
          accept="file/*"
          style={{ display: 'none' }}
        />
        <button type="button" className="search-files-btn" onClick={() => document.querySelector('.file-input').click()}>
          UPLOAD FILES
        </button>
      </label>
      {error && <p>{error}</p>}
    </form>
  );
};

export default FolderFileUpload;

