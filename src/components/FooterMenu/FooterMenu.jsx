import { Link } from 'react-router-dom';
import { useContext, useState } from 'react'; // Importa useContext y useState
import './FooterMenu.css';
import { AutenticacionContext } from '../../context/AutenticacionContext';
import { uploadFileService } from '../../services';
import PropTypes from 'prop-types';

import Home from '../../assets/footer_menu_logos/Home_button.png';
import Plus from '../../assets/footer_menu_logos/Plus_button.png';
import Folder from '../../assets/footer_menu_logos/Add_folder_button.png';


const FooterMenu = ({carpeta, setFiles}) => {
    const [error, setError] = useState(''); // Estado para manejar errores
    const { token } = useContext(AutenticacionContext);

    // Función para manejar la selección de archivos
    const handleFileChange = async (e) => {
        try {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('fileToUpload', file);
            if(carpeta){
                formData.append('folderId', carpeta);
            }
            const uploadedFile = await uploadFileService(formData, token);
            setFiles(uploadedFile.files)
        } catch (error) {
            setError(error.message);
        } 
    };

    return (
        <div className="bottom-menu">
            <footer>
                <button>
                    <Link to="/user-content">
                        <img src={Home} className="basic-button" alt="Home Button Logo"/>
                    </Link>
                </button>
{
    !carpeta && (
                <button>
                    <Link to="/create-folder">
                        <img src={Folder} className="folder-button" alt="Add Folder Logo" />
                    </Link>
                </button>
    )
}

                <button>
                    {/* Renderiza el botón plus con el evento onClick */}
                    {/*<img src={Plus} className="plus-button" alt="Plus Button Logo" onClick={handlePlusButtonClick}/>*/}
                    
                    <input
                    
                type="file"
                className="file-input"
                onChange={handleFileChange}
                accept="file/*"
            />
                </button>
                    
                
            </footer>

          
          

            {/* Muestra errores */}
            {error ? <p>{error}</p> : null}
        </div>
    );
};

FooterMenu.propTypes = {
    carpeta: PropTypes.string, // carpeta prop is expected to be a string
    setFiles: PropTypes.func,
  };

export default FooterMenu;
