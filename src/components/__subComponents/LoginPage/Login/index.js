import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Spinner from "components/Spinner";

// Hook
import useAuth from "hooks/useAuth";

// context
import { Context } from "context/LanguageContext";

// styles
import { Styles } from "./styled";

const Login = ({onClose}) => {
  const { text } = React.useContext(Context);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { login, isLogged, isLoading, error } = useAuth();

  React.useEffect(() => {
    if (isLogged) {
      navigate("/");
      onClose && onClose()
    }
  }, [isLogged, navigate, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  if (isLoading) return <Spinner />;

  return (
    <Styles>
      <div className="login-container">
        <h2>{text.Login.title}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">{text.Login.inputUser}</label>
            <input
              className="btn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder={`${text.Login.inputUser}...`}
              id="username"
            />
          </div>
          <div>
            <label htmlFor="password">{text.Login.inputPassword}</label>
            <input
              className="btn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={`${text.Login.inputPassword}...`}
              id="password"
            />
          </div>
          <div>
            <input className="btn btn-2" type="submit" value={text.Login.inputSubmit} />
          </div>
          {error && <p className="error">{text.Login.error}</p>}
        </form>
      </div>
    </Styles>
  );
};

export default Login;
