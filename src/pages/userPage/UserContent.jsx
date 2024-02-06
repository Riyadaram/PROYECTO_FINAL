import {  useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AutenticacionContext } from '../../context/AutenticacionContext';
import Header from '../../components/Header/Header';
import FooterMenu from '../../components/footerMenu/FooterMenu';
import './UserContent.css';
import FoldersAndFiles from '../../components/FoldersAndFiles/FoldersAndFiles';

const UserContent = () => {
    const [files, setFiles] = useState([]);
    const { user, logout } = useContext(AutenticacionContext);
    const navigate = useNavigate();
    const [searchParams, ] = useSearchParams();
    const [carpeta, setCarpeta] =  useState(searchParams.get("c"))

    useEffect(()=>{
            setCarpeta(searchParams.get("c"))
    }, [searchParams])
    

    
    return (
        <div className="user-content">
            <Header />
            <h1 className="user-name">{user || 'User Name'}</h1>
            <a href="#" className="logout-btn" onClick={(e) => {
                e.preventDefault();
                logout();
                navigate("/");
            }}>Logout</a>


            <FoldersAndFiles carpeta={carpeta} files={files} setFiles={setFiles} />



            <FooterMenu carpeta={carpeta} setFiles={setFiles} />
        </div>
    );
};

export default UserContent;
