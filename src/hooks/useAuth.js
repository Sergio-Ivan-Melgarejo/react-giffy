import { Context } from "context/AuthContext";
import React from "react";

export default function useAuth () {
    const { jwt, setJWT } = React.useContext(Context);
  
    const login = React.useCallback(() => {
        setJWT("test")
    },[setJWT])

    const logout = React.useCallback(() => {
        setJWT(null)
    },[setJWT])
    
    return { isLogged: Boolean(jwt), login, logout }
}