import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import FooterMenu from '../../components/footerMenu/FooterMenu';
import './CreateFolder.css';

const CreateFolder = () => {
  const [folderName, setFolderName] = useState('');

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre de la carpeta:", folderName);
  };

  return (
    <div className="user-content">
      <Header />

      <h1 className="user-name">Crear Nueva Carpeta</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={folderName}
          onChange={handleFolderNameChange}
          placeholder="Nombre de la carpeta"
          className="input-field"
        />
        <button type="submit" className="create-folder-btn">Crear Carpeta</button>
      </form>

      <Link to='/user-content' className="logout-btn">Regresar</Link>

      <FooterMenu />
    </div>
  );
}

export default CreateFolder;