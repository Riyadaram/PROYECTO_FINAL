import {  useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutenticacionContext } from '../../context/AutenticacionContext';
import Header from '../../components/Header/Header';
import FooterMenu from '../../components/footerMenu/FooterMenu';
import './UserContent.css';
import FoldersAndFiles from '../../components/FoldersAndFiles/FoldersAndFiles';

const UserContent = () => {
    const { user, logout } = useContext(AutenticacionContext);
    const navigate = useNavigate();
    

    
    return (
        <div className="user-content">
            <Header />
            <h1 className="user-name">{user || 'User Name'}</h1>
            <a href="#" className="logout-btn" onClick={(e) => {
                e.preventDefault();
                logout();
                navigate("/");
            }}>Logout</a>


            <FoldersAndFiles />



            <FooterMenu />
        </div>
    );
};

export default UserContent;
