import { useContext, useState } from "react";
import './FileUpload.css';
import { AutenticacionContext } from "../../context/AutenticacionContext";
import { uploadFileService } from "../../services";

const FileUpload = () => {
    const [error, setError] = useState('');
    const {token} = useContext(AutenticacionContext);

    const handleFileChange = async (e) => {
        try {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
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
                    style={{ display: 'none' }} // Oculta el input de tipo file
                />
                <button type="button" className="search-files-btn" onClick={() => document.querySelector('.file-input').click()}>
                    Search Files
                </button>
            </label>
            <button type="submit" className="upload-btn" accept="file/*">
                Upload
            </button>
            {error ? <p>{error}</p> : null}
        </form>
    );
};

export default FileUpload;
