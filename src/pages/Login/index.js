import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Spinner from "components/Spinner";

// Hook
import useAuth from "hooks/useAuth";

// context
import { Context } from "context/LanguageContext";

const Login = () => {
  const { text } = React.useContext(Context);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { login, isLogged, isLoading, error } = useAuth();

  React.useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h2>{text.Login.title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{text.Login.inputUser}</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder={`${text.Login.inputUser}...`}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="name">{text.Login.inputPassword}</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={`${text.Login.inputPassword}...`}
            id="name"
          />
        </div>
        <div>
          <input type="submit" value={text.Login.inputSubmit} />
        </div>
        {error && <p>{text.Login.error}</p>}
      </form>
    </div>
  );
};

export default Login;
