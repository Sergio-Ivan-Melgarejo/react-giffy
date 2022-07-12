import React from "react";
import { Context } from "context/AuthContext";
import loginService from "../services/login";
import addFavService from "../services/addFav";

export default function useAuth() {
  const { jwt, setJWT, setFavs, favs } = React.useContext(Context);
  const [state, setState] = React.useState({ loading: false, error: false });

  const login = React.useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });

      loginService({ username, password })
        .then((jwt) => {
          setJWT(jwt);
          window.sessionStorage.setItem("jwt",jwt);
          setState({ loading: false, error: false });
        })
        .catch((error) => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
        });
    },
    [setJWT, jwt]
  );

  const logout = React.useCallback(() => {
    setJWT(null);
    window.sessionStorage.removeItem("jwt");
  }, [setJWT]);

  const addFav = React.useCallback(({id}) => {
    addFavService({id,jwt})
    .then(setFavs)
    .catch(err => console.log(err))
  },[jwt, setFavs])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoading: state.loading,
    error: state.error,
    favs,
    addFav
  };
}
