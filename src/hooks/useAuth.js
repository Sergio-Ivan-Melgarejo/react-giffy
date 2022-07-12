import { Context } from "context/AuthContext";
import React from "react";
import loginService from "../services/login";

export default function useAuth() {
  const { jwt, setJWT } = React.useContext(Context);
  const [state, setState] = React.useState({ loading: false, error: false });

  const login = React.useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });

      loginService({ username, password })
        .then((jwt) => {
          console.log(jwt);
          setJWT(jwt);
          setState({ loading: false, error: false });
        })
        .catch((error) => {
          console.log(error);
          setState({ loading: false, error: true });
        });
    },
    [setJWT]
  );

  const logout = React.useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoading: state.loading,
    error: state.error,
  };
}
