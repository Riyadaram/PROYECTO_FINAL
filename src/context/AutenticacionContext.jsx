import { createContext, useEffect, useState } from "react"

export const AutenticacionContext = createContext();

export const AutenticacionProviderComponent = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {

        localStorage.setItem("token", token);

    }, [token]);



    return <AutenticacionContext.Provider value={{token, setToken}}>{children}</AutenticacionContext.Provider>;
};