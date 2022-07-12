import React from "react";
import getFavs from "services/getFavs";

export const Context = React.createContext();

const AuthContext = ({ children }) => {
  const [favs, setFavs] = React.useState([]);
  const [jwt, setJWT] = React.useState(() =>
    window.sessionStorage.getItem("jwt")
  );

  React.useEffect(()=>{
    if(!jwt) return setFavs([])
    console.log(jwt)
    getFavs({jwt}).then(setFavs)
  },[jwt])

  const value = { jwt, setJWT, favs, setFavs };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AuthContext;
