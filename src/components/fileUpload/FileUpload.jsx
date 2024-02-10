import { useState, useContext } from "react";
import { AutenticacionContext } from "../../context/AutenticationContext";
import { uploadFileService } from "../../services";
import './FileUpload.css';

const FileUpload = () => {
  const [error, setError] = useState('');
  const {token} = useContext(AutenticacionContext);

  const handleFileChange = async (e) => {
      try {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('fileToUpload', file);
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
          {/* <button type="submit" className="upload-btn" accept="file/*">
              Upload
          </button> */}
          {error ? <p>{error}</p> : null}
      </form>
  );
};






export default FileUpload;

