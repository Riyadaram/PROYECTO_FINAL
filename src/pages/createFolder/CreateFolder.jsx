import { useState } from 'react'; // Solo importa useState
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './CreateFolder.css';
import FooterMenu from '../../components/footerMenu/FooterMenu';

const CreateFolderPage = () => {
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
        <button type="submit" className="createFolder">Crear Carpeta</button>
      </form>

      <Link to='/user-content' className="back-btn">Regresar</Link>

      <FooterMenu />
    </div>
  );
}

export default CreateFolderPage;