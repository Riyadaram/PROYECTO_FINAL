import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import Home from '../../assets/footer_menu_logos/Home_button.png'
import Plus from '../../assets/footer_menu_logos/Plus_button.png'
// import Search from '../../assets/footer_menu_logos/Search_button.png'
import Folder from '../../assets/footer_menu_logos/Add_folder_button.png';
import { AutenticacionContext } from '../../context/AutenticationContext';
import { uploadFileService } from '../../services';
import './FooterMenu.css'


const FooterMenu = () => {

    const [error, setError] = useState(''); // Estado para manejar errores
    const { token } = useContext(AutenticacionContext);

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
                    <Link to="/create-folder">
                        <img src={Folder} className="folder-button" alt="Add Folder Logo" />
                    </Link>
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
    )

}

export default FooterMenu