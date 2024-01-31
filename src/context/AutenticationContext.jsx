import { createContext, useEffect, useState, useContext } from "react"

export const AutenticacionContext = createContext();

export const AutenticacionProviderComponent = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {

        localStorage.setItem("token", token);

    }, [token]);



    return <AutenticacionContext.Provider value={{token, setToken}}>{children}</AutenticacionContext.Provider>;
};

export const UserContext = () => useContext(AutenticacionContext)