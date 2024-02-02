import { useContext, useState } from "react";
import './FileUpload.css';
import { AutenticacionContext } from "../../context/AutenticacionContext";
import { uploadFileService } from "../../services";

const FileUpload = () => {
    const [error, setError] = useState('');
    const {token} = useContext(AutenticacionContext);

    const handleFormUpload = async (e) => {
        e.preventDefault();

        try {

            const data = new FormData(e.target);
            const file = await uploadFileService({data, token})

            console.log(file)

        } catch (error) {
            setError(error.message);
        } 
    }
  
  return (
    <form className="imgUpload">
      
        <button type="button" className="search-files-btn">
          Search Files
        </button>
      
      <button type="file" className="upload-btn" onClick={handleFormUpload} accept="file/*">
        Upload
      </button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};

export default FileUpload;