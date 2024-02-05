import { Link } from 'react-router-dom';
import { useContext, useState } from 'react'; // Importa useContext y useState
import './FooterMenu.css';
import { AutenticacionContext } from '../../context/AutenticacionContext';
import { uploadFileService } from '../../services';

import Home from '../../assets/footer_menu_logos/Home_button.png';
import Plus from '../../assets/footer_menu_logos/Plus_button.png';
import Folder from '../../assets/footer_menu_logos/'


const FooterMenu = () => {
    const [error, setError] = useState(''); // Estado para manejar errores
    const { token } = useContext(AutenticacionContext);

    // Función para manejar la selección de archivos
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
    };

    // Función para simular un clic en el input de tipo archivo
    const handlePlusButtonClick = () => {
        document.querySelector('.file-input').click();
    };

    return (
        <div className="bottom-menu">
            <footer>
                <button>
                    <Link to="/user-content">
                        <img src={Home} className="basic-button" alt="Home Button Logo"/>
                    </Link>
                </button>

                <button>
                    {/* Renderiza el botón plus con el evento onClick */}
                    <img src={Plus} className="plus-button" alt="Plus Button Logo" onClick={handlePlusButtonClick}/>
                </button>

                <button>
                    {/* Renderiza el botón plus con el evento onClick */}
                    <img src={Plus} className="plus-button" alt="Plus Button Logo" onClick={handlePlusButtonClick}/>
                </button>
                    
                
            </footer>

            {/* El input de tipo archivo que está oculto */}
            <input
                type="file"
                className="file-input"
                onChange={handleFileChange}
                accept="file/*"
                style={{ display: 'none' }} 
            />

            {/* Muestra errores */}
            {error ? <p>{error}</p> : null}
        </div>
    );
};

export default FooterMenu;
