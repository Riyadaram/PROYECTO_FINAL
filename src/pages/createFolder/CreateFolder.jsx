import { useState } from 'react'; 
// import { Link } from 'react-router-dom';
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
    <div className="create-folder">
      <Header />

        <p className='p-folder'>Choose a name for the folder</p>

      <form className="folder.form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={folderName}
          onChange={handleFolderNameChange}
          placeholder="Folder Name"
          className="input-field"
        />
        <button type="submit" className="create-folder-btn">Create Folder</button>
      </form>

      {/* <Link to='/user-content' className="logout-btn">Go back</Link> */}

      <FooterMenu />
    </div>
  );
}

export default CreateFolder;