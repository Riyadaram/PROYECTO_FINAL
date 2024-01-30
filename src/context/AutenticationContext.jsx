import { createContext } from "react"

export const AutenticacionContext = createContext();

export const AutenticacionProviderComponent = ({children}) => {
    return <AutenticacionContext.Provider>{children}</AutenticacionContext.Provider>;
};