import React from "react";

export const Context = React.createContext()

const AuthContext = ({children}) => {
    const [jwt, setJWT] = React.useState(null);

    const value = {jwt,setJWT}

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default AuthContext