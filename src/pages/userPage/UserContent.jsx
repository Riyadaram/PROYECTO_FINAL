import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutenticacionContext } from '../../context/AutenticacionContext';
import Header from '../../components/Header/Header';
import FooterMenu from '../../components/footerMenu/FooterMenu';
import { getFoldersAndFiles } from '../../services';
import './UserContent.css';

const UserContent = () => {
    const { user, logout, token } = useContext(AutenticacionContext);
    const navigate = useNavigate();
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { folders: receivedFolders, files: receivedFiles } = await getFoldersAndFiles(token);
                // Asegurarse de que receivedFolders y receivedFiles tengan un valor antes de actualizar el estado
                setFolders(receivedFolders || []);
                setFiles(receivedFiles || []);
            } catch (error) {
                console.error('Error al obtener los folders y files:', error.message);
            }
        };

        fetchData();
    }, [token]); // Ejecutar cada vez que cambie el token

    return (
        <div className="user-content">
            <Header />
            <h1 className="user-name">{user || 'User Name'}</h1>
            <a href="#" className="logout-btn" onClick={(e) => {
                e.preventDefault();
                logout();
                navigate("/");
            }}>Logout</a>

            <div className="folders">
                <h2>Folders:</h2>
                <ul>
                    {folders.map(folder => (
                        <li key={folder.folder_id}>{folder.folder_name}</li>
                    ))}
                </ul>
            </div>

            <div className="files">
                <h2>Files:</h2>
                <ul>
                    {files.map(file => (
                        <li key={file.file_id}>{file.file_name}</li>
                    ))}
                </ul>
            </div>

            <FooterMenu />
        </div>
    );
};

export default UserContent;
